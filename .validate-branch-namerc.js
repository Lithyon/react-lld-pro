module.exports = {
    pattern:
        "^(master|main|develop|Maciffr_(\\w{4})_L\\w{1,}){1}$|^(feat(?:ure)?|fix|hotfix|us|test|rel(?:ease)?)\\/.+$",
    errorMsg:
        "🤨 La branche que tu essaies de pusher ne respecte pas nos conventions, tu peux la renommer avec `git branch -m <nom-actuel> <nouveau-nom>`"
};
