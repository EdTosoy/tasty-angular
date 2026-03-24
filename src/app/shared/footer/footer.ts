import { Component, inject } from '@angular/core';
import { FacebookIcon, InstagramIcon, LucideAngularModule, TwitterIcon } from 'lucide-angular';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
})
export class Footer {
  appService = inject(AppService);
  facebookIcon = FacebookIcon;
  instagramIcon = InstagramIcon;
  twitterIcon = TwitterIcon;

  footerLink = [
    {
      title: 'Services',
      sub1: 'Delivery',
      sub2: 'Pricing',
      sub3: 'Fast food',
      sub4: 'Reserve your spot',
    },
    {
      title: 'Information',
      sub1: 'Event',
      sub2: 'Contact us',
      sub3: 'Privacy policy',
      sub4: 'Terms of services',
    },
    {
      title: 'Address',
      sub1: 'Lima - Peru',
      sub2: 'Jr Union #999',
      sub3: '999 - 888 - 777',
      sub4: 'tastyfood@email.com',
    },
  ];
}
