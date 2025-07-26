import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from '../declarations/learnchain_backend';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authClient, setAuthClient] = useState(null);
  const [identity, setIdentity] = useState(null);
  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const client = await AuthClient.create();
      setAuthClient(client);

      const isAuth = await client.isAuthenticated();
      setIsAuthenticated(isAuth);

      if (isAuth) {
        const identity = client.getIdentity();
        setIdentity(identity);
        await createActor(identity);
      }
    } catch (error) {
      console.error('Failed to initialize auth:', error);
    } finally {
      setLoading(false);
    }
  };

  const createActor = async (identity) => {
    try {
      const agent = new HttpAgent({
        identity,
        host: process.env.NODE_ENV === 'development' 
          ? 'http://localhost:4943' 
          : 'https://ic0.app',
      });

      if (process.env.NODE_ENV === 'development') {
        await agent.fetchRootKey();
      }

      const canisterId = process.env.CANISTER_ID_LEARNCHAIN_BACKEND || 
                       process.env.VITE_CANISTER_ID_LEARNCHAIN_BACKEND ||
                       'rrkah-fqaaa-aaaaa-aaaaq-cai'; // Local development default

      const actor = Actor.createActor(idlFactory, {
        agent,
        canisterId,
      });

      setActor(actor);
    } catch (error) {
      console.error('Failed to create actor:', error);
    }
  };

  const login = async () => {
    if (!authClient) return;

    try {
      setLoading(true);
      await authClient.login({
        identityProvider: process.env.NODE_ENV === 'development' 
          ? `http://localhost:4943/?canisterId=rdmx6-jaaaa-aaaaa-aaadq-cai`
          : 'https://identity.ic0.app',
        onSuccess: async () => {
          const identity = authClient.getIdentity();
          setIdentity(identity);
          setIsAuthenticated(true);
          await createActor(identity);
        },
        onError: (error) => {
          console.error('Login failed:', error);
        }
      });
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    if (!authClient) return;

    try {
      await authClient.logout();
      setIsAuthenticated(false);
      setIdentity(null);
      setActor(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    isAuthenticated,
    identity,
    actor,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};