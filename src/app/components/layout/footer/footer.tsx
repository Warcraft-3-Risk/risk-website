import React from 'react';
import content from "../../../content/content.json";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
                    <div>
                        <h4 className="font-semibold mb-2">{content.footer["footer.AboutText"]}</h4>
                        <ul className="space-y-1 text-sm text-gray-300">
                            <li><a href="#about" className="hover:underline">{content.footer["footer.ServicesText"]}</a></li>
                            <li><a href="#contact" className="hover:underline">{content.footer["footer.ContactText"]}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">{content.footer["footer.LegalText"]}</h4>
                        <ul className="space-y-1 text-sm text-gray-300">
                            <li><a href="#privacy" className="hover:underline">{content.footer["footer.PrivacyText"]}</a></li>
                            <li><a href="#terms" className="hover:underline">{content.footer["footer.TermsText"]}</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-2 text-sm text-gray-400 text-center sm:text-left flex flex-col justify-between">
                        <p>{content.footer["footer.NewsletterPrompt"]}</p>
                        <form className="mt-4 flex flex-col sm:flex-row gap-2 max-w-md">
                            <input
                                type="email"
                                placeholder={content.footer["footer.EmailPlaceholder"]}
                                className="p-2 rounded text-white w-full"
                            />
                            <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 text-white">
                                {content.footer["footer.Subscribe"]}
                            </button>
                        </form>
                        <p className="mt-6 text-xs">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
