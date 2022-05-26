import Button from "./Button";


export default function Toolbar(){
return(<Button
    onClick={() => {
        alert('clicked');
    }}
>
    Click me
</Button>)
}