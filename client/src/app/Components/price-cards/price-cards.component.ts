import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-cards',
  templateUrl: './price-cards.component.html',
  styleUrls: ['./price-cards.component.scss'],
})
export class PriceCardsComponent implements OnInit {
  targetRoute: string = '';
  renderData: any = [];
  constructor() {}

  ngOnInit(): void {
    this.targetRoute = window.location.pathname;

    if (this.targetRoute.startsWith('/services/web-development'))
      this.routingWebDevelopment();
    else if (this.targetRoute.startsWith('/services/digital-marketing'))
      this.routingDigitialMarketing();
    else if (this.targetRoute.startsWith('/services/e-commerce'))
      this.routingECommerce();
  }

  // E-Commerce

  routingECommerce() {
    if (this.targetRoute === '/services/e-commerce/shopify') {
      this.renderData = this.shopifyPricingAndFeatures();
    } else if (this.targetRoute === '/services/e-commerce/wix') {
      this.renderData = this.wixPricingAndFeatures();
    } else if (this.targetRoute === '/services/e-commerce/woocommerce') {
      this.renderData = this.wooCommercePricingAndFeatures();
    } else if (this.targetRoute === '/services/e-commerce/bigcommerce') {
      this.renderData = this.bigCommercePricingAndFeatures();
    } else if (this.targetRoute === '/services/e-commerce/squarespace') {
      this.renderData = this.squareShapePricingAndFeatures();
    }
  }

  shopifyPricingAndFeatures() {
    return [
      {
        planType: 'Basic Shopify',
        pricing: '$39/month',
        features: [
          'Online store and blog',
          'Unlimited products',
          '24/7 support',
          'Discount codes',
          'Manual order creation',
          'Free SSL certificate',
        ],
      },
      {
        planType: 'Shopify',
        pricing: '$105/month',
        features: [
          'Online store and blog',
          'Unlimited products',
          '24/7 support',
          'Discount codes',
          'Manual order creation',
          'Free SSL certificate',
          'Abandoned cart recovery',
        ],
      },
      {
        planType: 'Advanced Shopify',
        pricing: '$399/month',
        features: [
          'Online store and blog',
          'Unlimited products',
          '24/7 support',
          'Discount codes',
          'Manual order creation',
          'Free SSL certificate',
          'Abandoned cart recovery',
          'Third-party calculated shipping rates',
          'Professional reports',
        ],
      },
    ];
  }
  wixPricingAndFeatures() {
    return [
      {
        planType: 'Business Basic',
        pricing: '$27/month',
        features: [
          'Secure online payments',
          'Plans for unlimited products',
          'Automated sales tax',
          'Custom domain',
        ],
      },
      {
        planType: 'Business Unlimited',
        pricing: '$32/month',
        features: [
          'Secure online payments',
          'Plans for unlimited products',
          'Automated sales tax',
          'Custom domain',
          'Abandoned cart recovery',
        ],
      },
      {
        planType: 'Business VIP',
        pricing: '$59/month',
        features: [
          'Secure online payments',
          'Plans for unlimited products',
          'Automated sales tax',
          'Custom domain',
          'Abandoned cart recovery',
          'Advanced e-commerce features',
        ],
      },
    ];
  }
  wooCommercePricingAndFeatures() {
    return [
      {
        planType: 'Basic',
        pricing: '$3.95/month',
        features: [
          'Customizable',
          'Limited Products',
          'WordPress Built',
          'Payment Gateways Integration',
        ],
      },
      {
        planType: 'Standard',
        pricing: '$6.95/month',
        features: [
          'Fully Customizable',
          'Unlimited Products',
          'WordPress Built',
          'Multiple Payment Gateways',
          'Community Support',
        ],
      },
      {
        planType: 'Premium',
        pricing: '$10.95/month',
        features: [
          'Fully Customizable',
          'Unlimited Products',
          'WordPress Built',
          'All Payment Gateways',
          'Priority Community Support',
          'Free Premium Themes & Extensions',
        ],
      },
    ];
  }
  bigCommercePricingAndFeatures() {
    return [
      {
        planType: 'Standard',
        pricing: '$39/month',
        features: [
          'No transaction fees',
          'Unlimited products, file storage, and bandwidth',
          'Professional reporting tools',
          'Single page checkout',
        ],
      },
      {
        planType: 'Plus',
        pricing: '$105/month',
        features: [
          'No transaction fees',
          'Unlimited products, file storage, and bandwidth',
          'Professional reporting tools',
          'Single page checkout',
          'Abandoned cart saver',
        ],
      },
      {
        planType: 'Pro',
        pricing: '$399/month',
        features: [
          'No transaction fees',
          'Unlimited products, file storage, and bandwidth',
          'Professional reporting tools',
          'Single page checkout',
          'Abandoned cart saver',
          'Google customer reviews',
        ],
      },
      {
        planType: 'Enterprise',
        pricing: 'Custom pricing',
        features: [
          'No transaction fees',
          'Unlimited products, file storage, and bandwidth',
          'Professional reporting tools',
          'Single page checkout',
          'Abandoned cart saver',
          'Google customer reviews',
          'Additional enterprise-level features and support',
        ],
      },
    ];
  }
  squareShapePricingAndFeatures() {
    return [
      {
        planType: 'Business',
        pricing: '$33/month',
        features: [
          'Unlimited products',
          'Custom domain',
          'Integrated e-commerce analytics',
          'POS (Point of Sale) options',
        ],
      },
      {
        planType: 'Basic Commerce',
        pricing: '$36/month',
        features: [
          'Unlimited products',
          'Custom domain',
          'Integrated e-commerce analytics',
          'POS (Point of Sale) options',
        ],
      },
      {
        planType: 'Advanced Commerce',
        pricing: '$65/month',
        features: [
          'Unlimited products',
          'Custom domain',
          'Integrated e-commerce analytics',
          'POS (Point of Sale) options',
          'Advanced shipping options',
          'Abandoned cart recovery',
        ],
      },
    ];
  }

