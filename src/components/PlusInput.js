
import { plusCustom } from "../redux/reducer/CounterReducer"
import { connect } from "react-redux"
import { useState } from "react"
const PlusInput = ({plusCustom}) => {
    const [number, setNumber] = useState("")
    const onclickplusCustom = () => {
        console.log("hjhj")
        if (!number)
            return alert("bitte ausfüllen!")
            plusCustom(parseInt(number))
    }
    return (
        <div>
            <input value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={onclickplusCustom}>plusCustom</button>
            
        </div>
    )

}

export default connect(null, { plusCustom })(PlusInput)