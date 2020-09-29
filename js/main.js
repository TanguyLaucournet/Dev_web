const toggleSearchEl = document.getElementById('toggle-search')
const searchEl = document.getElementById('search')

toggleSearchEl.onclick = function toggleSearch(e) {
    searchEl.classList.toggle('hidden')
}