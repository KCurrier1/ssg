<template>
  <div class="cat-face">
    <div class="cat-eyes">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="cat-nose"></div>
    <div class="cat-mouth"></div>
    <div class="cat-whiskers">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cat-face {
  background-color: #ffd391;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  position: relative;
  float: left;

  .cat-nose {
    position: absolute;
    bottom: 0;
    z-index: 1;
    left: 4px;
    width: 0px;
    height: 0px;
    border-right: 46px solid transparent;
    border-left: 46px solid transparent;
    border-bottom: 82px solid #fff;
    border-radius: 50%;
  }
  .cat-nose:after {
    display: block;
    content: "";
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -5px;
    width: 0;
    height: 0;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-top: 6px solid #000;
  }

  .cat-mouth {
    width: 50px;
    height: 8px;
    position: absolute;
    top: 72px;
    left: 50%;
    margin-left: -26px;
    z-index: 2;
    overflow: hidden;
  }
  .cat-mouth:before {
    content: "";
    display: block;
    position: absolute;
    left: 6px;
    bottom: 0;
    border: 2px solid #000;
    width: 19px;
    height: 13px;
    border-radius: 50%;
  }

  .cat-mouth:after {
    content: "";
    display: block;
    position: absolute;
    right: 6px;
    bottom: 0;
    border: 2px solid #000;
    width: 19px;
    height: 13px;
    border-radius: 50%;
  }

  .cat-whiskers {
    position: absolute;
    top: 65px;
    left: 50%;
    z-index: 2;
    .left {
      position: absolute;
      border: 2px solid #000;
      border-left: none;
      border-right: none;
      width: 25px;
      height: 5px;
      left: 35px;
      transform: rotate(-10deg);
    }
    .right {
      position: absolute;
      border: 2px solid #000;
      border-left: none;
      border-right: none;
      width: 25px;
      height: 5px;
      right: 35px;
      transform: rotate(10deg);
    }
  }
  .cat-eyes {
    position: absolute;
    top: 45px;
    width: 55px;
    left: 50%;
    margin-left: -27px;
    z-index: 2;

    .left {
      position: absolute;
      display: block;
      content: "";
      width: 13px;
      height: 13px;
      background-color: #000;
      left: 0;
      top: 0;
      border-radius: 50%;
    }

    .right {
      position: absolute;
      display: block;
      content: "";
      width: 13px;
      height: 13px;
      background-color: #000;
      right: 0;
      top: 0;
      border-radius: 50%;
    }
  }
}
.cat-face:before {
  position: absolute;
  display: block;
  content: "";
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 40px solid #ffd391;
  border-radius: 5px;
  left: -15px;
  top: -5px;
  transform: rotate(-40deg);
}

.cat-face:after {
  position: absolute;
  display: block;
  content: "";
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 40px solid #ffd391;
  border-radius: 5px;
  right: -15px;
  top: -5px;
  transform: rotate(40deg);
}

// --------------SASS version--------------
// .drawing-holder
// 	width: 100px
// 	height: 100px
// 	position: absolute
// 	margin-top: -50px
// 	margin-left: -50px
// 	top: 50%
// 	left: 50%
//     .cat-face
//         background-color: #FFD391
//         width: 100px
//         height: 100px
//         border-radius: 50%
//         display: block
//         position: relative
//         float: left

//         .cat-nose
//             position: absolute
//             bottom: 0
//             z-index: 1
//             left: 4px
//             width: 0px
//             height: 0px
//             border-right: 46px solid transparent
//             border-left: 46px solid transparent
//             border-bottom: 82px solid #fff
//             border-radius: 50%

//         .cat-nose:after
//             display: block
//             content: ""
//             position: absolute
//             top: 50px
//             left: 50%
//             margin-left: -5px
//             width: 0
//             height: 0
//             border-right: 5px solid transparent
//             border-left: 5px solid transparent
//             border-top: 5px solid #000

//         .cat-mouth
//             width: 50px
//             height: 11px
//             position: absolute
//             top: 70px
//             left: 50%
//             margin-left: -26px
//             z-index: 2
//             overflow: hidden

//         .cat-mouth:before
//             content: ""
//             display: block
//             position: absolute
//             left: 3px
//             bottom: 0
//             border: 2px solid #000
//             width: 19px
//             height: 13px
//             border-radius: 50%

//         .cat-mouth:after
//             content: ""
//             display: block
//             position: absolute
//             right: 3px
//             bottom: 0
//             border: 2px solid #000
//             width: 19px
//             height: 13px
//             border-radius: 50%

//         .cat-whiskers
//             position: absolute
//             top: 65px
//             left: 50%
//             z-index: 2
//             .left
//                 position: absolute
//                 border: 2px solid #000
//                 border-left: none
//                 border-right: none
//                 width: 25px
//                 height: 3px
//                 left: 35px
//                 transform: rotate(-10deg)
//             .right
//                 position: absolute
//                 border: 2px solid #000
//                 border-left: none
//                 border-right: none
//                 width: 25px
//                 height: 3px
//                 right: 35px
//                 transform: rotate(10deg)

//         .cat-eyes
//             position: absolute
//             top: 45px
//             width: 55px
//             left: 50%
//             margin-left: -27px
//             z-index: 2

//             .left
//                 position: absolute
//                 display: block
//                 content: ""
//                 width: 13px
//                 height: 13px
//                 background-color: #000
//                 left: 0
//                 top: 0
//                 border-radius: 50%

//             .right
//                 position: absolute
//                 display: block
//                 content: ""
//                 width: 13px
//                 height: 13px
//                 background-color: #000
//                 right: 0
//                 top: 0
//                 border-radius: 50%

//     .cat-face:before
//         position: absolute
//         display: block
//         content: ""
//         width: 0
//         height: 0
//         border-left: 30px solid transparent
//         border-right: 30px solid transparent
//         border-bottom: 40px solid #FFD391
//         border-radius: 5px
//         left: -15px
//         top: -5px
//         transform: rotate(-40deg)

//     .cat-face:after
//         position: absolute
//         display: block
//         content: ""
//         width: 0
//         height: 0
//         border-left: 30px solid transparent
//         border-right: 30px solid transparent
//         border-bottom: 40px solid #FFD391
//         border-radius: 5px
//         right: -15px
//         top: -5px
//         transform: rotate(40deg)
</style>