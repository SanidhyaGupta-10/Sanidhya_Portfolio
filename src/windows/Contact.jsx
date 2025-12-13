import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants/index.js";
import {WindowControls} from "#components/index.js";

const Contact = ({ name = "Sanidhya" }) => {
    return (
        <section aria-labelledby="contact-title">
            <div id="window-header">
                <WindowControls target="contact"/>
                <h2 id="contact-title">Contact Me</h2>
            </div>

            <div className="p-5 space-y-4">
                <img
                    src="/images/profile.jpg"
                    alt={`Profile photo of ${name}`}
                    className="w-20 rounded-full"
                />

                <h3 className="text-lg font-semibold">Let’s Connect</h3>
                <p className="text-sm text-gray-400">
                    Got an idea? or collaborate?
                    Just wanna talk tech? I'm in.
                </p>

                <ul>
                    {socials.map(({id, bg, link, icon, text}) => (
                        <li key={id} style={{ backgroundColor: bg}}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text} >
                                <img src={icon} alt={text}
                                className="size-5"/>
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
