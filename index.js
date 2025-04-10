document.body.addEventListener('click', function(event) {
    // 클릭한 위치에서 이미지가 나타날 새로운 div 생성
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
  
    // 이미지를 담은 img 태그 생성
    const img = document.createElement('img');
    img.src = './img/image2.png';
    img.alt = 'Image';
    img.classList.add('hover-image');
  
    // 생성한 img를 imageContainer에 추가
    imageContainer.appendChild(img);
  
    // 클릭한 위치에 imageContainer 위치 설정
    const x = event.pageX;
    const y = event.pageY;
    imageContainer.style.left = `${x - 50}px`; // 이미지를 클릭 위치 근처로 배치
    imageContainer.style.top = `${y - 50}px`; // 이미지를 클릭 위치 근처로 배치
  
    // 이미지가 보이도록 opacity와 visibility 설정
    imageContainer.style.opacity = 1;
    imageContainer.style.visibility = 'visible';
  
    // body에 이미지 컨테이너 추가
    document.body.appendChild(imageContainer);
  
    // 일정 시간 후 이미지 숨기기 (3초 후)
    setTimeout(() => {
      imageContainer.style.opacity = 0;
      imageContainer.style.visibility = 'hidden';
      setTimeout(() => {
        imageContainer.remove(); // 완전히 제거
      }, 300);
    }, 300); // 3초 후 이미지 사라짐
  });

//   const mentElements = document.querySelectorAll('.ment1');

//   setInterval(() => {
//     mentElements.forEach((ment1) => {
//       // 현재 투명도에 따라 토글
//       ment1.style.opacity = ment1.style.opacity === '0' ? '1' : '0';
//     });
//   }, 5000); // 3초 간격