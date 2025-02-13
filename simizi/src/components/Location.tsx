import Dropdown from "./Dropdown";

const handleSelect = (option: string) => {
    console.log('Selected option:', option);
};

export default function Location() {


    const options = ['Nairobi', 'Mombasa', 'KIsumu'];
    return (
        <div>
            <h1> location information</h1>
            <h1> location information</h1>
            <h1> location information</h1>
            <h1> location information</h1>
            <form>
                <label>First name:
                    <input type="text" />
                </label>
                <label>Second name:
                    <input type="text" />
                </label>
            </form>

            <div>
            <Dropdown options={options} onSelect={handleSelect} />
            </div>

           

        </div>
    )
}