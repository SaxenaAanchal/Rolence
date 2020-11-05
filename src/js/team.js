
function fetch_info(i)
{
    
    let profile=["src/images/team _images/bill.jpg","src/images/team _images/aalia.jpg","src/images/team _images/deep.jpg","src/images/team _images/pichai.jpg"];
    let namee=["Rahul Goel","KM Bansal","Sanjeev Kumar","Shailendra Agarwal"];
    let status=["Sales & Marketing","Technical","Projects","Financial Advisor"];
    let about=["He has over 10 years of experience in various businesses viz. power, telecom and textile. He did his B. Tech in Mechanical Engineering, in 2010 from VIT, Vellore. A fitness freak, provides easy solutions to the problems ahead.","A graduate from MBM Jodhpur, has a vast experience of 30 years in project planning and execution (GM – Coal India Limited, Retired). He has excelled in tender management and material management.","Ex-employee of India’s one of the biggest firms, L&T. He has headed the Project team at L&T, and he is using his immense knowledge to successfully execute all the projects.","He is having 23 years of experience as practicing Charted Accountant with specialization in Taxation and Finance. His skills provides the synergy to the team for taking business decisions."];
    document.getElementById("profile").src=profile[i];
document.getElementById("name").innerHTML=namee[i];
document.getElementById("status").innerHTML=status[i];
document.getElementById("about").innerHTML=about[i];
    
}
