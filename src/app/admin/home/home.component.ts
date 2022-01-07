import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { PATHS } from "@core/constants/path.enum";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public routePath: string;

  get isHome(): boolean {
    return (this.routePath === PATHS.home);
  }

  constructor(private router: Router) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd)
        this.routePath = route.url;
    });
  }
}
