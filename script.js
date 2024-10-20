function addComment() {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    
    if (name && comment) {
        const commentsDiv = document.getElementById('comments');
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `<strong>${name}</strong>: <p>${comment}</p>`;
        commentsDiv.appendChild(newComment);
        
        // Temizleme
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
}
