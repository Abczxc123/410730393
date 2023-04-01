let points = [[-13, -6], [-14, -3], [-13, -1],[-12,0],[-12,3],[-10,5],[-5,7],[1,8],[5,8],[9,7],[12,5],[13,2],[14,0],[13,1],[14,-1],[13,0],[13,-2],[12,3],[12,-1],[13,-6],[11,-7],[10,-6],[11,-5],[9,-3],[8,-6],[5,-6],[6,-5],[5,-4],[1,-4],[0,-6],[-3,-6],[-2,-5],[-3,-4],[-5,-4],[-6,-5],[-7,-7],[-10,-7],[-10,-6],[-8,-5],[-8,-4],[-10,-4]]; //list資料，
let ctx;
function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 10;
      
      
    }
  }
     
  ctx = canvas.getContext('2d');
	ctx.lineWidth = 8;
	ctx.lineCap = 'round'
	//------
	gradientLine(ctx, 60, 60, 300, 380, 'black', 'blue')
	gradientLine(ctx, 720, 120, 80, 300, 'brown', 'orange')
	gradientLine(ctx, 520, 70, 500, 440, 'lightblue', 'lime')
}

function draw() {
  background(255);
  // scale(50)
  textSize(30)  //文字大小
  fill(0, 102, 153);  //設定顏色
  text("教科系",100,100)  //顯示文字

  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1, -1);  //上下翻轉
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1])*8;
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
}

// 以下函數主要畫從(x1,y1)~(x2,y2)間，顏色為c1到c2的變化

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}