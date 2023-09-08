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

export const navigation: Navigation[] = ['Home', 'About', 'Services', 'Testimonials', 'Portfolio', 'Contact'].map(s => new Navigation(s))