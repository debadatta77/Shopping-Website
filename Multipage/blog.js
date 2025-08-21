function showAllArticles() {
    document.getElementById('extra-articles').style.display = 'flex';
    document.getElementById('viewAllBtn').style.display = 'none';
    document.getElementById('showLessBtn').style.display = 'inline-block';
}

function showLessArticles() {
    document.getElementById('extra-articles').style.display = 'none';
    document.getElementById('viewAllBtn').style.display = 'inline-block';
    document.getElementById('showLessBtn').style.display = 'none';
}