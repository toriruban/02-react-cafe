import css from '../CafeInfo/CafeInfo.module.css'; 


interface CafeInfoProps {
   container: string, 
   title: string,
   description: string
}

export default function CafeInfo({container,title,description }:CafeInfoProps){
 return(
 <div className={container}>
  <h1 className={title}>Sip Happens Café</h1>
  <p className={description}>
    Please rate our service by selecting one of the options below.
  </p>
</div>
)
}
