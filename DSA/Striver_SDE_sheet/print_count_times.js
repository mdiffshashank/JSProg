function print(count, name) {
    if (count === 0) return;
    else {
      console.log(name);
      return print(count-1, name); //count-- will not work
    }
  }
  
  print(5, "shashank");
  