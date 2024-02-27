const btn = document.querySelectorAll('.s11');
const inp = document.querySelectorAll('input');
const a = [];
let gstGenerated = false;

for (let i = 0; i < inp.length; i++) {
    btn[i].addEventListener('click', function handleClick(e) {
        a.push(inp[i].value);
        console.log(a);
        e.preventDefault();
        const div = document.createElement('div');
        div.classList.add('s12');
        const form = document.createElement('div');
        div.classList.add('s13');

        const sec = document.querySelector('#sec3');
        const input = document.createElement('input');
        const input1 = document.createElement('input');
        input.classList.add('inp1');
        input.setAttribute('type', 'text');
        input.value = btn[i].value;
        input1.classList.add('inp2');
        input1.setAttribute('type', 'text');
        input1.value = inp[i].value;

        sec.appendChild(div);
        div.appendChild(form);
        form.appendChild(input);
        form.appendChild(input1);
    });
}

const butt = document.querySelector('.sec7')
const done = document.querySelector('.btn1');
done.addEventListener('click', (e) => {
    if (!gstGenerated) {
        let s = 0;
        for (let i = 0; i < a.length; i++) {
            s = s + Number(a[i]);
        }
        const GST = s * (18 / 100);
        const d = [GST, s];
        const c = ["GST-18%", "Total"];
        const sec1 = document.querySelector('#sec4');
        const div1 = document.createElement('div');
        div1.classList.add('s14');
        sec1.appendChild(div1);

        for (let i = 0; i < c.length; i++) {
            const input2 = document.createElement('input');
            const input3 = document.createElement('input');
            input2.classList.add('inp1');
            input2.setAttribute('type', 'text');
            input2.value = c[i];
            input3.classList.add('inp2');
            input3.setAttribute('type', 'text');
            input3.value = d[i];
            div1.appendChild(input2);
            div1.appendChild(input3);
        }
        gstGenerated = true;
        butt.removeChild(done)

btn.forEach(button =>{
    button.classList.add('disabled')
})


    }
})