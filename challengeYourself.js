function passScore(score) {
    return score >= 5;
  }
  
  console.log(passScore(4)); 
  console.log(passScore(5)); 
  console.log(passScore(9));

////////////////////////////////////////

  function passScoreWithGrade(score) {
    if (score > 8) {
      console.log("Excellent");
    }
    return score >= 5;
  }
  
  console.log(passScoreWithGrade(4)); 
  console.log(passScoreWithGrade(5)); 
  console.log(passScoreWithGrade(9)); 

///////////////////////////////////////////////

function passScoreWithGrade(score) {
    if (score === 11) {
      console.log("Perfect");
    } else if (score > 8) {
      console.log("Excellent");
    }
    return score >= 5;
  }
  
  console.log(passScoreWithGrade(4)); 
  console.log(passScoreWithGrade(5)); 
  console.log(passScoreWithGrade(9)); 
  console.log(passScoreWithGrade(11)); 