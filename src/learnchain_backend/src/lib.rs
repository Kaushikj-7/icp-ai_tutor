use candid::{CandidType, Deserialize};
use ic_cdk::api::caller;
use ic_cdk::{query, update};
use serde::Serialize;
use std::cell::RefCell;
use std::collections::HashMap;

type UserId = String;

#[derive(CandidType, Deserialize, Serialize, Clone)]
pub struct QAPair {
    pub question: String,
    pub answer: String,
    pub timestamp: u64,
}

#[derive(CandidType, Deserialize)]
pub struct UserStats {
    pub total_questions: u64,
    pub total_answers: u64,
}

thread_local! {
    static QA_STORAGE: RefCell<HashMap<UserId, Vec<QAPair>>> = RefCell::new(HashMap::new());
}

#[update]
fn save_qa(question: String, answer: String) -> Result<String, String> {
    let user_id = caller().to_string();
    let timestamp = ic_cdk::api::time();
    
    let qa_pair = QAPair {
        question: question.clone(),
        answer: answer.clone(),
        timestamp,
    };
    
    QA_STORAGE.with(|storage| {
        let mut storage = storage.borrow_mut();
        storage.entry(user_id.clone()).or_insert_with(Vec::new).push(qa_pair);
    });
    
    Ok(format!("Q&A saved for user: {}", user_id))
}

#[query]
fn get_user_qa() -> Vec<QAPair> {
    let user_id = caller().to_string();
    
    QA_STORAGE.with(|storage| {
        storage.borrow()
            .get(&user_id)
            .cloned()
            .unwrap_or_default()
    })
}

#[query]
fn get_user_stats() -> UserStats {
    let user_id = caller().to_string();
    
    QA_STORAGE.with(|storage| {
        let qa_pairs = storage.borrow()
            .get(&user_id)
            .cloned()
            .unwrap_or_default();
            
        UserStats {
            total_questions: qa_pairs.len() as u64,
            total_answers: qa_pairs.len() as u64,
        }
    })
}

#[query]
fn greet(name: String) -> String {
    format!("Hello, {}! Welcome to LearnChain.", name)
}

// Export candid interface
ic_cdk::export_candid!();