  // Digital Marketing

  routingDigitialMarketing() {
    if (this.targetRoute === '/services/digital-marketing/seo') {
      this.renderData = this.seoPricingAndFeatures();
    } else if (this.targetRoute === '/services/digital-marketing/ppc') {
      this.renderData = this.ppcPricingAndFeatures();
    } else if (
      this.targetRoute === '/services/digital-marketing/social-media-marketing'
    ) {
      this.renderData = this.socialMediaMarketingPricingAndFeatures();
    } else if (
      this.targetRoute === '/services/digital-marketing/content-marketing'
    ) {
      this.renderData = this.contentMarketingPricingAndFeatures();
    } else if (
      this.targetRoute === '/services/digital-marketing/email-marketing'
    ) {
      this.renderData = this.emailMarketingPricingAndFeatures();
    }
  }

  seoPricingAndFeatures() {
    return [
      {
        planType: 'Small Business',
        pricing: '$30/month',
        features: [
          'Initial website audit',
          'Keyword research and strategy',
          'On-page and off-page optimization',
          'Technical SEO fixes',
          'Content creation and optimization',
          'Link building campaigns',
          'Monthly performance reports',
        ],
      },
      {
        planType: 'Mid-Sized Business',
        pricing: '$50/month',
        features: [
          'Initial website audit',
          'Keyword research and strategy',
          'On-page and off-page optimization',
          'Technical SEO fixes',
          'Content creation and optimization',
          'Link building campaigns',
          'Monthly performance reports',
        ],
      },
      {
        planType: 'Large Enterprise',
        pricing: '$90/month',
        features: [
          'Initial website audit',
          'Keyword research and strategy',
          'On-page and off-page optimization',
          'Technical SEO fixes',
          'Content creation and optimization',
          'Link building campaigns',
          'Monthly performance reports',
        ],
      },
    ];
  }
  ppcPricingAndFeatures() {
    return [
      {
        planType: 'Small Campaigns',
        pricing: '$50/month',
        features: [
          'Campaign strategy and setup',
          'Keyword research',
          'Ad creation and optimization',
          'Landing page development',
          'A/B testing',
          'Performance monitoring and reporting',
        ],
      },
      {
        planType: 'Mid-Sized Campaigns',
        pricing: '$70/month',
        features: [
          'Campaign strategy and setup',
          'Keyword research',
          'Ad creation and optimization',
          'Landing page development',
          'A/B testing',
          'Performance monitoring and reporting',
        ],
      },
      {
        planType: 'Large Campaigns',
        pricing: '$90/month',
        features: [
          'Campaign strategy and setup',
          'Keyword research',
          'Ad creation and optimization',
          'Landing page development',
          'A/B testing',
          'Performance monitoring and reporting',
        ],
      },
    ];
  }
  socialMediaMarketingPricingAndFeatures() {
    return [
      {
        planType: 'Basic Management',
        pricing: '$40/month',
        features: [
          'Social media strategy development',
          'Content creation (posts, images, videos)',
          'Daily monitoring and engagement',
          'Paid social media advertising',
          'Monthly analytics and performance reports',
        ],
      },
      {
        planType: 'Comprehensive Management',
        pricing: '$60/month',
        features: [
          'Social media strategy development',
          'Content creation (posts, images, videos)',
          'Daily monitoring and engagement',
          'Paid social media advertising',
          'Monthly analytics and performance reports',
        ],
      },
      {
        planType: 'Enterprise Management',
        pricing: '$100/month',
        features: [
          'Social media strategy development',
          'Content creation (posts, images, videos)',
          'Daily monitoring and engagement',
          'Paid social media advertising',
          'Monthly analytics and performance reports',
        ],
      },
    ];
  }
  contentMarketingPricingAndFeatures() {
    return [
      {
        planType: 'Small Projects',
        pricing: '$30/month',
        features: [
          'Content strategy development',
          'Blog posts and articles',
          'Infographics and visual content',
          'Video production',
          'Ebooks and whitepapers',
          'Content distribution and promotion',
          'Performance tracking and reporting',
        ],
      },
      {
        planType: 'Mid-Sized Projects',
        pricing: '$60/month',
        features: [
          'Content strategy development',
          'Blog posts and articles',
          'Infographics and visual content',
          'Video production',
          'Ebooks and whitepapers',
          'Content distribution and promotion',
          'Performance tracking and reporting',
        ],
      },
      {
        planType: 'Large Projects',
        pricing: '$90/month',
        features: [
          'Content strategy development',
          'Blog posts and articles',
          'Infographics and visual content',
          'Video production',
          'Ebooks and whitepapers',
          'Content distribution and promotion',
          'Performance tracking and reporting',
        ],
      },
    ];
  }
  emailMarketingPricingAndFeatures() {
    return [
      {
        planType: 'Basic Campaigns',
        pricing: '$30/month',
        features: [
          'Email strategy and planning',
          'Template design',
          'Content creation',
          'List segmentation',
          'Automated email sequences',
          'A/B testing',
          'Analytics and performance reporting',
        ],
      },
      {
        planType: 'Advanced Campaigns',
        pricing: '$50/month',
        features: [
          'Email strategy and planning',
          'Template design',
          'Content creation',
          'List segmentation',
          'Automated email sequences',
          'A/B testing',
          'Analytics and performance reporting',
        ],
      },
      {
        planType: 'Enterprise Campaigns',
        pricing: '$80/month',
        features: [
          'Email strategy and planning',
          'Template design',
          'Content creation',
          'List segmentation',
          'Automated email sequences',
          'A/B testing',
          'Analytics and performance reporting',
        ],
      },
    ];
  }

