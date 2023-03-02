// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const fs = require("fs");

export default function (req, res) {

  const onClick = () => {
    const data = {
      a: "hello",
      b: "안녕하세요"
    }

    fs.watchFile("../../test.json", JSON.stringify(data), (err) => {
      if (err)
        console.log(err)
      else {
        console.log("file written successfully")
      }
    })
    console.log(data, "data")
  }

  function hi() {
    console.log("hi")
  }

  setTimeout(onClick, 1000)
  setTimeout(hi, 1000)

  res.status(200).json({ name: 'John Doe' })
}
