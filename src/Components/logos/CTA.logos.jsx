function Shape({className}) {
    return (
        <svg className={className} width="89" height="80" viewBox="0 0 89 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8477 29.3785V0H88.5878V29.3785H10.8477Z" fill="white" fillOpacity="0.4"/>
<path d="M0 50.6215V0H61.9209V50.6215H0Z" fill="#FFA155"/>
<path d="M32.5425 29.3785V0H61.921V29.3785H32.5425Z" fill="#FFD3AF"/>
<path d="M0 80V50.6215H29.3785V80H0Z" fill="white" fillOpacity="0.4"/>
</svg>

    )
}

function RectangleShape({className}) {
    return (
        <svg className = {className} width="24" height="333" viewBox="0 0 24 333" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="333" width="333" height="24" transform="rotate(-90 0 333)" fill="#4F56FF"/>
<rect y="270" width="270" height="24" transform="rotate(-90 0 270)" fill="#FFA155"/>
<rect y="270" width="195" height="24" transform="rotate(-90 0 270)" fill="#FFD3AF"/>
</svg>

    )
}


function MiniIcon({className}) {
    return (
      <svg className={className} width="133" height="81" viewBox="0 0 133 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M93.8824 0.999999L133 1L133 81L93.8823 81L93.8824 0.999999Z" fill="white" fill-opacity="0.19"/>
        <path d="M39 -6.25763e-07L67 0L67 23L39 23L39 -6.25763e-07Z" fill="#8389FF"/>
        <path d="M66.5 -1.48619e-06L133 0L133 23L66.5 23L66.5 -1.48619e-06Z" fill="#FFA155"/>
        <path d="M3.05176e-05 -1.34497e-06L39.1177 0L39.1177 23L2.92394e-05 23L3.05176e-05 -1.34497e-06Z" fill="#FFD3AF"/>
        </svg>
    )
}

export { Shape , RectangleShape  , MiniIcon}