import simiziLogo from '../assets/simizi.svg'
// import viteLogo from '/vite.svg'

export default function Logo(){
    return(
    <div>
        <div>
      <div className='logo'>
        <a href="/">
          <img src={simiziLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
    </div>

    )
}