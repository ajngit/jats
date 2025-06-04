import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, AfterViewInit {

  services = [
    {
      icon: 'fas fa-palette',
      title: 'Interior Fitout',
      description: 'Transform spaces into luxurious environments with our bespoke interior design solutions.',
      features: ['Custom furniture design', 'Premium material selection', 'Lighting design', 'Space optimization']
    },
    {
      icon: 'fas fa-hard-hat',
      title: 'Civil Contracting', 
      description: 'Comprehensive construction services from foundation to finishing with uncompromised quality.',
      features: ['Structural engineering', 'Project management', 'Quality assurance', 'Timely delivery']
    },
    {
      icon: 'fas fa-cogs',
      title: 'MEP Works',
      description: 'Integrated Mechanical, Electrical, and Plumbing solutions designed for optimal performance.',
      features: ['HVAC systems', 'Electrical installations', 'Plumbing solutions', 'Smart home integration']
    },
    {
      icon: 'fas fa-tools',
      title: 'General Maintenance',
      description: 'Comprehensive maintenance solutions to keep your spaces in pristine condition year-round.',
      features: ['Preventive maintenance', 'Emergency repairs', 'Annual contracts', '24/7 support']
    },
    {
      icon: 'fas fa-drafting-compass',
      title: 'Architectural Planning',
      description: 'Creative architectural solutions that blend functionality with aesthetic excellence.',
      features: ['3D visualization', 'Sustainable design', 'Space planning', 'Permit assistance']
    }
  ];

  stats = [
    { number: '500+', label: 'Projects Completed' },
      { number: '26', label: 'Years Of Experience' },
    { number: '50+', label: 'Expert Team' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  contactForm = {
    name: '',
    email: '',
    phone: '',
    service: 'Interior Fitout',
    message: ''
  };

  serviceOptions = [
    'Interior Fitout',
    'Civil Contracting', 
    'MEP Works',
    'General Maintenance',
    'Architectural Planning',
    'Multiple Services'
  ];

  isMobileMenuOpen = false;
mobileMenuOpen: boolean=false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }




  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Load external stylesheets
    this.loadExternalStyles();
  }

  ngAfterViewInit(): void {
    // Initialize animations and interactions
    this.initializeScrollAnimations();
    this.initializeNavbarEffects();
    this.initializeParallaxEffect();
    this.initializeSmoothScrolling();
  }

  private loadExternalStyles(): void {
    // Load Google Fonts
    const fontLink = this.renderer.createElement('link');
    this.renderer.setAttribute(fontLink, 'href', 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
    this.renderer.setAttribute(fontLink, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, fontLink);

    // Load Font Awesome
    const faLink = this.renderer.createElement('link');
    this.renderer.setAttribute(faLink, 'href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    this.renderer.setAttribute(faLink, 'rel', 'stylesheet');
    this.renderer.appendChild(document.head, faLink);
  }

  private initializeScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
        }
      });
    }, observerOptions);

    const fadeElements = this.el.nativeElement.querySelectorAll('.fade-in');
    fadeElements.forEach((el: Element) => {
      observer.observe(el);
    });
  }

  private initializeNavbarEffects(): void {
    window.addEventListener('scroll', () => {
      const navbar = this.el.nativeElement.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 100) {
          this.renderer.setStyle(navbar, 'background', 'rgba(15, 23, 42, 0.98)');
        } else {
          this.renderer.setStyle(navbar, 'background', 'rgba(15, 23, 42, 0.95)');
        }
      }
    });
  }

  private initializeParallaxEffect(): void {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const hero = this.el.nativeElement.querySelector('.hero');
      if (hero) {
        const rate = scrolled * -0.5;
        this.renderer.setStyle(hero, 'transform', `translateY(${rate}px)`);
      }
    });
  }

  private initializeSmoothScrolling(): void {
    const links = this.el.nativeElement.querySelectorAll('a[href^="#"]');
    links.forEach((anchor: HTMLAnchorElement) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = this.el.nativeElement.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      // Handle form submission here
      console.log('Form submitted:', this.contactForm);
      
      // Show success message
      alert(`Thank you ${this.contactForm.name}! We've received your message and will get back to you within 24 hours.`);
      
      // Reset form
      this.resetForm();
    }
  }

  submitForm() {
    const name = this.contactForm.name;
    const email = this.contactForm.email;
    const mobile = this.contactForm.phone;
    const query = this.contactForm.message;
    const service = this.contactForm.service;
    const message = `Name: ${name}%0AEmail: ${email}%0AMobile: ${mobile}%0AService: ${service}%0AMessage: ${query}`;
    const phone = '916238536683'; // your WhatsApp number with country code
  
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }
  

  private isFormValid(): boolean {
    return !!(this.contactForm.name && 
              this.contactForm.email && 
              this.contactForm.message);
  }

  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      service: 'Interior Fitout',
      message: ''
    };
  }

  scrollToSection(sectionId: string): void {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}