  // Web Development

  routingWebDevelopment() {
    if (this.targetRoute === '/services/web-development/mean-mern') {
      this.renderData = this.meanMernPricingAndFeatures();
    } else if (this.targetRoute === '/services/web-development/php-laravel') {
      this.renderData = this.phpLaravelPricingAndFeatures();
    }
  }

  meanMernPricingAndFeatures() {
    return [
      {
        planType: 'Basic Projects',
        pricing: '$20 - $40/month',
        features: [
          'Full-stack web application development',
          'API development and integration',
          'Real-time applications',
          'E-commerce solutions',
          'Maintenance and support',
        ],
      },
      {
        planType: 'Intermediate Projects',
        pricing: '$50 - $70/month',
        features: [
          'Full-stack web application development',
          'API development and integration',
          'Real-time applications',
          'E-commerce solutions',
          'Maintenance and support',
        ],
      },
      {
        planType: 'Complex Projects',
        pricing: '$80 - $100/month',
        features: [
          'Full-stack web application development',
          'API development and integration',
          'Real-time applications',
          'E-commerce solutions',
          'Maintenance and support',
        ],
      },
    ];
  }
  phpLaravelPricingAndFeatures() {
    return [
      {
        planType: 'Basic Projects',
        pricing: '$30 - $50/month',
        features: [
          'Custom web application development',
          'CMS development',
          'API development',
          'E-commerce solutions',
          'Maintenance and support',
        ],
      },
      {
        planType: 'Intermediate Projects',
        pricing: '$60 - $80/month',
        features: [
          'Custom web application development',
          'CMS development',
          'API development',
          'E-commerce solutions',
          'Maintenance and support',
        ],
      },
      {
        planType: 'Complex Projects',
        pricing: '$90 - $110/month',
        features: [
          'Custom web application development',
          'CMS development',
          'API development',
          'E-commerce solutions',
          'Maintenance and support',
        ],
      },
    ];
  }
}
