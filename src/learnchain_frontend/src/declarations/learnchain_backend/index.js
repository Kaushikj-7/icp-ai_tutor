export const idlFactory = ({ IDL }) => {
  const QAPair = IDL.Record({
    'question' : IDL.Text,
    'answer' : IDL.Text,
    'timestamp' : IDL.Nat64,
  });
  const UserStats = IDL.Record({
    'total_questions' : IDL.Nat64,
    'total_answers' : IDL.Nat64,
  });
  return IDL.Service({
    'save_qa' : IDL.Func([IDL.Text, IDL.Text], [IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text })], []),
    'get_user_qa' : IDL.Func([], [IDL.Vec(QAPair)], ['query']),
    'get_user_stats' : IDL.Func([], [UserStats], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
  });
};

export const init = ({ IDL }) => { return []; };