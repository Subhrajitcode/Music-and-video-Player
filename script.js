document.addEventListener("DOMContentLoaded", () => {
  const artworkPatterns = [
    {
      title: "See You Again",
      artist: "Wiz Khalifa ft. Charlie Puth",
      image:
        "https://i1.sndcdn.com/artworks-000162897425-k8h6e5-t1080x1080.jpg",
    },
    {
      title: "Sorry",
      artist: "Justin Bieber",
      image: "https://i1.sndcdn.com/artworks-000504827442-ayiq1m-t500x500.jpg",
    },
    {
      title: "Uptown Funk",
      artist: "Mark Ronson ft. Bruno Mars",
      image:
        "https://cdn-images.dzcdn.net/images/cover/1a003bae7cb63b77cc0d4a0d1ec2222e/0x1900-000000-80-0-0.jpg",
    },
    {
      title: "Roar",
      artist: "Katy Perry",
      image:
        "https://i.discogs.com/99p5zCuBcwpOazk9h-m4ItrECpAiNR1o4wN3gRDEvqE/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMzU4/MTgtMTM4Mjc0OTUw/Mi05NTEzLmpwZWc.jpeg",
    },
    {
      title: "Hello",
      artist: "Adele",
      image:
        "https://cdn-images.dzcdn.net/images/cover/eaeadce7932a97533fe495881d2fcd7a/1900x1900-000000-80-0-0.jpg",
    },
    {
      title: "Sky's The Limit",
      artist: "Notorious B.I.G",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/8c/Biggieskysthelimit.jpg",
    },
  ];

  const artworkGrid = document.querySelector(".artwork-grid");
  const playPauseBtn = document.querySelector(".play-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const songTitle = document.querySelector(".song-info h3");
  const artistName = document.querySelector(".song-info p");
  const progressBar = document.querySelector(".progress-gradient");
  const albumArt = document.querySelector(".album-art");
  const videoPlayer = document.querySelector(".video-player");

  const fileInput = document.getElementById("file-input");
  const selectFileButton = document.getElementById("select-file");

  let isPlaying = false;
  let mediaElement = null;


  artworkPatterns.forEach((pattern) => {
    const card = document.createElement("div");
    card.className = "artwork-card";
    card.innerHTML = `
        <div class="artwork-image">
          <img src="${pattern.image}" alt="${pattern.title} by ${pattern.artist}">
        </div>
        <h3>${pattern.title}</h3>
        <p>${pattern.artist}</p>
      `;
    artworkGrid.appendChild(card);
  });

  const topCharts = [
    {
      title: "See You Again",
      artist: "Wiz Khalifa ft. Charlie Puth",
      image:
        "https://i1.sndcdn.com/artworks-000162897425-k8h6e5-t1080x1080.jpg",
    },
    {
      title: "Sorry",
      artist: "Justin Bieber",
      image: "https://i1.sndcdn.com/artworks-000504827442-ayiq1m-t500x500.jpg",
    },
    {
      title: "Uptown Funk",
      artist: "Mark Ronson ft. Bruno Mars",
      image:
        "https://cdn-images.dzcdn.net/images/cover/1a003bae7cb63b77cc0d4a0d1ec2222e/0x1900-000000-80-0-0.jpg",
    },
    {
      title: "Blank Space",
      artist: "Taylor Swift",
      image: "https://i1.sndcdn.com/artworks-000659841340-fpf7vf-t500x500.jpg",
    },
  ];

  const listenAgain = [
    {
      title: "Shake It Off",
      artist: "Taylor Swift",
      image:
        "https://i.ytimg.com/vi/nfWlot6h_JM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCijsovaf3Scrtms9LhdZuFNueDvQ",
    },
    {
      title: "Lean On",
      artist: "Major Lazer & DJ Snake ft. MØ",
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/ed/Major_Lazer_and_DJ_Snake_-_Lean_On_%28feat._M%C3%98%29.png",
    },
    {
      title: "Hello",
      artist: "Adele",
      image:
        "https://cdn-images.dzcdn.net/images/cover/eaeadce7932a97533fe495881d2fcd7a/1900x1900-000000-80-0-0.jpg",
    },
    {
      title: "Roar",
      artist: "Katy Perry",
      image:
        "https://i.discogs.com/99p5zCuBcwpOazk9h-m4ItrECpAiNR1o4wN3gRDEvqE/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMzU4/MTgtMTM4Mjc0OTUw/Mi05NTEzLmpwZWc.jpeg",
    },
  ];

  function renderSongList(songs, containerId) {
    const container = document.getElementById(containerId);
    songs.forEach((song) => {
      const songItem = document.createElement("div");
      songItem.className = "song-item";
      songItem.innerHTML = `
          <img src="${song.image}" alt="${song.title} by ${song.artist}">
          <div class="song-item-info">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
          </div>
          <button>+</button>
        `;
      container.appendChild(songItem);
    });
  }

  renderSongList(topCharts, "top-charts");
  renderSongList(listenAgain, "listen-again");

  const friendImages = [
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
  ];

  const singerImages = [
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
    "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png",
  ];

  function renderAvatars(containerId, images) {
    const container = document.getElementById(containerId);
    images.forEach((imageUrl) => {
      const avatar = document.createElement("div");
      avatar.className = "avatar";
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = "Avatar";
      avatar.appendChild(img);
      container.appendChild(avatar);
    });
  }

  renderAvatars("friends", friendImages);
  renderAvatars("singers", singerImages);

  function updateMediaInfo(file) {
    songTitle.textContent = file.name;
    artistName.textContent = "Local File";

    if (file.type.startsWith("audio/")) {
      albumArt.style.display = "block";
      videoPlayer.style.display = "none";
      albumArt.innerHTML =
        '<img src="/placeholder.svg?height=300&width=300" alt="Audio File">';
      mediaElement = new Audio(URL.createObjectURL(file));
    } else if (file.type.startsWith("video/")) {
      albumArt.style.display = "none";
      videoPlayer.style.display = "block";
      videoPlayer.src = URL.createObjectURL(file);
      mediaElement = videoPlayer;
    }

    mediaElement.addEventListener("ended", () => {
      playPauseBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
            <path d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        `;
      isPlaying = false;
      progressBar.style.width = "0";
    });

    mediaElement.addEventListener("timeupdate", () => {
      const progress = (mediaElement.currentTime / mediaElement.duration) * 100;
      progressBar.style.width = `${progress}%`;
    });
  }

  function playPause() {
    if (mediaElement) {
      if (mediaElement.paused) {
        mediaElement.play();
        playPauseBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
              <path d="M9 8H10.5V16H9V8Z" fill="currentColor"/>
              <path d="M13.5 8H15V16H13.5V8Z" fill="currentColor"/>
            </svg>
          `;
        isPlaying = true;
      } else {
        mediaElement.pause();
        playPauseBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
              <path d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
          `;
        isPlaying = false;
      }
    } else {
      console.log("No media file selected");
    }
  }

  function nextTrack() {
    if (mediaElement) {
      mediaElement.currentTime = 0;
      mediaElement.play();
      playPauseBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
            <path d="M9 8H10.5V16H9V8Z" fill="currentColor"/>
            <path d="M13.5 8H15V16H13.5V8Z" fill="currentColor"/>
          </svg>
        `;
      isPlaying = true;
    } else {
      console.log("No media file selected");
    }
  }

  function prevTrack() {
    if (mediaElement) {
      mediaElement.currentTime = 0;
      mediaElement.play();
      playPauseBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
            <path d="M9 8H10.5V16H9V8Z" fill="currentColor"/>
            <path d="M13.5 8H15V16H13.5V8Z" fill="currentColor"/>
          </svg>
        `;
      isPlaying = true;
    } else {
      console.log("No media file selected");
    }
  }

  playPauseBtn.addEventListener("click", playPause);
  nextBtn.addEventListener("click", nextTrack);
  prevBtn.addEventListener("click", prevTrack);

  selectFileButton.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      updateMediaInfo(file);
      playPauseBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
            <path d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        `;
      isPlaying = false;
    }
  });

  // Connection status toggle
  const connectionStatus = document.querySelector(".connection-status");
  connectionStatus.addEventListener("click", () => {
    connectionStatus.textContent =
      connectionStatus.textContent === "Connection Status"
        ? "Connected"
        : "Connection Status";
  });
});
