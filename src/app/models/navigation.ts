import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Home } from "@/components/home";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

export class Navigation {
    name: string;
    id: string;
    href: string;

    constructor(name: string){
        this.name = name;
        this.id = name.toLowerCase();
        this.href = '#' + this.id;
    }
}

export const HOME_KEY = 'Home';
export const ABOUT_KEY = 'About';
export const SERVICES_KEY = 'Services';
export const TESTIMONIALS_KEY = 'Testimonials';
export const PORTFOLIO_KEY = 'Portfolio';
export const CONTACT_KEY = 'Contact';

export const navigation: Navigation[] = [HOME_KEY, ABOUT_KEY, SERVICES_KEY, TESTIMONIALS_KEY, PORTFOLIO_KEY, CONTACT_KEY].map(s => new Navigation(s))

export const componentMap = new Map();
componentMap.set(HOME_KEY, Home())
componentMap.set(ABOUT_KEY, About())
componentMap.set(SERVICES_KEY, Services())
componentMap.set(TESTIMONIALS_KEY, Testimonials())
componentMap.set(PORTFOLIO_KEY, Portfolio())
componentMap.set(CONTACT_KEY, Contact())