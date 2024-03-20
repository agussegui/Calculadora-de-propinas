import { Dispatch } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<React.SetStateAction<number>>,
    tip:number
}

const TipPercentageForm = ({setTip, tip}: TipPercentageFormProps) => {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina</h3>

        <form action="">
            {tipOptions.map(tipOption => (
                <div 
                    className="flex gap-4"
                    key={tipOption.id}
                >
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={e => setTip(+e.target.value)} //hay mas opciones en vez de ponerle un mas
                        checked={tipOption.value === tip}
                    />
                </div>
            ))}
            
        </form>
    </div>
  )
}

export default TipPercentageForm