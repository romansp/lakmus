import { LanguageResources } from "./language-resources";

/**
 * Represents a language manager.
 */
export class LanguageManager {
    /** List of registered languages. */
    public static registeredLanguages: { [language: string]: LanguageResources | undefined } = {};

    /**
     * Registers a list of localized messages for the specified language.
     * @parem language Language.
     * @param languageResources List of localized messages.
     */
    public static registerLanguage(language: string, languageResources: LanguageResources): void {
        LanguageManager.registeredLanguages[language] = languageResources;
    }
    
    /**
     * Gets a localized message based on the specified language.
     * @parem resourceName Message name.
     * @param language Language.
     * @params Message format parameters.
     */
    public static getLocalizedMessage(resourceName: string, language: string, params?: { [name: string]: any }) {
        var resources = LanguageManager.registeredLanguages[language];

        if (resources == null) {
            throw "Language '" + language + "' is not registered.";
        }

        var message = resources[resourceName];

        if (message == null) {
            throw "The message '" + resourceName + "' is not found in the localization file '" + language + "'.";
        }

        if (params != null) {
            if (typeof message === "string") {
                const msg = message;
                Object.getOwnPropertyNames(params).forEach((propertyName) => {
                    message = msg.replace("{" + propertyName + "}", params[propertyName]);
                });
            }
        }

        return message;
    }    
}