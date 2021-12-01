async function editPost(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const blog_text = document.querySelector('input[name="post-body"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]
    console.log(id);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT', 
        body: JSON.stringify({
            post_id: id,
            title, 
            blog_text
        }),
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editPost);