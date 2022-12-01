let i = document.getElementById('input');
let b = document.getElementById('btn');
let o = document.getElementById('output');
let f;
i.addEventListener("keyup",()=>{
    //remove space and special characters 
    f = i.value.replace(/[^A-Z0-9]/ig,"");
    // console.log(f);
    // if(f)
    // {
    //     b.classList.add("active");
    // }
});

b.addEventListener("click",() => {
    //spliting user input character , reversing theme , add joining them in a single word
        let rev = f.split("").reverse().join("");
        console.log(rev);
        if(f!=rev)
        {
            return o.innerHTML = `${i.value} is Not Palindrome`;
        }
        else
           return o.innerHTML= `${i.value} is Palindrome`;
    });


