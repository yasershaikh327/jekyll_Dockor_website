function random()
{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("x").style.borderColor=randomColor;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("y").style.borderColor=randomColor;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("z").style.borderColor=randomColor;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("xx").style.borderColor=randomColor;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("xxx").style.borderColor=randomColor;

    var video = document.getElementById('testvideo')

    // When the 'ended' event fires
    video.addEventListener('ended', function(){
      // Reset the video to 0
      video.currentTime = 0;
      // And play again
      video.play();
    });
//Math.floor(Math.random() * 10);

  }

var x = Math.floor(Math.random() * 6);
if(x==0)
{
  x++;
}

function starts()
{
  document.getElementById("img1").src='BookWritingBlog/'+x+'.webp';
  document.getElementById("img2").src='DIYBlog/'+x+'.webp';
  document.getElementById("img3").src='FoodBlogPage/'+x+'.jpg';
  document.getElementById("img4").src='MovieBlog/'+x+'.webp';
  document.getElementById("img5").src='TravelBlogPage/'+x+'.mp4';
}

function redirect1()
{
  window.location.href="BookWritingBlog/blog.html";  
}

function redirect2()
{
  window.location.href="DIYBlog/blog.html";  
}

function redirect3()
{
  window.location.href="FoodBlogPage/blog.html";  
}

function redirect4()
{
  window.location.href="MovieBlog/blog.html";  
}

function redirect5()
{
  window.location.href="TravelBlogPage/blog.html";  
}