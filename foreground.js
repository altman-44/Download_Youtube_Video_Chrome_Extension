// Manipulate the DOM

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action == 'openMp3Download') {
        const aLink = document.createElement('a')
        aLink.target = '__blank'
        aLink.href = 'https://www.y2mate.com/es/youtube-mp3/' + location.href.split('https://www.youtube.com/watch?v=')[1]
        aLink.click()
    }
})

if (location.href.includes('https://www.y2mate.com/es/youtube-mp3/')) {
    document.getElementById('process_mp3').click()
    setTimeout(() => {
        document.getElementsByClassName('modal-dialog')[0].querySelectorAll('.form-group.has-success')[0].querySelector('a').click()
    }, 500)
}