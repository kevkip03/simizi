import Dropdown from "./Dropdown";

const handleSelect = (option: string) => {
    console.log('Selected option:', option);
};
export default function JobBoard(){

    const job_type = ['On site', 'Remote'];
    const provinces = ['Rift Valley','nyanza','nairobi','coast']
    const cities = ['mombasa','kisumu','nairobi','eldoret','new york']
    return(
        <div className="jobBoard">
            <p>Create an account and login for Simizi's assistance in navigating jobs, writing a Canadian resume and cover letter, and more.</p>
            <h1 className="jobheader">Job board</h1>
            <div className="dropmenus">
            <div>
            <Dropdown heading='Location type' options={job_type} onSelect={handleSelect} />
            </div>
            <div>
            <Dropdown heading='select a province' options={provinces} onSelect={handleSelect} />
            </div>
            </div>
            <div className="dropmenus">
            <div>
            <Dropdown heading='Choose a city' options={cities} onSelect={handleSelect} />
            </div>
            <div>
                <input placeholder="search keyword"/>
            </div>
            </div>
            
        </div>   
    )
}