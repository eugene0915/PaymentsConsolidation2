const fs = require('fs')

const alipay = () => {

    const onClick = () => {
        const data = {
            a: "hello",
            b: "안녕하세요"
        }

        fs.watchFile("test.json", JSON.stringify(data), (err) => {
            if (err)
                console.log(err)
            else {
                console.log("file written successfully")
            }
        })
        console.log(data, "data")
    }

    return (<>alipay next js page
        <button onClick={onClick}>click</button>
    </>)
};

export default alipay;