<template>
  <div class="drawing-holder">
    <div class="bear body bodySlant">
      <div class="face"></div>
      <div class="features"></div>
    </div>

    <!-- <div class="bear body alt">
      <div class="face"></div>
      <div class="features"></div>
    </div> -->
  </div>
</template>


<style lang="scss" scoped>
.drawing-holder{
	width: 500px;
	height: 200px;
	position: relative;
	margin-top: -50px;
	margin-left: -50px;
	top: 5%;
	right: 45%;
}
// all animals have this default setup for body, face and features elements
// saves setting it up each time
.body {
  width: 90px;
  height: 100px;

  &,
  &:before,
  &:after {
    position: absolute;
  }
  &:before,
  &:after {
    content: "";
  }
}
.face,
.features {
  &,
  &:before,
  &:after {
    position: absolute;
  }
  &:before,
  &:after {
    content: "";
  }
}

// Specific styles

$defaultBodyColor: #e6ac4c;

//Slanted Body
.bodySlant {
  background-color: $defaultBodyColor;
  border-radius: 4px;
  transform-origin: 50% 100%;
  transform: perspective(300px) rotateX(20deg);
}

// Bear Styling
// Uses slanted body styling
$bearBodyColor: #5a3d0d;
$bearPatchesColor: #d0ba96;
$bearEyeColor: #2f1f05;

.bear {
  top: 40px;
  left: 590px;
  height: 120px;

  background-color: $bearBodyColor;

  &.alt {
    left: 60px;
    top: 230px;
    width: 70px;
    height: 70px;
    border-radius: 50% / 45% 45% 35% 35%;

    box-shadow:
			//body section and patch
      0 54px 0 -12px $bearPatchesColor, 0 54px 0 2px $bearBodyColor,
      //ears
      -18px -23px 0 -25px $bearPatchesColor,
      18px -23px 0 -25px $bearPatchesColor, -18px -23px 0 -20px $bearBodyColor,
      18px -23px 0 -20px $bearBodyColor,
      //legs
      -17px 84px 0 -22px $bearBodyColor,
      17px 84px 0 -22px $bearBodyColor;

    &:before {
      //paws
      left: -16px;
      top: 56px;
      width: 30px;
      height: 25px;

      background-color: $bearBodyColor;
      border-radius: 50% / 40%;

      box-shadow: -1px 0 $bearPatchesColor,
        //right paw
        72px 0 $bearBodyColor,
        73px 0 $bearPatchesColor;
    }
    &:after {
      display: none;
    }

    .face {
      left: 20px;
    }
    .features {
      display: none;
    }
  }

  //ears
  &:before {
    top: -22px;
    left: 0;
    width: 35px;
    height: 26px;

    background-color: $bearBodyColor;

    border-radius: 50% 50% 0 0 / 70%;

    box-shadow: 55px 0 $bearBodyColor;
  }

  //paws
  &:after {
    top: 50px;
    left: -12px;
    width: 14px;
    height: 15px;

    background-color: $bearPatchesColor;
    border-radius: 40%;

    box-shadow:
			//right paw
      100px 0 $bearPatchesColor, 97px 0px 0px 8px $bearBodyColor,
      //left paw
      3px 0px 0px 8px $bearBodyColor,
      18px 65px $bearPatchesColor, 18px 65px 0px 6px $bearBodyColor,
      82px 65px $bearPatchesColor, 82px 65px 0px 6px $bearBodyColor;

    animation: wave 8s infinite linear;
  }

  .face {
    //Background nose spot
    top: 24px;
    left: 30px;
    width: 30px;
    height: 30px;

    background-color: $bearPatchesColor;
    border: 0;
    border-radius: 50%;

    &:before {
      // Eyes and nose
      top: 5px;
      left: 11px;
      z-index: 5;
      width: 8px;
      height: 8px;
      background-color: $bearEyeColor;

      border-radius: 50%;

      box-shadow: -3px 0 $bearEyeColor, -2px 0 $bearEyeColor,
        2px 0 $bearEyeColor, 3px 0 $bearEyeColor, 0 3px $bearEyeColor,
        //eyes
        -12px -12px $bearEyeColor,
        12px -12px $bearEyeColor;

      // 19px 18px $bearEyeColor,
      // 21px 18px $bearEyeColor,
      // 23px 18px $bearEyeColor,
      // 25px 18px $bearEyeColor,
      // 22px 21px $bearEyeColor
    }
    &:after {
      //mouth
      left: 12px;
      top: 11px;
      width: 10px;
      height: 10px;
      border-bottom: 3px solid #000;

      border-radius: 40%;
      transform: rotate(-30deg);
    }
  }
  // Belly patch
  .features {
    top: 65px;
    left: 23px;
    width: 45px;
    height: 45px;

    background-color: $bearPatchesColor;
    border-radius: 40%;

    &:before {
      //ear patches
      top: -77px;
      left: -12px;
      width: 14px;
      height: 8px;

      background-color: $bearPatchesColor;
      border-radius: 50% 50% 0 0 / 70%;

      box-shadow: 55px 0 $bearPatchesColor;
    }
    &:after {
    }
  }
}

@keyframes wave {
  50% {
    box-shadow:
			//right paw
      100px 0 $bearPatchesColor, 97px 0px 0px 8px $bearBodyColor,
      //left paw
      3px 0px 0px 8px $bearBodyColor,
      18px 65px $bearPatchesColor, 18px 65px 0px 6px $bearBodyColor,
      82px 65px $bearPatchesColor, 82px 65px 0px 6px $bearBodyColor;
  }
  55% {
    box-shadow:
			//right paw
      99px -6px $bearPatchesColor, 96px -6px 0px 8px $bearBodyColor,
      //left paw
      3px 0px 0px 8px $bearBodyColor,
      18px 65px $bearPatchesColor, 18px 65px 0px 6px $bearBodyColor,
      82px 65px $bearPatchesColor, 82px 65px 0px 6px $bearBodyColor;
  }
  60% {
    box-shadow:
			//right paw
      100px 0 $bearPatchesColor, 97px 0 0px 8px $bearBodyColor,
      //left paw
      3px 0px 0px 8px $bearBodyColor,
      18px 65px $bearPatchesColor, 18px 65px 0px 6px $bearBodyColor,
      82px 65px $bearPatchesColor, 82px 65px 0px 6px $bearBodyColor;
  }
  65% {
    box-shadow:
			//right paw
      99px -6px $bearPatchesColor, 96px -6px 0px 8px $bearBodyColor,
      //left paw
      3px 0px 0px 8px $bearBodyColor,
      18px 65px $bearPatchesColor, 18px 65px 0px 6px $bearBodyColor,
      82px 65px $bearPatchesColor, 82px 65px 0px 6px $bearBodyColor;
  }
  70% {
    box-shadow:
			//right paw
      100px 0 $bearPatchesColor, 97px 0 0px 8px $bearBodyColor,
      //left paw
      3px 0px 0px 8px $bearBodyColor,
      18px 65px $bearPatchesColor, 18px 65px 0px 6px $bearBodyColor,
      82px 65px $bearPatchesColor, 82px 65px 0px 6px $bearBodyColor;
  }
}
</style>