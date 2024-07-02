let basicSalary = 24000;

function calculatePayee(grossSalary){
  if (grossSalary <= 24000) {
    return grossSalary * 0.1;
  } else if (grossSalary >= 24001 && grossSalary <= 32333) {
    return grossSalary * 300;
  } else if (grossSalary >= 32334 && grossSalary <= 500000) {
    return grossSalary * 0.3;
  } else if (grossSalary >= 500001 && grossSalary <= 800000) {
    return grossSalary * 32.5;
  } else if (grossSalary > 800000) {
    return grossSalary * 35;
  }
}
   
   
function calculateNhif(grossSalary){

  if (grossSalary <= 5999) {
    return grossSalary - 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    return grossSalary - 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    return grossSalary - 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    return grossSalary * 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    return grossSalary - 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    return grossSalary * 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    return grossSalary - 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    return grossSalary - 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    return grossSalary - 950;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    return grossSalary - 1000;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    return grossSalary - 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59000) {
    return grossSalary - 1200;
  } else if (grossSalary >= 60000 && grossSalary <= 69000) {
    return grossSalary - 1300;
  } else if (grossSalary >= 70000 && grossSalary <= 79000) {
    return grossSalary - 1400;
  } else if (grossSalary >= 80000 && grossSalary <= 89000) {
    return grossSalary - 1500;
  } else if (grossSalary >= 90000 && grossSalary <= 99000) {
    return grossSalary - 1600;
  } else if (grossSalary > 100000) {
    return grossSalary - 1700;
  }
  }


    
   

function calculateNssf(grossSalary) {
  let calculateNssfTier1 = Math.min(grossSalary * 0.06, 7000)
  let calculateNssfTier2 = Math.min(grossSalary * 0.06, 7001, 36000)  
}  calculateNssf();
    

function calculateNetSalary(basicSalary, benefits) {
  
  let grossSalary = basicSalary + benefits;

  let nhif = calculateNHIF(grossSalary);
  let nssf = calculateNSSF(grossSalary);
  let payee = calculatePAYE(grossSalary - nssf); 

  let netSalary = grossSalary - nhif - nssf - payee;

  return {
    grossSalary,
    nhif,
    nssf,
    payee,
    netSalary
  };
}