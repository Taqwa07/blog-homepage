const posts = [
    {
      title: "My Visit to Egypt",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7M38mxhLgJHZ8qoRPlGMm1AAPG1n8hzyFUQ&s",
      description: "From the mystic pyramids of Giza to sailing on the Nile at sunset, my journey through Egypt was nothing short of magical. I explored ancient tombs, tasted koshari in Cairo’s bustling streets, and stood speechless before the mighty Sphinx. If you've ever dreamed of stepping into a history book, Egypt is where you go.",
      date: "2025-07-15",
      category: "Travel"
    },
    {
      title: "Is AI Taking Over the World? – My Perspective",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENPehqh_YSZRujIKx5XbBM7WDvwsT-esQOA&s",
      description: "AI is evolving rapidly—but are we in control or just catching up? In this post, I unpack how AI is influencing jobs, creativity, privacy, and the future of human decision-making. It’s not just tech—it’s a mindset shift, and here’s how I see it playing out.",
      date: "2025-07-10",
      category: "Tech"
    },
    {
      title: "Delicious Pancake Recipe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg79x5Y01Mta4_Z8vVvMjlTCLXspTxozdrqQ&s",
      description: "Fluffy on the inside, golden on the outside, and topped with a drizzle of honey and fresh berries—this is the only pancake recipe you'll ever need. I’m sharing my secret ingredient that makes these extra soft and melt-in-your-mouth good!",
      date: "2025-07-05",
      category: "Food"
    },
    {
      title: "Things I Wish I Knew as a Teenager",
      image: "https://static01.nyt.com/images/2012/01/29/fashion/29STUDIES_SPAN/29STUDIES-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      description: "From not stressing over temporary people to learning the value of self-worth, here are all the raw truths and gentle reminders I wish I could go back and whisper to my teenage self. If you're in your teens—or healing from them—this one’s for you.",
      date: "2025-07-02",
      category: "Life"
    }
  ];
  
  
  const postsPerPage = 2;
  let currentPage = 1;
  
  function displayPosts() {
    const container = document.getElementById('postsContainer');
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
  
    let filtered = posts.filter(post => {
      const matchCategory = category === "All" || post.category === category;
      const matchSearch = post.title.toLowerCase().includes(search);
      return matchCategory && matchSearch;
    });
  
    const totalPages = Math.ceil(filtered.length / postsPerPage);
    document.getElementById('pageNumber').innerText = currentPage;
  
    const start = (currentPage - 1) * postsPerPage;
    const visible = filtered.slice(start, start + postsPerPage);
  
    container.innerHTML = visible.map(post => `
      <div class="card">
        <img src="${post.image}" alt="${post.title}">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <small>${post.date} | ${post.category}</small>
      </div>
    `).join('');
  
    // Disable buttons if on first/last page
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages || totalPages === 0;
  }
  
  // Event listeners
  document.getElementById('searchInput').addEventListener('input', () => {
    currentPage = 1;
    displayPosts();
  });
  document.getElementById('categoryFilter').addEventListener('change', () => {
    currentPage = 1;
    displayPosts();
  });
  document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) currentPage--;
    displayPosts();
  });
  document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    displayPosts();
  });
  
  displayPosts();
  
  
  