import './styles.css'

const { useState } = React;

export function EventRSVPForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attendees, setAttendees] = useState('');
    const [dietary, setDietary] = useState('');
    const [isAdditionalGuest, setIsAdditionalGuest] = useState(false);
    const [isFormValide, setIsFormValide] = useState(false);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleAttendeesChange(e) {
        setAttendees(e.target.value);
    }

    function handleDietaryChange(e) {
        setDietary(e.target.value);
    }

    function handleAdditionalGuestChange(e) {
        setIsAdditionalGuest(e.target.checked);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsFormValide(true);
    }

    return (
        <form onSubmit={handleSubmit}>

            <h1 id="form-title">
                Event RSVP Form
            </h1>

            <label className="section-label">
                Name
                <input
                    required
                    value={name}
                    onChange={handleNameChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                />
            </label>

            <label className="section-label">
                Email
                <input
                    required
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                />
            </label>

            <label className="section-label">
                Number of Attendees
                <input
                    required
                    value={attendees}
                    onChange={handleAttendeesChange}
                    type="number"
                    name="attendees"
                    id="attendees"
                    placeholder="Enter the number of attendees"
                    min="1"
                />
            </label>

            <label className="section-label">
                Dietary Preferences
                <input
                    value={dietary}
                    onChange={handleDietaryChange}
                    type="text"
                    name="dietary"
                    id="dietary"
                    placeholder="Dietary preferences (optional)"
                />
            </label>

            <label className="section-label">
                Bringing additional guests?

                <input
                    checked={isAdditionalGuest}
                    onChange={handleAdditionalGuestChange}
                    type="checkbox"
                    name="additional-guest"
                    id="additional-guest"
                />
            </label>

            <button type="submit">
                Submit RSVP
            </button>

            {isFormValide && (
                <div className="result-container">

                    <h2 className="result-title">
                        RSVP Submitted!
                    </h2>

                    <p className="result-section">
                        Name: {name}
                    </p>

                    <p className="result-section">
                        Email: {email}
                    </p>

                    <p className="result-section">
                        Number of attendees: {attendees}
                    </p>

                    <p className="result-section">
                        Dietary preferences: {
                            dietary.trim() === ''
                                ? 'None'
                                : dietary.trim()
                        }
                    </p>

                    <p className="result-section">
                        Bringing additional guests: {
                            isAdditionalGuest
                                ? 'Yes'
                                : 'No'
                        }
                    </p>

                </div>
            )}

        </form>
    );
}