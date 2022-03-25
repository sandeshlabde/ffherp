(self.webpackChunkMyProject = self.webpackChunkMyProject || []).push([
  [612],
  {
    6612: (Y, Z, f) => {
      "use strict";
      f.r(Z), f.d(Z, { AdminModule: () => wa });
      var u = f(9808),
        i = f(1083),
        o = f(2993),
        r = f(1423),
        e = f(5e3),
        m = f(3700),
        c = f(520);
      let M = (() => {
        class s {
          constructor(a) {
            this.http = a;
          }
          getThemeOptions() {
            return this.http.get("assets/options.json");
          }
          setTheme(a) {}
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(e.LFG(c.eN));
          }),
          (s.ɵprov = e.Yz7({ token: s, factory: s.ɵfac, providedIn: "root" })),
          s
        );
      })();
      var L = f(2181),
        D = f(7423);
      const x = function (s, h) {
        return { green: s, red: h };
      };
      let N = (() => {
        class s {
          constructor(a, d, g) {
            (this.global = a),
              (this.router = d),
              (this.themeService = g),
              (this.toggle = !0),
              (this.options$ = this.themeService.getThemeOptions()),
              this.global.LOGGED_IN_USER &&
                ((this.companyName = this.global.LOGGED_IN_USER.CoName),
                (this.userName = this.global.LOGGED_IN_USER.Username));
          }
          onSignOut() {
            localStorage.removeItem("Global.LOGGED_IN_USER"),
              this.router.navigate(["/login"]);
          }
          ngOnInit() {
            this.themeService.setTheme("deeppurple-amber");
          }
          themeChangeHandler(a) {
            this.themeService.setTheme(a);
          }
          changeTheme() {
            this.toggle = !this.toggle;
          }
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(e.Y36(m.x), e.Y36(i.F0), e.Y36(M));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-header"]],
            decls: 105,
            vars: 11,
            consts: [
              ["role", "banner", 1, "toolbar", 3, "ngClass"],
              ["href", "/admin/page/Lead", 1, "companyLogo"],
              ["src", "assets/img/FFHFinalLogo.png", "height", "45", "alt", ""],
              [1, "spacer"],
              [
                "src",
                "assets/img/NoImage.png",
                "width",
                "50",
                "alt",
                "",
                3,
                "height",
              ],
              ["id", "ffh", 1, ""],
              ["id", "", 1, "header-link", 3, "matMenuTriggerFor"],
              [1, "fas", "fa-paperclip"],
              ["list", "matMenu"],
              ["mat-menu-item", "", 1, "bg-dark", "text-white"],
              [1, "dropdown-divider"],
              ["mat-menu-item", "", 1, "dropdown-list"],
              [1, "fas", "fa-barcode"],
              ["QuickLinks", "matMenu"],
              [1, "fas", "fa-search"],
              ["masters", "matMenu"],
              ["id", "", 1, "header-link"],
              [1, "far", "fa-envelope"],
              [1, "far", "fa-bell"],
              ["id", " ", 1, "header-link", 3, "matMenuTriggerFor"],
              [1, "fas", "fa-user-circle"],
              ["user", "matMenu"],
              ["mat-menu-item", "", 1, "dropdown-list", 3, "click"],
              [1, "header-link"],
              ["mat-raised-button", "", "color", "primary", 3, "click"],
            ],
            template: function (a, d) {
              if (
                (1 & a &&
                  (e.TgZ(0, "div", 0),
                  e.TgZ(1, "a", 1),
                  e._UZ(2, "img", 2),
                  e.qZA(),
                  e._UZ(3, "div", 3),
                  e._UZ(4, "img", 4),
                  e.TgZ(5, "a", 5),
                  e._uU(6),
                  e.qZA(),
                  e.TgZ(7, "li", 6),
                  e._UZ(8, "i", 7),
                  e.TgZ(9, "mat-menu", null, 8),
                  e.TgZ(11, "button", 9),
                  e._uU(12, "My list"),
                  e.qZA(),
                  e._UZ(13, "hr", 10),
                  e.TgZ(14, "a", 11),
                  e._uU(15, "My User"),
                  e.qZA(),
                  e.TgZ(16, "a", 11),
                  e._uU(17, "User Rights"),
                  e.qZA(),
                  e.TgZ(18, "a", 11),
                  e._uU(19, "My Company"),
                  e.qZA(),
                  e.TgZ(20, "a", 11),
                  e._uU(21, "My Config"),
                  e.qZA(),
                  e.TgZ(22, "a", 11),
                  e._uU(23, "My Alert"),
                  e.qZA(),
                  e.TgZ(24, "a", 11),
                  e._uU(25, "My Branches"),
                  e.qZA(),
                  e.TgZ(26, "a", 11),
                  e._uU(27, "My Report"),
                  e.qZA(),
                  e.TgZ(28, "a", 11),
                  e._uU(29, "User Report"),
                  e.qZA(),
                  e.TgZ(30, "a", 11),
                  e._uU(31, "Location Detail"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(32, "li", 6),
                  e._UZ(33, "i", 12),
                  e.TgZ(34, "mat-menu", null, 13),
                  e.TgZ(36, "button", 9),
                  e._uU(37, "Quick Links"),
                  e.qZA(),
                  e._UZ(38, "hr", 10),
                  e.TgZ(39, "a", 11),
                  e._uU(40, "Create Prospect"),
                  e.qZA(),
                  e.TgZ(41, "a", 11),
                  e._uU(42, "Create Lead"),
                  e.qZA(),
                  e.TgZ(43, "a", 11),
                  e._uU(44, "Create SO"),
                  e.qZA(),
                  e.TgZ(45, "a", 11),
                  e._uU(46, "Create MO"),
                  e.qZA(),
                  e.TgZ(47, "a", 11),
                  e._uU(48, "Create MI"),
                  e.qZA(),
                  e.TgZ(49, "a", 11),
                  e._uU(50, "Create Bill"),
                  e.qZA(),
                  e.TgZ(51, "a", 11),
                  e._uU(52, "Create Ticket"),
                  e.qZA(),
                  e.TgZ(53, "a", 11),
                  e._uU(54, "Install Product"),
                  e.qZA(),
                  e.TgZ(55, "a", 11),
                  e._uU(56, "Create PO"),
                  e.qZA(),
                  e.TgZ(57, "a", 11),
                  e._uU(58, "Create POBill"),
                  e.qZA(),
                  e.TgZ(59, "a", 11),
                  e._uU(60, "Journal Vouchar"),
                  e.qZA(),
                  e.TgZ(61, "a", 11),
                  e._uU(62, "Memo"),
                  e.qZA(),
                  e.TgZ(63, "a", 11),
                  e._uU(64, "Payment Received"),
                  e.qZA(),
                  e.TgZ(65, "a", 11),
                  e._uU(66, "Payment Made"),
                  e.qZA(),
                  e.TgZ(67, "a", 11),
                  e._uU(68, "Stock Journal "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(69, "li", 6),
                  e._UZ(70, "i", 14),
                  e.TgZ(71, "mat-menu", null, 15),
                  e.TgZ(73, "button", 9),
                  e._uU(74, "Masters"),
                  e.qZA(),
                  e._UZ(75, "hr", 10),
                  e.TgZ(76, "a", 11),
                  e._uU(77, "Company"),
                  e.qZA(),
                  e.TgZ(78, "a", 11),
                  e._uU(79, "Contact"),
                  e.qZA(),
                  e.TgZ(80, "a", 11),
                  e._uU(81, "Product"),
                  e.qZA(),
                  e.TgZ(82, "a", 11),
                  e._uU(83, "Ledger"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(84, "li", 16),
                  e._UZ(85, "i", 17),
                  e.qZA(),
                  e.TgZ(86, "li", 16),
                  e._UZ(87, "i", 18),
                  e.qZA(),
                  e.TgZ(88, "li", 19),
                  e._UZ(89, "i", 20),
                  e._uU(90),
                  e.TgZ(91, "mat-menu", null, 21),
                  e.TgZ(93, "a", 11),
                  e._uU(94, "Register Extension "),
                  e.qZA(),
                  e.TgZ(95, "a", 11),
                  e._uU(96, "Change Pwd"),
                  e.qZA(),
                  e.TgZ(97, "a", 11),
                  e._uU(98, "Upload"),
                  e.qZA(),
                  e._UZ(99, "hr", 10),
                  e.TgZ(100, "a", 22),
                  e.NdJ("click", function () {
                    return d.onSignOut();
                  }),
                  e._uU(101, "Sign out"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(102, "li", 23),
                  e.TgZ(103, "button", 24),
                  e.NdJ("click", function () {
                    return d.changeTheme();
                  }),
                  e._uU(104, "Theme"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA()),
                2 & a)
              ) {
                const g = e.MAs(10),
                  T = e.MAs(35),
                  v = e.MAs(72),
                  Ce = e.MAs(92);
                e.Q6J("ngClass", e.WLB(8, x, d.toggle, !d.toggle)),
                  e.xp6(4),
                  e.Q6J("height", 40),
                  e.xp6(2),
                  e.hij(" ", d.companyName, " "),
                  e.xp6(1),
                  e.Q6J("matMenuTriggerFor", g),
                  e.xp6(25),
                  e.Q6J("matMenuTriggerFor", T),
                  e.xp6(37),
                  e.Q6J("matMenuTriggerFor", v),
                  e.xp6(19),
                  e.Q6J("matMenuTriggerFor", Ce),
                  e.xp6(2),
                  e.hij(" ", d.userName, " ");
              }
            },
            directives: [u.mk, L.p6, L.VK, L.OP, D.lW],
            styles: [
              ".spacer[_ngcontent-%COMP%]{flex:1}.toolbar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;height:60px;display:flex;align-items:center;background-color:#b8e0d4;color:#000;font-weight:600;z-index:100;position:fixed}.header-link[_ngcontent-%COMP%]{margin:0 16px;list-style:none}#ffh[_ngcontent-%COMP%]{color:#000;margin-right:10px}.companyLogo[_ngcontent-%COMP%]{padding-left:83px}i[_ngcontent-%COMP%]{font-size:18px;color:#000}.dropdown-list[_ngcontent-%COMP%]{color:#000;text-decoration:none}.dropdown-list[_ngcontent-%COMP%]:hover{color:#fff;background-color:#000}.green[_ngcontent-%COMP%]{background-color:#b8e0d4}.red[_ngcontent-%COMP%]{background-color:#ffa07a}",
            ],
          })),
          s
        );
      })();
      var O = f(2313),
        pe = f(3874);
      let A = (() => {
          class s {
            constructor(a) {
              (this.titleService = a), (this.toggle = !0);
            }
            setTitle(a) {
              this.titleService.setTitle(a);
            }
            ngOnInit() {}
            changeTheme() {
              this.toggle = !this.toggle;
            }
          }
          return (
            (s.ɵfac = function (a) {
              return new (a || s)(e.Y36(O.Dx));
            }),
            (s.ɵcmp = e.Xpm({
              type: s,
              selectors: [["app-side-nav"]],
              decls: 153,
              vars: 0,
              consts: [
                [1, "sidebar", "close", "pb-3"],
                [1, "nav-links"],
                [1, "iocn-link"],
                [1, "sub-menu", "shadow-lg", "bg-body", "rounded"],
                [
                  "routerLink",
                  "/admin/Dashboard/Dashboard",
                  1,
                  "link_name",
                  3,
                  "click",
                ],
                [1, "link_name"],
                [
                  "routerLink",
                  "/admin/ListDashboard/Prospect",
                  "routerLinkActive",
                  "active",
                  3,
                  "click",
                ],
                [
                  "routerLink",
                  "/admin/page/Prospect",
                  "routerLinkActive",
                  "active",
                  "id",
                  "Prospect",
                  3,
                  "click",
                ],
                [3, "click"],
                [
                  "routerLink",
                  "/admin/page/Lead",
                  "routerLinkActive",
                  "active",
                  "id",
                  "Lead",
                  3,
                  "click",
                ],
                ["id", "SOdash", 3, "click"],
                [
                  "routerLink",
                  "/admin/page/SalesOrderLIst",
                  "routerLinkActive",
                  "active",
                  "id",
                  "SO",
                  3,
                  "click",
                ],
                [
                  "routerLink",
                  "/admin/page/MoList",
                  "routerLinkActive",
                  "active",
                  "id",
                  "MO",
                  3,
                  "click",
                ],
                [
                  "routerLink",
                  "/admin/page/POList",
                  "routerLinkActive",
                  "active",
                  "id",
                  "PO",
                  3,
                  "click",
                ],
                [
                  "routerLink",
                  "/admin/page/MIList",
                  "routerLinkActive",
                  "active",
                  3,
                  "click",
                ],
                ["routerLink", "/admin/page/Repair", 3, "click"],
                [
                  "routerLink",
                  "/admin/page/Payment",
                  "id",
                  "Invoice",
                  3,
                  "click",
                ],
                [
                  "routerLink",
                  "/admin/page/Payable",
                  "routerLinkActive",
                  "active",
                  "id",
                  "PI",
                  3,
                  "click",
                ],
                [
                  "routerLink",
                  "/admin/page/Voucher",
                  "id",
                  "vouchar",
                  3,
                  "click",
                ],
                [1, "fas", "fa-envelope-square"],
                [
                  "routerLink",
                  "/admin/page/Ticket",
                  "routerLinkActive",
                  "active",
                  "id",
                  "Ticket",
                  3,
                  "click",
                ],
                [1, "fas", "fa-handshake"],
                [
                  "routerLink",
                  "/admin/page/AMC",
                  "routerLinkActive",
                  "active",
                  "id",
                  " AMC",
                  3,
                  "click",
                ],
                [1, "fas", "fa-briefcase"],
                [
                  "routerLink",
                  "/admin/page/Work",
                  "routerLinkActive",
                  "active",
                  "id",
                  "Work",
                  3,
                  "click",
                ],
                [1, "fas", "fa-tasks"],
              ],
              template: function (a, d) {
                1 & a &&
                  (e.TgZ(0, "div", 0),
                  e.TgZ(1, "ul", 1),
                  e.TgZ(2, "li"),
                  e.TgZ(3, "div", 2),
                  e.TgZ(4, "i"),
                  e.TgZ(5, "mat-icon"),
                  e._uU(6, "dashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(7, "ul", 3),
                  e.TgZ(8, "li"),
                  e.TgZ(9, "a", 4),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Dashboard");
                  }),
                  e._uU(10, " Dashboard "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(11, "li"),
                  e.TgZ(12, "div", 2),
                  e.TgZ(13, "i"),
                  e.TgZ(14, "mat-icon"),
                  e._uU(15, "home"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(16, "ul", 3),
                  e.TgZ(17, "li"),
                  e.TgZ(18, "a", 5),
                  e._uU(19, "Marketing"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(20, "li"),
                  e.TgZ(21, "a", 6),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Prospect Dashboard");
                  }),
                  e._uU(22, "Prospect Dashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(23, "li"),
                  e.TgZ(24, "a", 7),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Prospect");
                  }),
                  e._uU(25, "ProspectList"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(26, "li"),
                  e.TgZ(27, "div", 2),
                  e.TgZ(28, "i"),
                  e.TgZ(29, "mat-icon"),
                  e._uU(30, "business_center"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(31, "ul", 3),
                  e.TgZ(32, "li"),
                  e.TgZ(33, "a", 5),
                  e._uU(34, "Sales"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(35, "li"),
                  e.TgZ(36, "a", 8),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Lead Dashboard");
                  }),
                  e._uU(37, " Dashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(38, "li"),
                  e.TgZ(39, "a", 9),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Lead");
                  }),
                  e._uU(40, "Lead "),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(41, "li"),
                  e.TgZ(42, "a", 10),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/SO Dashboard");
                  }),
                  e._uU(43, "SO Dashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(44, "li"),
                  e.TgZ(45, "a", 11),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Sales Order");
                  }),
                  e._uU(46, "Sales Order"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(47, "li"),
                  e.TgZ(48, "div", 2),
                  e.TgZ(49, "i"),
                  e.TgZ(50, "mat-icon"),
                  e._uU(51, "add_shopping_cart"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(52, "ul", 3),
                  e.TgZ(53, "li"),
                  e.TgZ(54, "a", 5),
                  e._uU(55, "Inventoy"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(56, "li"),
                  e.TgZ(57, "a", 8),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/MO Dashboard");
                  }),
                  e._uU(58, "MODashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(59, "li"),
                  e.TgZ(60, "a", 12),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Material Out");
                  }),
                  e._uU(61, "Material Out"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(62, "li"),
                  e.TgZ(63, "a", 8),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/PO Dashboard");
                  }),
                  e._uU(64, "PODashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(65, "li"),
                  e.TgZ(66, "a", 13),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Purchas Order");
                  }),
                  e._uU(67, "Purchas Order"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(68, "li"),
                  e.TgZ(69, "a", 8),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/MI Dashboard");
                  }),
                  e._uU(70, "MIDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(71, "li"),
                  e.TgZ(72, "a", 14),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Material In");
                  }),
                  e._uU(73, "Material In"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(74, "li"),
                  e.TgZ(75, "a", 8),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Repair Dashboard");
                  }),
                  e._uU(76, "RepairDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(77, "li"),
                  e.TgZ(78, "a", 15),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Repair List");
                  }),
                  e._uU(79, "Repair "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(80, "li"),
                  e.TgZ(81, "div", 2),
                  e.TgZ(82, "i"),
                  e.TgZ(83, "mat-icon"),
                  e._uU(84, "payment"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(85, "ul", 3),
                  e.TgZ(86, "li"),
                  e.TgZ(87, "a", 5),
                  e._uU(88, "Payment"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(89, "li"),
                  e.TgZ(90, "a", 8),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/InvoiceDashboard");
                  }),
                  e._uU(91, "InvoiceDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(92, "li"),
                  e.TgZ(93, "a", 16),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Invoice ");
                  }),
                  e._uU(94, "Invoice "),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(95, "li"),
                  e.TgZ(96, "a", 17),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Purchas Invoice ");
                  }),
                  e._uU(97, "Purchas Invoice"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(98, "li"),
                  e.TgZ(99, "a", 8),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/PI Dashboard ");
                  }),
                  e._uU(100, "PIDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(101, "li"),
                  e.TgZ(102, "a", 18),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Voucher ");
                  }),
                  e._uU(103, "Voucher"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(104, "li"),
                  e.TgZ(105, "div", 2),
                  e._UZ(106, "i", 19),
                  e.qZA(),
                  e.TgZ(107, "ul", 3),
                  e.TgZ(108, "li"),
                  e.TgZ(109, "a", 5),
                  e._uU(110, "Support"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(111, "li"),
                  e.TgZ(112, "a", 8),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Ticket Dashboard ");
                  }),
                  e._uU(113, " Dashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(114, "li"),
                  e.TgZ(115, "a", 20),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Ticket ");
                  }),
                  e._uU(116, "Ticket "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(117, "li"),
                  e.TgZ(118, "div", 2),
                  e._UZ(119, "i", 21),
                  e.qZA(),
                  e.TgZ(120, "ul", 3),
                  e.TgZ(121, "li"),
                  e.TgZ(122, "a", 5),
                  e._uU(123, "AMC"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(124, "li"),
                  e.TgZ(125, "a", 8),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/AMC Dashboard");
                  }),
                  e._uU(126, " Dashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(127, "li"),
                  e.TgZ(128, "a", 22),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/AMC");
                  }),
                  e._uU(129, "AMC "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(130, "li"),
                  e.TgZ(131, "div", 2),
                  e._UZ(132, "i", 23),
                  e.qZA(),
                  e.TgZ(133, "ul", 3),
                  e.TgZ(134, "li"),
                  e.TgZ(135, "a", 5),
                  e._uU(136, " Work"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(137, "li"),
                  e.TgZ(138, "a", 8),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Work Dashboard ");
                  }),
                  e._uU(139, " Dashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(140, "li"),
                  e.TgZ(141, "a", 24),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/Work ");
                  }),
                  e._uU(142, "Work "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(143, "li"),
                  e.TgZ(144, "div", 2),
                  e._UZ(145, "i", 25),
                  e.qZA(),
                  e.TgZ(146, "ul", 3),
                  e.TgZ(147, "li"),
                  e.TgZ(148, "a", 5),
                  e._uU(149, " Project"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(150, "li"),
                  e.TgZ(151, "a", 8),
                  e.NdJ("click", function () {
                    return d.setTitle("FFHErp/My Project ");
                  }),
                  e._uU(152, "My Project"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA());
              },
              directives: [pe.Hw, i.yS, i.Od],
              styles: [
                ".sidebar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100vh;width:260px;transition:all .5s ease;z-index:100}.sidebar.close[_ngcontent-%COMP%]{width:50px}.nav-links[_ngcontent-%COMP%]{height:100%;padding:60px 0 0;overflow:auto}.nav-links[_ngcontent-%COMP%]{overflow:visible}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;list-style:none;transition:all .4s ease;padding:1px 0}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#b8e0d4;color:#000}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .iocn-link[_ngcontent-%COMP%]{text-align:center;background-color:#b8e0d4}.sidebar.close[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .iocn-link[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{height:50px;min-width:50px;text-align:center;line-height:50px;color:#000;font-size:20px;cursor:pointer;transition:all .3s ease}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{margin-top:2px;background:white;display:none}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li.showMenu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;font-size:15px;padding:5px 0;white-space:nowrap;opacity:.6;transition:all .3s ease}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:1;color:#000}.sidebar.close[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{position:absolute;left:100%;top:-10px;margin-top:0;padding:10px 3px;border-radius:0 6px 6px 0;opacity:0;display:block;pointer-events:none;transition:0s}.sidebar.close[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .sub-menu[_ngcontent-%COMP%]{top:0;opacity:1;pointer-events:auto;transition:all .4s ease}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .link_name[_ngcontent-%COMP%]{display:none}.sidebar.close[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .link_name[_ngcontent-%COMP%]{font-size:18px;opacity:1;display:block;background-color:#dcebdc}.sideNavimg[_ngcontent-%COMP%]{max-height:33px}.green[_ngcontent-%COMP%]{background-color:#b8e0d4}.red[_ngcontent-%COMP%]{background-color:#ffa07a}",
              ],
            })),
            s
          );
        })(),
        ie = (() => {
          class s {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (s.ɵfac = function (a) {
              return new (a || s)();
            }),
            (s.ɵcmp = e.Xpm({
              type: s,
              selectors: [["app-comman"]],
              decls: 3,
              vars: 0,
              template: function (a, d) {
                1 & a &&
                  (e._UZ(0, "app-header"),
                  e._UZ(1, "app-side-nav"),
                  e._UZ(2, "router-outlet"));
              },
              directives: [N, A, i.lC],
              styles: [""],
            })),
            s
          );
        })();
      var J = f(5439),
        Ue = f.t(J, 2);
      const Ee = {
        parse: { dateInput: "LL" },
        display: {
          dateInput: "LL",
          monthYearLabel: "MMM YYYY",
          dateA11yLabel: "LL",
          monthYearA11yLabel: "MMMM YYYY",
        },
      };
      var I = f(508);
      const Me = J || Ue,
        ye = new e.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS", {
          providedIn: "root",
          factory: function oe() {
            return { useUtc: !1 };
          },
        });
      function Qt(s, h) {
        const a = Array(s);
        for (let d = 0; d < s; d++) a[d] = h(d);
        return a;
      }
      let te = (() => {
        class s extends I._A {
          constructor(a, d) {
            super(), (this._options = d), this.setLocale(a || Me.locale());
          }
          setLocale(a) {
            super.setLocale(a);
            let d = Me.localeData(a);
            this._localeData = {
              firstDayOfWeek: d.firstDayOfWeek(),
              longMonths: d.months(),
              shortMonths: d.monthsShort(),
              dates: Qt(31, (g) => this.createDate(2017, 0, g + 1).format("D")),
              longDaysOfWeek: d.weekdays(),
              shortDaysOfWeek: d.weekdaysShort(),
              narrowDaysOfWeek: d.weekdaysMin(),
            };
          }
          getYear(a) {
            return this.clone(a).year();
          }
          getMonth(a) {
            return this.clone(a).month();
          }
          getDate(a) {
            return this.clone(a).date();
          }
          getDayOfWeek(a) {
            return this.clone(a).day();
          }
          getMonthNames(a) {
            return "long" == a
              ? this._localeData.longMonths
              : this._localeData.shortMonths;
          }
          getDateNames() {
            return this._localeData.dates;
          }
          getDayOfWeekNames(a) {
            return "long" == a
              ? this._localeData.longDaysOfWeek
              : "short" == a
              ? this._localeData.shortDaysOfWeek
              : this._localeData.narrowDaysOfWeek;
          }
          getYearName(a) {
            return this.clone(a).format("YYYY");
          }
          getFirstDayOfWeek() {
            return this._localeData.firstDayOfWeek;
          }
          getNumDaysInMonth(a) {
            return this.clone(a).daysInMonth();
          }
          clone(a) {
            return a.clone().locale(this.locale);
          }
          createDate(a, d, g) {
            const T = this._createMoment({ year: a, month: d, date: g }).locale(
              this.locale
            );
            return T.isValid(), T;
          }
          today() {
            return this._createMoment().locale(this.locale);
          }
          parse(a, d) {
            return a && "string" == typeof a
              ? this._createMoment(a, d, this.locale)
              : a
              ? this._createMoment(a).locale(this.locale)
              : null;
          }
          format(a, d) {
            return (a = this.clone(a)), this.isValid(a), a.format(d);
          }
          addCalendarYears(a, d) {
            return this.clone(a).add({ years: d });
          }
          addCalendarMonths(a, d) {
            return this.clone(a).add({ months: d });
          }
          addCalendarDays(a, d) {
            return this.clone(a).add({ days: d });
          }
          toIso8601(a) {
            return this.clone(a).format();
          }
          deserialize(a) {
            let d;
            if (a instanceof Date)
              d = this._createMoment(a).locale(this.locale);
            else if (this.isDateInstance(a)) return this.clone(a);
            if ("string" == typeof a) {
              if (!a) return null;
              d = this._createMoment(a, Me.ISO_8601).locale(this.locale);
            }
            return d && this.isValid(d)
              ? this._createMoment(d).locale(this.locale)
              : super.deserialize(a);
          }
          isDateInstance(a) {
            return Me.isMoment(a);
          }
          isValid(a) {
            return this.clone(a).isValid();
          }
          invalid() {
            return Me.invalid();
          }
          _createMoment(a, d, g) {
            const { strict: T, useUtc: v } = this._options || {};
            return v ? Me.utc(a, d, g, T) : Me(a, d, g, T);
          }
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(e.LFG(I.Ad, 8), e.LFG(ye, 8));
          }),
          (s.ɵprov = e.Yz7({ token: s, factory: s.ɵfac })),
          s
        );
      })();
      var he = f(7626),
        P = f(7322),
        _e = f(4107),
        C = f(3075),
        de = f(7531),
        G = f(6856),
        le = f(9224),
        kt = f(483);
      function st(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 16), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.s9C("id", a.id),
            e.Q6J("value", a.key),
            e.xp6(1),
            e.hij(" ", a.value, " ");
        }
      }
      function vt(s, h) {
        if ((1 & s && (e.TgZ(0, "th"), e._uU(1), e.qZA()), 2 & s)) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.hij(" ", a, " ");
        }
      }
      function Pe(s, h) {
        if (
          (1 & s && (e.ynx(0), e.YNc(1, vt, 2, 1, "th", 15), e.BQk()), 2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(1), e.Q6J("ngIf", "total" != a);
        }
      }
      function S(s, h) {
        if ((1 & s && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & s)) {
          const a = e.oxw().$implicit,
            d = e.oxw().$implicit;
          e.xp6(1), e.Oqu(d.value[a]);
        }
      }
      function Oa(s, h) {
        if (
          (1 & s && (e.ynx(0), e.YNc(1, S, 2, 1, "td", 15), e.BQk()), 2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(1), e.Q6J("ngIf", "total" != a);
        }
      }
      function Ha(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 20),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(2).piChart(T.value);
            }),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.YNc(4, Oa, 2, 1, "ng-container", 19),
            e.TgZ(5, "td"),
            e.TgZ(6, "a", 21),
            e._uU(7),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = h.$implicit,
            d = e.oxw(2);
          e.xp6(3),
            e.hij(" ", a.key, " "),
            e.xp6(1),
            e.Q6J("ngForOf", d.columns),
            e.xp6(3),
            e.Oqu(a.value.total);
        }
      }
      function rt(s, h) {
        if ((1 & s && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & s)) {
          const a = e.oxw().$implicit,
            d = e.oxw(2);
          e.xp6(1), e.hij(" ", d.getTotal(a), " ");
        }
      }
      function zt(s, h) {
        if (
          (1 & s && (e.ynx(0), e.YNc(1, rt, 2, 1, "td", 15), e.BQk()), 2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(1), e.Q6J("ngIf", "total" != a);
        }
      }
      function Ua(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "table", 17),
            e.TgZ(1, "thead"),
            e.TgZ(2, "tr", 18),
            e.TgZ(3, "th"),
            e._uU(4, "Actor"),
            e.qZA(),
            e.YNc(5, Pe, 2, 1, "ng-container", 19),
            e.TgZ(6, "th"),
            e._uU(7, "Total"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(8, "tbody"),
            e.YNc(9, Ha, 8, 3, "tr", 19),
            e.ALo(10, "keyvalue"),
            e.TgZ(11, "tr"),
            e.TgZ(12, "td"),
            e._uU(13, "Total"),
            e.qZA(),
            e.YNc(14, zt, 2, 1, "ng-container", 19),
            e.TgZ(15, "td"),
            e._uU(16),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = e.oxw();
          e.xp6(5),
            e.Q6J("ngForOf", a.columns),
            e.xp6(4),
            e.Q6J("ngForOf", e.lcZ(10, 4, a.tableData)),
            e.xp6(5),
            e.Q6J("ngForOf", a.columns),
            e.xp6(2),
            e.Oqu(a.getTotal("total"));
        }
      }
      function Ea(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "div"),
            e.TgZ(1, "h2", 22),
            e._uU(2, "Chart"),
            e.qZA(),
            e.TgZ(3, "mat-card"),
            e._UZ(4, "canvas", 23),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = e.oxw();
          e.xp6(4),
            e.Q6J("type", "pie")("datasets", a.pieChartData)(
              "labels",
              a.pieChartLabels
            )("options", a.pieChartOptions)("legend", a.pieChartLegend);
        }
      }
      let Pa = (() => {
          class s {
            constructor(a, d, g) {
              (this.listService = a),
                (this.global = d),
                (this.httpClient = g),
                (this.selectedValue = "entActionType"),
                (this.From = J().format("YYYY-MM-DD")),
                (this.To = J().format("YYYY-MM-DD")),
                (this.minDate = J().format("YYYY-MM-DD")),
                (this.maxDate = J().format("YYYY-MM-DD")),
                this.httpClient
                  .get("./assets/inputlabel.json")
                  .subscribe((T) => {
                    (this.jsonData = T), (this.ddData = this.jsonData.DDvalue);
                  });
            }
            getPivotTable(a, d) {
              const g = new Map();
              return (
                a.forEach((T) => {
                  g.set(
                    T.entActionContactName,
                    Object.assign(
                      Object.assign({}, g.get(T.entActionContactName)),
                      {
                        [T[d]]:
                          g.get(T.entActionContactName) &&
                          g.get(T.entActionContactName)[T[d]]
                            ? g.get(T.entActionContactName)[T[d]] + 1
                            : 1,
                        total:
                          g.get(T.entActionContactName) &&
                          g.get(T.entActionContactName).total
                            ? g.get(T.entActionContactName).total + 1
                            : 1,
                      }
                    )
                  );
                }),
                g
              );
            }
            submitValue() {
              const a = J(this.From).format("YYYY-MM-DD"),
                d = J(this.To).format("YYYY-MM-DD");
              this.listService
                .showtotalActivity({
                  eDbname: this.global.LOGGED_IN_USER.DbName,
                  eFromDate: a,
                  eMissedFlag: "1",
                  eModuleFlag: "All",
                  ePassword: this.global.LOGGED_IN_USER.encryptPswd,
                  eToDate: d,
                })
                .subscribe((T) => {
                  (this.AllData = JSON.parse(T)),
                    (this.tableData = this.getPivotTable(
                      this.AllData,
                      this.selectedValue
                    )),
                    console.log(this.tableData);
                });
            }
            get columns() {
              if (this.tableData) {
                const a = Array.from(this.tableData).reduce(
                  (d, g) => (
                    Object.keys(g[1]).forEach((T) => {
                      d.add(T.trim());
                    }),
                    d
                  ),
                  new Set()
                );
                return Array.from(a);
              }
              return [];
            }
            updateTable() {
              this.submitValue();
            }
            getTotal(a) {
              return Array.from(this.tableData).reduce(
                (d, g) => (g[1] && g[1][a] ? g[1][a] + d : d),
                0
              );
            }
            piChart(a) {
              const d = Object.keys(a)
                  .filter((T) => "total" !== T)
                  .reduce((T, v) => ((T[v] = a[v]), T), {}),
                g = Object.values(d);
              (this.pieChartLabels = Object.keys(d)),
                (this.pieChartOptions = {
                  scaleShowVerticalLines: !1,
                  responsive: !0,
                }),
                (this.pieChartLegend = !0),
                (this.pieChartData = [{ data: g }]);
            }
            ngOnInit() {}
          }
          return (
            (s.ɵfac = function (a) {
              return new (a || s)(e.Y36(he.L), e.Y36(m.x), e.Y36(c.eN));
            }),
            (s.ɵcmp = e.Xpm({
              type: s,
              selectors: [["app-dash-board"]],
              features: [
                e._Bn([
                  { provide: I.Ad, useValue: "en-GB" },
                  { provide: I._A, useClass: te, deps: [I.Ad, ye] },
                  { provide: I.sG, useValue: Ee },
                ]),
              ],
              decls: 31,
              vars: 11,
              consts: [
                [1, "contain"],
                [1, "row"],
                [1, "col"],
                [1, "option"],
                [3, "ngModel", "ngModelChange"],
                [3, "id", "value", 4, "ngFor", "ngForOf"],
                [
                  "matInput",
                  "",
                  "name",
                  "From",
                  3,
                  "matDatepicker",
                  "ngModel",
                  "max",
                  "ngModelChange",
                ],
                ["input", "ngModel"],
                ["matSuffix", "", 3, "for"],
                ["from", ""],
                [
                  "matInput",
                  "",
                  3,
                  "matDatepicker",
                  "ngModel",
                  "ngModelChange",
                ],
                ["to", ""],
                [
                  "mat-stroked-button",
                  "",
                  "type",
                  "submit",
                  "color",
                  "primary",
                  1,
                  "ms-2",
                  3,
                  "click",
                ],
                ["class", "table table-hover", 4, "ngIf"],
                [1, "col", "piaChart"],
                [4, "ngIf"],
                [3, "id", "value"],
                [1, "table", "table-hover"],
                [1, "table-primary"],
                [4, "ngFor", "ngForOf"],
                [1, "a", 3, "click"],
                [1, "a"],
                [1, "ChartHeading"],
                [
                  "baseChart",
                  "",
                  3,
                  "type",
                  "datasets",
                  "labels",
                  "options",
                  "legend",
                ],
              ],
              template: function (a, d) {
                if (
                  (1 & a &&
                    (e.TgZ(0, "div", 0),
                    e.TgZ(1, "div", 1),
                    e.TgZ(2, "div", 2),
                    e.TgZ(3, "div", 3),
                    e.TgZ(4, "mat-form-field"),
                    e.TgZ(5, "mat-label"),
                    e._uU(6, "Select an option"),
                    e.qZA(),
                    e.TgZ(7, "mat-select", 4),
                    e.NdJ("ngModelChange", function (T) {
                      return (d.selectedValue = T);
                    })("ngModelChange", function () {
                      return d.updateTable();
                    }),
                    e.YNc(8, st, 2, 3, "mat-option", 5),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(9, "mat-form-field"),
                    e.TgZ(10, "mat-label"),
                    e._uU(11, "From Date"),
                    e.qZA(),
                    e.TgZ(12, "input", 6, 7),
                    e.NdJ("ngModelChange", function (T) {
                      return (d.From = T);
                    }),
                    e.qZA(),
                    e._UZ(14, "mat-datepicker-toggle", 8),
                    e._UZ(15, "mat-datepicker", null, 9),
                    e.qZA(),
                    e.TgZ(17, "mat-form-field"),
                    e.TgZ(18, "mat-label"),
                    e._uU(19, "To Date"),
                    e.qZA(),
                    e.TgZ(20, "input", 10, 7),
                    e.NdJ("ngModelChange", function (T) {
                      return (d.To = T);
                    }),
                    e.qZA(),
                    e._UZ(22, "mat-datepicker-toggle", 8),
                    e._UZ(23, "mat-datepicker", null, 11),
                    e.qZA(),
                    e.TgZ(25, "button", 12),
                    e.NdJ("click", function () {
                      return d.submitValue();
                    }),
                    e._uU(26, " Go "),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(27, "div"),
                    e.YNc(28, Ua, 17, 6, "table", 13),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(29, "div", 14),
                    e.YNc(30, Ea, 5, 5, "div", 15),
                    e.qZA(),
                    e.qZA(),
                    e.qZA()),
                  2 & a)
                ) {
                  const g = e.MAs(16),
                    T = e.MAs(24);
                  e.xp6(7),
                    e.Q6J("ngModel", d.selectedValue),
                    e.xp6(1),
                    e.Q6J("ngForOf", d.ddData),
                    e.xp6(4),
                    e.Q6J("matDatepicker", g)("ngModel", d.From)(
                      "max",
                      d.maxDate
                    ),
                    e.xp6(2),
                    e.Q6J("for", g),
                    e.xp6(6),
                    e.Q6J("matDatepicker", T)("ngModel", d.To),
                    e.xp6(2),
                    e.Q6J("for", T),
                    e.xp6(6),
                    e.Q6J("ngIf", d.tableData),
                    e.xp6(2),
                    e.Q6J("ngIf", d.pieChartData);
                }
              },
              directives: [
                P.KE,
                P.hX,
                _e.gD,
                C.JJ,
                C.On,
                u.sg,
                de.Nt,
                G.hl,
                C.Fj,
                G.nW,
                P.R9,
                G.Mq,
                D.lW,
                u.O5,
                I.ey,
                le.a8,
                kt.jh,
              ],
              pipes: [u.Nd],
              styles: [
                ".chart[_ngcontent-%COMP%]{display:block;width:400px;height:400px}.contain[_ngcontent-%COMP%]{padding:64px 17px 0 67px}th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}button[_ngcontent-%COMP%]{box-shadow:0 2px 5px #00000042!important;height:45px;margin-bottom:10px;border:1px solid rgb(108,166,231)!important}button[_ngcontent-%COMP%]:hover{color:#000}mat-form-field[_ngcontent-%COMP%]{margin:0 10px}.ChartHeading[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.mat-card[_ngcontent-%COMP%]{margin-top:30px;display:block;width:500px;height:500px;box-shadow:2px 2px 2px 2px #0003,2px 2px 2px 2px #00000024,2px 2px 2px 2px #0000001f}.piaChart[_ngcontent-%COMP%]{display:flex;justify-content:center}.option[_ngcontent-%COMP%]{display:flex;margin:20px 0 10px;height:54px}.a[_ngcontent-%COMP%]{text-decoration:none;font-size:11px;font-weight:400}.a[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer;font-size:small}",
              ],
            })),
            s
          );
        })(),
        ja = (() => {
          class s {
            constructor(a) {
              this.sanitizer = a;
            }
            ngOnInit() {
              this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
                "https://ffherp.co.in/Pages/Modules/Lead/SupDashboard.aspx"
              );
            }
          }
          return (
            (s.ɵfac = function (a) {
              return new (a || s)(e.Y36(O.H7));
            }),
            (s.ɵcmp = e.Xpm({
              type: s,
              selectors: [["app-list-dashboard"]],
              decls: 2,
              vars: 1,
              consts: [
                [1, "DashBoard"],
                ["frameborder", "0", 1, "Iframe", 3, "src"],
              ],
              template: function (a, d) {
                1 & a && (e.TgZ(0, "div", 0), e._UZ(1, "iframe", 1), e.qZA()),
                  2 & a && (e.xp6(1), e.Q6J("src", d.safeUrl, e.uOi));
              },
              styles: [
                "#DashBoard[_ngcontent-%COMP%]{padding:0 17px 0 67px}.Iframe[_ngcontent-%COMP%]{height:100vh;width:100%}",
              ],
            })),
            s
          );
        })();
      var Gt = f(6087),
        ue = f(4999),
        bt = f(4847),
        V = f(8966);
      function Ia(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "tr", 8),
            e.TgZ(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "td"),
            e._uU(6),
            e.ALo(7, "date"),
            e.qZA(),
            e.TgZ(8, "td"),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "td"),
            e._uU(11),
            e.qZA(),
            e.TgZ(12, "td"),
            e._uU(13),
            e.qZA(),
            e.TgZ(14, "td"),
            e._uU(15),
            e.qZA(),
            e.TgZ(16, "td"),
            e._uU(17),
            e.qZA(),
            e.TgZ(18, "td"),
            e._uU(19),
            e.qZA(),
            e.TgZ(20, "td"),
            e._uU(21),
            e.qZA(),
            e.TgZ(22, "td"),
            e._uU(23),
            e.qZA(),
            e.TgZ(24, "td"),
            e._uU(25),
            e.qZA(),
            e.TgZ(26, "td"),
            e.TgZ(27, "select", 9),
            e.TgZ(28, "option", 10),
            e._uU(29, "Approved"),
            e.qZA(),
            e.TgZ(30, "option", 10),
            e._uU(31, "Not Approved"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(32, "td"),
            e._UZ(33, "input", 11),
            e.qZA(),
            e.TgZ(34, "td"),
            e._UZ(35, "input", 12),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(2),
            e.Oqu(a.VoucherNo),
            e.xp6(2),
            e.Oqu(a.UpdatedBy),
            e.xp6(2),
            e.Oqu(e.xi3(7, 13, a.UpdatedOn, "dd MMM yyyy")),
            e.xp6(3),
            e.Oqu(a.ExpenseTitle),
            e.xp6(2),
            e.Oqu(a.EntityName),
            e.xp6(2),
            e.Oqu(a.Budgeted),
            e.xp6(2),
            e.Oqu(a.ExpenseTitle),
            e.xp6(2),
            e.Oqu(a.ApprovalStatus),
            e.xp6(2),
            e.Oqu(a.ApprovedAmount),
            e.xp6(2),
            e.Oqu(a.ApprovedAmount),
            e.xp6(2),
            e.Oqu(a.PaidAmount),
            e.xp6(2),
            e.Oqu(a.DueAmount),
            e.xp6(8),
            e.s9C("value", a.ApprovalStatus);
        }
      }
      let Fa = (() => {
        class s {
          constructor(a, d, g) {
            (this.data = a),
              (this.listService = d),
              (this.global = g),
              console.log(a.installno, a.entityName, a.entityid),
              this.listService
                .showvoucharData({
                  id: a.installno,
                  entityName: a.entityName,
                  entityId: a.entityid,
                  dbname: this.global.LOGGED_IN_USER.DbName,
                  encrypt: this.global.LOGGED_IN_USER.encryptPswd,
                })
                .subscribe((Qe) => {
                  console.log(JSON.parse(Qe)),
                    (this.approvalData = JSON.parse(Qe));
                });
          }
          ngOnInit() {}
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(e.Y36(V.WI), e.Y36(he.L), e.Y36(m.x));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-approval"]],
            decls: 44,
            vars: 1,
            consts: [
              [1, "noteBox"],
              [1, "modal-heading", "standard-color-modal"],
              [1, "modal-body"],
              [1, "form-field"],
              ["type", "password", "id", "", 1, "input-text"],
              ["for", "", 1, "labels"],
              [1, "table"],
              ["class", "table-light", 4, "ngFor", "ngForOf"],
              [1, "table-light"],
              ["name", "", "id", "", 1, "dd"],
              ["value", ""],
              ["type", "number", "name", "", "id", "", 1, "input1", 3, "value"],
              ["type", "text", 1, "input2"],
            ],
            template: function (a, d) {
              1 & a &&
                (e.TgZ(0, "div", 0),
                e.TgZ(1, "div", 1),
                e.TgZ(2, "h2"),
                e._uU(3, "Vouchar Detail"),
                e.qZA(),
                e.qZA(),
                e.TgZ(4, "div", 2),
                e.TgZ(5, "div", 3),
                e._UZ(6, "input", 4),
                e.TgZ(7, "label", 5),
                e._uU(8, "Enter Password for validate and Approve..."),
                e.qZA(),
                e.qZA(),
                e.TgZ(9, "table", 6),
                e.TgZ(10, "thead"),
                e.TgZ(11, "tr"),
                e.TgZ(12, "th"),
                e._uU(13, "Seq"),
                e.qZA(),
                e.TgZ(14, "th"),
                e._uU(15, "By"),
                e.qZA(),
                e.TgZ(16, "th"),
                e._uU(17, "On"),
                e.qZA(),
                e.TgZ(18, "th"),
                e._uU(19, "Head"),
                e.qZA(),
                e.TgZ(20, "th"),
                e._uU(21, "Entity"),
                e.qZA(),
                e.TgZ(22, "th"),
                e._uU(23, "Budget"),
                e.qZA(),
                e.TgZ(24, "th"),
                e._uU(25, "Exp."),
                e.qZA(),
                e.TgZ(26, "th"),
                e._uU(27, "Appv Status"),
                e.qZA(),
                e.TgZ(28, "th"),
                e._uU(29, "Appv Amt"),
                e.qZA(),
                e.TgZ(30, "th"),
                e._uU(31, "Paid Amt"),
                e.qZA(),
                e.TgZ(32, "th"),
                e._uU(33, "Due Amt"),
                e.qZA(),
                e.TgZ(34, "th"),
                e._uU(35, "Paid Status"),
                e.qZA(),
                e.TgZ(36, "th"),
                e._uU(37, "Appv Status"),
                e.qZA(),
                e.TgZ(38, "th"),
                e._uU(39, "Appv Amt"),
                e.qZA(),
                e.TgZ(40, "th"),
                e._uU(41, "Remark"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(42, "tbody"),
                e.YNc(43, Ia, 36, 16, "tr", 7),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA()),
                2 & a && (e.xp6(43), e.Q6J("ngForOf", d.approvalData));
            },
            directives: [u.sg, C.YN, C.Kr],
            pipes: [u.uU],
            styles: [
              "tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:left}.input1[_ngcontent-%COMP%]{width:50px}.input2[_ngcontent-%COMP%]{width:100px}.dd[_ngcontent-%COMP%]{width:40px}.form-field[_ngcontent-%COMP%]{position:relative;margin:10px 0 17px}.labels[_ngcontent-%COMP%]{display:block;position:absolute;top:-16px;font-size:14px;font-weight:400;color:gray;cursor:text}.input-text[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{color:#00f;top:-20px}.input-text[_ngcontent-%COMP%]{display:block;width:100%;height:24px;font-size:14px;font-weight:400;color:#000;background:transparent;border:none;outline:none;border-bottom:1px solid rgb(201,199,199)}.input-text[_ngcontent-%COMP%]:focus{border-bottom:1px solid blue;outline:none}.modal-heading[_ngcontent-%COMP%]{height:30px;text-align:center}.standard-color-modal[_ngcontent-%COMP%]{background-color:#dcebdc}",
            ],
          })),
          s
        );
      })();
      function Be(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "div"),
            e.TgZ(1, "div", 13),
            e.TgZ(2, "div", 14),
            e._uU(3),
            e.qZA(),
            e._UZ(4, "div", 15),
            e.TgZ(5, "div", 16),
            e._uU(6),
            e.ALo(7, "date"),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(3),
            e.Oqu(a.UserID),
            e.xp6(1),
            e.Q6J("innerHTML", a.Instruction, e.oJD),
            e.xp6(2),
            e.hij(" ", e.xi3(7, 3, a.UpdatedOn, "dd MMM y ,h:mm:ss a"), " ");
        }
      }
      let K = (() => {
          class s {
            constructor(a, d, g) {
              (this.listService = a),
                (this.data = d),
                (this.global = g),
                (this.Entityid = this.data.EntityID),
                (this.EntityName = this.data.EntityName),
                "POList" === this.EntityName
                  ? (this.pageID = "PO")
                  : "SalesOrderLIst" === this.EntityName
                  ? (this.pageID = "SO")
                  : "Prospect" === this.EntityName
                  ? (this.pageID = "Prospect")
                  : "Lead" === this.EntityName
                  ? (this.pageID = "L")
                  : "Payable" === this.EntityName
                  ? (this.pageID = "Payable")
                  : "MoList" === this.EntityName
                  ? (this.pageID = "MO")
                  : "MIList" === this.EntityName
                  ? (this.pageID = "MI")
                  : "Repair" === this.EntityName
                  ? (this.pageID = "Repair")
                  : "Payment" === this.EntityName
                  ? (this.pageID = "Payment")
                  : "AMC" === this.EntityName
                  ? (this.pageID = "AMC")
                  : "Work" === this.EntityName
                  ? (this.pageID = "Work")
                  : "Ticket" === this.EntityName
                  ? (this.pageID = "Ticket")
                  : "Voucher" === this.EntityName && (this.pageID = "Voucher"),
                this.getChatData();
            }
            chatDataSubmit() {
              this.listService
                .submitChat({
                  NoteId: "0",
                  AddedUserinChat: this.AddedUserinChat,
                  Dbname: this.global.LOGGED_IN_USER.DbName,
                  EntityId: this.Entityid,
                  Message: this.chatMessage,
                  MsgTo: "",
                  PageId: this.pageID,
                  Password: this.global.LOGGED_IN_USER.encryptPswd,
                  UserID: this.global.LOGGED_IN_USER.UserId,
                  companyname: "",
                })
                .subscribe((d) => {}),
                (this.chatMessage = ""),
                (this.AddedUserinChat = ""),
                this.getChatData();
            }
            selectEvent(a) {
              console.log(a);
            }
            getChatData() {
              this.listService
                .showChat({
                  EntityId: this.Entityid,
                  pageID: this.pageID,
                  Dbname: this.global.LOGGED_IN_USER.DbName,
                  encrypt: this.global.LOGGED_IN_USER.encryptPswd,
                  userid: this.global.LOGGED_IN_USER.UserId,
                })
                .subscribe((d) => {
                  (this.chat = JSON.parse(d)), console.warn(d);
                });
            }
            onChangeSearch(a) {
              this.prefixText = a;
            }
            ngOnInit() {}
          }
          return (
            (s.ɵfac = function (a) {
              return new (a || s)(e.Y36(he.L), e.Y36(V.WI), e.Y36(m.x));
            }),
            (s.ɵcmp = e.Xpm({
              type: s,
              selectors: [["app-chat"]],
              decls: 21,
              vars: 3,
              consts: [
                [1, "noteBox"],
                [1, "modal-heading", "standard-color-modal"],
                [1, "contain"],
                [4, "ngFor", "ngForOf"],
                [1, "FormContain"],
                [3, "ngSubmit"],
                ["chatData", "ngForm"],
                [1, "col-md-12", "form-field"],
                [1, "full-width"],
                [
                  "matInput",
                  "",
                  "name",
                  "AddedUserinChat",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [1, "col-md-12"],
                [
                  "matInput",
                  "",
                  "name",
                  "chatMessage",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["type", "submit", 1, "btn", "btn-secondary"],
                [1, "card", "chatCard"],
                [1, "text-primary"],
                [3, "innerHTML"],
                [1, "text-end"],
              ],
              template: function (a, d) {
                1 & a &&
                  (e.TgZ(0, "div", 0),
                  e.TgZ(1, "div", 1),
                  e.TgZ(2, "h2"),
                  e._uU(3, "Chat"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(4, "div", 2),
                  e.YNc(5, Be, 8, 6, "div", 3),
                  e.qZA(),
                  e.TgZ(6, "div", 4),
                  e.TgZ(7, "form", 5, 6),
                  e.NdJ("ngSubmit", function () {
                    return d.chatDataSubmit();
                  }),
                  e.TgZ(9, "div", 7),
                  e.TgZ(10, "mat-form-field", 8),
                  e.TgZ(11, "mat-label"),
                  e._uU(12, "Add Username Here....."),
                  e.qZA(),
                  e.TgZ(13, "input", 9),
                  e.NdJ("ngModelChange", function (T) {
                    return (d.AddedUserinChat = T);
                  }),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(14, "div", 10),
                  e.TgZ(15, "mat-form-field", 8),
                  e.TgZ(16, "mat-label"),
                  e._uU(17, "Type Your Message Here......"),
                  e.qZA(),
                  e.TgZ(18, "textarea", 11),
                  e.NdJ("ngModelChange", function (T) {
                    return (d.chatMessage = T);
                  }),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(19, "button", 12),
                  e._uU(20, "Send"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA()),
                  2 & a &&
                    (e.xp6(5),
                    e.Q6J("ngForOf", d.chat),
                    e.xp6(8),
                    e.Q6J("ngModel", d.AddedUserinChat),
                    e.xp6(5),
                    e.Q6J("ngModel", d.chatMessage));
              },
              directives: [
                u.sg,
                C._Y,
                C.JL,
                C.F,
                P.KE,
                P.hX,
                de.Nt,
                C.Fj,
                C.JJ,
                C.On,
              ],
              pipes: [u.uU],
              styles: [
                "textarea[_ngcontent-%COMP%]{width:100%;resize:none;height:80px}.contain[_ngcontent-%COMP%]{height:309px}.chatCard[_ngcontent-%COMP%]{box-sizing:border-box;background-color:#dbe4eb;margin:10px;padding:10px}.FormContain[_ngcontent-%COMP%]{margin:0 10px}.full-width[_ngcontent-%COMP%]{width:100%}.modal-heading[_ngcontent-%COMP%]{height:30px;text-align:center}.standard-color-modal[_ngcontent-%COMP%]{background-color:#dcebdc}",
              ],
            })),
            s
          );
        })(),
        se = (() => {
          class s {
            constructor(a, d, g) {
              (this.listService = a),
                (this.data = d),
                (this.global = g),
                (this.Entityid = this.data.EntityID),
                (this.EntityName = this.data.EntityName),
                this.listService
                  .emailtrace({
                    EntityID: this.Entityid,
                    EntityName: this.EntityName,
                    DBNAME: this.global.LOGGED_IN_USER.DbName,
                    password: this.global.LOGGED_IN_USER.encryptPswd,
                    EmailAddress: this.global.LOGGED_IN_USER.EmailId,
                  })
                  .subscribe((v) => {
                    this.emailData = JSON.parse(v);
                  });
            }
            ngOnInit() {}
          }
          return (
            (s.ɵfac = function (a) {
              return new (a || s)(e.Y36(he.L), e.Y36(V.WI), e.Y36(m.x));
            }),
            (s.ɵcmp = e.Xpm({
              type: s,
              selectors: [["app-email-trace"]],
              decls: 22,
              vars: 0,
              consts: [
                [1, "email-body"],
                [1, "modal-header", "modal-heading", "standard-color-modal"],
                [1, "container"],
                [1, "row"],
                [1, "col-lg-12", "text-center"],
                [1, "modal-body"],
                [
                  "id",
                  "emailTable",
                  1,
                  "table",
                  "table-striped",
                  "table-striped",
                  "text-center",
                ],
                [1, "standard-color-modal"],
              ],
              template: function (a, d) {
                1 & a &&
                  (e.TgZ(0, "div", 0),
                  e.TgZ(1, "div", 1),
                  e.TgZ(2, "div", 2),
                  e.TgZ(3, "div", 3),
                  e.TgZ(4, "div", 4),
                  e.TgZ(5, "h2"),
                  e._uU(6, "Email Trace"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(7, "div", 5),
                  e.TgZ(8, "table", 6),
                  e.TgZ(9, "thead", 7),
                  e.TgZ(10, "tr"),
                  e.TgZ(11, "th"),
                  e._uU(12, "Folder"),
                  e.qZA(),
                  e.TgZ(13, "th"),
                  e._uU(14, "Date Time"),
                  e.qZA(),
                  e.TgZ(15, "th"),
                  e._uU(16, "From/To"),
                  e.qZA(),
                  e.TgZ(17, "th"),
                  e._uU(18, "Subject"),
                  e.qZA(),
                  e.TgZ(19, "th"),
                  e._uU(20, "Message"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e._UZ(21, "tbody"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA());
              },
              styles: [
                ".email-body[_ngcontent-%COMP%]{max-width:100%;min-height:auto}.modal-heading[_ngcontent-%COMP%]{height:30px;text-align:center;padding-top:28px}.standard-color-modal[_ngcontent-%COMP%]{background-color:#dcebdc}",
              ],
            })),
            s
          );
        })();
      function At(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "div"),
            e.TgZ(1, "mat-form-field", 4),
            e.TgZ(2, "mat-label"),
            e._uU(3),
            e.qZA(),
            e._UZ(4, "input", 24),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(3),
            e.hij("", a.Label, " "),
            e.xp6(1),
            e.s9C("id", a.ID),
            e.s9C("type", a.Type),
            e.s9C("name", a.Label);
        }
      }
      let Bt = (() => {
        class s {
          constructor(a, d) {
            (this.httpClient = a),
              (this.data = d),
              (this.EntityName = this.data.EntityName),
              this.httpClient.get("./assets/inputlabel.json").subscribe((g) => {
                (this.FormArry = g),
                  "Prospect" === this.EntityName
                    ? (this.labelData = this.FormArry.prospect)
                    : "Lead" === this.EntityName
                    ? (this.labelData = this.FormArry.Lead)
                    : "SalesOrderLIst" === this.EntityName
                    ? (this.labelData = this.FormArry.SO)
                    : "MIList" === this.EntityName
                    ? (this.labelData = this.FormArry.MI)
                    : "MoList" === this.EntityName
                    ? (this.labelData = this.FormArry.MO)
                    : "POList" === this.EntityName
                    ? (this.labelData = this.FormArry.PO)
                    : "Repair" === this.EntityName
                    ? (this.labelData = this.FormArry.Repair)
                    : "Payment" === this.EntityName
                    ? (this.labelData = this.FormArry.Payment)
                    : "Payable" === this.EntityName
                    ? (this.labelData = this.FormArry.Payble)
                    : "Ticket" === this.EntityName
                    ? (this.labelData = this.FormArry.Ticket)
                    : "AMC" === this.EntityName
                    ? (this.labelData = this.FormArry.AMC)
                    : "Work" === this.EntityName &&
                      (this.labelData = this.FormArry.Work),
                  console.log();
              });
          }
          ngOnInit() {}
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(e.Y36(c.eN), e.Y36(V.WI));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-filter-search"]],
            decls: 97,
            vars: 5,
            consts: [
              [1, "modal-container"],
              [1, "standard-color-modal", "modal-heading"],
              [1, "row", "filterSearchContain"],
              [1, "col"],
              [1, "input-width"],
              ["matInput", "", "name", "Company "],
              ["matInput", "", "name", "AssociatCompany "],
              ["matInput", "", "name", "ParentCompany "],
              ["matInput", "", "name", "CompanyOwner"],
              ["matInput", "", "name", "SelectIndustyType"],
              ["matInput", "", "name", "SelectRelationship "],
              ["matInput", "", "name", "Area "],
              ["matInput", "", "name", "City "],
              ["matInput", "", "name", "State "],
              ["matInput", "", "name", "Product "],
              ["matInput", "", "name", "Category"],
              ["matInput", "", "name", "Group "],
              ["matInput", "", "name", "Manufacture "],
              [4, "ngFor", "ngForOf"],
              ["matInput", "", 3, "matDatepicker"],
              ["matSuffix", "", 3, "for"],
              ["From", ""],
              ["To", ""],
              ["mat-raised-button", "", "color", "primary"],
              ["matInput", "", 3, "id", "type", "name"],
            ],
            template: function (a, d) {
              if (
                (1 & a &&
                  (e.TgZ(0, "div", 0),
                  e.TgZ(1, "div", 1),
                  e.TgZ(2, "h3"),
                  e._uU(3, "Search"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(4, "div", 2),
                  e.TgZ(5, "div", 3),
                  e.TgZ(6, "h1"),
                  e._uU(7, "Company"),
                  e.qZA(),
                  e.TgZ(8, "div"),
                  e.TgZ(9, "mat-form-field", 4),
                  e.TgZ(10, "mat-label"),
                  e._uU(11, "Company"),
                  e.qZA(),
                  e._UZ(12, "input", 5),
                  e.qZA(),
                  e.TgZ(13, "mat-form-field", 4),
                  e.TgZ(14, "mat-label"),
                  e._uU(15, "Associat Company"),
                  e.qZA(),
                  e._UZ(16, "input", 6),
                  e.qZA(),
                  e.TgZ(17, "mat-form-field", 4),
                  e.TgZ(18, "mat-label"),
                  e._uU(19, "Parent Company"),
                  e.qZA(),
                  e._UZ(20, "input", 7),
                  e.qZA(),
                  e.TgZ(21, "mat-form-field", 4),
                  e.TgZ(22, "mat-label"),
                  e._uU(23, "Company Owner"),
                  e.qZA(),
                  e._UZ(24, "input", 8),
                  e.qZA(),
                  e.TgZ(25, "mat-form-field", 4),
                  e.TgZ(26, "mat-label"),
                  e._uU(27, "Select Industy Typer"),
                  e.qZA(),
                  e._UZ(28, "input", 9),
                  e.qZA(),
                  e.TgZ(29, "mat-form-field", 4),
                  e.TgZ(30, "mat-label"),
                  e._uU(31, "Select Relationship "),
                  e.qZA(),
                  e._UZ(32, "input", 10),
                  e.qZA(),
                  e.TgZ(33, "mat-form-field", 4),
                  e.TgZ(34, "mat-label"),
                  e._uU(35, "Area "),
                  e.qZA(),
                  e._UZ(36, "input", 11),
                  e.qZA(),
                  e.TgZ(37, "mat-form-field", 4),
                  e.TgZ(38, "mat-label"),
                  e._uU(39, "City "),
                  e.qZA(),
                  e._UZ(40, "input", 12),
                  e.qZA(),
                  e.TgZ(41, "mat-form-field", 4),
                  e.TgZ(42, "mat-label"),
                  e._uU(43, "State "),
                  e.qZA(),
                  e._UZ(44, "input", 13),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(45, "div", 3),
                  e.TgZ(46, "h1"),
                  e._uU(47, "Product"),
                  e.qZA(),
                  e.TgZ(48, "div"),
                  e.TgZ(49, "mat-form-field", 4),
                  e.TgZ(50, "mat-label"),
                  e._uU(51, "Product"),
                  e.qZA(),
                  e._UZ(52, "input", 14),
                  e.qZA(),
                  e.TgZ(53, "mat-form-field", 4),
                  e.TgZ(54, "mat-label"),
                  e._uU(55, "Category"),
                  e.qZA(),
                  e._UZ(56, "input", 15),
                  e.qZA(),
                  e.TgZ(57, "mat-form-field", 4),
                  e.TgZ(58, "mat-label"),
                  e._uU(59, "Group"),
                  e.qZA(),
                  e._UZ(60, "input", 16),
                  e.qZA(),
                  e.TgZ(61, "mat-form-field", 4),
                  e.TgZ(62, "mat-label"),
                  e._uU(63, "Manufacture"),
                  e.qZA(),
                  e._UZ(64, "input", 17),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(65, "div", 3),
                  e.TgZ(66, "h1"),
                  e._uU(67, "Entity Wise"),
                  e.qZA(),
                  e.YNc(68, At, 5, 4, "div", 18),
                  e.qZA(),
                  e.TgZ(69, "div", 3),
                  e.TgZ(70, "h1"),
                  e._uU(71, "Date"),
                  e.qZA(),
                  e.TgZ(72, "div"),
                  e.TgZ(73, "mat-form-field", 4),
                  e.TgZ(74, "mat-label"),
                  e._uU(75, "Select Date Type"),
                  e.qZA(),
                  e.TgZ(76, "mat-select"),
                  e.TgZ(77, "mat-option"),
                  e._uU(78, " Select Format "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(79, "mat-form-field", 4),
                  e.TgZ(80, "mat-label"),
                  e._uU(81, "From"),
                  e.qZA(),
                  e._UZ(82, "input", 19),
                  e._UZ(83, "mat-datepicker-toggle", 20),
                  e._UZ(84, "mat-datepicker", null, 21),
                  e.qZA(),
                  e.TgZ(86, "mat-form-field", 4),
                  e.TgZ(87, "mat-label"),
                  e._uU(88, "From"),
                  e.qZA(),
                  e._UZ(89, "input", 19),
                  e._UZ(90, "mat-datepicker-toggle", 20),
                  e._UZ(91, "mat-datepicker", null, 22),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(93, "button", 23),
                  e._uU(94, "Search"),
                  e.qZA(),
                  e.TgZ(95, "button", 23),
                  e._uU(96, "Export Excel"),
                  e.qZA(),
                  e.qZA()),
                2 & a)
              ) {
                const g = e.MAs(85),
                  T = e.MAs(92);
                e.xp6(68),
                  e.Q6J("ngForOf", d.labelData),
                  e.xp6(14),
                  e.Q6J("matDatepicker", g),
                  e.xp6(1),
                  e.Q6J("for", g),
                  e.xp6(6),
                  e.Q6J("matDatepicker", T),
                  e.xp6(1),
                  e.Q6J("for", T);
              }
            },
            directives: [
              P.KE,
              P.hX,
              de.Nt,
              u.sg,
              _e.gD,
              I.ey,
              G.hl,
              G.nW,
              P.R9,
              G.Mq,
              D.lW,
            ],
            styles: [
              "button[_ngcontent-%COMP%]{margin:0 9px}.filterSearchContain[_ngcontent-%COMP%]{margin:0 10px}.input-width[_ngcontent-%COMP%]{width:100%}.standard-color-modal[_ngcontent-%COMP%]{background-color:#dcebdc}.modal-heading[_ngcontent-%COMP%]{height:30px;text-align:center}.modal-container[_ngcontent-%COMP%]{height:700px}",
            ],
          })),
          s
        );
      })();
      function X(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "td"),
            e._uU(6),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(2),
            e.Oqu(a.UpdatedBy),
            e.xp6(2),
            e.Oqu(a.Fromdate),
            e.xp6(2),
            e.Oqu(a.Description);
        }
      }
      let Vt = (() => {
        class s {
          constructor(a, d, g) {
            (this.listService = a),
              (this.data = d),
              (this.global = g),
              (this.description = ""),
              (this.Entityid = this.data.EntityID),
              (this.EntityName = this.data.EntityName),
              (this.companyName = this.data.companyName),
              this.getNoteList();
          }
          saveNote(a) {
            (this.Description = a),
              this.listService
                .saveNoteList(
                  this.EntityName,
                  this.Entityid,
                  this.Description,
                  this.global.LOGGED_IN_USER.DbName,
                  this.global.LOGGED_IN_USER.encryptPswd,
                  this.global.LOGGED_IN_USER.Username
                )
                .subscribe((d) => {}),
              this.getNoteList(),
              (this.description = this.Description),
              (this.Description = " ");
          }
          getNoteList() {
            this.listService
              .getNoteList(
                this.EntityName,
                this.Entityid,
                this.global.LOGGED_IN_USER.DbName,
                this.global.LOGGED_IN_USER.encryptPswd,
                this.global.LOGGED_IN_USER.Username
              )
              .subscribe((a) => {
                (this.noteData = JSON.parse(a)), console.log(this.noteData);
              });
          }
          ngOnInit() {}
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(e.Y36(he.L), e.Y36(V.WI), e.Y36(m.x));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-note"]],
            decls: 20,
            vars: 2,
            consts: [
              [1, "noteBox"],
              [1, "modal-body"],
              ["id", "noteTable", 1, "table"],
              [1, "notes", "table_heading"],
              [1, "chatHeadingSize"],
              [4, "ngFor", "ngForOf"],
              [1, "form-floating"],
              [
                "placeholder",
                "Leave a comment here",
                1,
                "form-control",
                2,
                "height",
                "100px",
                3,
                "value",
              ],
              ["Description", ""],
              ["for", "Textarea"],
              [1, "modal-footer"],
              [
                "type",
                "submit",
                "value",
                "Save",
                1,
                "btn",
                "btn-secondary",
                3,
                "click",
              ],
            ],
            template: function (a, d) {
              if (1 & a) {
                const g = e.EpF();
                e.TgZ(0, "div", 0),
                  e.TgZ(1, "div", 1),
                  e.TgZ(2, "table", 2),
                  e.TgZ(3, "thead", 3),
                  e.TgZ(4, "tr"),
                  e.TgZ(5, "th", 4),
                  e._uU(6, "Added By"),
                  e.qZA(),
                  e.TgZ(7, "th", 4),
                  e._uU(8, "On Date"),
                  e.qZA(),
                  e.TgZ(9, "th"),
                  e._uU(10, "Notes"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(11, "tbody"),
                  e.YNc(12, X, 7, 3, "tr", 5),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(13, "div", 6),
                  e._UZ(14, "textarea", 7, 8),
                  e.TgZ(16, "label", 9),
                  e._uU(17, "Notes"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(18, "div", 10),
                  e.TgZ(19, "input", 11),
                  e.NdJ("click", function () {
                    e.CHM(g);
                    const v = e.MAs(15);
                    return d.saveNote(v.value);
                  }),
                  e.qZA(),
                  e.qZA(),
                  e.qZA();
              }
              2 & a &&
                (e.xp6(12),
                e.Q6J("ngForOf", d.noteData),
                e.xp6(2),
                e.Q6J("value", d.description));
            },
            directives: [u.sg],
            styles: [
              "textarea[_ngcontent-%COMP%]{resize:none;display:flex}.chatHeadingSize[_ngcontent-%COMP%]{width:100px}.noteBox[_ngcontent-%COMP%]{width:100%}.table_heading[_ngcontent-%COMP%]{background-color:#bce1c6;color:#000}",
            ],
          })),
          s
        );
      })();
      var ve = f(7446),
        re = f(1018),
        H = f(9345);
      function je(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 15), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.Q6J("value", a.Key), e.xp6(1), e.hij(" ", a.Value, " ");
        }
      }
      function ot(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 15), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.Q6J("value", a.Key), e.xp6(1), e.hij(" ", a.Value, " ");
        }
      }
      function $t(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 15), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.Q6J("value", a.Key), e.xp6(1), e.hij(" ", a.Value, " ");
        }
      }
      function Ja(s, h) {
        1 & s &&
          (e.TgZ(0, "div"), e._UZ(1, "ngx-extended-pdf-viewer", 16), e.qZA()),
          2 & s &&
            (e.xp6(1),
            e.Q6J("src", "assets/example.pdf")("useBrowserLocale", !0)(
              "textLayer",
              !0
            )("showHandToolButton", !0)("showPresentationModeButton", !0)(
              "showDownloadButton",
              !1
            ));
      }
      function Wa(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "mat-form-field", 4),
            e.TgZ(2, "mat-label"),
            e._uU(3, "To :"),
            e.qZA(),
            e.TgZ(4, "input", 22),
            e.NdJ("ngModelChange", function (g) {
              return (e.CHM(a).$implicit.EmailTo = g);
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(5, "mat-form-field", 4),
            e.TgZ(6, "mat-label"),
            e._uU(7, "CC :"),
            e.qZA(),
            e.TgZ(8, "input", 23),
            e.NdJ("ngModelChange", function (g) {
              return (e.CHM(a).$implicit.CC = g);
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(9, "mat-form-field", 4),
            e.TgZ(10, "mat-label"),
            e._uU(11, "BCC :"),
            e.qZA(),
            e.TgZ(12, "input", 24),
            e.NdJ("ngModelChange", function (g) {
              return (e.CHM(a).$implicit.BCC = g);
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "mat-form-field", 4),
            e.TgZ(14, "mat-label"),
            e._uU(15, "Subject :"),
            e.qZA(),
            e.TgZ(16, "input", 25),
            e.NdJ("ngModelChange", function (g) {
              return (e.CHM(a).$implicit.EmailSubject = g);
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "mat-form-field", 4),
            e._uU(18, " Attachment : "),
            e.TgZ(19, "span", 26),
            e._uU(20),
            e.qZA(),
            e.qZA(),
            e.TgZ(21, "mat-form-field", 4),
            e.TgZ(22, "mat-label"),
            e._uU(23, "Another :"),
            e.qZA(),
            e._UZ(24, "input", 27),
            e.qZA(),
            e.TgZ(25, "mat-form-field", 4),
            e.TgZ(26, "mat-label"),
            e._uU(27, "Attachment :"),
            e.qZA(),
            e.TgZ(28, "span", 28),
            e._uU(29, " Select Multiple files from Same folder"),
            e.qZA(),
            e.qZA(),
            e.TgZ(30, "mat-form-field", 4),
            e.TgZ(31, "mat-label"),
            e._uU(32, "Message :"),
            e.qZA(),
            e.TgZ(33, "angular-editor", 29),
            e.NdJ("ngModelChange", function (g) {
              return (e.CHM(a).$implicit.EmailBody = g);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = h.$implicit;
          e.xp6(4),
            e.Q6J("ngModel", a.EmailTo),
            e.xp6(4),
            e.Q6J("ngModel", a.CC),
            e.xp6(4),
            e.Q6J("ngModel", a.BCC),
            e.xp6(4),
            e.Q6J("ngModel", a.EmailSubject),
            e.xp6(4),
            e.hij(" ", a.EmailFileName, ""),
            e.xp6(13),
            e.Q6J("ngModel", a.EmailBody);
        }
      }
      function Kt(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "form", 17, 18),
            e.NdJ("ngSubmit", function () {
              e.CHM(a);
              const g = e.MAs(2);
              return e.oxw().onClickSubmit(g.value);
            }),
            e.YNc(3, Wa, 34, 6, "div", 19),
            e.TgZ(4, "button", 20),
            e._uU(5, " Send Email "),
            e.qZA(),
            e.TgZ(6, "button", 21),
            e._uU(7, " Send Email "),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw();
          e.xp6(3), e.Q6J("ngForOf", a.ShowEmailQuoteData);
        }
      }
      function ae(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 15), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.Q6J("value", a.Key), e.xp6(1), e.hij(" ", a.Value, " ");
        }
      }
      function Xt(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 15), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.Q6J("value", a.eLeadTermsSetID),
            e.xp6(1),
            e.hij(" ", a.eLeadTermsSetName, " ");
        }
      }
      function wt(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-form-field", 4),
            e.TgZ(1, "mat-label"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "input", 33),
            e.NdJ("ngModelChange", function (g) {
              return (e.CHM(a).$implicit.eLeadTermsDetails = g);
            }),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = h.$implicit;
          e.xp6(2),
            e.Oqu(a.eLeadTermsName),
            e.xp6(1),
            e.Q6J("ngModel", a.eLeadTermsDetails);
        }
      }
      function _t(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "div"),
            e.YNc(1, wt, 4, 2, "mat-form-field", 32),
            e.qZA()),
          2 & s)
        ) {
          const a = e.oxw(2);
          e.xp6(1), e.Q6J("ngForOf", a.termSetData);
        }
      }
      function W(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "mat-form-field", 4),
            e.TgZ(2, "mat-label"),
            e._uU(3, "Select Format :"),
            e.qZA(),
            e.TgZ(4, "mat-select", 5),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().selectemailQuoteFormat = g);
            })("ngModelChange", function () {
              return e.CHM(a), e.oxw().selectDropDown();
            }),
            e.YNc(5, ae, 2, 2, "mat-option", 6),
            e.qZA(),
            e.qZA(),
            e.TgZ(6, "mat-form-field", 4),
            e.TgZ(7, "mat-label"),
            e._uU(8, "Select Term Set :"),
            e.qZA(),
            e.TgZ(9, "mat-select", 5),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().SelecteeLeadTermsSetID = g);
            })("ngModelChange", function () {
              return e.CHM(a), e.oxw().selectTermSet();
            }),
            e.TgZ(10, "mat-option"),
            e._uU(11, "Select Term Set"),
            e.qZA(),
            e.YNc(12, Xt, 2, 2, "mat-option", 6),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "form", 17, 30),
            e.NdJ("ngSubmit", function () {
              e.CHM(a);
              const g = e.MAs(14);
              return e.oxw().onClickSave(g.value);
            }),
            e.YNc(15, _t, 2, 1, "div", 14),
            e.TgZ(16, "button", 31),
            e._uU(17, "Save"),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw();
          e.xp6(4),
            e.Q6J("ngModel", a.selectemailQuoteFormat),
            e.xp6(1),
            e.Q6J("ngForOf", a.emailQuoteData.slice(0, 3)),
            e.xp6(4),
            e.Q6J("ngModel", a.SelecteeLeadTermsSetID),
            e.xp6(3),
            e.Q6J("ngForOf", a.termsconditionData),
            e.xp6(3),
            e.Q6J("ngIf", a.termSection);
        }
      }
      let ea = (() => {
          class s {
            constructor(a, d, g) {
              (this.listService = a),
                (this.data = d),
                (this.global = g),
                (this.emailQuote = !1),
                (this.termsCondition = !1),
                (this.viewPDF = !1),
                (this.url = " "),
                (this.termSection = !1),
                (this.Entityid = this.data.EntityID),
                (this.EntityName = this.data.EntityName),
                this.listService
                  .emailQuoteData(
                    this.global.LOGGED_IN_USER.DbName,
                    this.global.LOGGED_IN_USER.encryptPswd,
                    this.EntityName
                  )
                  .subscribe((T) => {
                    (this.emailQuoteData = JSON.parse(T)),
                      console.log(this.emailQuoteData);
                  });
            }
            showPDF() {
              (this.emailQuote = !1),
                (this.termsCondition = !1),
                (this.viewPDF = !this.viewPDF),
                this.listService
                  .showEmailPDF(
                    this.EntityName,
                    this.Entityid,
                    this.global.LOGGED_IN_USER.DbName,
                    this.global.LOGGED_IN_USER.RoleId,
                    this.global.LOGGED_IN_USER.encryptPswd,
                    this.global.LOGGED_IN_USER.UserId
                  )
                  .subscribe((a) => {
                    this.url = a;
                  });
            }
            selectFormat() {
              this.format = this.SelectFormat;
            }
            selectHeader() {
              this.header = this.SelectHeaderFooter;
            }
            selectBank() {
              this.bank = this.SelectBank;
            }
            onClickSubmit(a) {}
            onClickSave(a) {
              this.myform.reset();
            }
            EmailQuote() {
              this.listService
                .emailQuotedetail(
                  this.EntityName,
                  this.Entityid,
                  this.global.LOGGED_IN_USER.DbName,
                  this.global.LOGGED_IN_USER.UserId,
                  this.global.LOGGED_IN_USER.encryptPswd
                )
                .subscribe((a) => {
                  this.ShowEmailQuoteData = JSON.parse(a);
                }),
                (this.emailQuote = !this.emailQuote),
                (this.termsCondition = !1),
                (this.viewPDF = !1);
            }
            TermsCondition() {
              (this.emailQuote = !1),
                (this.viewPDF = !1),
                (this.termsCondition = !this.termsCondition);
            }
            selectDropDown() {
              (this.termSection = !1),
                (this.eLeadFormatID = this.selectemailQuoteFormat),
                this.listService
                  .showtermscondition(
                    this.eLeadFormatID,
                    this.global.LOGGED_IN_USER.DbName,
                    this.global.LOGGED_IN_USER.encryptPswd
                  )
                  .subscribe((a) => {
                    this.termsconditionData = JSON.parse(a);
                  });
            }
            selectTermSet() {
              (this.termSection = !0),
                (this.eLeadTermsSetID = this.SelecteeLeadTermsSetID),
                this.listService
                  .showtermSet(
                    this.eLeadFormatID,
                    this.eLeadTermsSetID,
                    this.global.LOGGED_IN_USER.DbName,
                    this.global.LOGGED_IN_USER.encryptPswd
                  )
                  .subscribe((a) => {
                    (this.termSetData = JSON.parse(a)),
                      console.log(this.termSetData);
                  });
            }
            ngOnInit() {}
          }
          return (
            (s.ɵfac = function (a) {
              return new (a || s)(e.Y36(he.L), e.Y36(V.WI), e.Y36(m.x));
            }),
            (s.ɵcmp = e.Xpm({
              type: s,
              selectors: [["app-show-email-quot"]],
              decls: 64,
              vars: 9,
              consts: [
                [1, "modal-content"],
                [1, "containt-Body"],
                [1, "row", "col", "email-box"],
                [1, "col"],
                [1, "selectWidth"],
                [3, "ngModel", "ngModelChange"],
                [3, "value", 4, "ngFor", "ngForOf"],
                [1, "form-field"],
                [1, "checkbox-label"],
                [1, "link", 3, "click"],
                [1, "link"],
                [1, "col-sm-1"],
                [1, "vl"],
                [1, "col", "p-3"],
                [4, "ngIf"],
                [3, "value"],
                [
                  3,
                  "src",
                  "useBrowserLocale",
                  "textLayer",
                  "showHandToolButton",
                  "showPresentationModeButton",
                  "showDownloadButton",
                ],
                [3, "ngSubmit"],
                ["emailData", "ngForm"],
                [4, "ngFor", "ngForOf"],
                [
                  "type",
                  "submit",
                  "value",
                  "submit",
                  1,
                  "btn",
                  "btn-outline-info",
                ],
                [
                  "mat-stroked-button",
                  "",
                  "type",
                  "submit",
                  "value",
                  "submit",
                  "color",
                  "primary",
                ],
                [
                  "matInput",
                  "",
                  "type",
                  "email",
                  "name",
                  "EmailTo",
                  "id",
                  "",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [
                  "matInput",
                  "",
                  "type",
                  "email",
                  "type",
                  "email",
                  "name",
                  "CC",
                  "id",
                  "",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [
                  "matInput",
                  "",
                  "type",
                  "email",
                  "type",
                  "email",
                  "name",
                  "BCC",
                  "id",
                  "",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [
                  "matInput",
                  "",
                  "type",
                  "email",
                  "name",
                  "Subject",
                  "id",
                  "",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [1, "text-primary", "ps-2"],
                ["matInput", "", "name", "Another"],
                [1, "text-danger"],
                [
                  "name",
                  "Message",
                  "id",
                  "",
                  "type",
                  "text",
                  1,
                  "Description",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["termsCondition", "ngForm"],
                [
                  "mat-stroked-button",
                  "",
                  "type",
                  "submit",
                  "color",
                  "primary",
                ],
                ["class", "selectWidth", 4, "ngFor", "ngForOf"],
                [
                  "matInput",
                  "",
                  "name",
                  "eLeadTermsDetails",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
              ],
              template: function (a, d) {
                1 & a &&
                  (e.TgZ(0, "div", 0),
                  e.TgZ(1, "div", 1),
                  e.TgZ(2, "div", 2),
                  e.TgZ(3, "div", 3),
                  e.TgZ(4, "mat-form-field", 4),
                  e.TgZ(5, "mat-label"),
                  e._uU(6, "Select Format :"),
                  e.qZA(),
                  e.TgZ(7, "mat-select", 5),
                  e.NdJ("ngModelChange", function (T) {
                    return (d.SelectFormat = T);
                  })("ngModelChange", function () {
                    return d.selectFormat();
                  }),
                  e.YNc(8, je, 2, 2, "mat-option", 6),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(9, "mat-form-field", 4),
                  e.TgZ(10, "mat-label"),
                  e._uU(11, "Select Header / Footer"),
                  e.qZA(),
                  e.TgZ(12, "mat-select", 5),
                  e.NdJ("ngModelChange", function (T) {
                    return (d.SelectHeaderFooter = T);
                  })("ngModelChange", function () {
                    return d.selectHeader();
                  }),
                  e.YNc(13, ot, 2, 2, "mat-option", 6),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(14, "mat-form-field", 4),
                  e.TgZ(15, "mat-label"),
                  e._uU(16, "Select Bank"),
                  e.qZA(),
                  e.TgZ(17, "mat-select", 5),
                  e.NdJ("ngModelChange", function (T) {
                    return (d.SelectBank = T);
                  })("ngModelChange", function () {
                    return d.selectBank();
                  }),
                  e.YNc(18, $t, 2, 2, "mat-option", 6),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(19, "section", 7),
                  e.TgZ(20, "mat-checkbox", 8),
                  e._uU(21, "Select Bank"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(22, "section", 7),
                  e.TgZ(23, "mat-checkbox", 8),
                  e._uU(24, "Hide Discount Column"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(25, "section", 7),
                  e.TgZ(26, "mat-checkbox", 8),
                  e._uU(27, "Discount Rate"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(28, "section", 7),
                  e.TgZ(29, "mat-checkbox", 8),
                  e._uU(30, "Show Round of Total"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(31, "section", 7),
                  e.TgZ(32, "mat-checkbox", 8),
                  e._uU(33, "Show Task"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(34, "section", 7),
                  e.TgZ(35, "mat-checkbox", 8),
                  e._uU(36, " Show Rubber Stamp"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(37, "section", 7),
                  e.TgZ(38, "mat-checkbox", 8),
                  e._uU(39, "Show Product Remark"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(40, "section", 7),
                  e.TgZ(41, "mat-checkbox", 8),
                  e._uU(42, "Show Product image"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(43, "section", 7),
                  e.TgZ(44, "mat-checkbox", 8),
                  e._uU(45, "Show Product Partcode "),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(46, "div"),
                  e.TgZ(47, "a", 9),
                  e.NdJ("click", function () {
                    return d.showPDF();
                  }),
                  e._uU(48, " View Quote"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(49, "div"),
                  e.TgZ(50, "a", 9),
                  e.NdJ("click", function () {
                    return d.EmailQuote();
                  }),
                  e._uU(51, "Email Quote"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(52, "div"),
                  e.TgZ(53, "a", 10),
                  e._uU(54, "Send PDF On WhatsApp"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(55, "div"),
                  e.TgZ(56, "a", 9),
                  e.NdJ("click", function () {
                    return d.TermsCondition();
                  }),
                  e._uU(57, "Term & Conditions"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(58, "div", 11),
                  e._UZ(59, "div", 12),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(60, "div", 13),
                  e.YNc(61, Ja, 2, 6, "div", 14),
                  e.YNc(62, Kt, 8, 1, "div", 14),
                  e.YNc(63, W, 18, 5, "div", 14),
                  e.qZA(),
                  e.qZA(),
                  e.qZA()),
                  2 & a &&
                    (e.xp6(7),
                    e.Q6J("ngModel", d.SelectFormat),
                    e.xp6(1),
                    e.Q6J("ngForOf", d.emailQuoteData.slice(0, 3)),
                    e.xp6(4),
                    e.Q6J("ngModel", d.SelectHeaderFooter),
                    e.xp6(1),
                    e.Q6J("ngForOf", d.emailQuoteData.slice(3, 5)),
                    e.xp6(4),
                    e.Q6J("ngModel", d.SelectBank),
                    e.xp6(1),
                    e.Q6J("ngForOf", d.emailQuoteData.slice(5, 18)),
                    e.xp6(43),
                    e.Q6J("ngIf", d.viewPDF),
                    e.xp6(1),
                    e.Q6J("ngIf", d.emailQuote),
                    e.xp6(1),
                    e.Q6J("ngIf", d.termsCondition));
              },
              directives: [
                P.KE,
                P.hX,
                _e.gD,
                C.JJ,
                C.On,
                u.sg,
                ve.oG,
                u.O5,
                I.ey,
                re.S3,
                C._Y,
                C.JL,
                C.F,
                D.lW,
                de.Nt,
                C.Fj,
                H.s6,
              ],
              styles: [
                ".containt-Body[_ngcontent-%COMP%]{display:flex;background-color:#f3f3ec;height:79.8vh}.email-box[_ngcontent-%COMP%]{margin:5px}.checkbox-label[_ngcontent-%COMP%]{color:gray}.form-field[_ngcontent-%COMP%]{position:relative;margin:10px 0 15px}.selectWidth[_ngcontent-%COMP%]{width:100%}.link[_ngcontent-%COMP%]{color:#00f;text-decoration:none}.link[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}.vl[_ngcontent-%COMP%]{border-left:2px solid #333;height:100%}.Description[_ngcontent-%COMP%]{width:100%;resize:none}",
              ],
            })),
            s
          );
        })(),
        dt = (() => {
          class s {
            constructor(a) {
              (this.http = a),
                (this.getDefaultDatacommonURL =
                  "https://ffherp.co.in:446/api/Voucher/GetDefaultDatacommon"),
                (this.GetCommonDataNewlyUrl =
                  "https://ffherp.co.in:446/api/Voucher/GetCommonDataNewly"),
                (this.commanDataURL =
                  "https://ffherp.co.in:446/api/Voucher/GetCommonData"),
                (this.commanContactListURL =
                  "https://ffherp.co.in:446/api/Voucher/GetCommonContactList"),
                (this.getUserDataURL =
                  "https://ffherp.co.in:446/api/Voucher/GetUserEmailMobile"),
                (this.saveActualCommonActionURL =
                  "https://ffherp.co.in:446/api/Voucher/SaveActualCommonAction"),
                (this.saveSheduleCommonActionURL =
                  "https://ffherp.co.in:446/api/Voucher/SaveSheduleCommonAction"),
                (this.getUserEmailMobileUrl =
                  "https://ffherp.co.in:446/api/Voucher/GetUserEmailMobile");
            }
            getDefaultData(a) {
              return this.http.post(this.getDefaultDatacommonURL, a);
            }
            getCommonDataNewlyData(a) {
              return this.http.post(this.GetCommonDataNewlyUrl, a);
            }
            connanData(a) {
              return this.http.post(this.commanDataURL, a);
            }
            getContactList(a) {
              return this.http.post(this.commanContactListURL, a);
            }
            getUserlist(a) {
              return this.http.post(this.getUserDataURL, a);
            }
            getUserEmailMobile(a) {
              return this.http.post(this.getUserEmailMobileUrl, a);
            }
            saveActualCommanAction(a) {
              return this.http.post(this.saveActualCommonActionURL, a);
            }
            saveSheduleCommonAction(a) {
              return this.http.post(this.saveSheduleCommonActionURL, a);
            }
          }
          return (
            (s.ɵfac = function (a) {
              return new (a || s)(e.LFG(c.eN));
            }),
            (s.ɵprov = e.Yz7({
              token: s,
              factory: s.ɵfac,
              providedIn: "root",
            })),
            s
          );
        })();
      var fe = f(2081),
        Ie = f(9814),
        Le = f(3251);
      function Fe(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 25),
          e.TgZ(1, "h1"),
          e._uU(2, "Congratulation"),
          e.qZA(),
          e.qZA());
      }
      function lt(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 26),
          e.TgZ(1, "h1"),
          e._uU(2, "Better Luck Next Time"),
          e.qZA(),
          e.qZA());
      }
      function Ra(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 27),
          e.TgZ(1, "h1"),
          e._uU(2, "Not Your Fault"),
          e.qZA(),
          e.qZA());
      }
      function ut(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 28), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.Q6J("value", a.Id), e.xp6(1), e.hij("", a.Name, " ");
        }
      }
      function Qa(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div", 7),
            e.TgZ(1, "mat-form-field", 8),
            e.TgZ(2, "mat-label"),
            e._uU(3, "Delivery Date"),
            e.qZA(),
            e.TgZ(4, "input", 29),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().delivery = g);
            }),
            e.qZA(),
            e._UZ(5, "mat-datepicker-toggle", 14),
            e._UZ(6, "mat-datepicker", null, 30),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.MAs(7),
            d = e.oxw();
          e.xp6(4),
            e.Q6J("matDatepicker", a)("ngModel", d.delivery),
            e.xp6(1),
            e.Q6J("for", a);
        }
      }
      function Ve(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div", 7),
            e.TgZ(1, "mat-form-field", 8),
            e.TgZ(2, "mat-label"),
            e._uU(3, "Lost Date"),
            e.qZA(),
            e.TgZ(4, "input", 31),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().lostDate = g);
            }),
            e.qZA(),
            e._UZ(5, "mat-datepicker-toggle", 14),
            e._UZ(6, "mat-datepicker", null, 32),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.MAs(7),
            d = e.oxw();
          e.xp6(4),
            e.Q6J("matDatepicker", a)("ngModel", d.lostDate),
            e.xp6(1),
            e.Q6J("for", a);
        }
      }
      function mt(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div", 7),
            e.TgZ(1, "mat-form-field", 8),
            e.TgZ(2, "mat-label"),
            e._uU(3, "Closed Date"),
            e.qZA(),
            e.TgZ(4, "input", 31),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().closedDate = g);
            }),
            e.qZA(),
            e._UZ(5, "mat-datepicker-toggle", 14),
            e._UZ(6, "mat-datepicker", null, 33),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.MAs(7),
            d = e.oxw();
          e.xp6(4),
            e.Q6J("matDatepicker", a)("ngModel", d.closedDate),
            e.xp6(1),
            e.Q6J("for", a);
        }
      }
      function w(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 28), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.Q6J("value", a.Id), e.xp6(1), e.hij(" ", a.Name, "");
        }
      }
      function za(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div", 16),
            e.TgZ(1, "mat-form-field", 8),
            e.TgZ(2, "mat-label"),
            e._uU(3, "Lost Reason"),
            e.qZA(),
            e.TgZ(4, "mat-select", 34),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().LostReason = g);
            }),
            e.YNc(5, w, 2, 2, "mat-option", 10),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw();
          e.xp6(4),
            e.Q6J("ngModel", a.LostReason),
            e.xp6(1),
            e.Q6J("ngForOf", a.lostReasonData);
        }
      }
      function Ga(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 16),
          e.TgZ(1, "mat-form-field", 8),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Closed Reason"),
          e.qZA(),
          e._UZ(4, "input", 35),
          e.qZA(),
          e.qZA());
      }
      function ne(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 7),
          e.TgZ(1, "mat-form-field", 8),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Coustomer Pur Order No"),
          e.qZA(),
          e._UZ(4, "input", 36),
          e.qZA(),
          e.qZA());
      }
      function xt(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 7),
          e.TgZ(1, "mat-form-field", 8),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Value Lost"),
          e.qZA(),
          e._UZ(4, "input", 36),
          e.qZA(),
          e.qZA());
      }
      function F(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 8),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Lost To "),
          e.qZA(),
          e._UZ(3, "input", 37),
          e.qZA());
      }
      function $e(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 6),
          e.TgZ(1, "div", 7),
          e.TgZ(2, "mat-form-field", 8),
          e.TgZ(3, "mat-label"),
          e._uU(4, "Our Cost "),
          e.qZA(),
          e._UZ(5, "input", 38),
          e.qZA(),
          e.qZA(),
          e.TgZ(6, "div", 7),
          e.TgZ(7, "mat-form-field", 8),
          e.TgZ(8, "mat-label"),
          e._uU(9, " Order Value"),
          e.qZA(),
          e._UZ(10, "input", 39),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function Ba(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 28), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.MGl("value", "", a.Id, " "), e.xp6(1), e.hij(" ", a.Name, "");
        }
      }
      function ee(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "div", 6),
            e.TgZ(1, "div", 7),
            e.TgZ(2, "mat-form-field", 8),
            e.TgZ(3, "mat-label"),
            e._uU(4, "Instrument type"),
            e.qZA(),
            e.TgZ(5, "mat-select", 40),
            e.YNc(6, Ba, 2, 2, "mat-option", 10),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(7, "div", 7),
            e.TgZ(8, "mat-form-field", 8),
            e.TgZ(9, "mat-label"),
            e._uU(10, "Advance Received"),
            e.qZA(),
            e._UZ(11, "input", 41),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = e.oxw();
          e.xp6(6), e.Q6J("ngForOf", a.InstrumentTypeData);
        }
      }
      function Ye(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 6),
          e.TgZ(1, "div", 7),
          e.TgZ(2, "mat-form-field", 8),
          e.TgZ(3, "mat-label"),
          e._uU(4, "Bank Drawn ON"),
          e.qZA(),
          e._UZ(5, "input", 42),
          e.qZA(),
          e.qZA(),
          e.TgZ(6, "div", 7),
          e.TgZ(7, "mat-form-field", 8),
          e.TgZ(8, "mat-label"),
          e._uU(9, "Instument Number"),
          e.qZA(),
          e._UZ(10, "input", 43),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      let ge = (() => {
        class s {
          constructor(a, d) {
            (this.actionService = a),
              (this.global = d),
              (this.date = J()),
              (this.delivery = J()),
              (this.lostDate = J()),
              (this.closedDate = J()),
              (this.Lost = !1),
              (this.Won = !0),
              (this.Close = !1),
              (this.ValueLost = !1),
              (this.LostReason = "90");
          }
          getuserdata() {
            this.actionService
              .getUserlist({
                DBNAME: this.global.LOGGED_IN_USER.DbName,
                password: this.global.LOGGED_IN_USER.encryptPswd,
                id11: this.global.LOGGED_IN_USER.Username,
              })
              .subscribe((d) => {
                this.userlistData = JSON.parse(d);
              });
          }
          selectStatus(a) {
            console.log(a),
              12 == a
                ? ((this.Won = !0),
                  (this.Close = !1),
                  (this.Lost = !1),
                  (this.ValueLost = !1))
                : 13 == a
                ? ((this.Won = !1),
                  (this.Close = !1),
                  (this.Lost = !0),
                  (this.ValueLost = !0))
                : 15 == a &&
                  ((this.Won = !1),
                  (this.Close = !0),
                  (this.Lost = !1),
                  (this.ValueLost = !0));
          }
          closeActionForm(a) {}
          ngOnInit() {
            console.log(this.newlyActionData),
              (this.OpportunityStatusData = this.newlyActionData.Table9),
              (this.InstrumentTypeData = this.newlyActionData.Table11),
              (this.lostReasonData = this.newlyActionData.Table10),
              (this.SelectedStatus = 12),
              (this.LostReason = 90),
              console.log(this.SelectedStatus);
          }
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(e.Y36(dt), e.Y36(m.x));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-close-action"]],
            inputs: {
              EntityId: "EntityId",
              entityname: "entityname",
              getDefaultData: "getDefaultData",
              newlyActionData: "newlyActionData",
            },
            decls: 47,
            vars: 19,
            consts: [
              [1, "form-box", 3, "submit"],
              ["closeAction", "ngForm"],
              ["class", "heading1", 4, "ngIf"],
              ["class", "heading2", 4, "ngIf"],
              ["class", "heading3", 4, "ngIf"],
              [1, "contain"],
              [1, "col-lg-12", "row"],
              [1, "col-lg-6"],
              [1, "input-width"],
              ["name", "selectedStatus", 3, "ngModel", "ngModelChange"],
              [3, "value", 4, "ngFor", "ngForOf"],
              ["class", "col-lg-6", 4, "ngIf"],
              ["class", "col-lg-12", 4, "ngIf"],
              [
                "matInput",
                "",
                "name",
                "Date ",
                3,
                "matDatepicker",
                "ngModel",
                "ngModelChange",
              ],
              ["matSuffix", "", 3, "for"],
              ["Date", ""],
              [1, "col-lg-12"],
              ["class", "input-width", 4, "ngIf"],
              ["class", "col-lg-12 row", 4, "ngIf"],
              ["matInput", "", "ngModel", "", "name", "Remark"],
              [1, "link"],
              [1, "a"],
              [1, "row", "g-0"],
              [
                "mat-stroked-button",
                "",
                "matStepperNext",
                "",
                1,
                "col",
                "backButton",
              ],
              ["mat-stroked-button", "", 1, "col", "SaveAction"],
              [1, "heading1"],
              [1, "heading2"],
              [1, "heading3"],
              [3, "value"],
              [
                "matInput",
                "",
                "name",
                "Delivery ",
                3,
                "matDatepicker",
                "ngModel",
                "ngModelChange",
              ],
              ["Delivery", ""],
              [
                "matInput",
                "",
                "name",
                "LostDate ",
                3,
                "matDatepicker",
                "ngModel",
                "ngModelChange",
              ],
              ["LostDate", ""],
              ["ClosedDate", ""],
              ["name", "LostReason", 3, "ngModel", "ngModelChange"],
              ["matInput", "", "name", "ClosedReason", "ngModel", ""],
              ["matInput", "", "name", "Coustomer ", "ngModel", ""],
              ["matInput", "", "name", "LostTo", "ngModel", ""],
              ["matInput", "", "name", "OurCost", "ngModel", ""],
              ["matInput", "", "name", "OrderValue", "ngModel", ""],
              ["name", " Instrument", "ngModel", ""],
              ["matInput", "", "name", "AdvanceReceived ", "ngModel", ""],
              ["matInput", "", "name", "BankDrawnON ", "ngModel", ""],
              ["matInput", "", "name", "InstumentNumber ", "ngModel", ""],
            ],
            template: function (a, d) {
              if (1 & a) {
                const g = e.EpF();
                e.TgZ(0, "form", 0, 1),
                  e.NdJ("submit", function () {
                    e.CHM(g);
                    const v = e.MAs(1);
                    return d.closeActionForm(v.value);
                  }),
                  e.YNc(2, Fe, 3, 0, "div", 2),
                  e.YNc(3, lt, 3, 0, "div", 3),
                  e.YNc(4, Ra, 3, 0, "div", 4),
                  e.TgZ(5, "div", 5),
                  e.TgZ(6, "div", 6),
                  e.TgZ(7, "div", 7),
                  e.TgZ(8, "mat-form-field", 8),
                  e.TgZ(9, "mat-label"),
                  e._uU(10, "Opportunity Status"),
                  e.qZA(),
                  e.TgZ(11, "mat-select", 9),
                  e.NdJ("ngModelChange", function (v) {
                    return d.selectStatus(v);
                  })("ngModelChange", function (v) {
                    return (d.SelectedStatus = v);
                  }),
                  e.YNc(12, ut, 2, 2, "mat-option", 10),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(13, Qa, 8, 3, "div", 11),
                  e.YNc(14, Ve, 8, 3, "div", 11),
                  e.YNc(15, mt, 8, 3, "div", 11),
                  e.qZA(),
                  e.YNc(16, za, 6, 2, "div", 12),
                  e.YNc(17, Ga, 5, 0, "div", 12),
                  e.TgZ(18, "div", 6),
                  e.YNc(19, ne, 5, 0, "div", 11),
                  e.TgZ(20, "div", 7),
                  e.TgZ(21, "mat-form-field", 8),
                  e.TgZ(22, "mat-label"),
                  e._uU(23, " Date"),
                  e.qZA(),
                  e.TgZ(24, "input", 13),
                  e.NdJ("ngModelChange", function (v) {
                    return (d.date = v);
                  }),
                  e.qZA(),
                  e._UZ(25, "mat-datepicker-toggle", 14),
                  e._UZ(26, "mat-datepicker", null, 15),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(28, xt, 5, 0, "div", 11),
                  e.qZA(),
                  e.TgZ(29, "div", 16),
                  e.YNc(30, F, 4, 0, "mat-form-field", 17),
                  e.qZA(),
                  e.YNc(31, $e, 11, 0, "div", 18),
                  e.YNc(32, ee, 12, 1, "div", 18),
                  e.YNc(33, Ye, 11, 0, "div", 18),
                  e.TgZ(34, "div", 16),
                  e.TgZ(35, "mat-form-field", 8),
                  e.TgZ(36, "mat-label"),
                  e._uU(37, "Remark"),
                  e.qZA(),
                  e._UZ(38, "textarea", 19),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(39, "div", 20),
                  e.TgZ(40, "a", 21),
                  e._uU(41, " Send Alert"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(42, "div", 22),
                  e.TgZ(43, "button", 23),
                  e._uU(44, " Back "),
                  e.qZA(),
                  e.TgZ(45, "button", 24),
                  e._uU(46, "Save Action"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA();
              }
              if (2 & a) {
                const g = e.MAs(27);
                e.xp6(2),
                  e.Q6J("ngIf", d.Won),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Lost),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Close),
                  e.xp6(7),
                  e.Q6J("ngModel", d.SelectedStatus),
                  e.xp6(1),
                  e.Q6J("ngForOf", d.OpportunityStatusData),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Won),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Lost),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Close),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Lost),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Close),
                  e.xp6(2),
                  e.Q6J("ngIf", d.Won),
                  e.xp6(5),
                  e.Q6J("matDatepicker", g)("ngModel", d.date),
                  e.xp6(1),
                  e.Q6J("for", g),
                  e.xp6(3),
                  e.Q6J("ngIf", d.ValueLost),
                  e.xp6(2),
                  e.Q6J("ngIf", d.Lost),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Won),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Won),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Won);
              }
            },
            directives: [
              C._Y,
              C.JL,
              C.F,
              u.O5,
              P.KE,
              P.hX,
              _e.gD,
              C.JJ,
              C.On,
              u.sg,
              de.Nt,
              G.hl,
              C.Fj,
              G.nW,
              P.R9,
              G.Mq,
              D.lW,
              fe.Ic,
              I.ey,
            ],
            styles: [
              ".input-width[_ngcontent-%COMP%]{width:100%}textarea[_ngcontent-%COMP%]{height:60px;resize:none}.form-box[_ngcontent-%COMP%]{margin:5px;min-height:480px}.heading1[_ngcontent-%COMP%]{text-align:center;background-color:green;color:#fff;height:50px}.heading2[_ngcontent-%COMP%]{text-align:center;background-color:#c95d42;color:#fff;height:50px}.heading3[_ngcontent-%COMP%]{text-align:center;background-color:#dfcd2b;color:#fff;height:50px}button[_ngcontent-%COMP%]{width:50%;height:45px;margin:5px;color:#fff}.SaveAction[_ngcontent-%COMP%]{background-color:green}.backButton[_ngcontent-%COMP%]{background-color:red}.link[_ngcontent-%COMP%]{text-align:end;margin:10px 0}a[_ngcontent-%COMP%]{text-decoration:none;color:#dc143c}a[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}.contain[_ngcontent-%COMP%]{min-height:530px;margin-top:10px}",
            ],
          })),
          s
        );
      })();
      function $(s, h) {
        if (
          (1 & s && (e.TgZ(0, "mat-radio-button", 28), e._uU(1), e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit,
            d = e.oxw();
          e.s9C("name", a.Name),
            e.Q6J("value", a.Id)("checked", a.Id == d.DefaultSelect),
            e.xp6(1),
            e.hij(" ", a.Name, " ");
        }
      }
      function me(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 29), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.s9C("value", a.Id), e.xp6(1), e.hij(" ", a.Name, "");
        }
      }
      function Ze(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 29), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.s9C("value", a.Id), e.xp6(1), e.hij(" ", a.Name, "");
        }
      }
      function we(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div", 30),
            e.TgZ(1, "div", 8),
            e.TgZ(2, "mat-checkbox", 9),
            e.TgZ(3, "mat-form-field", 31),
            e.TgZ(4, "mat-label"),
            e._uU(5, "E-mail"),
            e.qZA(),
            e.TgZ(6, "input", 32),
            e.NdJ("ngModelChange", function (g) {
              return (e.CHM(a).$implicit.ContactEmail = g);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(7, "div", 8),
            e.TgZ(8, "mat-checkbox", 9),
            e.TgZ(9, "mat-form-field", 31),
            e.TgZ(10, "mat-label"),
            e._uU(11, "SMS"),
            e.qZA(),
            e.TgZ(12, "input", 33),
            e.NdJ("ngModelChange", function (g) {
              return (e.CHM(a).$implicit.ContactMobile = g);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = h.$implicit;
          e.xp6(6),
            e.Q6J("ngModel", a.ContactEmail),
            e.xp6(6),
            e.Q6J("ngModel", a.ContactMobile);
        }
      }
      function Va(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 29), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.s9C("value", a.UserId), e.xp6(1), e.hij(" ", a.UserName, "");
        }
      }
      function $a(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div", 30),
            e.TgZ(1, "div", 8),
            e.TgZ(2, "mat-form-field", 31),
            e.TgZ(3, "mat-label"),
            e._uU(4, "E-mail"),
            e.qZA(),
            e.TgZ(5, "input", 34),
            e.NdJ("ngModelChange", function (g) {
              return (e.CHM(a).$implicit.UserEmail = g);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(6, "div", 8),
            e.TgZ(7, "mat-form-field", 31),
            e.TgZ(8, "mat-label"),
            e._uU(9, "SMS"),
            e.qZA(),
            e.TgZ(10, "input", 35),
            e.NdJ("ngModelChange", function (g) {
              return (e.CHM(a).$implicit.UserMobile = g);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = h.$implicit;
          e.xp6(5),
            e.Q6J("ngModel", a.UserEmail),
            e.xp6(5),
            e.Q6J("ngModel", a.UserMobile);
        }
      }
      let Ka = (() => {
        class s {
          constructor(a, d) {
            (this.actionService = a),
              (this.global = d),
              (this.scheduleActionDate = J().format("YYYY-MM-DD")),
              (this.today = new Date());
          }
          saveActionForm(a) {
            let d = {
              Dbname: this.global.LOGGED_IN_USER.DbName,
              Password: this.global.LOGGED_IN_USER.encryptPswd,
              EntityId: this.EntityId,
              EntityName: this.entityname,
              ScheduleActionType: this.ScheduleActionType,
              ScheduleActivityType: a.ScheduleActivityType,
              Discussions: a.Discussions,
              ScheduleActionDate: J(a.scheduleActionDate).format("DD/MM/YYYY"),
              ScheduleActionTime: a.ScheduleActionTime,
              ContactId: this.getDefaultData[0].ContactId,
              ScheduleUserId: this.getDefaultData[0].ScheduleUserId,
              UpdatedBy: this.global.LOGGED_IN_USER.Username,
              FlagUpdateSheduleAction: "",
              NextOtherContactInfo: "",
              Id: this.getDefaultData[0].ScheduleActionId,
              CallBackIn: "",
              arr: [
                "false",
                "false",
                "false",
                "false",
                "false",
                "false",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
              ],
              Hours: "hh",
            };
            this.actionService.saveSheduleCommonAction(d).subscribe((g) => {});
          }
          updateOptionalLabel() {}
          getuserdata(a) {
            this.actionService
              .getUserEmailMobile({
                DBNAME: this.global.LOGGED_IN_USER.DbName,
                password: this.global.LOGGED_IN_USER.encryptPswd,
                id11: a,
              })
              .subscribe((g) => {
                this.selectedUserData = JSON.parse(g);
              });
          }
          ngOnInit() {}
          ngAfterViewInit() {
            (this.SelectActionData = this.newlyActionData.Table6),
              (this.activitydata = this.newlyActionData.Table),
              (this.moveStageData = this.newlyActionData.Table1),
              (this.contactlistData = this.newlyActionData.Table2),
              (this.activityByData = this.newlyActionData.Table3),
              (this.CoustamerContactData = this.newlyActionData.Table4),
              (this.DefaultSelect = this.getDefaultData[0].ScheduleActionType),
              (this.CoustomerContactName = this.contactlistData[0].Id),
              (this.ManagerAlert = this.getDefaultData[0].ScheduleUserId),
              (this.selectedUserData = this.newlyActionData.Table4),
              console.log(this.newlyActionData),
              console.log(this.ManagerAlert);
          }
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(e.Y36(dt), e.Y36(m.x));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-next-action"]],
            inputs: {
              EntityId: "EntityId",
              entityname: "entityname",
              getDefaultData: "getDefaultData",
              newlyActionData: "newlyActionData",
            },
            decls: 61,
            vars: 13,
            consts: [
              ["mat-dialog-title", "", 1, "heading"],
              [3, "submit"],
              ["nextAction", "ngForm"],
              [1, "SelectActionType-Checkbox"],
              [
                "aria-label",
                "Select-Action-Type",
                "name",
                "ScheduleActionType",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [
                "color",
                "primary",
                3,
                "value",
                "name",
                "checked",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "contain2"],
              [1, "row", "g-0"],
              [1, "col-lg-6"],
              [1, "input-width"],
              ["name", "ScheduleActivityType", "ngModel", ""],
              [3, "value", 4, "ngFor", "ngForOf"],
              [1, "col-lg-12"],
              ["matInput", "", "ngModel", "", "name", "Discussions"],
              [1, "row", "col-12"],
              ["matInput", "", "name", "alertBefore", "ngModel", ""],
              [1, "col-lg-6", "row", "g-0"],
              [
                "matInput",
                "",
                "name",
                "scheduleActionDate",
                3,
                "matDatepicker",
                "max",
                "ngModel",
                "ngModelChange",
              ],
              ["matSuffix", "", 3, "for"],
              ["ScheduleActionDate", ""],
              [
                "matInput",
                "",
                "type",
                "time",
                "name",
                "ScheduleActionTime",
                "ngModel",
                "",
              ],
              [1, "col-lg-10"],
              ["name", "CoustomerContactName", 3, "ngModel", "ngModelChange"],
              [1, "col-lg-2"],
              ["class", "col-12 row g-0", 4, "ngFor", "ngForOf"],
              ["name", "ManagerAlert", 3, "ngModel", "ngModelChange"],
              [
                "mat-stroked-button",
                "",
                "matStepperPrevious",
                "",
                1,
                "col",
                "backButton",
              ],
              [
                "type",
                "submit",
                "mat-stroked-button",
                "",
                "matStepperNext",
                "",
                1,
                "col",
                "border",
                "saveButton",
              ],
              ["color", "primary", 3, "value", "name", "checked"],
              [3, "value"],
              [1, "col-12", "row", "g-0"],
              [1, "input-ckeck"],
              [
                "matInput",
                "",
                "name",
                "contactEmail",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [
                "name",
                "ContactMobile",
                "matInput",
                "",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [
                "matInput",
                "",
                "name",
                "UserEmail",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [
                "name",
                "UserMobile",
                "matInput",
                "",
                3,
                "ngModel",
                "ngModelChange",
              ],
            ],
            template: function (a, d) {
              if (1 & a) {
                const g = e.EpF();
                e.TgZ(0, "h1", 0),
                  e._uU(1, "Your Next Action"),
                  e.qZA(),
                  e.TgZ(2, "form", 1, 2),
                  e.NdJ("submit", function () {
                    e.CHM(g);
                    const v = e.MAs(3);
                    return d.saveActionForm(v.value);
                  }),
                  e.TgZ(4, "div", 3),
                  e.TgZ(5, "mat-radio-group", 4),
                  e.NdJ("ngModelChange", function (v) {
                    return (d.ScheduleActionType = v);
                  })("ngModelChange", function () {
                    return d.updateOptionalLabel();
                  }),
                  e.YNc(6, $, 2, 4, "mat-radio-button", 5),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(7, "div", 6),
                  e.TgZ(8, "div", 7),
                  e.TgZ(9, "div", 8),
                  e.TgZ(10, "mat-form-field", 9),
                  e.TgZ(11, "mat-label"),
                  e._uU(12, "Activity Type"),
                  e.qZA(),
                  e.TgZ(13, "mat-select", 10),
                  e.YNc(14, me, 2, 2, "mat-option", 11),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(15, "div", 12),
                  e.TgZ(16, "mat-form-field", 9),
                  e.TgZ(17, "mat-label"),
                  e._uU(18, "What To Do"),
                  e.qZA(),
                  e._UZ(19, "textarea", 13),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(20, "div", 14),
                  e.TgZ(21, "div", 8),
                  e.TgZ(22, "mat-form-field", 9),
                  e.TgZ(23, "mat-label"),
                  e._uU(24, "Alert Before"),
                  e.qZA(),
                  e._UZ(25, "input", 15),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(26, "div", 16),
                  e.TgZ(27, "div", 8),
                  e.TgZ(28, "mat-form-field", 9),
                  e.TgZ(29, "mat-label"),
                  e._uU(30, "On Date Time"),
                  e.qZA(),
                  e.TgZ(31, "input", 17),
                  e.NdJ("ngModelChange", function (v) {
                    return (d.scheduleActionDate = v);
                  }),
                  e.qZA(),
                  e._UZ(32, "mat-datepicker-toggle", 18),
                  e._UZ(33, "mat-datepicker", null, 19),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(35, "div", 8),
                  e.TgZ(36, "mat-form-field", 9),
                  e._UZ(37, "input", 20),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(38, "div", 7),
                  e.TgZ(39, "div", 21),
                  e.TgZ(40, "mat-form-field", 9),
                  e.TgZ(41, "mat-label"),
                  e._uU(42, "Coustomer Contact Name"),
                  e.qZA(),
                  e.TgZ(43, "mat-select", 22),
                  e.NdJ("ngModelChange", function (v) {
                    return (d.CoustomerContactName = v);
                  }),
                  e.YNc(44, Ze, 2, 2, "mat-option", 11),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(45, "div", 23),
                  e.TgZ(46, "mat-checkbox"),
                  e._uU(47, "Other"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(48, we, 13, 2, "div", 24),
                  e.TgZ(49, "div", 12),
                  e.TgZ(50, "mat-form-field", 9),
                  e.TgZ(51, "mat-label"),
                  e._uU(52, "Manager Alert"),
                  e.qZA(),
                  e.TgZ(53, "mat-select", 25),
                  e.NdJ("ngModelChange", function (v) {
                    return d.getuserdata(v);
                  })("ngModelChange", function (v) {
                    return (d.ManagerAlert = v);
                  }),
                  e.YNc(54, Va, 2, 2, "mat-option", 11),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(55, $a, 11, 2, "div", 24),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(56, "div", 7),
                  e.TgZ(57, "button", 26),
                  e._uU(58, " Back "),
                  e.qZA(),
                  e.TgZ(59, "button", 27),
                  e._uU(60, " Save "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA();
              }
              if (2 & a) {
                const g = e.MAs(34);
                e.xp6(5),
                  e.Q6J("ngModel", d.ScheduleActionType),
                  e.xp6(1),
                  e.Q6J("ngForOf", d.SelectActionData),
                  e.xp6(8),
                  e.Q6J("ngForOf", d.activitydata),
                  e.xp6(17),
                  e.Q6J("matDatepicker", g)("max", d.today)(
                    "ngModel",
                    d.scheduleActionDate
                  ),
                  e.xp6(1),
                  e.Q6J("for", g),
                  e.xp6(11),
                  e.Q6J("ngModel", d.CoustomerContactName),
                  e.xp6(1),
                  e.Q6J("ngForOf", d.contactlistData),
                  e.xp6(4),
                  e.Q6J("ngForOf", d.CoustamerContactData),
                  e.xp6(5),
                  e.Q6J("ngModel", d.ManagerAlert),
                  e.xp6(1),
                  e.Q6J("ngForOf", d.activityByData),
                  e.xp6(1),
                  e.Q6J("ngForOf", d.selectedUserData);
              }
            },
            directives: [
              V.uh,
              C._Y,
              C.JL,
              C.F,
              Ie.VQ,
              C.JJ,
              C.On,
              u.sg,
              P.KE,
              P.hX,
              _e.gD,
              de.Nt,
              C.Fj,
              G.hl,
              G.nW,
              P.R9,
              G.Mq,
              ve.oG,
              D.lW,
              fe.fd,
              fe.Ic,
              Ie.U0,
              I.ey,
            ],
            styles: [
              "button[_ngcontent-%COMP%]{width:50%;height:45px;margin:5px;color:#fff}.saveButton[_ngcontent-%COMP%]{background-color:green}.backButton[_ngcontent-%COMP%]{background-color:red}mat-radio-button[_ngcontent-%COMP%]{margin:0 10px}textarea[_ngcontent-%COMP%]{height:60px;resize:none}.mat-tab-group[_ngcontent-%COMP%]{max-height:100vh!important}.SelectActionType-Checkbox[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin:10px 0}.input-width[_ngcontent-%COMP%]{width:100%}.contain2[_ngcontent-%COMP%]{margin:10px;min-height:518px}.mat-dialog-content[_ngcontent-%COMP%]{display:block;margin:0!important;padding:0!important;max-height:100vh!important;overflow:auto}.heading[_ngcontent-%COMP%]{top:0px;position:sticky;text-align:center;background-color:#e6907b;color:#fff;padding:5px 0;padding:0!important;margin:0!important}.mat-dialog-actions[_ngcontent-%COMP%]{margin-bottom:0!important}.form-contain[_ngcontent-%COMP%]{height:100%}.input-ckeck[_ngcontent-%COMP%]{width:136px!important}",
            ],
          })),
          s
        );
      })();
      function B(s, h) {
        if ((1 & s && e._UZ(0, "app-close-action", 52), 2 & s)) {
          const a = e.oxw();
          e.Q6J("EntityId", a.EntityId)("entityname", a.entityname)(
            "newlyActionData",
            a.newlyActionData
          )("getDefaultData", a.getDefaultData);
        }
      }
      function ct(s, h) {
        if (
          (1 & s && (e.TgZ(0, "mat-radio-button", 53), e._uU(1), e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit,
            d = e.oxw();
          e.s9C("name", a.Name),
            e.Q6J("value", a.Id)("checked", a.Id == d.DefaultSelect),
            e.xp6(1),
            e.hij(" ", a.Name, " ");
        }
      }
      function Xa(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 54), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.s9C("value", a.Id), e.xp6(1), e.hij(" ", a.Name, "");
        }
      }
      function ta(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 54), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.s9C("value", a.Id), e.xp6(1), e.hij(" ", a.Name, "");
        }
      }
      function aa(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 54), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.s9C("value", a.Id), e.xp6(1), e.hij(" ", a.Name, "");
        }
      }
      function en(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 54), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.s9C("value", a.UserId), e.xp6(1), e.hij(" ", a.UserName, "");
        }
      }
      function tn(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 55),
          e.TgZ(1, "div", 35),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Email Report"),
          e.qZA(),
          e.TgZ(4, "mat-checkbox", 56),
          e._uU(5, "Client"),
          e.qZA(),
          e.TgZ(6, "mat-checkbox", 57),
          e._uU(7, "Owner"),
          e.qZA(),
          e.qZA(),
          e.TgZ(8, "div", 35),
          e.TgZ(9, "mat-form-field", 14),
          e.TgZ(10, "mat-label"),
          e._uU(11, "DCR No."),
          e.qZA(),
          e._UZ(12, "input", 58),
          e.qZA(),
          e.qZA(),
          e.TgZ(13, "div", 35),
          e.TgZ(14, "mat-form-field", 14),
          e.TgZ(15, "mat-label"),
          e._uU(16, "Other Cost"),
          e.qZA(),
          e._UZ(17, "input", 59),
          e.qZA(),
          e.qZA(),
          e.qZA());
      }
      function an(s, h) {
        if (
          (1 & s && (e.TgZ(0, "mat-radio-button", 60), e._uU(1), e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.s9C("name", a.Name),
            e.Q6J("value", a.Id),
            e.xp6(1),
            e.hij(" ", a.Name, " ");
        }
      }
      function nn(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "button", 61),
            e.NdJ("click", function () {
              return e.CHM(a), e.oxw().CloseLead();
            }),
            e._uU(1, " Close Lead "),
            e.qZA();
        }
      }
      function sn(s, h) {
        1 & s &&
          (e.TgZ(0, "button", 62), e._uU(1, " Convert To Lead "), e.qZA());
      }
      function rn(s, h) {
        if ((1 & s && e._UZ(0, "app-next-action", 52), 2 & s)) {
          const a = e.oxw();
          e.Q6J("EntityId", a.EntityId)("entityname", a.entityname)(
            "newlyActionData",
            a.newlyActionData
          )("getDefaultData", a.getDefaultData);
        }
      }
      let na = (() => {
        class s {
          constructor(a, d, g) {
            (this.actionService = a),
              (this.global = d),
              (this.data = g),
              (this.TabIndex = 0),
              (this.nextAction = !1),
              (this.closeAction = !1),
              (this.actionStartDate = J()),
              (this.actionEndDate = J()),
              (this.EntityId = g.EntityID),
              (this.EntityName = g.EntityName),
              (this.clientNo = g.clientNo),
              "POList" === this.EntityName
                ? ((this.activityType = "SoActivitytype"),
                  (this.stageType = "SOStage"),
                  (this.entityname = "PO"))
                : "SalesOrderLIst" === this.EntityName
                ? ((this.activityType = "SoActivitytype"),
                  (this.stageType = "SOStage"),
                  (this.entityname = "SO"))
                : "Prospect" === this.EntityName
                ? ((this.activityType = "ProspectContactCode"),
                  (this.stageType = "ProspectSatge"),
                  (this.entityname = "Prospect"))
                : "Lead" === this.EntityName
                ? ((this.activityType = "Lead"),
                  (this.stageType = "Lead"),
                  (this.entityname = "Lead"))
                : "Payable" === this.EntityName
                ? ((this.activityType = "PayableActivityType"),
                  (this.stageType = "PayableStage"),
                  (this.entityname = "Payable"))
                : "MoList" === this.EntityName
                ? ((this.activityType = "MOActivityType"),
                  (this.stageType = "MOStage"),
                  (this.entityname = "MO"))
                : "MIList" === this.EntityName
                ? ((this.activityType = "MIActivityType"),
                  (this.stageType = "MIStage"),
                  (this.entityname = "MI"))
                : "Repair" === this.EntityName
                ? ((this.activityType = "RepairActivityType"),
                  (this.stageType = "RepairStage"),
                  (this.entityname = "Repair"))
                : "Payment" === this.EntityName
                ? ((this.activityType = "PaymentActivityType"),
                  (this.stageType = "PaymentStage"),
                  (this.entityname = "Payment"))
                : "AMC" === this.EntityName &&
                  ((this.activityType = "AmcActivityType"),
                  (this.stageType = "Amcstage"),
                  (this.entityname = "Amc")),
              this.actionService
                .getDefaultData({
                  DBNAME: this.global.LOGGED_IN_USER.DbName,
                  password: this.global.LOGGED_IN_USER.encryptPswd,
                  EntityId: this.EntityId,
                  EntityName: this.entityname,
                })
                .subscribe((v) => {
                  (this.getDefaultData = JSON.parse(v)),
                    (this.DefaultSelect =
                      this.getDefaultData[0].ScheduleActionType),
                    (this.CoustomerContactName =
                      this.getDefaultData[0].ContactId),
                    (this.ActivityType =
                      this.getDefaultData[0].NextScheduleActivityType),
                    (this.MoveTostage = this.getDefaultData[0].MoveToStage),
                    (this.ActivityBy = this.getDefaultData[0].ScheduleUserId),
                    console.log(this.ActivityType),
                    console.log(this.getDefaultData),
                    this.getNewlyData();
                });
          }
          get ConvertToLeadButton() {
            return ["prospect"].includes(this.EntityName.toLowerCase());
          }
          get CloseLeadButton() {
            return [
              "lead",
              "payment",
              "salesorderlist",
              "polist",
              "payable",
              "ticket",
              "amc",
              "repair",
              "work",
              "molist",
              "milist",
              "voucher",
            ].includes(this.EntityName.toLowerCase());
          }
          get emailReport() {
            return ["ticket"].includes(this.EntityName.toLowerCase());
          }
          updateOptionalLabel() {}
          CloseLead() {
            this.closeAction = !0;
          }
          NextAction() {
            this.nextAction = !0;
          }
          getNewlyData() {
            this.actionService
              .getCommonDataNewlyData({
                DBNAME: this.global.LOGGED_IN_USER.DbName,
                password: this.global.LOGGED_IN_USER.encryptPswd,
                EntityId: this.EntityId,
                EntityName: this.entityname,
                CompanyId: this.getDefaultData[0].clientId,
                ContactId: this.getDefaultData[0].ContactId,
                TargetOwner: this.getDefaultData[0].OwnerId,
                ActionActor: this.getDefaultData[0].UpdatedBy,
              })
              .subscribe((d) => {
                (this.newlyActionData = JSON.parse(d)),
                  (this.SelectActionData = this.newlyActionData.Table6),
                  (this.activitydata = this.newlyActionData.Table),
                  (this.moveStageData = this.newlyActionData.Table1),
                  (this.contactlistData = this.newlyActionData.Table2),
                  (this.activityByData = this.newlyActionData.Table3),
                  (this.notContactableData = this.newlyActionData.Table7);
              });
          }
          ActionForm(a) {
            J(a.actionStartDate).format("DD/MM/YYYY"),
              J(a.actionEndDate).format("DD/MM/YYYY");
          }
          ngOnInit() {}
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(e.Y36(dt), e.Y36(m.x), e.Y36(V.WI));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-action"]],
            features: [
              e._Bn([
                { provide: I.Ad, useValue: "en-GB" },
                { provide: I._A, useClass: te, deps: [I.Ad, ye] },
                { provide: I.sG, useValue: Ee },
              ]),
            ],
            decls: 111,
            vars: 23,
            consts: [
              ["selectedIndex", "1"],
              ["stepper", ""],
              [
                3,
                "EntityId",
                "entityname",
                "newlyActionData",
                "getDefaultData",
                4,
                "ngIf",
              ],
              [1, "heading"],
              [3, "submit"],
              ["action", "ngForm"],
              [1, "form-contain"],
              [1, "SelectActionType-Checkbox"],
              [
                "aria-label",
                "Select-Action-Type",
                "name",
                "SelectActionType",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [
                "color",
                "primary",
                3,
                "value",
                "name",
                "checked",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "mat-stretch-tabs",
                "",
                1,
                "connent_And_not_contactable",
                3,
                "selectedIndex",
                "selectedIndexChange",
              ],
              ["label", "Connected"],
              [1, "row", "contain"],
              [1, "col-lg-6"],
              [1, "input-width"],
              ["name", "ActivityType", 3, "ngModel", "ngModelChange"],
              [3, "value", 4, "ngFor", "ngForOf"],
              ["name", "MoveTostage", 3, "ngModel", "ngModelChange"],
              [1, "col-lg-12"],
              ["matInput", "", "name", "Discussion", "ngModel", ""],
              [1, "row", "col-lg-6"],
              [1, "col-lg-7"],
              [
                "matInput",
                "",
                "name",
                "actionStartDate",
                3,
                "matDatepicker",
                "ngModel",
                "ngModelChange",
              ],
              ["matSuffix", "", 3, "for"],
              ["ActionStartDate", ""],
              [1, "col-lg-5"],
              [
                "matInput",
                "",
                "type",
                "time",
                "name",
                "ActionStartTime",
                "ngModel",
                "",
              ],
              [
                "matInput",
                "",
                "name",
                "actionEndDate",
                3,
                "matDatepicker",
                "ngModel",
                "ngModelChange",
              ],
              ["ActionEndDate", ""],
              [
                "matInput",
                "",
                "type",
                "time",
                "name",
                "ActionEndTime",
                "ngModel",
                "",
              ],
              [1, "col-lg-10"],
              ["name", "CoustomerContactName", 3, "ngModel", "ngModelChange"],
              [1, "col-lg-2"],
              ["name", "ActivityBy", 3, "ngModel", "ngModelChange"],
              [1, "col-lg-12", "row"],
              [1, "col-lg-4"],
              ["matInput", "", "name", "TravelTime", "ngModel", ""],
              ["matInput", "", "name", "TravelCost", "ngModel", ""],
              ["matInput", "", "name", "Distance", "ngModel", ""],
              ["class", "row col-lg-12", 4, "ngIf"],
              ["label", "Not Contactable"],
              [1, "contain"],
              [1, "row", "g-0"],
              [1, "not-Connect-Checkbox"],
              [1, "row"],
              [
                "color",
                "primary",
                "class",
                "col-lg-5",
                3,
                "value",
                "name",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "col"],
              ["matInput", "", "name", "CallBackIn", "ngModel", ""],
              ["matInput", ""],
              [
                "class",
                "col CloseConvertButton",
                "mat-stroked-button",
                "",
                "matStepperPrevious",
                "",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "class",
                "col CloseConvertButton",
                "mat-stroked-button",
                "",
                4,
                "ngIf",
              ],
              [
                "matStepperNext",
                "",
                "mat-stroked-button",
                "",
                "type",
                "submit",
                1,
                "col",
                "nextActionButton",
                3,
                "click",
              ],
              [
                3,
                "EntityId",
                "entityname",
                "newlyActionData",
                "getDefaultData",
              ],
              ["color", "primary", 3, "value", "name", "checked"],
              [3, "value"],
              [1, "row", "col-lg-12"],
              ["name", "Client", "ngModel", "", 1, "pe-2"],
              ["name", "Owner", "ngModel", ""],
              ["matInput", "", "name", "DCRNO", "ngModel", ""],
              ["matInput", "", "name", "OtherCost", "ngModel", ""],
              ["color", "primary", 1, "col-lg-5", 3, "value", "name"],
              [
                "mat-stroked-button",
                "",
                "matStepperPrevious",
                "",
                1,
                "col",
                "CloseConvertButton",
                3,
                "click",
              ],
              ["mat-stroked-button", "", 1, "col", "CloseConvertButton"],
            ],
            template: function (a, d) {
              if (1 & a) {
                const g = e.EpF();
                e.TgZ(0, "mat-stepper", 0, 1),
                  e.TgZ(2, "mat-step"),
                  e.YNc(3, B, 1, 4, "app-close-action", 2),
                  e.qZA(),
                  e.TgZ(4, "mat-step"),
                  e.TgZ(5, "h1", 3),
                  e._uU(6, " What Is Your Interaction "),
                  e.qZA(),
                  e.TgZ(7, "form", 4, 5),
                  e.NdJ("submit", function () {
                    e.CHM(g);
                    const v = e.MAs(8);
                    return d.ActionForm(v.value);
                  }),
                  e.TgZ(9, "div", 6),
                  e.TgZ(10, "div", 7),
                  e.TgZ(11, "mat-radio-group", 8),
                  e.NdJ("ngModelChange", function (v) {
                    return (d.SelectActionType = v);
                  })("ngModelChange", function () {
                    return d.updateOptionalLabel();
                  }),
                  e.YNc(12, ct, 2, 4, "mat-radio-button", 9),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(13, "mat-tab-group", 10),
                  e.NdJ("selectedIndexChange", function (v) {
                    return (d.TabIndex = v);
                  }),
                  e.TgZ(14, "mat-tab", 11),
                  e.TgZ(15, "div", 12),
                  e.TgZ(16, "div", 13),
                  e.TgZ(17, "mat-form-field", 14),
                  e.TgZ(18, "mat-label"),
                  e._uU(19, "Activity Type"),
                  e.qZA(),
                  e.TgZ(20, "mat-select", 15),
                  e.NdJ("ngModelChange", function (v) {
                    return (d.ActivityType = v);
                  }),
                  e.YNc(21, Xa, 2, 2, "mat-option", 16),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(22, "div", 13),
                  e.TgZ(23, "mat-form-field", 14),
                  e.TgZ(24, "mat-label"),
                  e._uU(25, "Move To Stage"),
                  e.qZA(),
                  e.TgZ(26, "mat-select", 17),
                  e.NdJ("ngModelChange", function (v) {
                    return (d.MoveTostage = v);
                  }),
                  e.YNc(27, ta, 2, 2, "mat-option", 16),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(28, "div", 18),
                  e.TgZ(29, "mat-form-field", 14),
                  e.TgZ(30, "mat-label"),
                  e._uU(31, "Discussion / Work Done"),
                  e.qZA(),
                  e._UZ(32, "textarea", 19),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(33, "div", 20),
                  e.TgZ(34, "div", 21),
                  e.TgZ(35, "mat-form-field", 14),
                  e.TgZ(36, "mat-label"),
                  e._uU(37, "Form Date Time"),
                  e.qZA(),
                  e.TgZ(38, "input", 22),
                  e.NdJ("ngModelChange", function (v) {
                    return (d.actionStartDate = v);
                  }),
                  e.qZA(),
                  e._UZ(39, "mat-datepicker-toggle", 23),
                  e._UZ(40, "mat-datepicker", null, 24),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(42, "div", 25),
                  e.TgZ(43, "mat-form-field", 14),
                  e._UZ(44, "input", 26),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(45, "div", 20),
                  e.TgZ(46, "div", 21),
                  e.TgZ(47, "mat-form-field", 14),
                  e.TgZ(48, "mat-label"),
                  e._uU(49, "To Date Time"),
                  e.qZA(),
                  e.TgZ(50, "input", 27),
                  e.NdJ("ngModelChange", function (v) {
                    return (d.actionEndDate = v);
                  }),
                  e.qZA(),
                  e._UZ(51, "mat-datepicker-toggle", 23),
                  e._UZ(52, "mat-datepicker", null, 28),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(54, "div", 25),
                  e.TgZ(55, "mat-form-field", 14),
                  e._UZ(56, "input", 29),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(57, "div", 30),
                  e.TgZ(58, "mat-form-field", 14),
                  e.TgZ(59, "mat-label"),
                  e._uU(60, "Coustomer Contact Name"),
                  e.qZA(),
                  e.TgZ(61, "mat-select", 31),
                  e.NdJ("ngModelChange", function (v) {
                    return (d.CoustomerContactName = v);
                  }),
                  e.YNc(62, aa, 2, 2, "mat-option", 16),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(63, "div", 32),
                  e.TgZ(64, "mat-checkbox"),
                  e._uU(65, "Other"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(66, "div", 18),
                  e.TgZ(67, "mat-form-field", 14),
                  e.TgZ(68, "mat-label"),
                  e._uU(69, "Activity By"),
                  e.qZA(),
                  e.TgZ(70, "mat-select", 33),
                  e.NdJ("ngModelChange", function (v) {
                    return (d.ActivityBy = v);
                  }),
                  e.YNc(71, en, 2, 2, "mat-option", 16),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(72, "div", 34),
                  e.TgZ(73, "div", 35),
                  e.TgZ(74, "mat-form-field", 14),
                  e.TgZ(75, "mat-label"),
                  e._uU(76, "Travel Time"),
                  e.qZA(),
                  e._UZ(77, "input", 36),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(78, "div", 35),
                  e.TgZ(79, "mat-form-field", 14),
                  e.TgZ(80, "mat-label"),
                  e._uU(81, "Travel Cost"),
                  e.qZA(),
                  e._UZ(82, "input", 37),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(83, "div", 35),
                  e.TgZ(84, "mat-form-field", 14),
                  e.TgZ(85, "mat-label"),
                  e._uU(86, "Distance"),
                  e.qZA(),
                  e._UZ(87, "input", 38),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(88, tn, 18, 0, "div", 39),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(89, "mat-tab", 40),
                  e.TgZ(90, "div", 41),
                  e.TgZ(91, "div", 42),
                  e.TgZ(92, "div", 43),
                  e.TgZ(93, "mat-radio-group", 44),
                  e.YNc(94, an, 2, 3, "mat-radio-button", 45),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(95, "div", 46),
                  e.TgZ(96, "mat-form-field", 14),
                  e.TgZ(97, "mat-label"),
                  e._uU(98, "Call Back In"),
                  e.qZA(),
                  e._UZ(99, "input", 47),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(100, "div", 46),
                  e.TgZ(101, "mat-form-field", 14),
                  e._UZ(102, "mat-label"),
                  e._UZ(103, "input", 48),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(104, "div", 42),
                  e.YNc(105, nn, 2, 0, "button", 49),
                  e.YNc(106, sn, 2, 0, "button", 50),
                  e.TgZ(107, "button", 51),
                  e.NdJ("click", function () {
                    return d.NextAction();
                  }),
                  e._uU(108, " Next Action "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(109, "mat-step"),
                  e.YNc(110, rn, 1, 4, "app-next-action", 2),
                  e.qZA(),
                  e.qZA();
              }
              if (2 & a) {
                const g = e.MAs(41),
                  T = e.MAs(53);
                e.xp6(3),
                  e.Q6J("ngIf", d.closeAction),
                  e.xp6(8),
                  e.Q6J("ngModel", d.SelectActionType),
                  e.xp6(1),
                  e.Q6J("ngForOf", d.SelectActionData),
                  e.xp6(1),
                  e.Q6J("selectedIndex", d.TabIndex),
                  e.xp6(7),
                  e.Q6J("ngModel", d.ActivityType),
                  e.xp6(1),
                  e.Q6J("ngForOf", d.activitydata),
                  e.xp6(5),
                  e.Q6J("ngModel", d.MoveTostage),
                  e.xp6(1),
                  e.Q6J("ngForOf", d.moveStageData),
                  e.xp6(11),
                  e.Q6J("matDatepicker", g)("ngModel", d.actionStartDate),
                  e.xp6(1),
                  e.Q6J("for", g),
                  e.xp6(11),
                  e.Q6J("matDatepicker", T)("ngModel", d.actionEndDate),
                  e.xp6(1),
                  e.Q6J("for", T),
                  e.xp6(10),
                  e.Q6J("ngModel", d.CoustomerContactName),
                  e.xp6(1),
                  e.Q6J("ngForOf", d.contactlistData),
                  e.xp6(8),
                  e.Q6J("ngModel", d.ActivityBy),
                  e.xp6(1),
                  e.Q6J("ngForOf", d.activityByData),
                  e.xp6(17),
                  e.Q6J("ngIf", d.emailReport),
                  e.xp6(6),
                  e.Q6J("ngForOf", d.notContactableData),
                  e.xp6(11),
                  e.Q6J("ngIf", d.CloseLeadButton),
                  e.xp6(1),
                  e.Q6J("ngIf", d.ConvertToLeadButton),
                  e.xp6(4),
                  e.Q6J("ngIf", d.nextAction);
              }
            },
            directives: [
              fe.Vq,
              fe.C0,
              u.O5,
              C._Y,
              C.JL,
              C.F,
              Ie.VQ,
              C.JJ,
              C.On,
              u.sg,
              Le.SP,
              Le.uX,
              P.KE,
              P.hX,
              _e.gD,
              de.Nt,
              C.Fj,
              G.hl,
              G.nW,
              P.R9,
              G.Mq,
              ve.oG,
              fe.Ic,
              D.lW,
              ge,
              Ie.U0,
              I.ey,
              fe.fd,
              Ka,
            ],
            styles: [
              "mat-radio-button[_ngcontent-%COMP%]{margin:0 10px}.input-width[_ngcontent-%COMP%]{width:100%}.mat-dialog-content[_ngcontent-%COMP%]{display:block;margin:0!important;padding:0!important;height:100%!important;width:100%!important}.form-contain[_ngcontent-%COMP%]{width:100%}textarea[_ngcontent-%COMP%]{height:60px;resize:none}.heading[_ngcontent-%COMP%]{text-align:center;background-color:#dcebdc;color:#000;position:sticky;top:0;width:100%;padding:0!important;margin:0!important}.contain[_ngcontent-%COMP%]{margin:5px;min-height:480px}.not-Connect-Checkbox[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin:15px 0}.not-Connect-Checkbox[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]{margin:5px 0}.SelectActionType-Checkbox[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin:10px 0}button[_ngcontent-%COMP%]{width:100%;height:45px;margin:5px;color:#fff}.CloseConvertButton[_ngcontent-%COMP%]{background-color:red}.nextActionButton[_ngcontent-%COMP%]{background-color:green}.mat-tab-group[_ngcontent-%COMP%]{max-height:100vh!important}  .mat-horizontal-stepper-header{display:none!important}  .mat-horizontal-content-container{padding:0!important}.connent_And_not_contactable[_ngcontent-%COMP%]{overflow-x:hidden}",
            ],
          })),
          s
        );
      })();
      var pt = f(3737);
      function on(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 14),
          e.TgZ(1, "mat-form-field", 4),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Cost Of supply"),
          e.qZA(),
          e._UZ(4, "input", 15),
          e.qZA(),
          e.qZA());
      }
      function _n(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 3),
          e.TgZ(1, "mat-form-field", 4),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Challan Number"),
          e.qZA(),
          e._UZ(4, "input", 16),
          e.qZA(),
          e.qZA());
      }
      function dn(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 3),
          e.TgZ(1, "mat-form-field", 4),
          e.TgZ(2, "mat-label"),
          e._uU(3, "SO ID"),
          e.qZA(),
          e._UZ(4, "input", 17),
          e.qZA(),
          e.qZA());
      }
      let ia = (() => {
          class s {
            constructor(a) {
              (this.data = a),
                (this.openDate = J().format("YYYY-MM-DD")),
                (this.EntityName = this.data.EntityName);
            }
            get CostOfsupply() {
              return ["lead", "prospect"].includes(
                this.EntityName.toLowerCase()
              );
            }
            get ChallanSO() {
              return [
                "salesorderlist",
                "molist",
                "polist",
                "milist",
                "payment",
                "payable",
              ].includes(this.EntityName.toLowerCase());
            }
            ngOnInit() {}
          }
          return (
            (s.ɵfac = function (a) {
              return new (a || s)(e.Y36(V.WI));
            }),
            (s.ɵcmp = e.Xpm({
              type: s,
              selectors: [["app-additional-details"]],
              features: [
                e._Bn([
                  { provide: I.Ad, useValue: "en-GB" },
                  { provide: I._A, useClass: te, deps: [I.Ad, ye] },
                  { provide: I.sG, useValue: Ee },
                ]),
              ],
              decls: 53,
              vars: 6,
              consts: [
                ["mat-dialog-title", ""],
                [1, "text-center", "text-primary"],
                [
                  1,
                  "row",
                  "g-0",
                  "form-container",
                  "m-1",
                  "p-1",
                  "border",
                  "border-primary",
                ],
                [1, "col"],
                [1, "example-full-width"],
                ["matInput", "", "name", "DocNumber"],
                [
                  "matInput",
                  "",
                  "name",
                  "openDate",
                  3,
                  "matDatepicker",
                  "ngModel",
                  "ngModelChange",
                ],
                ["matSuffix", "", 3, "for"],
                ["OpenDate", ""],
                [1, "col-lg-12"],
                ["matInput", "", "name", "Status"],
                ["matInput", "", "name", "ID"],
                ["cclass", "col-lg-12", 4, "ngIf"],
                ["class", "col", 4, "ngIf"],
                ["cclass", "col-lg-12"],
                ["matInput", "", "name", "CostOfsupply"],
                ["matInput", "", "name", "ChallanNumber"],
                ["matInput", "", "name", "SOID"],
              ],
              template: function (a, d) {
                if (
                  (1 & a &&
                    (e.TgZ(0, "div"),
                    e.TgZ(1, "div", 0),
                    e.TgZ(2, "h2", 1),
                    e._uU(3, "Additional Details"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(4, "form"),
                    e.TgZ(5, "div", 2),
                    e.TgZ(6, "div", 3),
                    e.TgZ(7, "mat-form-field", 4),
                    e.TgZ(8, "mat-label"),
                    e._uU(9, "Doc Number"),
                    e.qZA(),
                    e._UZ(10, "input", 5),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(11, "div", 3),
                    e.TgZ(12, "mat-form-field", 4),
                    e.TgZ(13, "mat-label"),
                    e._uU(14, "Open Date"),
                    e.qZA(),
                    e.TgZ(15, "input", 6),
                    e.NdJ("ngModelChange", function (T) {
                      return (d.openDate = T);
                    }),
                    e.qZA(),
                    e._UZ(16, "mat-datepicker-toggle", 7),
                    e._UZ(17, "mat-datepicker", null, 8),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(19, "div", 9),
                    e.TgZ(20, "mat-form-field", 4),
                    e.TgZ(21, "mat-label"),
                    e._uU(22, "Status"),
                    e.qZA(),
                    e._UZ(23, "input", 10),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(24, "div", 9),
                    e.TgZ(25, "mat-form-field", 4),
                    e.TgZ(26, "mat-label"),
                    e._uU(27, "Cost Center"),
                    e.qZA(),
                    e.TgZ(28, "mat-select"),
                    e.TgZ(29, "mat-option"),
                    e._uU(30, " select "),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(31, "div", 9),
                    e.TgZ(32, "mat-form-field", 4),
                    e.TgZ(33, "mat-label"),
                    e._uU(34, "Branch"),
                    e.qZA(),
                    e.TgZ(35, "mat-select"),
                    e.TgZ(36, "mat-option"),
                    e._uU(37, " select "),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(38, "div", 3),
                    e.TgZ(39, "mat-form-field", 4),
                    e.TgZ(40, "mat-label"),
                    e._uU(41, "Converted Form"),
                    e.qZA(),
                    e.TgZ(42, "mat-select"),
                    e.TgZ(43, "mat-option"),
                    e._uU(44, " select "),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(45, "div", 3),
                    e.TgZ(46, "mat-form-field", 4),
                    e.TgZ(47, "mat-label"),
                    e._uU(48, "ID"),
                    e.qZA(),
                    e._UZ(49, "input", 11),
                    e.qZA(),
                    e.qZA(),
                    e.YNc(50, on, 5, 0, "div", 12),
                    e.YNc(51, _n, 5, 0, "div", 13),
                    e.YNc(52, dn, 5, 0, "div", 13),
                    e.qZA(),
                    e.qZA(),
                    e.qZA()),
                  2 & a)
                ) {
                  const g = e.MAs(18);
                  e.xp6(15),
                    e.Q6J("matDatepicker", g)("ngModel", d.openDate),
                    e.xp6(1),
                    e.Q6J("for", g),
                    e.xp6(34),
                    e.Q6J("ngIf", d.CostOfsupply),
                    e.xp6(1),
                    e.Q6J("ngIf", d.ChallanSO),
                    e.xp6(1),
                    e.Q6J("ngIf", d.ChallanSO);
                }
              },
              directives: [
                V.uh,
                C._Y,
                C.JL,
                C.F,
                P.KE,
                P.hX,
                de.Nt,
                G.hl,
                C.Fj,
                C.JJ,
                C.On,
                G.nW,
                P.R9,
                G.Mq,
                _e.gD,
                I.ey,
                u.O5,
              ],
              styles: [
                ".example-full-width[_ngcontent-%COMP%]{width:95%}.form-container[_ngcontent-%COMP%]{min-height:400px;width:400px}",
              ],
            })),
            s
          );
        })(),
        Ke = (() => {
          class s {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (s.ɵfac = function (a) {
              return new (a || s)();
            }),
            (s.ɵcmp = e.Xpm({
              type: s,
              selectors: [["app-delivary-billing-address"]],
              decls: 108,
              vars: 0,
              consts: [
                ["mat-dialog-title", ""],
                [1, "text-center", "text-primary"],
                [1, "row", "m-1", "p-1", "border", "border-primary"],
                [1, "contact_form", "col-md-6"],
                [1, "col-md-12"],
                [1, "example-full-width"],
                ["matInput", "", "name", "  DeliveryAddress"],
                ["matInput", ""],
                [1, "col-md-6"],
                ["matInput", "", "name", "  Country"],
                ["matInput", "", "name", "  State"],
                ["matInput", "", "name", "  City"],
                ["matInput", "", "name", "   PIN/ZIP/Postal Code"],
                ["matInput", "", "name", "GSTIN"],
                ["matInput", "", "name", "PAN"],
                ["matInput", "", "name", "  BillingAddress"],
              ],
              template: function (a, d) {
                1 & a &&
                  (e.TgZ(0, "div"),
                  e.TgZ(1, "div", 0),
                  e.TgZ(2, "h2", 1),
                  e._uU(3, "Delivery & Billing Address"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(4, "form"),
                  e.TgZ(5, "div", 2),
                  e.TgZ(6, "div", 3),
                  e.TgZ(7, "div", 4),
                  e.TgZ(8, "mat-form-field", 5),
                  e.TgZ(9, "mat-label"),
                  e._uU(10, " Delivery Address"),
                  e.qZA(),
                  e._UZ(11, "input", 6),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(12, "div", 4),
                  e.TgZ(13, "mat-form-field", 5),
                  e.TgZ(14, "mat-label"),
                  e._uU(15, "Address line 1"),
                  e.qZA(),
                  e._UZ(16, "input", 7),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(17, "div", 4),
                  e.TgZ(18, "mat-form-field", 5),
                  e.TgZ(19, "mat-label"),
                  e._uU(20, "Address line 2"),
                  e.qZA(),
                  e._UZ(21, "input", 7),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(22, "div", 4),
                  e.TgZ(23, "mat-form-field", 5),
                  e.TgZ(24, "mat-label"),
                  e._uU(25, "Address line 3"),
                  e.qZA(),
                  e._UZ(26, "input", 7),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(27, "div", 8),
                  e.TgZ(28, "mat-form-field", 5),
                  e.TgZ(29, "mat-label"),
                  e._uU(30, "Country"),
                  e.qZA(),
                  e._UZ(31, "input", 9),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(32, "div", 8),
                  e.TgZ(33, "mat-form-field", 5),
                  e.TgZ(34, "mat-label"),
                  e._uU(35, "State"),
                  e.qZA(),
                  e._UZ(36, "input", 10),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(37, "div", 8),
                  e.TgZ(38, "mat-form-field", 5),
                  e.TgZ(39, "mat-label"),
                  e._uU(40, "City"),
                  e.qZA(),
                  e._UZ(41, "input", 11),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(42, "div", 8),
                  e.TgZ(43, "mat-form-field", 5),
                  e.TgZ(44, "mat-label"),
                  e._uU(45, " PIN/ZIP/Postal Code"),
                  e.qZA(),
                  e._UZ(46, "input", 12),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(47, "div", 8),
                  e.TgZ(48, "mat-form-field", 5),
                  e.TgZ(49, "mat-label"),
                  e._uU(50, " GSTIN"),
                  e.qZA(),
                  e._UZ(51, "input", 13),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(52, "div", 8),
                  e.TgZ(53, "mat-form-field", 5),
                  e.TgZ(54, "mat-label"),
                  e._uU(55, " PAN"),
                  e.qZA(),
                  e._UZ(56, "input", 14),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(57, "div", 3),
                  e.TgZ(58, "div", 4),
                  e.TgZ(59, "mat-form-field", 5),
                  e.TgZ(60, "mat-label"),
                  e._uU(61, " Billing Address"),
                  e.qZA(),
                  e._UZ(62, "input", 15),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(63, "div", 4),
                  e.TgZ(64, "mat-form-field", 5),
                  e.TgZ(65, "mat-label"),
                  e._uU(66, "Address line 1"),
                  e.qZA(),
                  e._UZ(67, "input", 7),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(68, "div", 4),
                  e.TgZ(69, "mat-form-field", 5),
                  e.TgZ(70, "mat-label"),
                  e._uU(71, "Address line 2"),
                  e.qZA(),
                  e._UZ(72, "input", 7),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(73, "div", 4),
                  e.TgZ(74, "mat-form-field", 5),
                  e.TgZ(75, "mat-label"),
                  e._uU(76, "Address line 3"),
                  e.qZA(),
                  e._UZ(77, "input", 7),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(78, "div", 8),
                  e.TgZ(79, "mat-form-field", 5),
                  e.TgZ(80, "mat-label"),
                  e._uU(81, "Country"),
                  e.qZA(),
                  e._UZ(82, "input", 9),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(83, "div", 8),
                  e.TgZ(84, "mat-form-field", 5),
                  e.TgZ(85, "mat-label"),
                  e._uU(86, "State"),
                  e.qZA(),
                  e._UZ(87, "input", 10),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(88, "div", 8),
                  e.TgZ(89, "mat-form-field", 5),
                  e.TgZ(90, "mat-label"),
                  e._uU(91, "City"),
                  e.qZA(),
                  e._UZ(92, "input", 11),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(93, "div", 8),
                  e.TgZ(94, "mat-form-field", 5),
                  e.TgZ(95, "mat-label"),
                  e._uU(96, " PIN/ZIP/Postal Code"),
                  e.qZA(),
                  e._UZ(97, "input", 12),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(98, "div", 8),
                  e.TgZ(99, "mat-form-field", 5),
                  e.TgZ(100, "mat-label"),
                  e._uU(101, " GSTIN"),
                  e.qZA(),
                  e._UZ(102, "input", 13),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(103, "div", 8),
                  e.TgZ(104, "mat-form-field", 5),
                  e.TgZ(105, "mat-label"),
                  e._uU(106, " PAN"),
                  e.qZA(),
                  e._UZ(107, "input", 14),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA());
              },
              directives: [V.uh, C._Y, C.JL, C.F, P.KE, P.hX, de.Nt],
              styles: [
                ".example-full-width[_ngcontent-%COMP%]{width:100%}.contact_form[_ngcontent-%COMP%]{min-height:400px;width:300px}",
              ],
            })),
            s
          );
        })(),
        Ct = (() => {
          class s {
            constructor(a) {
              (this.http = a),
                (this.listCommanDataURL =
                  "https://apitest.ffherp.co.in/api/FFHAMC/GetSearchDDLValue"),
                (this.createFormAutoCompleteURL =
                  "https://apitest.ffherp.co.in/api/Voucher/getAutoCompleteCompanyList"),
                (this.companyContactListURL =
                  "https://apitest.ffherp.co.in/api/Voucher/GetCommonContactList");
            }
            createFormAutoComplete(a) {
              return this.http.post(this.createFormAutoCompleteURL, a);
            }
            getCompanyContactList(a) {
              return this.http.post(this.companyContactListURL, a);
            }
            listCommanData(a) {
              return this.http.post(this.listCommanDataURL, a);
            }
          }
          return (
            (s.ɵfac = function (a) {
              return new (a || s)(e.LFG(c.eN));
            }),
            (s.ɵprov = e.Yz7({
              token: s,
              factory: s.ɵfac,
              providedIn: "root",
            })),
            s
          );
        })();
      var sa = f(1079);
      function ln(s, h) {
        if ((1 & s && (e.TgZ(0, "mat-option", 39), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.s9C("id", a.companyId),
            e.Q6J("value", a.companyName),
            e.xp6(1),
            e.hij(" ", a.companyName, " ");
        }
      }
      function Xe(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Source"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function ht(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Delivary Mode"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function ra(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Received Mode"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function et(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Invoice Type"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function De(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Complaint for product / Service type"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function un(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Source Detail"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function mn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Source text"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function cn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Delivary Name"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function pn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Transport/Courier Name"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function hn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "GST Type"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function fn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Select Problem"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function gn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Allocate To"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Mn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Billed By"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function St(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Entered By"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function yn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Ticket Type"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function oa(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Dispatch By"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Tn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Priority"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Ln(s, h) {
        1 & s &&
          (e.TgZ(0, "div", 41),
          e.TgZ(1, "mat-form-field", 9),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Amount"),
          e.qZA(),
          e._UZ(4, "input", 40),
          e.qZA(),
          e.qZA());
      }
      function Yn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "DropDown"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function Zn(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "Exp Closer Date"),
            e.qZA(),
            e.TgZ(3, "input", 42),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().LExpCloserDate = g);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 44),
            e.qZA();
        }
        if (2 & s) {
          const a = e.MAs(6),
            d = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", a)("ngModel", d.LExpCloserDate)(
              "min",
              d.minDate
            ),
            e.xp6(1),
            e.Q6J("for", a);
        }
      }
      function Dn(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "Delivary Date"),
            e.qZA(),
            e.TgZ(3, "input", 45),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().DelDate = g);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 46),
            e.qZA();
        }
        if (2 & s) {
          const a = e.MAs(6),
            d = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", a)("ngModel", d.DelDate)("min", d.minDate),
            e.xp6(1),
            e.Q6J("for", a);
        }
      }
      function kn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Problem Type"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function vn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Stage"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function bn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, " Docket/LR Number"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function An(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "......."),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function wn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Stage"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function xn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Delivar Mode"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Cn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Customer PO Number"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Sn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Payment Terms"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function qn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Material Invard Type"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Nn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Priority"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function qt(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "PO Number"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Nt(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Stage"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function On(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, " Probability"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function _a(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Delivary By"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function da(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Warranty Terms"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Hn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Returnable Type"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Un(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "Close Before"),
            e.qZA(),
            e.TgZ(3, "input", 47),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().TCloseBefore = g);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 48),
            e.qZA();
        }
        if (2 & s) {
          const a = e.MAs(6),
            d = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", a)("ngModel", d.TCloseBefore)(
              "min",
              d.minDate
            ),
            e.xp6(1),
            e.Q6J("for", a);
        }
      }
      function En(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "PO Date"),
            e.qZA(),
            e.TgZ(3, "input", 49),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().MPODate = g);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 50),
            e.qZA();
        }
        if (2 & s) {
          const a = e.MAs(6),
            d = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", a)("ngModel", d.MPODate)("min", d.minDate),
            e.xp6(1),
            e.Q6J("for", a);
        }
      }
      function Pn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Industry Type."),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function la(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Q(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Delivary Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function tt(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Material Out Type"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function at(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Advance Payment"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function jn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Purchase Invoice Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function ua(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Reminder Periodicity"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function In(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Supplier Invoice Number"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function ft(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Ticket Source"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function be(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "...."),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Ot(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Product Service"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Fn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Billing Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function ke(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Returnable"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Jn(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "Material EXP Del Date"),
            e.qZA(),
            e.TgZ(3, "input", 51),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().POEXPDelDate = g);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 52),
            e.qZA();
        }
        if (2 & s) {
          const a = e.MAs(6),
            d = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", a)("ngModel", d.POEXPDelDate)(
              "min",
              d.minDate
            ),
            e.xp6(1),
            e.Q6J("for", a);
        }
      }
      function Ht(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Bill Receipt Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Wn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Stage"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function Rn(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "Invoice Date"),
            e.qZA(),
            e.TgZ(3, "input", 53),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().PIInvoiceDate = g);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 54),
            e.qZA();
        }
        if (2 & s) {
          const a = e.MAs(6),
            d = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", a)("ngModel", d.PIInvoiceDate)(
              "min",
              d.minDate
            ),
            e.xp6(1),
            e.Q6J("for", a);
        }
      }
      function Qn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Text 1"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function gt(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Stage"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Ut(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Material Del Status"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function zn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Material Receipt Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Gn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Text 2"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Bn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Billing Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function ma(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Purchase Invoice Status"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function Vn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Payment Receipt Status"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function $n(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Product"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function Kn(s, h) {
        1 & s &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Value"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      let Xn = (() => {
        class s {
          constructor(a, d, g, T) {
            (this.global = a),
              (this.commanservice = d),
              (this.data = g),
              (this.dialog = T),
              (this.Company = ""),
              (this.a = J()),
              (this.minDate = this.a.toISOString()),
              (this.LExpCloserDate = this.a.toISOString()),
              (this.DelDate = this.a.toISOString()),
              (this.MPODate = this.a.toISOString()),
              (this.PPODate = this.a.toISOString()),
              (this.PIPODate = this.a.toISOString()),
              (this.TCloseBefore = this.a.toISOString()),
              (this.POEXPDelDate = this.a.toISOString()),
              (this.PIInvoiceDate = this.a.toISOString()),
              (this.CommanData = g.commanData),
              console.log(g.commanData),
              (this.EntityName = this.data.EntityName);
          }
          get Source() {
            return ["prospect", "lead", "salesorderlist"].includes(
              this.EntityName.toLowerCase()
            );
          }
          get DelivaryMode() {
            return ["po", "mo"].includes(this.EntityName.toLowerCase());
          }
          get prospectlead() {
            return ["prospect", "lead"].includes(this.EntityName.toLowerCase());
          }
          get DelivaryName() {
            return ["molist", "polist"].includes(this.EntityName.toLowerCase());
          }
          get DispatchBy() {
            return ["molist", "polist", "milist"].includes(
              this.EntityName.toLowerCase()
            );
          }
          get Stage() {
            return ["payment", "polist"].includes(
              this.EntityName.toLowerCase()
            );
          }
          get Docket() {
            return ["molist", "milist"].includes(this.EntityName.toLowerCase());
          }
          get PONumber() {
            return ["payment", "payable", "salesorderlist"].includes(
              this.EntityName.toLowerCase()
            );
          }
          get paymentpayable() {
            return ["payment", "payable"].includes(
              this.EntityName.toLowerCase()
            );
          }
          get PODate() {
            return ["payment", "payable", "molist", "salesorderlist"].includes(
              this.EntityName.toLowerCase()
            );
          }
          get MaterialReceiptStatus() {
            return ["polist", "payable"].includes(
              this.EntityName.toLowerCase()
            );
          }
          get prospect() {
            return ["prospect"].includes(this.EntityName.toLowerCase());
          }
          get lead() {
            return ["lead"].includes(this.EntityName.toLowerCase());
          }
          get so() {
            return ["salesorderlist"].includes(this.EntityName.toLowerCase());
          }
          get mo() {
            return ["molist"].includes(this.EntityName.toLowerCase());
          }
          get po() {
            return ["polist"].includes(this.EntityName.toLowerCase());
          }
          get mi() {
            return ["milist"].includes(this.EntityName.toLowerCase());
          }
          get payment() {
            return ["payment"].includes(this.EntityName.toLowerCase());
          }
          get pi() {
            return ["payable"].includes(this.EntityName.toLowerCase());
          }
          get ticket() {
            return ["ticket"].includes(this.EntityName.toLowerCase());
          }
          Autocomplete(a) {
            console.log(a),
              a.length >= 3 &&
                this.commanservice
                  .createFormAutoComplete({
                    DBName: this.global.LOGGED_IN_USER.DbName,
                    prefixText: a,
                  })
                  .subscribe((g) => {
                    (this.autoCompleteData = JSON.parse(g)),
                      console.log(this.autoCompleteData);
                  }),
              this.companyContactList(ei);
          }
          companyContactList(a) {
            console.log(a),
              this.commanservice
                .getCompanyContactList({
                  DBNAME: this.global.LOGGED_IN_USER.DbName,
                  id11: this.Company,
                  password: this.global.LOGGED_IN_USER.encryptPswd,
                })
                .subscribe((g) => {
                  console.log(JSON.parse(g));
                });
          }
          Detail() {
            this.dialog
              .open(ia, {
                position: { right: "0%", top: "10%" },
                data: { EntityName: this.EntityName },
              })
              .afterClosed()
              .subscribe();
          }
          address() {
            this.dialog.open(Ke, { data: {} }).afterClosed().subscribe();
          }
          ngOnInit() {}
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(
              e.Y36(m.x),
              e.Y36(Ct),
              e.Y36(V.WI),
              e.Y36(V.uw)
            );
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-create-new"]],
            features: [
              e._Bn([
                { provide: I.Ad, useValue: "en-GB" },
                { provide: I._A, useClass: te, deps: [I.Ad, ye] },
                { provide: I.sG, useValue: Ee },
              ]),
            ],
            decls: 189,
            vars: 70,
            consts: [
              ["mat-dialog-title", "", 1, "Formheader"],
              [1, "text-cente"],
              [1, "text-end"],
              [1, "link", 3, "click"],
              ["action", ""],
              [1, "row", "g-0"],
              [1, "col"],
              [1, "contact_form", "row", "g-0", "border", "border-primary"],
              [1, "col-lg-10"],
              [1, "full-width"],
              [
                "matInput",
                "",
                "type",
                "text",
                "name",
                "Company",
                "minlength",
                "3",
                "maxlength",
                "40",
                "required",
                "",
                3,
                "ngModel",
                "matAutocomplete",
                "ngModelChange",
              ],
              ["auto", "matAutocomplete"],
              [3, "id", "value", 4, "ngFor", "ngForOf"],
              [1, "company_link"],
              [1, "link", 2, "color", "red"],
              [1, "link", 2, "color", "red", 3, "click"],
              [1, "col-lg-2"],
              ["rel", "noopener noreferrer", 1, "link", 2, "color", "red"],
              [1, "col-lg-11"],
              ["matInput", "", "name", "Contact", "required", ""],
              [1, "col-lg-1"],
              [1, "col-lg-1", "text-center"],
              [1, "col-lg-5"],
              ["matInput", "", "name", "Mobile"],
              ["matInput", "", "name", "Email"],
              [1, "col-lg-12"],
              ["matInput", "", "name", "Email_Subj_Line"],
              [1, "contact_form", "border", "border-primary"],
              [1, "row"],
              [1, "col-lg-6"],
              ["class", "full-width", 4, "ngIf"],
              ["class", "col-2", 4, "ngIf"],
              [1, "col-md-6"],
              [1, "col-lg-3"],
              [1, "form-field", "col-lg-12"],
              ["matInput", "", "maxlength", "300", "required", ""],
              [1, "text-end", "formFooter"],
              [
                "mat-button",
                "",
                "mat-dialog-close",
                "",
                "mat-stroked-button",
                "",
                "color",
                "warn",
                1,
                "border",
                "border-danger",
              ],
              [
                "mat-button",
                "",
                "mat-stroked-button",
                "",
                "color",
                "primary",
                "type",
                "submit",
                1,
                "border",
                "border-primary",
                3,
                "mat-dialog-close",
              ],
              [3, "id", "value"],
              ["matInput", ""],
              [1, "col-2"],
              [
                "matInput",
                "",
                "name",
                "LExpCloserDate",
                3,
                "matDatepicker",
                "ngModel",
                "min",
                "ngModelChange",
              ],
              ["matSuffix", "", 3, "for"],
              ["lExpCloserDate", ""],
              [
                "matInput",
                "",
                "name",
                "DelDate",
                3,
                "matDatepicker",
                "ngModel",
                "min",
                "ngModelChange",
              ],
              ["delDate", ""],
              [
                "matInput",
                "",
                "name",
                "TCloseBefore",
                3,
                "matDatepicker",
                "ngModel",
                "min",
                "ngModelChange",
              ],
              ["tCloseBefore", ""],
              [
                "matInput",
                "",
                "name",
                "MPODate",
                3,
                "matDatepicker",
                "ngModel",
                "min",
                "ngModelChange",
              ],
              ["mPODate", ""],
              [
                "matInput",
                "",
                "name",
                "POEXPDelDate",
                3,
                "matDatepicker",
                "ngModel",
                "min",
                "ngModelChange",
              ],
              ["poEXPDelDate", ""],
              [
                "matInput",
                "",
                "name",
                "PIInvoiceDate",
                3,
                "matDatepicker",
                "ngModel",
                "min",
                "ngModelChange",
              ],
              ["piInvoiceDate", ""],
            ],
            template: function (a, d) {
              if (
                (1 & a &&
                  (e.TgZ(0, "div"),
                  e.TgZ(1, "div", 0),
                  e.TgZ(2, "div"),
                  e.TgZ(3, "h2", 1),
                  e._uU(4, "New / Edit"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(5, "div", 2),
                  e.TgZ(6, "h4"),
                  e.TgZ(7, "a", 3),
                  e.NdJ("click", function () {
                    return d.Detail();
                  }),
                  e._uU(8, " Additional Details"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(9, "form", 4),
                  e.TgZ(10, "div", 5),
                  e.TgZ(11, "div", 6),
                  e.TgZ(12, "h4"),
                  e._uU(13, "For Company"),
                  e.qZA(),
                  e.TgZ(14, "div", 7),
                  e.TgZ(15, "div", 8),
                  e.TgZ(16, "mat-form-field", 9),
                  e.TgZ(17, "mat-label"),
                  e._uU(18, "Company"),
                  e.qZA(),
                  e.TgZ(19, "input", 10),
                  e.NdJ("ngModelChange", function (T) {
                    return (d.Company = T);
                  })("ngModelChange", function (T) {
                    return d.Autocomplete(T);
                  }),
                  e.qZA(),
                  e.TgZ(20, "mat-autocomplete", null, 11),
                  e.YNc(22, ln, 2, 3, "mat-option", 12),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(23, "li", 13),
                  e.TgZ(24, "a", 14),
                  e._uU(25, "Select Site"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(26, "li", 13),
                  e.TgZ(27, "a", 15),
                  e.NdJ("click", function () {
                    return d.address();
                  }),
                  e._uU(28, " Address"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(29, "li", 13),
                  e.TgZ(30, "a", 14),
                  e._uU(31, "Channel Partener"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(32, "div", 16),
                  e.TgZ(33, "a", 17),
                  e._uU(34, "+"),
                  e.qZA(),
                  e.TgZ(35, "a", 17),
                  e._uU(36, "360"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(37, "div", 18),
                  e.TgZ(38, "mat-form-field", 9),
                  e.TgZ(39, "mat-label"),
                  e._uU(40, "Contact"),
                  e.qZA(),
                  e._UZ(41, "mat-select"),
                  e._UZ(42, "input", 19),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(43, "div", 20),
                  e.TgZ(44, "a", 14),
                  e._uU(45, "+"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(46, "div", 21),
                  e._UZ(47, "mat-checkbox"),
                  e.qZA(),
                  e.TgZ(48, "div", 22),
                  e.TgZ(49, "mat-form-field", 9),
                  e.TgZ(50, "mat-label"),
                  e._uU(51, "Mobile"),
                  e.qZA(),
                  e._UZ(52, "input", 23),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(53, "div", 21),
                  e._UZ(54, "mat-checkbox"),
                  e.qZA(),
                  e.TgZ(55, "div", 22),
                  e.TgZ(56, "mat-form-field", 9),
                  e.TgZ(57, "mat-label"),
                  e._uU(58, "Email"),
                  e.qZA(),
                  e._UZ(59, "input", 24),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(60, "div", 25),
                  e.TgZ(61, "mat-form-field", 9),
                  e.TgZ(62, "mat-label"),
                  e._uU(63, "Manager"),
                  e.qZA(),
                  e.TgZ(64, "mat-select"),
                  e.TgZ(65, "mat-option"),
                  e._uU(66, " select "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(67, "div", 21),
                  e._UZ(68, "mat-checkbox"),
                  e.qZA(),
                  e.TgZ(69, "div", 22),
                  e.TgZ(70, "mat-form-field", 9),
                  e.TgZ(71, "mat-label"),
                  e._uU(72, "Mobile"),
                  e.qZA(),
                  e._UZ(73, "input", 23),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(74, "div", 21),
                  e._UZ(75, "mat-checkbox"),
                  e.qZA(),
                  e.TgZ(76, "div", 22),
                  e.TgZ(77, "mat-form-field", 9),
                  e.TgZ(78, "mat-label"),
                  e._uU(79, "Email"),
                  e.qZA(),
                  e._UZ(80, "input", 24),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(81, "div", 25),
                  e.TgZ(82, "mat-form-field", 9),
                  e.TgZ(83, "mat-label"),
                  e._uU(84, " Email Subject Line"),
                  e.qZA(),
                  e._UZ(85, "input", 26),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(86, "div", 6),
                  e.TgZ(87, "h4"),
                  e._uU(88, "Details"),
                  e.qZA(),
                  e.TgZ(89, "div", 27),
                  e.TgZ(90, "div"),
                  e.TgZ(91, "div", 28),
                  e.TgZ(92, "div", 29),
                  e.YNc(93, Xe, 5, 0, "mat-form-field", 30),
                  e.YNc(94, ht, 5, 0, "mat-form-field", 30),
                  e.YNc(95, ra, 5, 0, "mat-form-field", 30),
                  e.YNc(96, et, 5, 0, "mat-form-field", 30),
                  e.YNc(97, De, 5, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.TgZ(98, "div", 29),
                  e.YNc(99, un, 4, 0, "mat-form-field", 30),
                  e.YNc(100, mn, 4, 0, "mat-form-field", 30),
                  e.YNc(101, cn, 4, 0, "mat-form-field", 30),
                  e.YNc(102, pn, 4, 0, "mat-form-field", 30),
                  e.YNc(103, hn, 5, 0, "mat-form-field", 30),
                  e.YNc(104, fn, 5, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(105, "div", 28),
                  e.TgZ(106, "div", 6),
                  e.YNc(107, gn, 4, 0, "mat-form-field", 30),
                  e.YNc(108, Mn, 4, 0, "mat-form-field", 30),
                  e.YNc(109, St, 4, 0, "mat-form-field", 30),
                  e.YNc(110, yn, 5, 0, "mat-form-field", 30),
                  e.YNc(111, oa, 4, 0, "mat-form-field", 30),
                  e.YNc(112, Tn, 4, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.YNc(113, Ln, 5, 0, "div", 31),
                  e.TgZ(114, "div", 32),
                  e.YNc(115, Yn, 5, 0, "mat-form-field", 30),
                  e.YNc(116, Zn, 7, 4, "mat-form-field", 30),
                  e.YNc(117, Dn, 7, 4, "mat-form-field", 30),
                  e.YNc(118, kn, 5, 0, "mat-form-field", 30),
                  e.YNc(119, vn, 5, 0, "mat-form-field", 30),
                  e.YNc(120, bn, 4, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(121, "div", 28),
                  e.TgZ(122, "div", 29),
                  e.YNc(123, An, 4, 0, "mat-form-field", 30),
                  e.YNc(124, wn, 4, 0, "mat-form-field", 30),
                  e.YNc(125, xn, 4, 0, "mat-form-field", 30),
                  e.YNc(126, Cn, 4, 0, "mat-form-field", 30),
                  e.YNc(127, Sn, 4, 0, "mat-form-field", 30),
                  e.YNc(128, qn, 4, 0, "mat-form-field", 30),
                  e.YNc(129, Nn, 5, 0, "mat-form-field", 30),
                  e.YNc(130, qt, 4, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.TgZ(131, "div", 29),
                  e.YNc(132, Nt, 4, 0, "mat-form-field", 30),
                  e.YNc(133, On, 4, 0, "mat-form-field", 30),
                  e.YNc(134, _a, 5, 0, "mat-form-field", 30),
                  e.YNc(135, da, 4, 0, "mat-form-field", 30),
                  e.YNc(136, Hn, 4, 0, "mat-form-field", 30),
                  e.YNc(137, Un, 7, 4, "mat-form-field", 30),
                  e.YNc(138, En, 7, 4, "mat-form-field", 30),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(139, "div", 28),
                  e.TgZ(140, "div", 29),
                  e.YNc(141, Pn, 4, 0, "mat-form-field", 30),
                  e.YNc(142, la, 4, 0, "mat-form-field", 30),
                  e.YNc(143, Q, 4, 0, "mat-form-field", 30),
                  e.YNc(144, tt, 4, 0, "mat-form-field", 30),
                  e.YNc(145, at, 4, 0, "mat-form-field", 30),
                  e.YNc(146, jn, 4, 0, "mat-form-field", 30),
                  e.YNc(147, ua, 4, 0, "mat-form-field", 30),
                  e.YNc(148, In, 4, 0, "mat-form-field", 30),
                  e.YNc(149, ft, 5, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.TgZ(150, "div", 29),
                  e.YNc(151, be, 4, 0, "mat-form-field", 30),
                  e.YNc(152, Ot, 4, 0, "mat-form-field", 30),
                  e.YNc(153, Fn, 4, 0, "mat-form-field", 30),
                  e.YNc(154, ke, 4, 0, "mat-form-field", 30),
                  e.YNc(155, Jn, 7, 4, "mat-form-field", 30),
                  e.YNc(156, Ht, 4, 0, "mat-form-field", 30),
                  e.YNc(157, Wn, 5, 0, "mat-form-field", 30),
                  e.YNc(158, Rn, 7, 4, "mat-form-field", 30),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(159, "div", 28),
                  e.TgZ(160, "div", 29),
                  e.YNc(161, Qn, 4, 0, "mat-form-field", 30),
                  e.YNc(162, gt, 4, 0, "mat-form-field", 30),
                  e.YNc(163, Ut, 5, 0, "mat-form-field", 30),
                  e.YNc(164, zn, 4, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.TgZ(165, "div", 29),
                  e.YNc(166, Gn, 4, 0, "mat-form-field", 30),
                  e.YNc(167, Bn, 4, 0, "mat-form-field", 30),
                  e.YNc(168, ma, 5, 0, "mat-form-field", 30),
                  e.YNc(169, Vn, 5, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(170, "div", 28),
                  e.TgZ(171, "div", 29),
                  e.YNc(172, $n, 5, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.TgZ(173, "div", 29),
                  e.YNc(174, Kn, 4, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(175, "div", 33),
                  e.TgZ(176, "h4"),
                  e._uU(177, "Description"),
                  e.qZA(),
                  e.TgZ(178, "div", 27),
                  e.TgZ(179, "div", 34),
                  e.TgZ(180, "mat-form-field", 9),
                  e.TgZ(181, "mat-label"),
                  e._uU(182, "Description"),
                  e.qZA(),
                  e._UZ(183, "textarea", 35),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(184, "div", 36),
                  e.TgZ(185, "button", 37),
                  e._uU(186, " Cancel "),
                  e.qZA(),
                  e.TgZ(187, "button", 38),
                  e._uU(188, " Save "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA()),
                2 & a)
              ) {
                const g = e.MAs(21);
                e.xp6(19),
                  e.Q6J("ngModel", d.Company)("matAutocomplete", g),
                  e.xp6(3),
                  e.Q6J("ngForOf", d.autoCompleteData),
                  e.xp6(71),
                  e.Q6J("ngIf", d.Source),
                  e.xp6(1),
                  e.Q6J("ngIf", d.DelivaryMode),
                  e.xp6(1),
                  e.Q6J("ngIf", d.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", d.paymentpayable),
                  e.xp6(1),
                  e.Q6J("ngIf", d.ticket),
                  e.xp6(2),
                  e.Q6J("ngIf", d.prospectlead),
                  e.xp6(1),
                  e.Q6J("ngIf", d.so),
                  e.xp6(1),
                  e.Q6J("ngIf", d.DelivaryName),
                  e.xp6(1),
                  e.Q6J("ngIf", d.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", d.payment),
                  e.xp6(1),
                  e.Q6J("ngIf", d.ticket),
                  e.xp6(3),
                  e.Q6J("ngIf", d.so),
                  e.xp6(1),
                  e.Q6J("ngIf", d.payment),
                  e.xp6(1),
                  e.Q6J("ngIf", d.pi),
                  e.xp6(1),
                  e.Q6J("ngIf", d.ticket),
                  e.xp6(1),
                  e.Q6J("ngIf", d.DispatchBy),
                  e.xp6(1),
                  e.Q6J("ngIf", d.prospectlead),
                  e.xp6(1),
                  e.Q6J("ngIf", d.ticket),
                  e.xp6(2),
                  e.Q6J("ngIf", d.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", d.lead),
                  e.xp6(1),
                  e.Q6J("ngIf", d.so),
                  e.xp6(1),
                  e.Q6J("ngIf", d.ticket),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Stage),
                  e.xp6(1),
                  e.Q6J("ngIf", d.Docket),
                  e.xp6(3),
                  e.Q6J("ngIf", d.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", d.lead),
                  e.xp6(1),
                  e.Q6J("ngIf", d.so),
                  e.xp6(1),
                  e.Q6J("ngIf", d.mo),
                  e.xp6(1),
                  e.Q6J("ngIf", d.po),
                  e.xp6(1),
                  e.Q6J("ngIf", d.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", d.ticket),
                  e.xp6(1),
                  e.Q6J("ngIf", d.PONumber),
                  e.xp6(2),
                  e.Q6J("ngIf", d.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", d.lead),
                  e.xp6(1),
                  e.Q6J("ngIf", d.so),
                  e.xp6(1),
                  e.Q6J("ngIf", d.po),
                  e.xp6(1),
                  e.Q6J("ngIf", d.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", d.ticket),
                  e.xp6(1),
                  e.Q6J("ngIf", d.PODate),
                  e.xp6(3),
                  e.Q6J("ngIf", d.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", d.lead),
                  e.xp6(1),
                  e.Q6J("ngIf", d.so),
                  e.xp6(1),
                  e.Q6J("ngIf", d.mo),
                  e.xp6(1),
                  e.Q6J("ngIf", d.po),
                  e.xp6(1),
                  e.Q6J("ngIf", d.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", d.payment),
                  e.xp6(1),
                  e.Q6J("ngIf", d.pi),
                  e.xp6(1),
                  e.Q6J("ngIf", d.ticket),
                  e.xp6(2),
                  e.Q6J("ngIf", d.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", d.lead),
                  e.xp6(1),
                  e.Q6J("ngIf", d.so),
                  e.xp6(1),
                  e.Q6J("ngIf", d.mo),
                  e.xp6(1),
                  e.Q6J("ngIf", d.po),
                  e.xp6(1),
                  e.Q6J("ngIf", d.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", d.ticket),
                  e.xp6(1),
                  e.Q6J("ngIf", d.paymentpayable),
                  e.xp6(3),
                  e.Q6J("ngIf", d.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", d.mo),
                  e.xp6(1),
                  e.Q6J("ngIf", d.payment),
                  e.xp6(1),
                  e.Q6J("ngIf", d.MaterialReceiptStatus),
                  e.xp6(2),
                  e.Q6J("ngIf", d.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", d.mo),
                  e.xp6(1),
                  e.Q6J("ngIf", d.po),
                  e.xp6(1),
                  e.Q6J("ngIf", d.paymentpayable),
                  e.xp6(3),
                  e.Q6J("ngIf", d.prospect),
                  e.xp6(2),
                  e.Q6J("ngIf", d.prospect),
                  e.xp6(13),
                  e.Q6J("mat-dialog-close", !0);
              }
            },
            directives: [
              V.uh,
              C._Y,
              C.JL,
              C.F,
              P.KE,
              P.hX,
              de.Nt,
              C.Fj,
              sa.ZL,
              C.wO,
              C.nD,
              C.Q7,
              C.JJ,
              C.On,
              sa.XC,
              u.sg,
              _e.gD,
              ve.oG,
              I.ey,
              u.O5,
              D.lW,
              V.ZT,
              G.hl,
              G.nW,
              P.R9,
              G.Mq,
            ],
            styles: [
              ".contact_form[_ngcontent-%COMP%]{min-height:400px;margin:0 6px;padding:10px}.full-width[_ngcontent-%COMP%]{width:100%}li[_ngcontent-%COMP%]{text-decoration:none;display:inline;padding-left:10px;cursor:pointer}h4[_ngcontent-%COMP%]{text-align:center;color:#87cefa;margin:0!important}textarea[_ngcontent-%COMP%]{height:330px;resize:none}.Formheader[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.link[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer}.formFooter[_ngcontent-%COMP%]{height:48px;padding-top:7px}.mat-stroked-button[_ngcontent-%COMP%]{margin-right:15px!important;box-shadow:0 2px 5px #00000042!important}.mat-checkbox[_ngcontent-%COMP%]{margin-top:16px}",
            ],
          })),
          s
        );
      })();
      function ei(s) {
        throw new Error("Function not implemented.");
      }
      let ca = (() => {
        class s {
          constructor(a, d, g) {
            (this.data = a),
              (this.listService = d),
              (this.global = g),
              console.log(a);
          }
          ngOnInit() {}
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(e.Y36(V.WI), e.Y36(he.L), e.Y36(m.x));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-edit-vouchar"]],
            decls: 0,
            vars: 0,
            template: function (a, d) {},
            styles: [""],
          })),
          s
        );
      })();
      var pa = f(9772);
      function Je(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "tr", 5),
            e.TgZ(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "td"),
            e._uU(6),
            e.ALo(7, "date"),
            e.qZA(),
            e.TgZ(8, "td"),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "td"),
            e._uU(11),
            e.qZA(),
            e.TgZ(12, "td"),
            e._uU(13),
            e.qZA(),
            e.TgZ(14, "td"),
            e._uU(15),
            e.qZA(),
            e.TgZ(16, "td"),
            e._uU(17),
            e.qZA(),
            e.TgZ(18, "td"),
            e._uU(19),
            e.qZA(),
            e.TgZ(20, "td"),
            e._uU(21),
            e.qZA(),
            e.TgZ(22, "td"),
            e.TgZ(23, "a", 6),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw().editVouchar(T);
            }),
            e._UZ(24, "i", 7),
            e.qZA(),
            e.qZA(),
            e.TgZ(25, "td"),
            e._uU(26),
            e.qZA(),
            e.TgZ(27, "td"),
            e._uU(28),
            e.qZA(),
            e.TgZ(29, "td"),
            e._uU(30),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = h.$implicit;
          e.xp6(2),
            e.Oqu(a.VoucherNo),
            e.xp6(2),
            e.Oqu(a.UpdatedBy),
            e.xp6(2),
            e.Oqu(e.xi3(7, 13, a.UpdatedOn, "dd MMM yyyy")),
            e.xp6(3),
            e.Oqu(a.ExpenseTitle),
            e.xp6(2),
            e.Oqu(a.EntityName),
            e.xp6(2),
            e.Oqu(a.Budgeted),
            e.xp6(2),
            e.Oqu(a.ExpenseTitle),
            e.xp6(2),
            e.Oqu(a.ApprovalStatus),
            e.xp6(2),
            e.Oqu(a.ApprovedAmount),
            e.xp6(2),
            e.Oqu(a.PaidAmount),
            e.xp6(5),
            e.Oqu(a.PaymentStatus),
            e.xp6(2),
            e.Oqu(a.DueAmount),
            e.xp6(2),
            e.Oqu(a.ApprovedRemark);
        }
      }
      let ti = (() => {
        class s {
          constructor(a, d, g, T) {
            (this.data = a),
              (this.listService = d),
              (this.global = g),
              (this.dialog = T),
              this.listService
                .showvoucharData({
                  id: a.installno,
                  entityName: a.entityName,
                  entityId: a.entityid,
                  dbname: this.global.LOGGED_IN_USER.DbName,
                  encrypt: this.global.LOGGED_IN_USER.encryptPswd,
                })
                .subscribe((Rt) => {
                  this.editData = JSON.parse(Rt);
                });
          }
          editVouchar(a) {
            this.dialog
              .open(ca, {
                position: { left: "65%", top: "5%" },
                data: { value: a },
              })
              .afterClosed()
              .subscribe();
          }
          ngOnInit() {}
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(
              e.Y36(V.WI),
              e.Y36(he.L),
              e.Y36(m.x),
              e.Y36(V.uw)
            );
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-edit-list"]],
            decls: 38,
            vars: 1,
            consts: [
              [1, "noteBox"],
              [1, "modal-heading", "standard-color-modal"],
              [1, "modal-body"],
              [1, "table", "table-hover", "table-striped"],
              ["class", "table-light", 4, "ngFor", "ngForOf"],
              [1, "table-light"],
              [1, "a", 3, "click"],
              ["matTooltip", "Edit Vouchar", 1, "fas", "fa-pencil-alt"],
            ],
            template: function (a, d) {
              1 & a &&
                (e.TgZ(0, "div", 0),
                e.TgZ(1, "div", 1),
                e.TgZ(2, "h2"),
                e._uU(3, "Vouchar Detail"),
                e.qZA(),
                e.qZA(),
                e.TgZ(4, "div", 2),
                e.TgZ(5, "table", 3),
                e.TgZ(6, "thead"),
                e.TgZ(7, "tr"),
                e.TgZ(8, "th"),
                e._uU(9, "Seq"),
                e.qZA(),
                e.TgZ(10, "th"),
                e._uU(11, "By"),
                e.qZA(),
                e.TgZ(12, "th"),
                e._uU(13, "On"),
                e.qZA(),
                e.TgZ(14, "th"),
                e._uU(15, "Head"),
                e.qZA(),
                e.TgZ(16, "th"),
                e._uU(17, "Entity"),
                e.qZA(),
                e.TgZ(18, "th"),
                e._uU(19, "Budget"),
                e.qZA(),
                e.TgZ(20, "th"),
                e._uU(21, "Exp."),
                e.qZA(),
                e.TgZ(22, "th"),
                e._uU(23, "Appv Status"),
                e.qZA(),
                e.TgZ(24, "th"),
                e._uU(25, "Appv Amt"),
                e.qZA(),
                e.TgZ(26, "th"),
                e._uU(27, "Paid Amt"),
                e.qZA(),
                e.TgZ(28, "th"),
                e._uU(29, "Due Amt"),
                e.qZA(),
                e.TgZ(30, "th"),
                e._uU(31, "Paid Status"),
                e.qZA(),
                e.TgZ(32, "th"),
                e._uU(33, "Appv Amt"),
                e.qZA(),
                e.TgZ(34, "th"),
                e._uU(35, "Remark"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(36, "tbody"),
                e.YNc(37, Je, 31, 16, "tr", 4),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA()),
                2 & a && (e.xp6(37), e.Q6J("ngForOf", d.editData));
            },
            directives: [u.sg, pa.gM],
            pipes: [u.uU],
            styles: [
              "th[_ngcontent-%COMP%]{height:30px;text-align:center}td[_ngcontent-%COMP%]{font-size:13px}.modal-heading[_ngcontent-%COMP%]{height:30px;text-align:center}.standard-color-modal[_ngcontent-%COMP%]{background-color:#dcebdc}",
            ],
          })),
          s
        );
      })();
      function Et(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "td"),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, "td"),
            e._uU(8),
            e.qZA(),
            e.TgZ(9, "td"),
            e._uU(10),
            e.qZA(),
            e.TgZ(11, "td"),
            e._uU(12),
            e.qZA(),
            e.TgZ(13, "td"),
            e._uU(14),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(2),
            e.Oqu(a.Name),
            e.xp6(2),
            e.Oqu(a.rate),
            e.xp6(2),
            e.Oqu(a.Discount_val),
            e.xp6(2),
            e.Oqu(a.Quantity),
            e.xp6(2),
            e.Oqu(a.amount),
            e.xp6(2),
            e.Oqu(a.Taxes_val),
            e.xp6(2),
            e.Oqu(a.TaxAmount_val);
        }
      }
      function ai(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "table", 27),
            e.TgZ(1, "thead"),
            e.TgZ(2, "tr", 28),
            e.TgZ(3, "th"),
            e._uU(4, "Product"),
            e.qZA(),
            e.TgZ(5, "th"),
            e._uU(6, "Rate"),
            e.qZA(),
            e.TgZ(7, "th"),
            e._uU(8, "Discount"),
            e.qZA(),
            e.TgZ(9, "th"),
            e._uU(10, "Quantity"),
            e.qZA(),
            e.TgZ(11, "th"),
            e._uU(12, "Amount"),
            e.qZA(),
            e.TgZ(13, "th"),
            e._uU(14, "Taxes"),
            e.qZA(),
            e.TgZ(15, "th"),
            e._uU(16, "TaxAmount"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "tbody"),
            e.YNc(18, Et, 15, 7, "tr", 29),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = e.oxw(2);
          e.xp6(18), e.Q6J("ngForOf", a.ViewProductDetail);
        }
      }
      function Pt(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "td"),
            e._uU(6),
            e.ALo(7, "date"),
            e.qZA(),
            e.TgZ(8, "td"),
            e._uU(9),
            e.qZA(),
            e.TgZ(10, "td"),
            e._uU(11),
            e.qZA(),
            e.TgZ(12, "td"),
            e._uU(13),
            e.qZA(),
            e.TgZ(14, "td"),
            e._uU(15),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(2),
            e.Oqu(a.ActualId),
            e.xp6(2),
            e.Oqu(a.SeqId),
            e.xp6(2),
            e.Oqu(e.xi3(7, 7, a.ActionStartDate, "dd MMM y")),
            e.xp6(3),
            e.Oqu(a.ActionStartTime),
            e.xp6(2),
            e.Oqu(a.username),
            e.xp6(2),
            e.Oqu(a.Discussions),
            e.xp6(2),
            e.Oqu(a.TaxAmount_val);
        }
      }
      function ni(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "div", 1),
            e.TgZ(1, "div", 2),
            e.TgZ(2, "div", 3),
            e.TgZ(3, "div", 4),
            e.TgZ(4, "div", 5),
            e.TgZ(5, "h2"),
            e._uU(6),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(7, "div", 6),
            e.TgZ(8, "div", 3),
            e.TgZ(9, "div", 4),
            e.TgZ(10, "div", 7),
            e.TgZ(11, "div", 8),
            e.TgZ(12, "span"),
            e._uU(13),
            e.qZA(),
            e._uU(14, " ID : "),
            e.TgZ(15, "span"),
            e._uU(16),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "span"),
            e._uU(18),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(19, "div", 9),
            e.TgZ(20, "div", 3),
            e.TgZ(21, "div", 4),
            e.TgZ(22, "div", 10),
            e.TgZ(23, "div", 11),
            e.TgZ(24, "h3"),
            e._uU(25, "Billing Address :"),
            e.qZA(),
            e.TgZ(26, "div"),
            e.TgZ(27, "span"),
            e._uU(28),
            e.qZA(),
            e.TgZ(29, "span"),
            e._uU(30),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(31, "div", 10),
            e.TgZ(32, "div", 11),
            e.TgZ(33, "div", 12),
            e.TgZ(34, "div", 4),
            e.TgZ(35, "div", 13),
            e.TgZ(36, "span", 14),
            e._uU(37, "Status : "),
            e.qZA(),
            e.TgZ(38, "span", 15),
            e._uU(39),
            e.qZA(),
            e.qZA(),
            e.TgZ(40, "div", 16),
            e.TgZ(41, "span", 14),
            e._uU(42, "Stage : "),
            e.qZA(),
            e.TgZ(43, "span", 15),
            e._uU(44),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(45, "div", 4),
            e.TgZ(46, "div", 13),
            e.TgZ(47, "span", 14),
            e._uU(48, "Priority : "),
            e.qZA(),
            e.TgZ(49, "span", 15),
            e._uU(50),
            e.qZA(),
            e.qZA(),
            e.TgZ(51, "div", 16),
            e.TgZ(52, "span", 14),
            e._uU(53, "Probability : "),
            e.qZA(),
            e.TgZ(54, "span", 15),
            e._uU(55),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(56, "div", 4),
            e.TgZ(57, "div", 13),
            e.TgZ(58, "span", 14),
            e._uU(59, "Source : "),
            e.qZA(),
            e.TgZ(60, "span", 15),
            e._uU(61),
            e.qZA(),
            e.qZA(),
            e.TgZ(62, "div", 16),
            e.TgZ(63, "span", 14),
            e._uU(64, "Source Ref : "),
            e.qZA(),
            e.TgZ(65, "span", 15),
            e._uU(66),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(67, "div", 17),
            e.TgZ(68, "div", 18),
            e.TgZ(69, "div", 19),
            e.TgZ(70, "span"),
            e._uU(71, "Next Schedule Action"),
            e.qZA(),
            e.TgZ(72, "span"),
            e._uU(73, "Follow up action on"),
            e.qZA(),
            e.TgZ(74, "span", 20),
            e._uU(75),
            e.ALo(76, "date"),
            e.qZA(),
            e.TgZ(77, "span"),
            e._uU(78, "To call and ask for demo meeting"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(79, "div", 21),
            e.TgZ(80, "div", 3),
            e.TgZ(81, "div", 4),
            e.TgZ(82, "div", 22),
            e.TgZ(83, "mat-tab-group", 23),
            e.TgZ(84, "mat-tab", 24),
            e.YNc(85, ai, 19, 1, "table", 25),
            e.qZA(),
            e.TgZ(86, "mat-tab", 26),
            e.TgZ(87, "table", 27),
            e.TgZ(88, "thead"),
            e.TgZ(89, "tr", 28),
            e.TgZ(90, "th"),
            e._uU(91, "Id"),
            e.qZA(),
            e.TgZ(92, "th"),
            e._uU(93, "Sch Id"),
            e.qZA(),
            e.TgZ(94, "th"),
            e._uU(95, "Date"),
            e.qZA(),
            e.TgZ(96, "th"),
            e._uU(97, "Time"),
            e.qZA(),
            e.TgZ(98, "th"),
            e._uU(99, "By"),
            e.qZA(),
            e.TgZ(100, "th"),
            e._uU(101, "Discussions"),
            e.qZA(),
            e.TgZ(102, "th"),
            e._uU(103, "Link"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(104, "tbody"),
            e.YNc(105, Pt, 16, 10, "tr", 29),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(106, "mat-tab", 30),
            e._uU(107, "Content 3"),
            e.qZA(),
            e.TgZ(108, "mat-tab", 31),
            e._uU(109, "Content 3"),
            e.qZA(),
            e.TgZ(110, "mat-tab", 32),
            e._uU(111, "Content 3"),
            e.qZA(),
            e.TgZ(112, "mat-tab", 33),
            e._UZ(113, "app-note"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = e.oxw();
          e.xp6(6),
            e.Oqu(null == a.entityData ? null : a.entityData.CompanyName),
            e.xp6(7),
            e.Oqu(a.EntityNameTitle),
            e.xp6(3),
            e.Oqu(a.Entityid),
            e.xp6(2),
            e.hij(
              " Title : ",
              null == a.entityData ? null : a.entityData.Title,
              ""
            ),
            e.xp6(10),
            e.Oqu(null == a.entityData ? null : a.entityData.CompanyAddress),
            e.xp6(2),
            e.hij(
              " ",
              null == a.entityData ? null : a.entityData.CompanyAddress1,
              ""
            ),
            e.xp6(9),
            e.Oqu(null == a.entityData ? null : a.entityData.BillingStatus),
            e.xp6(5),
            e.Oqu(null == a.entityData ? null : a.entityData.Stage),
            e.xp6(6),
            e.hij(" ", null == a.entityData ? null : a.entityData.Priority, ""),
            e.xp6(5),
            e.Oqu(null == a.entityData ? null : a.entityData.Probability),
            e.xp6(6),
            e.Oqu(null == a.entityData ? null : a.entityData.Source),
            e.xp6(5),
            e.Oqu(null == a.entityData ? null : a.entityData.Source_Ref),
            e.xp6(9),
            e.Oqu(
              e.xi3(
                76,
                15,
                null == a.entityData ? null : a.entityData.Opendate,
                "dd MMM YYYY "
              )
            ),
            e.xp6(10),
            e.Q6J("ngIf", a.ViewProductDetail),
            e.xp6(20),
            e.Q6J("ngForOf", a.ViewActionDetail);
        }
      }
      let ii = (() => {
        class s {
          constructor(a, d, g) {
            (this.listService = a),
              (this.data = d),
              (this.global = g),
              (this.viewNoteTable = !1),
              (this.viewProductTable = !1),
              (this.actionTable = !1),
              (this.Entityid = this.data.EntityID),
              (this.EntityName = this.data.EntityName),
              (this.EntityNameTitle = this.data.EntityNameTitle),
              "POList" === this.EntityName
                ? ((this.EntityModule = "PO"), (this.Entityflag = "PO"))
                : "SalesOrderLIst" === this.EntityName
                ? ((this.EntityModule = "SO"),
                  (this.Entityflag = "SalesOrderLIst"))
                : "Prospect" === this.EntityName
                ? ((this.EntityModule = "Prospect"),
                  (this.Entityflag = "Prospect"))
                : "Lead" === this.EntityName
                ? ((this.EntityModule = "Lead"), (this.Entityflag = "Lead"))
                : "Payable" === this.EntityName
                ? ((this.EntityModule = "Payable"),
                  (this.Entityflag = "Payable"))
                : "MoList" === this.EntityName
                ? ((this.EntityModule = "MO"), (this.Entityflag = "MO"))
                : "MIList" === this.EntityName
                ? ((this.EntityModule = "MI"), (this.Entityflag = "MI"))
                : "Repair" === this.EntityName
                ? ((this.EntityModule = "Repair"), (this.Entityflag = "Repair"))
                : "Payment" === this.EntityName
                ? ((this.EntityModule = "RCB"),
                  (this.Entityflag = "Receivable"))
                : "AMC" === this.EntityName
                ? ((this.EntityModule = "AMC"), (this.Entityflag = "AMC"))
                : "Work" === this.EntityName
                ? ((this.EntityModule = "todolist"),
                  (this.Entityflag = "todolist"))
                : "Ticket" === this.EntityName &&
                  ((this.EntityModule = "Ticket"),
                  (this.Entityflag = "Ticket")),
              this.listService
                .getViewList(
                  this.Entityflag,
                  this.Entityid,
                  this.global.LOGGED_IN_USER.DbName,
                  this.global.LOGGED_IN_USER.UserId,
                  this.global.LOGGED_IN_USER.Password,
                  this.global.LOGGED_IN_USER.encryptPswd
                )
                .subscribe((v) => {
                  (this.entityIdDetailData = JSON.parse(v)),
                    console.log(this.entityIdDetailData),
                    (this.entityData = this.entityIdDetailData[0]);
                }),
              this.listService
                .showChat({
                  EntityId: this.Entityid,
                  pageID: this.EntityModule,
                  Dbname: this.global.LOGGED_IN_USER.DbName,
                  encrypt: this.global.LOGGED_IN_USER.encryptPswd,
                  userid: this.global.LOGGED_IN_USER.UserId,
                })
                .subscribe((v) => {
                  this.chatData = JSON.parse(v);
                }),
              this.listService
                .productDetails(
                  this.Entityid,
                  this.EntityModule,
                  this.global.LOGGED_IN_USER.DbName
                )
                .subscribe((v) => {
                  (this.ViewProductDetail = JSON.parse(v)),
                    console.log(this.ViewProductDetail);
                }),
              this.listService
                .actionDetails(
                  this.Entityid,
                  this.EntityModule,
                  this.global.LOGGED_IN_USER.DbName,
                  this.global.LOGGED_IN_USER.encryptPswd
                )
                .subscribe((v) => {
                  (this.ViewActionDetail = JSON.parse(v)),
                    console.log(this.ViewActionDetail);
                });
          }
          product() {
            (this.viewProductTable = !this.viewProductTable),
              (this.actionTable = !1),
              (this.viewNoteTable = !1);
          }
          action() {
            (this.actionTable = !this.actionTable),
              (this.viewProductTable = !1),
              (this.viewNoteTable = !1);
          }
          noteTable() {
            (this.viewProductTable = !1),
              (this.actionTable = !1),
              (this.viewNoteTable = !this.viewNoteTable);
          }
          ngOnInit() {}
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(e.Y36(he.L), e.Y36(V.WI), e.Y36(m.x));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [["app-entity-product"]],
            decls: 1,
            vars: 1,
            consts: [
              ["class", "entityData", 4, "ngIf"],
              [1, "entityData"],
              [1, "modal-header", "standard-color-modal", "modal-heading"],
              [1, "container"],
              [1, "row"],
              [1, "col-lg-12", "text-center"],
              [1, "modal-header"],
              [1, "col-lg-6", "id-title-block"],
              [1, "id-entity"],
              [1, "modal-body", "mt-3", "mb-3", "standard-color-modal"],
              [1, "col-lg-6"],
              [1, "card", "p-3"],
              [1, "row", "company_details"],
              [1, "col-6"],
              [1, "span-text"],
              [1, "resp-text"],
              [1, "col-6", "d-flex"],
              [1, "row", "nxt-action-details"],
              [1, "col-12"],
              [1, "i-block"],
              [1, "date-class"],
              [1, "modal-footer"],
              [1, "col-lg-12"],
              ["animationDuration", "0ms"],
              ["label", "Product"],
              ["class", "table mt-2", 4, "ngIf"],
              ["label", "Actions"],
              [1, "table", "mt-2"],
              [1, "table_heading"],
              [4, "ngFor", "ngForOf"],
              ["label", "Chats"],
              ["label", "Attachments"],
              ["label", "Vouchers"],
              ["label", "Notes"],
            ],
            template: function (a, d) {
              1 & a && e.YNc(0, ni, 114, 18, "div", 0),
                2 & a && e.Q6J("ngIf", d.entityData);
            },
            directives: [u.O5, Le.SP, Le.uX, u.sg, Vt],
            pipes: [u.uU],
            styles: [
              ".modal-heading[_ngcontent-%COMP%]{height:30px;text-align:center;padding-top:28px}.id-title-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.id-entity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.table_heading[_ngcontent-%COMP%]{background-color:#bce1c6;color:#000}.card[_ngcontent-%COMP%]{height:200px}.standard-color-modal[_ngcontent-%COMP%]{background-color:#dcebdc}.company_details[_ngcontent-%COMP%]{padding:5px 0p 5px 0px;grid-row-gap:10px;row-gap:10px}.span-text[_ngcontent-%COMP%]{color:#789;font-size:15px;padding-right:10px}.resp-text[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#000}.nxt-action-details[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.i-block[_ngcontent-%COMP%]{margin-top:5px}.i-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:#789}.date-class[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:14px}",
            ],
          })),
          s
        );
      })();
      var si = f(449),
        Mt = f(1125);
      let ha = (() => {
        class s {
          transform(a) {
            if (null == a) return a;
            {
              let T = a.split("/").reverse().join("-");
              return J(T).format("DD MMM y");
            }
          }
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)();
          }),
          (s.ɵpipe = e.Yjl({ name: "dateformat", type: s, pure: !0 })),
          s
        );
      })();
      function ri(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-checkbox", 56),
            e.NdJ("change", function (g) {
              e.CHM(a);
              const T = e.oxw(5);
              return g ? T.masterToggle() : null;
            }),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw(5);
          e.Q6J("checked", a.selection.hasValue() && a.isAllSelected())(
            "indeterminate",
            a.selection.hasValue() && !a.isAllSelected()
          )("aria-label", a.checkboxLabel());
        }
      }
      function fa(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "th", 54),
            e.YNc(1, ri, 1, 3, "mat-checkbox", 55),
            e.qZA()),
          2 & s)
        ) {
          const a = e.oxw(4);
          e.xp6(1), e.Q6J("ngIf", a.Allshow);
        }
      }
      function R(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-checkbox", 59),
            e.NdJ("click", function (g) {
              return g.stopPropagation();
            })("change", function (g) {
              e.CHM(a);
              const T = e.oxw().$implicit,
                v = e.oxw(4);
              return g ? v.selection.toggle(T) : null;
            }),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw().$implicit,
            d = e.oxw(4);
          e.Q6J("checked", d.selection.isSelected(a))(
            "aria-label",
            d.checkboxLabel(a)
          );
        }
      }
      function oi(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "td", 57),
            e.YNc(1, R, 1, 2, "mat-checkbox", 58),
            e.qZA()),
          2 & s)
        ) {
          const a = e.oxw(4);
          e.xp6(1), e.Q6J("ngIf", a.Allshow);
        }
      }
      function _i(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " ID. "), e.qZA());
      }
      function ga(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "a", 63),
            e.NdJ("click", function () {
              e.CHM(a);
              const g = e.oxw().$implicit;
              return e.oxw(4).openEntity(g.InstalledNo);
            }),
            e._uU(1),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.hij(" ", a.InstalledNo, " ");
        }
      }
      function di(s, h) {
        if ((1 & s && (e.TgZ(0, "div"), e._uU(1), e.qZA()), 2 & s)) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.Oqu(a.InstalledNo);
        }
      }
      function li(s, h) {
        if ((1 & s && (e.TgZ(0, "a", 65), e._UZ(1, "i", 68), e.qZA()), 2 & s)) {
          const a = e.oxw(5);
          e.xp6(1), e.MGl("matTooltip", "Edit ", a.EntityName, "");
        }
      }
      function ui(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "a", 63),
            e.NdJ("click", function () {
              e.CHM(a);
              const g = e.oxw().$implicit;
              return e.oxw(4).EditList(g.InstalledNo, g.ENTITY, g.EntityId);
            }),
            e._UZ(1, "i", 68),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw(5);
          e.xp6(1), e.MGl("matTooltip", "Edit ", a.EntityName, "");
        }
      }
      function nt(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "td", 61),
            e.YNc(1, ga, 2, 1, "a", 62),
            e.TgZ(2, "div"),
            e.YNc(3, di, 2, 1, "div", 13),
            e.TgZ(4, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(4).openEmailTrace(T.InstalledNo);
            }),
            e._UZ(5, "i", 64),
            e.qZA(),
            e.TgZ(6, "a", 65),
            e._UZ(7, "i", 66),
            e.qZA(),
            e.YNc(8, li, 2, 1, "a", 67),
            e.YNc(9, ui, 2, 1, "a", 62),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw(4);
          e.xp6(1),
            e.Q6J("ngIf", a.installedno),
            e.xp6(2),
            e.Q6J("ngIf", a.voucher),
            e.xp6(5),
            e.Q6J("ngIf", a.installedno),
            e.xp6(1),
            e.Q6J("ngIf", a.voucher);
        }
      }
      function mi(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " Company "), e.qZA());
      }
      function ci(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "a", 63),
            e.NdJ("click", function () {
              e.CHM(a);
              const g = e.oxw().$implicit;
              return e.oxw(4).approval(g.InstalledNo, g.ENTITY, g.EntityId);
            }),
            e._uU(2),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw().$implicit;
          e.xp6(2), e.Oqu(a.Approval);
        }
      }
      function pi(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "td", 69),
            e._uU(1),
            e.TgZ(2, "div"),
            e.TgZ(3, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(4).openEmailQuote(T.InstalledNo);
            }),
            e._UZ(4, "i", 70),
            e.qZA(),
            e.qZA(),
            e.YNc(5, ci, 3, 1, "div", 13),
            e.qZA();
        }
        if (2 & s) {
          const a = h.$implicit,
            d = e.oxw(4);
          e.xp6(1),
            e.hij(" ", a.ClientName, " "),
            e.xp6(4),
            e.Q6J("ngIf", d.voucher);
        }
      }
      function yt(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " Contact "), e.qZA());
      }
      function Tt(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "td", 61),
            e._uU(1),
            e.TgZ(2, "div"),
            e.TgZ(3, "a", 65),
            e._UZ(4, "i", 71),
            e.qZA(),
            e.TgZ(5, "a"),
            e._UZ(6, "i", 72),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(1), e.hij(" ", a.ContactName, " ");
        }
      }
      function jt(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " Owner Name "), e.qZA());
      }
      function hi(s, h) {
        if ((1 & s && (e.TgZ(0, "td", 61), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.xp6(1), e.hij(" ", a.OwnerName, " ");
        }
      }
      function Ma(s, h) {
        1 & s && (e.TgZ(0, "th", 73), e._uU(1, " Amount "), e.qZA());
      }
      function fi(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "td", 74),
            e._uU(1),
            e.ALo(2, "currency"),
            e.TgZ(3, "div"),
            e.TgZ(4, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(4).openChat(T.InstalledNo);
            }),
            e._UZ(5, "i", 75),
            e.qZA(),
            e.TgZ(6, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(4).openNotes(T.InstalledNo, T.ClientName);
            }),
            e._UZ(7, "i", 76),
            e.qZA(),
            e.TgZ(8, "a", 9),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(4).openAction(T.InstalledNo, T.ClientID);
            }),
            e._UZ(9, "i", 77),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = h.$implicit;
          e.xp6(1), e.hij(" ", e.xi3(2, 1, a.Anualisedamount, "INR"), " ");
        }
      }
      function It(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " Status "), e.qZA());
      }
      function Ft(s, h) {
        if ((1 & s && (e.TgZ(0, "td", 61), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.xp6(1), e.hij(" ", a.StatusName, " ");
        }
      }
      function Jt(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " Del Status "), e.qZA());
      }
      function gi(s, h) {
        if ((1 & s && (e.TgZ(0, "td", 61), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.xp6(1), e.hij(" ", a.DeliveryStatusName, " ");
        }
      }
      function Mi(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " Source "), e.qZA());
      }
      function yi(s, h) {
        if ((1 & s && (e.TgZ(0, "td", 61), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.xp6(1), e.hij(" ", a.SourceName, " ");
        }
      }
      function Ti(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " Billed status "), e.qZA());
      }
      function Li(s, h) {
        if ((1 & s && (e.TgZ(0, "td", 61), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.xp6(1), e.hij(" ", a.Billedstatus, " ");
        }
      }
      function Yi(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " Service "), e.qZA());
      }
      function Zi(s, h) {
        if ((1 & s && (e.TgZ(0, "td", 61), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.xp6(1), e.hij(" ", a.ServiceTypeName, " ");
        }
      }
      function Di(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " Stage "), e.qZA());
      }
      function ki(s, h) {
        if ((1 & s && (e.TgZ(0, "td", 61), e._uU(1), e.qZA()), 2 & s)) {
          const a = h.$implicit;
          e.xp6(1), e.hij(" ", a.Stage, " ");
        }
      }
      function vi(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " EXP Date "), e.qZA());
      }
      function ya(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "td", 78), e._uU(1), e.ALo(2, "dateformat"), e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit,
            d = e.oxw(4);
          e.Q6J(
            "ngClass",
            a.EXPClosuredateDashboard >= d.toDayDate ? "green" : "red"
          ),
            e.xp6(1),
            e.hij(" ", e.lcZ(2, 2, a.EXPClosuredateDashboard), " ");
        }
      }
      function bi(s, h) {
        1 & s && (e.TgZ(0, "th", 60), e._uU(1, " Del Date "), e.qZA());
      }
      function Ai(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "td", 78), e._uU(1), e.ALo(2, "dateformat"), e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit,
            d = e.oxw(4);
          e.Q6J("ngClass", a.DeliveryDate >= d.toDayDate ? "green" : "red"),
            e.xp6(1),
            e.hij(" ", e.lcZ(2, 2, a.DeliveryDate), " ");
        }
      }
      function ce(s, h) {
        1 & s && e._UZ(0, "tr", 79);
      }
      function xe(s, h) {
        1 & s && e._UZ(0, "tr", 80);
      }
      function Ta(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "table", 29),
            e.ynx(1, 30),
            e.YNc(2, fa, 2, 1, "th", 31),
            e.YNc(3, oi, 2, 1, "td", 32),
            e.BQk(),
            e.ynx(4, 33),
            e.YNc(5, _i, 2, 0, "th", 34),
            e.YNc(6, nt, 10, 4, "td", 35),
            e.BQk(),
            e.ynx(7, 36),
            e.YNc(8, mi, 2, 0, "th", 34),
            e.YNc(9, pi, 6, 2, "td", 37),
            e.BQk(),
            e.ynx(10, 38),
            e.YNc(11, yt, 2, 0, "th", 34),
            e.YNc(12, Tt, 7, 1, "td", 35),
            e.BQk(),
            e.ynx(13, 39),
            e.YNc(14, jt, 2, 0, "th", 34),
            e.YNc(15, hi, 2, 1, "td", 35),
            e.BQk(),
            e.ynx(16, 40),
            e.YNc(17, Ma, 2, 0, "th", 41),
            e.YNc(18, fi, 10, 4, "td", 42),
            e.BQk(),
            e.ynx(19, 43),
            e.YNc(20, It, 2, 0, "th", 34),
            e.YNc(21, Ft, 2, 1, "td", 35),
            e.BQk(),
            e.ynx(22, 44),
            e.YNc(23, Jt, 2, 0, "th", 34),
            e.YNc(24, gi, 2, 1, "td", 35),
            e.BQk(),
            e.ynx(25, 45),
            e.YNc(26, Mi, 2, 0, "th", 34),
            e.YNc(27, yi, 2, 1, "td", 35),
            e.BQk(),
            e.ynx(28, 46),
            e.YNc(29, Ti, 2, 0, "th", 34),
            e.YNc(30, Li, 2, 1, "td", 35),
            e.BQk(),
            e.ynx(31, 47),
            e.YNc(32, Yi, 2, 0, "th", 34),
            e.YNc(33, Zi, 2, 1, "td", 35),
            e.BQk(),
            e.ynx(34, 48),
            e.YNc(35, Di, 2, 0, "th", 34),
            e.YNc(36, ki, 2, 1, "td", 35),
            e.BQk(),
            e.ynx(37, 49),
            e.YNc(38, vi, 2, 0, "th", 34),
            e.YNc(39, ya, 3, 4, "td", 50),
            e.BQk(),
            e.ynx(40, 51),
            e.YNc(41, bi, 2, 0, "th", 34),
            e.YNc(42, Ai, 3, 4, "td", 50),
            e.BQk(),
            e.YNc(43, ce, 1, 0, "tr", 52),
            e.YNc(44, xe, 1, 0, "tr", 53),
            e.qZA()),
          2 & s)
        ) {
          const a = e.oxw(3);
          e.Q6J("dataSource", a.dataSource),
            e.xp6(43),
            e.Q6J("matHeaderRowDef", a.listColumns),
            e.xp6(1),
            e.Q6J("matRowDefColumns", a.listColumns);
        }
      }
      const La = function () {
        return [5, 10, 25, 100];
      };
      function Ya(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "div", 22),
            e.TgZ(2, "div"),
            e.TgZ(3, "mat-checkbox", 9),
            e.NdJ("click", function () {
              return e.CHM(a), e.oxw(2).multipleSelect();
            }),
            e._uU(4, "Multiple Select"),
            e.qZA(),
            e.qZA(),
            e.TgZ(5, "div"),
            e.TgZ(6, "mat-form-field", 23),
            e.TgZ(7, "mat-label"),
            e._uU(8, "Search Column"),
            e.qZA(),
            e.TgZ(9, "input", 24, 25),
            e.NdJ("keyup", function (g) {
              return e.CHM(a), e.oxw(2).applyFilter(g);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(11, "div"),
            e._UZ(12, "mat-paginator", 26),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "div", 27),
            e.YNc(14, Ta, 45, 3, "table", 28),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw(2);
          e.xp6(12),
            e.Q6J("pageSize", 10)("pageSizeOptions", e.DdM(3, La)),
            e.xp6(2),
            e.Q6J("ngIf", a.dataSource);
        }
      }
      function Za(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "span", 95), e._uU(1), e.ALo(2, "currency"), e.qZA()),
          2 & s)
        ) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.Oqu(e.xi3(2, 1, a.Anualisedamount, "INR"));
        }
      }
      function wi(s, h) {
        if ((1 & s && (e.TgZ(0, "span", 95), e._uU(1), e.qZA()), 2 & s)) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.Oqu(a.StatusName);
        }
      }
      function xi(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-card", 84),
            e.TgZ(1, "div", 85),
            e.TgZ(2, "span"),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "div"),
            e.TgZ(5, "div"),
            e.TgZ(6, "span"),
            e.TgZ(7, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(3).openEntity(T.InstalledNo);
            }),
            e._uU(8),
            e.qZA(),
            e.qZA(),
            e._uU(9, " opened on "),
            e.TgZ(10, "span"),
            e._uU(11),
            e.ALo(12, "dateformat"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "div", 86),
            e.TgZ(14, "div"),
            e.TgZ(15, "span"),
            e._uU(16),
            e.qZA(),
            e.TgZ(17, "span"),
            e._uU(18),
            e.qZA(),
            e.TgZ(19, "span"),
            e._uU(20),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(21, "div"),
            e.TgZ(22, "div", 87),
            e.TgZ(23, "span"),
            e._uU(24),
            e.qZA(),
            e._uU(25, " for "),
            e.TgZ(26, "span"),
            e._uU(27),
            e.qZA(),
            e._uU(28, " on "),
            e.TgZ(29, "span"),
            e._uU(30),
            e.ALo(31, "dateformat"),
            e.qZA(),
            e._uU(32, " at "),
            e.TgZ(33, "span"),
            e._uU(34),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(35, "div"),
            e._uU(36),
            e.qZA(),
            e.TgZ(37, "div", 88),
            e.TgZ(38, "div"),
            e.YNc(39, Za, 3, 4, "span", 89),
            e.YNc(40, wi, 2, 1, "span", 89),
            e.qZA(),
            e.TgZ(41, "div", 90),
            e.TgZ(42, "li"),
            e.TgZ(43, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(3).openNotes(T.InstalledNo, T.ClientName);
            }),
            e._UZ(44, "i", 91),
            e.qZA(),
            e.qZA(),
            e.TgZ(45, "li"),
            e.TgZ(46, "a"),
            e._UZ(47, "i", 92),
            e.qZA(),
            e.qZA(),
            e.TgZ(48, "li"),
            e.TgZ(49, "a", 65),
            e._UZ(50, "i", 93),
            e.qZA(),
            e.qZA(),
            e.TgZ(51, "li"),
            e.TgZ(52, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(3).openChat(T.InstalledNo);
            }),
            e._UZ(53, "i", 94),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = h.$implicit;
          e.xp6(3),
            e.Oqu(a.ClientName),
            e.xp6(5),
            e.hij(" ", a.InstalledNo, ""),
            e.xp6(3),
            e.Oqu(e.lcZ(12, 13, a.Opendate)),
            e.xp6(5),
            e.hij(" ", a.ContactName, ""),
            e.xp6(2),
            e.hij(" ", a.ConMobile, ""),
            e.xp6(2),
            e.Oqu(a.Contactdetail),
            e.xp6(4),
            e.hij(" ", a.nextactiontype, ""),
            e.xp6(3),
            e.hij(" ", a.OwnerName, ""),
            e.xp6(3),
            e.hij(" ", e.lcZ(31, 15, a.NextActtiondate), ""),
            e.xp6(4),
            e.hij(" ", a.Nextactiontime, ""),
            e.xp6(2),
            e.Oqu(a.REMARK),
            e.xp6(3),
            e.Q6J("ngIf", a.Anualisedamount),
            e.xp6(1),
            e.Q6J("ngIf", a.StatusName);
        }
      }
      function Da(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div", 81),
            e.TgZ(1, "div", 82),
            e.NdJ("cdkDropListDropped", function (g) {
              return e.CHM(a), e.oxw(2).drop(g);
            }),
            e.YNc(2, xi, 54, 17, "mat-card", 83),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw(2);
          e.xp6(1),
            e.Q6J("cdkDropListData", a.dataSource.data),
            e.xp6(1),
            e.Q6J("ngForOf", a.dataSource.data);
        }
      }
      function Ci(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-checkbox", 56),
            e.NdJ("change", function (g) {
              e.CHM(a);
              const T = e.oxw(4);
              return g ? T.masterToggle() : null;
            }),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw(4);
          e.Q6J("checked", a.selection.hasValue() && a.isAllSelected())(
            "indeterminate",
            a.selection.hasValue() && !a.isAllSelected()
          )("aria-label", a.checkboxLabel());
        }
      }
      function Si(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "th", 54),
            e.YNc(1, Ci, 1, 3, "mat-checkbox", 55),
            e.qZA()),
          2 & s)
        ) {
          const a = e.oxw(3);
          e.xp6(1), e.Q6J("ngIf", a.Allshow);
        }
      }
      function qi(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "mat-checkbox", 59),
            e.NdJ("click", function (g) {
              return g.stopPropagation();
            })("change", function (g) {
              e.CHM(a);
              const T = e.oxw().$implicit,
                v = e.oxw(3);
              return g ? v.selection.toggle(T) : null;
            }),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw().$implicit,
            d = e.oxw(3);
          e.Q6J("checked", d.selection.isSelected(a))(
            "aria-label",
            d.checkboxLabel(a)
          );
        }
      }
      function Ni(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "td", 57),
            e.YNc(1, qi, 1, 2, "mat-checkbox", 58),
            e.qZA()),
          2 & s)
        ) {
          const a = e.oxw(3);
          e.xp6(1), e.Q6J("ngIf", a.Allshow);
        }
      }
      function Oi(s, h) {
        1 & s && (e.TgZ(0, "th", 109), e._uU(1, " Company "), e.qZA());
      }
      function Hi(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "a", 63),
            e.NdJ("click", function () {
              e.CHM(a);
              const g = e.oxw().$implicit;
              return e.oxw(3).openEntity(g.InstalledNo);
            }),
            e._uU(1),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw().$implicit;
          e.xp6(1), e.hij(" ", a.InstalledNo, " ");
        }
      }
      function Ui(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "td", 110),
            e.TgZ(1, "div"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "div"),
            e._uU(4),
            e.TgZ(5, "a", 65),
            e._UZ(6, "i", 71),
            e.qZA(),
            e.TgZ(7, "a"),
            e._UZ(8, "i", 72),
            e.qZA(),
            e.qZA(),
            e.TgZ(9, "div"),
            e.YNc(10, Hi, 2, 1, "a", 62),
            e._uU(11),
            e.qZA(),
            e.TgZ(12, "div"),
            e.TgZ(13, "div"),
            e._uU(14),
            e.TgZ(15, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(3).openNotes(T.InstalledNo, T.ClientName);
            }),
            e._UZ(16, "i", 76),
            e.qZA(),
            e.TgZ(17, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(3).openEmailTrace(T.InstalledNo);
            }),
            e._UZ(18, "i", 64),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e._UZ(19, "div"),
            e.qZA();
        }
        if (2 & s) {
          const a = h.$implicit,
            d = e.oxw(3);
          e.xp6(2),
            e.Oqu(a.ClientName),
            e.xp6(2),
            e.hij(" ", a.ContactName, " "),
            e.xp6(6),
            e.Q6J("ngIf", d.installedno),
            e.xp6(1),
            e.hij(" || ", a.AMCId, " "),
            e.xp6(3),
            e.hij(" ", a.OwnerName, " ");
        }
      }
      function Ei(s, h) {
        1 & s && e._UZ(0, "th", 109);
      }
      function Pi(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "td", 110),
            e.TgZ(1, "div"),
            e.TgZ(2, "a", 65),
            e._UZ(3, "i", 66),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "div"),
            e.TgZ(5, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(3).EditList(T.InstalledNo, T.ENTITY, T.EntityId);
            }),
            e._UZ(6, "i", 68),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw(3);
          e.xp6(6), e.MGl("matTooltip", "Edit ", a.EntityName, "");
        }
      }
      function ji(s, h) {
        1 & s && (e.TgZ(0, "th", 109), e._uU(1, " Details "), e.qZA());
      }
      function Ii(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "a", 63),
            e.NdJ("click", function () {
              e.CHM(a);
              const g = e.oxw().$implicit;
              return e.oxw(3).approval(g.InstalledNo, g.ENTITY, g.EntityId);
            }),
            e._uU(2),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw().$implicit;
          e.xp6(2), e.Oqu(a.Approval);
        }
      }
      function Fi(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "td", 110),
            e.TgZ(1, "div"),
            e._uU(2),
            e.ALo(3, "dateformat"),
            e.ALo(4, "dateformat"),
            e.qZA(),
            e.TgZ(5, "div"),
            e.TgZ(6, "div"),
            e._uU(7),
            e.ALo(8, "dateformat"),
            e.qZA(),
            e.TgZ(9, "div"),
            e._uU(10),
            e.qZA(),
            e.qZA(),
            e.YNc(11, Ii, 3, 1, "div", 13),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit,
            d = e.oxw(3);
          e.xp6(2),
            e.AsE(
              " Open :",
              e.lcZ(3, 7, a.Opendate),
              " || EXP Closure :",
              e.lcZ(4, 9, a.EXPClosuredateDashboard),
              " "
            ),
            e.xp6(5),
            e.AsE(
              " Status :",
              e.lcZ(8, 11, a.EXPClosuredateDashboard),
              " || Stage :",
              a.Stage,
              " "
            ),
            e.xp6(3),
            e.AsE(
              " Source : ",
              a.SourceName,
              " || Priority :",
              a.Priority,
              " "
            ),
            e.xp6(1),
            e.Q6J("ngIf", d.voucher);
        }
      }
      function Ji(s, h) {
        1 & s && (e.TgZ(0, "th", 109), e._uU(1, " Amount "), e.qZA());
      }
      function Wi(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "td", 110),
            e.TgZ(1, "div"),
            e._uU(2),
            e.ALo(3, "currency"),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(2), e.Oqu(e.xi3(3, 1, a.Anualisedamount, "INR"));
        }
      }
      function Lt(s, h) {
        1 & s && (e.TgZ(0, "th", 111), e._uU(1, " Description "), e.qZA());
      }
      function Ri(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "td", 110),
            e.TgZ(1, "div"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "div"),
            e._uU(4),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(2), e.Oqu(a.Title), e.xp6(2), e.Oqu(a.REMARK);
        }
      }
      function Qi(s, h) {
        1 & s && e._UZ(0, "th", 109);
      }
      function zi(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "td", 110),
            e._UZ(1, "div"),
            e.TgZ(2, "div"),
            e.TgZ(3, "a", 9),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(3).openAction(T.InstalledNo, T.ClientID);
            }),
            e._UZ(4, "i", 77),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
      }
      function Gi(s, h) {
        1 & s && (e.TgZ(0, "th", 109), e._uU(1, " Schedule "), e.qZA());
      }
      function Bi(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "td", 112), e._uU(1), e.ALo(2, "dateformat"), e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(1),
            e.HOy(
              " ",
              a.nextactiontype,
              " for ",
              a.OwnerName,
              " on ",
              e.lcZ(2, 4, a.UpTo),
              " at ",
              a.Nextactiontime,
              " "
            );
        }
      }
      function Vi(s, h) {
        1 & s && e._UZ(0, "th", 60);
      }
      function $i(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "td", 61),
            e.TgZ(1, "div"),
            e.TgZ(2, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(3).openEmailQuote(T.InstalledNo);
            }),
            e._UZ(3, "i", 70),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "div"),
            e.TgZ(5, "a", 63),
            e.NdJ("click", function () {
              const T = e.CHM(a).$implicit;
              return e.oxw(3).openChat(T.InstalledNo);
            }),
            e._UZ(6, "i", 75),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
      }
      function Ki(s, h) {
        1 & s && e._UZ(0, "tr", 79);
      }
      function ka(s, h) {
        1 & s && e._UZ(0, "tr", 80);
      }
      function va(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div", 96),
            e.TgZ(1, "div"),
            e.TgZ(2, "div", 22),
            e.TgZ(3, "div"),
            e.TgZ(4, "mat-checkbox", 9),
            e.NdJ("click", function () {
              return e.CHM(a), e.oxw(2).multipleSelect();
            }),
            e._uU(5, "Multiple Select"),
            e.qZA(),
            e.qZA(),
            e.TgZ(6, "div"),
            e.TgZ(7, "mat-form-field", 23),
            e.TgZ(8, "mat-label"),
            e._uU(9, "Search Column"),
            e.qZA(),
            e.TgZ(10, "input", 24, 25),
            e.NdJ("keyup", function (g) {
              return e.CHM(a), e.oxw(2).applyFilter(g);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(12, "div"),
            e._UZ(13, "mat-paginator", 26),
            e.qZA(),
            e.qZA(),
            e.TgZ(14, "div", 27),
            e.TgZ(15, "table", 29),
            e.ynx(16, 30),
            e.YNc(17, Si, 2, 1, "th", 31),
            e.YNc(18, Ni, 2, 1, "td", 32),
            e.BQk(),
            e.ynx(19, 97),
            e.YNc(20, Oi, 2, 0, "th", 98),
            e.YNc(21, Ui, 20, 5, "td", 99),
            e.BQk(),
            e.ynx(22, 100),
            e.YNc(23, Ei, 1, 0, "th", 98),
            e.YNc(24, Pi, 7, 1, "td", 99),
            e.BQk(),
            e.ynx(25, 101),
            e.YNc(26, ji, 2, 0, "th", 98),
            e.YNc(27, Fi, 12, 13, "td", 99),
            e.BQk(),
            e.ynx(28, 102),
            e.YNc(29, Ji, 2, 0, "th", 98),
            e.YNc(30, Wi, 4, 4, "td", 99),
            e.BQk(),
            e.ynx(31, 103),
            e.YNc(32, Lt, 2, 0, "th", 104),
            e.YNc(33, Ri, 5, 2, "td", 99),
            e.BQk(),
            e.ynx(34, 105),
            e.YNc(35, Qi, 1, 0, "th", 98),
            e.YNc(36, zi, 5, 0, "td", 99),
            e.BQk(),
            e.ynx(37, 106),
            e.YNc(38, Gi, 2, 0, "th", 98),
            e.YNc(39, Bi, 3, 6, "td", 107),
            e.BQk(),
            e.ynx(40, 108),
            e.YNc(41, Vi, 1, 0, "th", 34),
            e.YNc(42, $i, 7, 0, "td", 35),
            e.BQk(),
            e.YNc(43, Ki, 1, 0, "tr", 52),
            e.YNc(44, ka, 1, 0, "tr", 53),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw(2);
          e.xp6(13),
            e.Q6J("pageSize", 10)("pageSizeOptions", e.DdM(5, La)),
            e.xp6(2),
            e.Q6J("dataSource", a.dataSource),
            e.xp6(28),
            e.Q6J("matHeaderRowDef", a.columns),
            e.xp6(1),
            e.Q6J("matRowDefColumns", a.columns);
        }
      }
      function ba(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "td"),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, "td"),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, "td"),
            e._uU(8),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit;
          e.xp6(2),
            e.Oqu(a.InstalledNo),
            e.xp6(2),
            e.Oqu(a.ClientName),
            e.xp6(2),
            e.Oqu(a.ContactName),
            e.xp6(2),
            e.Oqu(a.OwnerName);
        }
      }
      function Yt(s, h) {
        if (
          (1 & s &&
            (e.TgZ(0, "mat-accordion"),
            e.TgZ(1, "mat-expansion-panel"),
            e.TgZ(2, "mat-expansion-panel-header"),
            e.TgZ(3, "mat-panel-title"),
            e.TgZ(4, "span", 113),
            e._uU(5),
            e.qZA(),
            e._uU(6),
            e.qZA(),
            e.qZA(),
            e.TgZ(7, "table"),
            e.TgZ(8, "thead"),
            e.TgZ(9, "tr"),
            e.TgZ(10, "th"),
            e._uU(11, "Id"),
            e.qZA(),
            e.TgZ(12, "th"),
            e._uU(13, "Company"),
            e.qZA(),
            e.TgZ(14, "th"),
            e._uU(15, "Contact"),
            e.qZA(),
            e.TgZ(16, "th"),
            e._uU(17, "Owner"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(18, "tbody"),
            e.YNc(19, ba, 9, 4, "tr", 21),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & s)
        ) {
          const a = h.$implicit,
            d = e.oxw(2);
          e.xp6(5),
            e.hij(" ", a.key, ""),
            e.xp6(1),
            e.hij(" ", a.value.total, " "),
            e.xp6(13),
            e.Q6J("ngForOf", d.filteredEntity(a.key));
        }
      }
      function We(s, h) {
        if (1 & s) {
          const a = e.EpF();
          e.TgZ(0, "div", 1),
            e.TgZ(1, "nav", 2),
            e.TgZ(2, "div", 3),
            e.TgZ(3, "div", 4),
            e.TgZ(4, "div", 5),
            e._UZ(5, "i", 6),
            e.qZA(),
            e.TgZ(6, "div", 7),
            e._uU(7),
            e.qZA(),
            e.qZA(),
            e.TgZ(8, "div", 8),
            e.TgZ(9, "div", 9),
            e.NdJ("click", function () {
              return e.CHM(a), e.oxw().viewDetail();
            }),
            e._uU(10, "View Detail"),
            e.qZA(),
            e.TgZ(11, "div", 9),
            e.NdJ("click", function () {
              return e.CHM(a), e.oxw().createForm();
            }),
            e.TgZ(12, "mat-icon"),
            e._uU(13, " local_hospital"),
            e.qZA(),
            e.qZA(),
            e.TgZ(14, "div", 9),
            e.NdJ("click", function () {
              return e.CHM(a), e.oxw().selectCard();
            }),
            e.TgZ(15, "mat-icon"),
            e._uU(16, "featured_play_list"),
            e.qZA(),
            e.qZA(),
            e.TgZ(17, "div", 9),
            e.NdJ("click", function () {
              return e.CHM(a), e.oxw().selectTable();
            }),
            e.TgZ(18, "mat-icon"),
            e._uU(19, "dns"),
            e.qZA(),
            e.qZA(),
            e.TgZ(20, "div"),
            e.TgZ(21, "span", 10),
            e.NdJ("click", function () {
              return e.CHM(a), e.oxw().openFilterSearch();
            }),
            e._UZ(22, "i", 11),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(23, "mat-tab-group"),
            e.TgZ(24, "mat-tab", 12),
            e.YNc(25, Ya, 15, 4, "div", 13),
            e.YNc(26, Da, 3, 2, "div", 14),
            e.YNc(27, va, 45, 6, "div", 15),
            e.qZA(),
            e.TgZ(28, "mat-tab", 16),
            e.TgZ(29, "div"),
            e.TgZ(30, "mat-form-field"),
            e.TgZ(31, "mat-label"),
            e._uU(32, "Select an option"),
            e.qZA(),
            e.TgZ(33, "mat-select", 17),
            e.NdJ("ngModelChange", function (g) {
              return e.CHM(a), (e.oxw().groupSelected = g);
            })("ngModelChange", function () {
              return e.CHM(a), e.oxw().groupSelectedValue();
            }),
            e.TgZ(34, "mat-option", 18),
            e._uU(35, "Owner Name"),
            e.qZA(),
            e.TgZ(36, "mat-option", 19),
            e._uU(37, "Status"),
            e.qZA(),
            e.TgZ(38, "mat-option", 20),
            e._uU(39, "Stage"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(40, "div"),
            e.YNc(41, Yt, 20, 3, "mat-accordion", 21),
            e.ALo(42, "keyvalue"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e._UZ(43, "div"),
            e.qZA();
        }
        if (2 & s) {
          const a = e.oxw();
          e.xp6(7),
            e.hij(" ", a.EntityNameTitle, " "),
            e.xp6(18),
            e.Q6J("ngIf", a.tableSection),
            e.xp6(1),
            e.Q6J("ngIf", a.cardSection),
            e.xp6(1),
            e.Q6J("ngIf", a.DetailViewSection),
            e.xp6(6),
            e.Q6J("ngModel", a.groupSelected),
            e.xp6(8),
            e.Q6J("ngForOf", e.lcZ(42, 6, a.Array));
        }
      }
      const Aa = [
        {
          path: "",
          component: ie,
          children: [
            {
              path: "page/:EntityName",
              component: (() => {
                class s {
                  constructor(a, d, g, T, v) {
                    (this.CommanService = a),
                      (this.listService = d),
                      (this.root = g),
                      (this.dialog = T),
                      (this.global = v),
                      (this.panelOpenState = !1),
                      (this.a = J()),
                      (this.toDayDate = this.a.toISOString()),
                      (this.EntityNameTitle = ""),
                      (this.Allshow = !1),
                      (this.tableSection = !0),
                      (this.cardSection = !1),
                      (this.DetailViewSection = !1),
                      (this.groupSelected = " "),
                      (this.displayedColumns = [
                        { default: !0, columnName: "select" },
                        { default: !0, columnName: "InstalledNo" },
                        { default: !0, columnName: "ClientName" },
                        {
                          default: !1,
                          columnName: "ContactName",
                          entityTypes: [
                            "lead",
                            "payment",
                            "prospect",
                            "ticket",
                            "amc",
                            "repair",
                            "work",
                            "molist",
                            "milist",
                            "salesorderlist",
                            "polist",
                            "payable",
                          ],
                        },
                        { default: !0, columnName: "OwnerName" },
                        { default: !0, columnName: "Anualisedamount" },
                        {
                          default: !1,
                          columnName: "StatusName",
                          entityTypes: [
                            "lead",
                            "molist",
                            "payment",
                            "prospect",
                            "payable",
                            "Ticket",
                            "repair",
                            "work",
                            "voucher",
                          ],
                        },
                        {
                          default: !1,
                          columnName: "Billedstatus",
                          entityTypes: ["salesorderlist", "polist", "payment"],
                        },
                        {
                          default: !1,
                          columnName: "SourceName",
                          entityTypes: ["prospect", "lead"],
                        },
                        {
                          default: !1,
                          columnName: "DeliveryStatusName",
                          entityTypes: ["salesorderlist"],
                        },
                        {
                          default: !1,
                          columnName: "ServiceTypeName",
                          entityTypes: ["Ticket", "repair", "work", "amc"],
                        },
                        {
                          default: !1,
                          columnName: "Stage",
                          entityTypes: ["prospect", "lead"],
                        },
                        {
                          default: !1,
                          columnName: "EXPClosuredateDashboard",
                          entityTypes: [
                            "lead",
                            "payment",
                            "prospect",
                            "ticket",
                            "amc",
                            "repair",
                            "work",
                            "molist",
                            "milist",
                            "voucher",
                          ],
                        },
                        {
                          default: !1,
                          columnName: "DeliveryDate",
                          entityTypes: ["salesorderlist", "polist", "payable"],
                        },
                      ]),
                      (this.columns = [
                        "Company",
                        "UploadEdit",
                        "Details",
                        "Amount",
                        "Description",
                        "AddCount",
                        "Schedule",
                        "ChatEmailPDF",
                      ]),
                      (this.dataSource = new ue.by([])),
                      (this.selection = new si.Ov(!0, [])),
                      this.CommanService.listCommanData({
                        DbName: this.global.LOGGED_IN_USER.DbName,
                        Password: this.global.LOGGED_IN_USER.encryptPswd,
                        UserId: this.global.LOGGED_IN_USER.UserId,
                      }).subscribe((Se) => {
                        this.commanData = JSON.parse(Se);
                      }),
                      this.root.params.subscribe((Se) => {
                        (this.EntityName = Se.EntityName),
                          this.listService
                            .getLeadList({
                              Flag: this.EntityName,
                              Dbname: this.global.LOGGED_IN_USER.DbName,
                              Password: this.global.LOGGED_IN_USER.encryptPswd,
                              id: this.global.LOGGED_IN_USER.RoleId,
                              userid: this.global.LOGGED_IN_USER.UserId,
                              RoleID: this.global.LOGGED_IN_USER.RoleId,
                            })
                            .subscribe((Rt) => {
                              this.dataSource.data = JSON.parse(Rt);
                            }),
                          "POList" === this.EntityName
                            ? (this.EntityNameTitle = "Purchase Order")
                            : "SalesOrderLIst" === this.EntityName
                            ? (this.EntityNameTitle = "Sales Order")
                            : "Prospect" === this.EntityName
                            ? (this.EntityNameTitle = "Prospect")
                            : "Lead" === this.EntityName
                            ? (this.EntityNameTitle = "Lead")
                            : "Payable" === this.EntityName
                            ? (this.EntityNameTitle = "Payable")
                            : "MoList" === this.EntityName
                            ? (this.EntityNameTitle = "Material Out")
                            : "MIList" === this.EntityName
                            ? (this.EntityNameTitle = "Material In")
                            : "Repair" === this.EntityName
                            ? (this.EntityNameTitle = "Repair")
                            : "Payment" === this.EntityName
                            ? (this.EntityNameTitle = "Payment")
                            : "AMC" === this.EntityName
                            ? (this.EntityNameTitle = "AMC")
                            : "Work" === this.EntityName
                            ? (this.EntityNameTitle = "Work")
                            : "Ticket" === this.EntityName
                            ? (this.EntityNameTitle = "Ticket")
                            : "Voucher" === this.EntityName &&
                              (this.EntityNameTitle = "Voucher");
                      });
                  }
                  drop(a) {
                    (0, pt.bA)(
                      this.dataSource.data,
                      a.previousIndex,
                      a.currentIndex
                    );
                  }
                  get listColumns() {
                    return Object.values(this.displayedColumns)
                      .filter(
                        (a) =>
                          !!a.default ||
                          (!!a.entityTypes &&
                            (a.entityTypes.includes(
                              this.EntityName.toLowerCase()
                            ) ||
                              a.default))
                      )
                      .map((a) => a.columnName);
                  }
                  get installedno() {
                    return [
                      "lead",
                      "payment",
                      "prospect",
                      "ticket",
                      "amc",
                      "repair",
                      "work",
                      "molist",
                      "milist",
                      "salesorderlist",
                      "polist",
                      "payable",
                    ].includes(this.EntityName.toLowerCase());
                  }
                  get voucher() {
                    return ["voucher"].includes(this.EntityName.toLowerCase());
                  }
                  ngAfterViewInit() {
                    (this.dataSource.paginator = this.paginator),
                      (this.dataSource.sort = this.sort);
                  }
                  applyFilter(a) {
                    this.dataSource.filter = a.target.value
                      .trim()
                      .toLowerCase();
                  }
                  isAllSelected() {
                    return (
                      this.selection.selected.length ===
                      this.dataSource.data.length
                    );
                  }
                  masterToggle() {
                    this.isAllSelected()
                      ? this.selection.clear()
                      : this.selection.select(...this.dataSource.data);
                  }
                  checkboxLabel(a) {
                    return a
                      ? `${
                          this.selection.isSelected(a) ? "deselect" : "select"
                        } row ${a.position + 1}`
                      : (this.isAllSelected() ? "deselect" : "select") + " all";
                  }
                  multipleSelect() {
                    this.Allshow = !this.Allshow;
                  }
                  openEntity(a) {
                    this.dialog
                      .open(ii, {
                        height: "80%",
                        width: "100%",
                        data: {
                          EntityID: a,
                          EntityName: this.EntityName,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  openEmailQuote(a) {
                    this.dialog
                      .open(ea, {
                        height: "80vh",
                        width: "1000px",
                        data: {
                          EntityID: a,
                          EntityName: this.EntityName,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  openEmailTrace(a) {
                    this.dialog
                      .open(se, {
                        height: "40%",
                        width: "70%",
                        data: {
                          EntityID: a,
                          EntityName: this.EntityName,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  openNotes(a, d) {
                    this.dialog
                      .open(Vt, {
                        height: "50%",
                        width: "60%",
                        data: {
                          EntityID: a,
                          EntityName: this.EntityName,
                          EntityNameTitle: this.EntityNameTitle,
                          companyName: d,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  openChat(a) {
                    this.dialog
                      .open(K, {
                        width: "30%",
                        position: { left: "70%", top: "10%" },
                        data: {
                          EntityID: a,
                          EntityName: this.EntityName,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  openFilterSearch() {
                    this.dialog
                      .open(Bt, {
                        height: "100%",
                        width: "80%",
                        data: {
                          EntityName: this.EntityName,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  EditList(a, d, g) {
                    this.dialog
                      .open(ti, {
                        height: "50%%",
                        width: "80%",
                        data: {
                          installno: a,
                          entityName: d,
                          entityid: g,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  approval(a, d, g) {
                    console.log(a, d, g),
                      this.dialog
                        .open(Fa, {
                          height: "50%%",
                          width: "80%",
                          data: {
                            installno: a,
                            entityName: d,
                            entityid: g,
                            EntityNameTitle: this.EntityNameTitle,
                          },
                        })
                        .afterClosed()
                        .subscribe();
                  }
                  openAction(a, d) {
                    this.dialog
                      .open(na, {
                        width: "35%",
                        position: { left: "65%", top: "5%" },
                        data: {
                          EntityID: a,
                          EntityName: this.EntityName,
                          clientNo: d,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  createForm() {
                    this.dialog
                      .open(Xn, {
                        data: {
                          EntityName: this.EntityName,
                          commanData: this.commanData,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  selectTable() {
                    (this.tableSection = !0),
                      (this.cardSection = !1),
                      (this.DetailViewSection = !1);
                  }
                  selectCard() {
                    (this.tableSection = !1),
                      (this.cardSection = !0),
                      (this.DetailViewSection = !1);
                  }
                  viewDetail() {
                    (this.tableSection = !1),
                      (this.cardSection = !1),
                      (this.DetailViewSection = !0);
                  }
                  groupSelectedValue() {
                    console.log(this.groupSelected);
                    const a = new Map();
                    this.dataSource.data.forEach((d) => {
                      a.set(d[this.groupSelected], {
                        total:
                          a.get(d[this.groupSelected]) &&
                          a.get(d[this.groupSelected]).total
                            ? a.get(d[this.groupSelected]).total + 1
                            : 1,
                      });
                    }),
                      (this.Array = a),
                      console.log(this.FilterEntityData);
                  }
                  filteredEntity(a) {
                    return this.dataSource.data &&
                      this.dataSource.data.length > 0
                      ? this.dataSource.data.filter((d) => d.OwnerName == a)
                      : [];
                  }
                  ngOnInit() {}
                }
                return (
                  (s.ɵfac = function (a) {
                    return new (a || s)(
                      e.Y36(Ct),
                      e.Y36(he.L),
                      e.Y36(i.gz),
                      e.Y36(V.uw),
                      e.Y36(m.x)
                    );
                  }),
                  (s.ɵcmp = e.Xpm({
                    type: s,
                    selectors: [["app-prospect-list"]],
                    viewQuery: function (a, d) {
                      if ((1 & a && (e.Gf(Gt.NW, 5), e.Gf(bt.YE, 5)), 2 & a)) {
                        let g;
                        e.iGM((g = e.CRH())) && (d.paginator = g.first),
                          e.iGM((g = e.CRH())) && (d.sort = g.first);
                      }
                    },
                    decls: 1,
                    vars: 1,
                    consts: [
                      ["class", "contain", 4, "ngIf"],
                      [1, "contain"],
                      ["aria-label", "breadcrumb"],
                      [1, "flex"],
                      [1, "left"],
                      [1, "breadcrumb-item"],
                      [1, "fas", "fa-home", "home-icon"],
                      ["aria-current", "page", 1, "breadcrumb-item", "active"],
                      [1, "right"],
                      [3, "click"],
                      [1, "filterSearch", 3, "click"],
                      [
                        "data-bs-toggle",
                        "tooltip",
                        "data-bs-placement",
                        "bottom",
                        "title",
                        " Filter Search ",
                        1,
                        "fas",
                        "fa-filter",
                        "home-icon",
                      ],
                      ["label", "Default"],
                      [4, "ngIf"],
                      ["class", "cardcontainer", 4, "ngIf"],
                      ["class", "DetailViewcontainer", 4, "ngIf"],
                      ["label", "GroupBy"],
                      [3, "ngModel", "ngModelChange"],
                      ["value", "OwnerName"],
                      ["value", "StatusName"],
                      ["value", "Stage "],
                      [4, "ngFor", "ngForOf"],
                      [1, "tableOption"],
                      ["appearance", "standard"],
                      ["matInput", "", 3, "keyup"],
                      ["input", ""],
                      [
                        "aria-label",
                        "Select page",
                        3,
                        "pageSize",
                        "pageSizeOptions",
                      ],
                      [1, "table-section"],
                      [
                        "mat-table",
                        "",
                        "matSort",
                        "",
                        "class",
                        "mat-elevation-z8",
                        3,
                        "dataSource",
                        4,
                        "ngIf",
                      ],
                      [
                        "mat-table",
                        "",
                        "matSort",
                        "",
                        1,
                        "mat-elevation-z8",
                        3,
                        "dataSource",
                      ],
                      ["matColumnDef", "select"],
                      ["mat-header-cell", "", 4, "matHeaderCellDef"],
                      ["mat-cell", "", 4, "matCellDef"],
                      ["matColumnDef", "InstalledNo"],
                      [
                        "mat-header-cell",
                        "",
                        "mat-sort-header",
                        "",
                        "class",
                        "text-start",
                        4,
                        "matHeaderCellDef",
                      ],
                      [
                        "mat-cell",
                        "",
                        "class",
                        "text-start table-data",
                        4,
                        "matCellDef",
                      ],
                      ["matColumnDef", "ClientName"],
                      [
                        "mat-cell",
                        "",
                        "class",
                        "text-start Company",
                        4,
                        "matCellDef",
                      ],
                      ["matColumnDef", "ContactName"],
                      ["matColumnDef", "OwnerName"],
                      ["matColumnDef", "Anualisedamount"],
                      [
                        "mat-header-cell",
                        "",
                        "class",
                        "text-end",
                        "mat-sort-header",
                        "",
                        4,
                        "matHeaderCellDef",
                      ],
                      [
                        "mat-cell",
                        "",
                        "class",
                        "text-end table-data",
                        3,
                        "ngStyle",
                        4,
                        "matCellDef",
                      ],
                      ["matColumnDef", "StatusName"],
                      ["matColumnDef", "DeliveryStatusName"],
                      ["matColumnDef", "SourceName"],
                      ["matColumnDef", "Billedstatus"],
                      ["matColumnDef", "ServiceTypeName"],
                      ["matColumnDef", "Stage"],
                      ["matColumnDef", "EXPClosuredateDashboard"],
                      [
                        "mat-cell",
                        "",
                        "class",
                        "text-start table-data",
                        3,
                        "ngClass",
                        4,
                        "matCellDef",
                      ],
                      ["matColumnDef", "DeliveryDate"],
                      ["mat-header-row", "", 4, "matHeaderRowDef"],
                      ["mat-row", "", 4, "matRowDef", "matRowDefColumns"],
                      ["mat-header-cell", ""],
                      [
                        3,
                        "checked",
                        "indeterminate",
                        "aria-label",
                        "change",
                        4,
                        "ngIf",
                      ],
                      [3, "checked", "indeterminate", "aria-label", "change"],
                      ["mat-cell", ""],
                      [
                        3,
                        "checked",
                        "aria-label",
                        "click",
                        "change",
                        4,
                        "ngIf",
                      ],
                      [3, "checked", "aria-label", "click", "change"],
                      [
                        "mat-header-cell",
                        "",
                        "mat-sort-header",
                        "",
                        1,
                        "text-start",
                      ],
                      ["mat-cell", "", 1, "text-start", "table-data"],
                      ["class", "a", 3, "click", 4, "ngIf"],
                      [1, "a", 3, "click"],
                      ["matTooltip", "Email Trace", 1, "fas", "fa-envelope"],
                      [1, "a"],
                      ["matTooltip", "Upload", 1, "fas", "fa-cloud-upload-alt"],
                      ["class", "a", 4, "ngIf"],
                      [1, "fas", "fa-pencil-alt", 3, "matTooltip"],
                      ["mat-cell", "", 1, "text-start", "Company"],
                      [
                        "matTooltip",
                        "View Email Quote",
                        1,
                        "fas",
                        "fa-file-pdf",
                      ],
                      ["matTooltip", "Phone", 1, "fas", "fa-phone"],
                      ["matTooltip", "WhatsApp", 1, "fab", "fa-whatsapp"],
                      [
                        "mat-header-cell",
                        "",
                        "mat-sort-header",
                        "",
                        1,
                        "text-end",
                      ],
                      [
                        "mat-cell",
                        "",
                        1,
                        "text-end",
                        "table-data",
                        3,
                        "ngStyle",
                      ],
                      ["matTooltip", "Chat", 1, "far", "fa-comments"],
                      ["matTooltip", "view Notes", 1, "far", "fa-clipboard"],
                      ["matTooltip", "Add Action", 1, "fas", "fa-plus-circle"],
                      [
                        "mat-cell",
                        "",
                        1,
                        "text-start",
                        "table-data",
                        3,
                        "ngClass",
                      ],
                      ["mat-header-row", ""],
                      ["mat-row", ""],
                      [1, "cardcontainer"],
                      [
                        "cdkDropList",
                        "",
                        1,
                        "cardSection",
                        "row",
                        3,
                        "cdkDropListData",
                        "cdkDropListDropped",
                      ],
                      [
                        "class",
                        "card-box col",
                        "cdkDrag",
                        "",
                        4,
                        "ngFor",
                        "ngForOf",
                      ],
                      ["cdkDrag", "", 1, "card-box", "col"],
                      [1, "company"],
                      [1, "row"],
                      [1, "ActionField"],
                      [1, "iconfield"],
                      ["class", "iconfield-badge", 4, "ngIf"],
                      [1, "icon"],
                      [
                        "data-bs-toggle",
                        "tooltip",
                        "data-bs-placement",
                        "top",
                        "title",
                        "view Notes",
                        1,
                        "far",
                        "fa-clipboard",
                      ],
                      [
                        "data-bs-toggle",
                        "tooltip",
                        "data-bs-placement",
                        "top",
                        "title",
                        "WhatsApp",
                        1,
                        "fab",
                        "fa-whatsapp",
                      ],
                      [
                        "data-bs-toggle",
                        "tooltip",
                        "data-bs-placement",
                        "top",
                        "title",
                        "Phone",
                        1,
                        "fas",
                        "fa-phone",
                      ],
                      [
                        "data-bs-toggle",
                        "tooltip",
                        "data-bs-placement",
                        "top",
                        "title",
                        "Chat",
                        1,
                        "far",
                        "fa-comments",
                      ],
                      [1, "iconfield-badge"],
                      [1, "DetailViewcontainer"],
                      ["matColumnDef", "Company"],
                      [
                        "mat-header-cell",
                        "",
                        "mat-sort-header",
                        "",
                        4,
                        "matHeaderCellDef",
                      ],
                      ["mat-cell", "", "class", "table-data", 4, "matCellDef"],
                      ["matColumnDef", "UploadEdit"],
                      ["matColumnDef", "Details"],
                      ["matColumnDef", "Amount"],
                      ["matColumnDef", "Description"],
                      [
                        "mat-header-cell",
                        "",
                        "mat-sort-header",
                        "",
                        "c",
                        "",
                        4,
                        "matHeaderCellDef",
                      ],
                      ["matColumnDef", "AddCount"],
                      ["matColumnDef", "Schedule"],
                      [
                        "mat-cell",
                        "",
                        "class",
                        "table-data",
                        3,
                        "ngStyle",
                        4,
                        "matCellDef",
                      ],
                      ["matColumnDef", "ChatEmailPDF"],
                      ["mat-header-cell", "", "mat-sort-header", ""],
                      ["mat-cell", "", 1, "table-data"],
                      ["mat-header-cell", "", "mat-sort-header", "", "c", ""],
                      ["mat-cell", "", 1, "table-data", 3, "ngStyle"],
                      [1, "me-4"],
                    ],
                    template: function (a, d) {
                      1 & a && e.YNc(0, We, 44, 8, "div", 0),
                        2 & a && e.Q6J("ngIf", d.dataSource);
                    },
                    directives: [
                      u.O5,
                      pe.Hw,
                      Le.SP,
                      Le.uX,
                      P.KE,
                      P.hX,
                      _e.gD,
                      C.JJ,
                      C.On,
                      I.ey,
                      u.sg,
                      ve.oG,
                      de.Nt,
                      Gt.NW,
                      ue.BZ,
                      bt.YE,
                      ue.w1,
                      ue.fO,
                      ue.Dz,
                      ue.as,
                      ue.nj,
                      ue.ge,
                      ue.ev,
                      bt.nU,
                      pa.gM,
                      u.PC,
                      u.mk,
                      ue.XQ,
                      ue.Gk,
                      pt.Wj,
                      le.a8,
                      pt.Zt,
                      Mt.pp,
                      Mt.ib,
                      Mt.yz,
                      Mt.yK,
                    ],
                    pipes: [u.Nd, u.H9, ha],
                    styles: [
                      "table[_ngcontent-%COMP%]{width:100%;height:75%;padding-top:70px}.table-section[_ngcontent-%COMP%]{overflow-x:auto}th[_ngcontent-%COMP%]{height:30px;background-color:#dcebdc}tr[_ngcontent-%COMP%]:hover{background-color:#dbe4eb}i[_ngcontent-%COMP%]{font-size:14px;color:#9c9b9b;padding:3px}.tableOption[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.Company[_ngcontent-%COMP%]{font-size:16px;color:#000}.table-data[_ngcontent-%COMP%]{font-size:13px;padding:0 10px}.a[_ngcontent-%COMP%]{text-decoration:none}.a[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}#modal[_ngcontent-%COMP%]{background-color:#fff}.nav-item[_ngcontent-%COMP%]{justify-content:center}.nav-link[_ngcontent-%COMP%]{font-size:x-small}.search-input[_ngcontent-%COMP%]{height:38px;display:block;width:100%;height:24px;font-size:14px;font-weight:400;color:#000;background:transparent;border:none;outline:none;border-bottom:1px solid rgb(201,199,199)}.search-input[_ngcontent-%COMP%]:focus{border-bottom:2px solid blue;outline:none}.table-control[_ngcontent-%COMP%]{padding:10px 0}.filterSearch[_ngcontent-%COMP%], .filterSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}.contain[_ngcontent-%COMP%]{padding:0 17px 0 67px}nav[_ngcontent-%COMP%]{padding-top:74px}mat-icon[_ngcontent-%COMP%]{margin:0 0 0 10px}  .mat-dialog-container{margin:0!important;padding:0!important;overflow-x:hidden!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.mat-card[_ngcontent-%COMP%]{padding:10px!important;border-radius:0!important}.card-box[_ngcontent-%COMP%]{min-width:300px;margin:5px}.cardSection[_ngcontent-%COMP%]{padding:24px}li[_ngcontent-%COMP%]{text-decoration:none;display:inline}.iconfield[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 0 0}span[_ngcontent-%COMP%]{padding:0 3px}.iconfield-badge[_ngcontent-%COMP%]{background-color:#b8e0d4;color:#000;border-radius:5px;margin:5px;padding:3px}.company[_ngcontent-%COMP%]{padding:0 0 5px;font-size:large;font-weight:600}.ActionField[_ngcontent-%COMP%]{padding:3px 0;font-size:medium;font-style:italic;font-weight:400}.red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:green}.tooltip[_ngcontent-%COMP%]{background-color:#000;color:#fff}th.mat-header-cell[_ngcontent-%COMP%]{text-align:center!important;justify-content:center!important}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{display:flex}.cardcontainer[_ngcontent-%COMP%]{background-color:#dcebdc}.breadcrumb-home[_ngcontent-%COMP%]{color:#000;list-style-type:none}.home-icon[_ngcontent-%COMP%]{color:#000;font-size:15px}.Amount-head[_ngcontent-%COMP%]{position:relative;right:-78}",
                    ],
                  })),
                  s
                );
              })(),
              resolve: { login: r.H },
              canActivate: [o.a],
            },
            {
              path: "Dashboard/:id",
              component: Pa,
              resolve: { login: r.H },
              canActivate: [o.a],
            },
            {
              path: "ListDashboard/:EntityName",
              component: ja,
              resolve: { login: r.H },
              canActivate: [o.a],
            },
            { path: "", redirectTo: "/admin/page/Lead", pathMatch: "full" },
          ],
        },
      ];
      let Re = (() => {
          class s {}
          return (
            (s.ɵfac = function (a) {
              return new (a || s)();
            }),
            (s.ɵmod = e.oAB({ type: s })),
            (s.ɵinj = e.cJS({ imports: [[i.Bz.forChild(Aa)], i.Bz] })),
            s
          );
        })(),
        wa = (() => {
          class s {}
          return (
            (s.ɵfac = function (a) {
              return new (a || s)();
            }),
            (s.ɵmod = e.oAB({ type: s })),
            (s.ɵinj = e.cJS({ imports: [[u.ez, Re]] })),
            s
          );
        })();
    },
    7088: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("af", {
          months:
            "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split(
            "_"
          ),
          weekdays:
            "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split(
              "_"
            ),
          weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
          weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
          meridiemParse: /vm|nm/i,
          isPM: function (o) {
            return /^nm$/i.test(o);
          },
          meridiem: function (o, r, e) {
            return o < 12 ? (e ? "vm" : "VM") : e ? "nm" : "NM";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[M\xf4re om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            ss: "%d sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (o) {
            return o + (1 === o || 8 === o || o >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    2502: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = function (c) {
            return 0 === c
              ? 0
              : 1 === c
              ? 1
              : 2 === c
              ? 2
              : c % 100 >= 3 && c % 100 <= 10
              ? 3
              : c % 100 >= 11
              ? 4
              : 5;
          },
          o = {
            s: [
              "\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629",
              "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",
              [
                "\u062b\u0627\u0646\u064a\u062a\u0627\u0646",
                "\u062b\u0627\u0646\u064a\u062a\u064a\u0646",
              ],
              "%d \u062b\u0648\u0627\u0646",
              "%d \u062b\u0627\u0646\u064a\u0629",
              "%d \u062b\u0627\u0646\u064a\u0629",
            ],
            m: [
              "\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629",
              "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",
              [
                "\u062f\u0642\u064a\u0642\u062a\u0627\u0646",
                "\u062f\u0642\u064a\u0642\u062a\u064a\u0646",
              ],
              "%d \u062f\u0642\u0627\u0626\u0642",
              "%d \u062f\u0642\u064a\u0642\u0629",
              "%d \u062f\u0642\u064a\u0642\u0629",
            ],
            h: [
              "\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629",
              "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",
              [
                "\u0633\u0627\u0639\u062a\u0627\u0646",
                "\u0633\u0627\u0639\u062a\u064a\u0646",
              ],
              "%d \u0633\u0627\u0639\u0627\u062a",
              "%d \u0633\u0627\u0639\u0629",
              "%d \u0633\u0627\u0639\u0629",
            ],
            d: [
              "\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645",
              "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",
              [
                "\u064a\u0648\u0645\u0627\u0646",
                "\u064a\u0648\u0645\u064a\u0646",
              ],
              "%d \u0623\u064a\u0627\u0645",
              "%d \u064a\u0648\u0645\u064b\u0627",
              "%d \u064a\u0648\u0645",
            ],
            M: [
              "\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631",
              "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",
              [
                "\u0634\u0647\u0631\u0627\u0646",
                "\u0634\u0647\u0631\u064a\u0646",
              ],
              "%d \u0623\u0634\u0647\u0631",
              "%d \u0634\u0647\u0631\u0627",
              "%d \u0634\u0647\u0631",
            ],
            y: [
              "\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645",
              "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",
              [
                "\u0639\u0627\u0645\u0627\u0646",
                "\u0639\u0627\u0645\u064a\u0646",
              ],
              "%d \u0623\u0639\u0648\u0627\u0645",
              "%d \u0639\u0627\u0645\u064b\u0627",
              "%d \u0639\u0627\u0645",
            ],
          },
          r = function (c) {
            return function (M, L, D, x) {
              var N = i(M),
                O = o[c][i(M)];
              return 2 === N && (O = O[L ? 0 : 1]), O.replace(/%d/i, M);
            };
          },
          e = [
            "\u062c\u0627\u0646\u0641\u064a",
            "\u0641\u064a\u0641\u0631\u064a",
            "\u0645\u0627\u0631\u0633",
            "\u0623\u0641\u0631\u064a\u0644",
            "\u0645\u0627\u064a",
            "\u062c\u0648\u0627\u0646",
            "\u062c\u0648\u064a\u0644\u064a\u0629",
            "\u0623\u0648\u062a",
            "\u0633\u0628\u062a\u0645\u0628\u0631",
            "\u0623\u0643\u062a\u0648\u0628\u0631",
            "\u0646\u0648\u0641\u0645\u0628\u0631",
            "\u062f\u064a\u0633\u0645\u0628\u0631",
          ];
        u.defineLocale("ar-dz", {
          months: e,
          monthsShort: e,
          weekdays:
            "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysShort:
            "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split(
            "_"
          ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/\u200fM/\u200fYYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /\u0635|\u0645/,
          isPM: function (c) {
            return "\u0645" === c;
          },
          meridiem: function (c, M, L) {
            return c < 12 ? "\u0635" : "\u0645";
          },
          calendar: {
            sameDay:
              "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay:
              "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek:
              "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay:
              "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek:
              "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0628\u0639\u062f %s",
            past: "\u0645\u0646\u0630 %s",
            s: r("s"),
            ss: r("s"),
            m: r("m"),
            mm: r("m"),
            h: r("h"),
            hh: r("h"),
            d: r("d"),
            dd: r("d"),
            M: r("M"),
            MM: r("M"),
            y: r("y"),
            yy: r("y"),
          },
          postformat: function (c) {
            return c.replace(/,/g, "\u060c");
          },
          week: { dow: 0, doy: 4 },
        });
      })(f(5439));
    },
    128: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ar-kw", {
          months:
            "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split(
              "_"
            ),
          monthsShort:
            "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split(
              "_"
            ),
          weekdays:
            "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysShort:
            "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split(
            "_"
          ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay:
              "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay:
              "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek:
              "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay:
              "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek:
              "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a",
          },
          week: { dow: 0, doy: 12 },
        });
      })(f(5439));
    },
    4519: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0",
          },
          o = function (M) {
            return 0 === M
              ? 0
              : 1 === M
              ? 1
              : 2 === M
              ? 2
              : M % 100 >= 3 && M % 100 <= 10
              ? 3
              : M % 100 >= 11
              ? 4
              : 5;
          },
          r = {
            s: [
              "\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629",
              "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",
              [
                "\u062b\u0627\u0646\u064a\u062a\u0627\u0646",
                "\u062b\u0627\u0646\u064a\u062a\u064a\u0646",
              ],
              "%d \u062b\u0648\u0627\u0646",
              "%d \u062b\u0627\u0646\u064a\u0629",
              "%d \u062b\u0627\u0646\u064a\u0629",
            ],
            m: [
              "\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629",
              "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",
              [
                "\u062f\u0642\u064a\u0642\u062a\u0627\u0646",
                "\u062f\u0642\u064a\u0642\u062a\u064a\u0646",
              ],
              "%d \u062f\u0642\u0627\u0626\u0642",
              "%d \u062f\u0642\u064a\u0642\u0629",
              "%d \u062f\u0642\u064a\u0642\u0629",
            ],
            h: [
              "\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629",
              "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",
              [
                "\u0633\u0627\u0639\u062a\u0627\u0646",
                "\u0633\u0627\u0639\u062a\u064a\u0646",
              ],
              "%d \u0633\u0627\u0639\u0627\u062a",
              "%d \u0633\u0627\u0639\u0629",
              "%d \u0633\u0627\u0639\u0629",
            ],
            d: [
              "\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645",
              "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",
              [
                "\u064a\u0648\u0645\u0627\u0646",
                "\u064a\u0648\u0645\u064a\u0646",
              ],
              "%d \u0623\u064a\u0627\u0645",
              "%d \u064a\u0648\u0645\u064b\u0627",
              "%d \u064a\u0648\u0645",
            ],
            M: [
              "\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631",
              "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",
              [
                "\u0634\u0647\u0631\u0627\u0646",
                "\u0634\u0647\u0631\u064a\u0646",
              ],
              "%d \u0623\u0634\u0647\u0631",
              "%d \u0634\u0647\u0631\u0627",
              "%d \u0634\u0647\u0631",
            ],
            y: [
              "\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645",
              "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",
              [
                "\u0639\u0627\u0645\u0627\u0646",
                "\u0639\u0627\u0645\u064a\u0646",
              ],
              "%d \u0623\u0639\u0648\u0627\u0645",
              "%d \u0639\u0627\u0645\u064b\u0627",
              "%d \u0639\u0627\u0645",
            ],
          },
          e = function (M) {
            return function (L, D, x, N) {
              var O = o(L),
                pe = r[M][o(L)];
              return 2 === O && (pe = pe[D ? 0 : 1]), pe.replace(/%d/i, L);
            };
          },
          m = [
            "\u064a\u0646\u0627\u064a\u0631",
            "\u0641\u0628\u0631\u0627\u064a\u0631",
            "\u0645\u0627\u0631\u0633",
            "\u0623\u0628\u0631\u064a\u0644",
            "\u0645\u0627\u064a\u0648",
            "\u064a\u0648\u0646\u064a\u0648",
            "\u064a\u0648\u0644\u064a\u0648",
            "\u0623\u063a\u0633\u0637\u0633",
            "\u0633\u0628\u062a\u0645\u0628\u0631",
            "\u0623\u0643\u062a\u0648\u0628\u0631",
            "\u0646\u0648\u0641\u0645\u0628\u0631",
            "\u062f\u064a\u0633\u0645\u0628\u0631",
          ];
        u.defineLocale("ar-ly", {
          months: m,
          monthsShort: m,
          weekdays:
            "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysShort:
            "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split(
            "_"
          ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/\u200fM/\u200fYYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /\u0635|\u0645/,
          isPM: function (M) {
            return "\u0645" === M;
          },
          meridiem: function (M, L, D) {
            return M < 12 ? "\u0635" : "\u0645";
          },
          calendar: {
            sameDay:
              "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay:
              "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek:
              "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay:
              "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek:
              "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0628\u0639\u062f %s",
            past: "\u0645\u0646\u0630 %s",
            s: e("s"),
            ss: e("s"),
            m: e("m"),
            mm: e("m"),
            h: e("h"),
            hh: e("h"),
            d: e("d"),
            dd: e("d"),
            M: e("M"),
            MM: e("M"),
            y: e("y"),
            yy: e("y"),
          },
          preparse: function (M) {
            return M.replace(/\u060c/g, ",");
          },
          postformat: function (M) {
            return M.replace(/\d/g, function (L) {
              return i[L];
            }).replace(/,/g, "\u060c");
          },
          week: { dow: 6, doy: 12 },
        });
      })(f(5439));
    },
    5443: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ar-ma", {
          months:
            "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split(
              "_"
            ),
          monthsShort:
            "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split(
              "_"
            ),
          weekdays:
            "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysShort:
            "\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split(
            "_"
          ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay:
              "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay:
              "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek:
              "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay:
              "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek:
              "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a",
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    7642: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u0661",
            2: "\u0662",
            3: "\u0663",
            4: "\u0664",
            5: "\u0665",
            6: "\u0666",
            7: "\u0667",
            8: "\u0668",
            9: "\u0669",
            0: "\u0660",
          },
          o = {
            "\u0661": "1",
            "\u0662": "2",
            "\u0663": "3",
            "\u0664": "4",
            "\u0665": "5",
            "\u0666": "6",
            "\u0667": "7",
            "\u0668": "8",
            "\u0669": "9",
            "\u0660": "0",
          };
        u.defineLocale("ar-sa", {
          months:
            "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split(
              "_"
            ),
          monthsShort:
            "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split(
              "_"
            ),
          weekdays:
            "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysShort:
            "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split(
            "_"
          ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /\u0635|\u0645/,
          isPM: function (e) {
            return "\u0645" === e;
          },
          meridiem: function (e, m, c) {
            return e < 12 ? "\u0635" : "\u0645";
          },
          calendar: {
            sameDay:
              "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay:
              "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek:
              "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay:
              "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek:
              "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a",
          },
          preparse: function (e) {
            return e
              .replace(
                /[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,
                function (m) {
                  return o[m];
                }
              )
              .replace(/\u060c/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (m) {
                return i[m];
              })
              .replace(/,/g, "\u060c");
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    8592: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ar-tn", {
          months:
            "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split(
              "_"
            ),
          monthsShort:
            "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split(
              "_"
            ),
          weekdays:
            "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysShort:
            "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split(
            "_"
          ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay:
              "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay:
              "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek:
              "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay:
              "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek:
              "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a",
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    7038: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u0661",
            2: "\u0662",
            3: "\u0663",
            4: "\u0664",
            5: "\u0665",
            6: "\u0666",
            7: "\u0667",
            8: "\u0668",
            9: "\u0669",
            0: "\u0660",
          },
          o = {
            "\u0661": "1",
            "\u0662": "2",
            "\u0663": "3",
            "\u0664": "4",
            "\u0665": "5",
            "\u0666": "6",
            "\u0667": "7",
            "\u0668": "8",
            "\u0669": "9",
            "\u0660": "0",
          },
          r = function (L) {
            return 0 === L
              ? 0
              : 1 === L
              ? 1
              : 2 === L
              ? 2
              : L % 100 >= 3 && L % 100 <= 10
              ? 3
              : L % 100 >= 11
              ? 4
              : 5;
          },
          e = {
            s: [
              "\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629",
              "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",
              [
                "\u062b\u0627\u0646\u064a\u062a\u0627\u0646",
                "\u062b\u0627\u0646\u064a\u062a\u064a\u0646",
              ],
              "%d \u062b\u0648\u0627\u0646",
              "%d \u062b\u0627\u0646\u064a\u0629",
              "%d \u062b\u0627\u0646\u064a\u0629",
            ],
            m: [
              "\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629",
              "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",
              [
                "\u062f\u0642\u064a\u0642\u062a\u0627\u0646",
                "\u062f\u0642\u064a\u0642\u062a\u064a\u0646",
              ],
              "%d \u062f\u0642\u0627\u0626\u0642",
              "%d \u062f\u0642\u064a\u0642\u0629",
              "%d \u062f\u0642\u064a\u0642\u0629",
            ],
            h: [
              "\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629",
              "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",
              [
                "\u0633\u0627\u0639\u062a\u0627\u0646",
                "\u0633\u0627\u0639\u062a\u064a\u0646",
              ],
              "%d \u0633\u0627\u0639\u0627\u062a",
              "%d \u0633\u0627\u0639\u0629",
              "%d \u0633\u0627\u0639\u0629",
            ],
            d: [
              "\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645",
              "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",
              [
                "\u064a\u0648\u0645\u0627\u0646",
                "\u064a\u0648\u0645\u064a\u0646",
              ],
              "%d \u0623\u064a\u0627\u0645",
              "%d \u064a\u0648\u0645\u064b\u0627",
              "%d \u064a\u0648\u0645",
            ],
            M: [
              "\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631",
              "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",
              [
                "\u0634\u0647\u0631\u0627\u0646",
                "\u0634\u0647\u0631\u064a\u0646",
              ],
              "%d \u0623\u0634\u0647\u0631",
              "%d \u0634\u0647\u0631\u0627",
              "%d \u0634\u0647\u0631",
            ],
            y: [
              "\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645",
              "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",
              [
                "\u0639\u0627\u0645\u0627\u0646",
                "\u0639\u0627\u0645\u064a\u0646",
              ],
              "%d \u0623\u0639\u0648\u0627\u0645",
              "%d \u0639\u0627\u0645\u064b\u0627",
              "%d \u0639\u0627\u0645",
            ],
          },
          m = function (L) {
            return function (D, x, N, O) {
              var pe = r(D),
                A = e[L][r(D)];
              return 2 === pe && (A = A[x ? 0 : 1]), A.replace(/%d/i, D);
            };
          },
          c = [
            "\u064a\u0646\u0627\u064a\u0631",
            "\u0641\u0628\u0631\u0627\u064a\u0631",
            "\u0645\u0627\u0631\u0633",
            "\u0623\u0628\u0631\u064a\u0644",
            "\u0645\u0627\u064a\u0648",
            "\u064a\u0648\u0646\u064a\u0648",
            "\u064a\u0648\u0644\u064a\u0648",
            "\u0623\u063a\u0633\u0637\u0633",
            "\u0633\u0628\u062a\u0645\u0628\u0631",
            "\u0623\u0643\u062a\u0648\u0628\u0631",
            "\u0646\u0648\u0641\u0645\u0628\u0631",
            "\u062f\u064a\u0633\u0645\u0628\u0631",
          ];
        u.defineLocale("ar", {
          months: c,
          monthsShort: c,
          weekdays:
            "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysShort:
            "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split(
              "_"
            ),
          weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split(
            "_"
          ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/\u200fM/\u200fYYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /\u0635|\u0645/,
          isPM: function (L) {
            return "\u0645" === L;
          },
          meridiem: function (L, D, x) {
            return L < 12 ? "\u0635" : "\u0645";
          },
          calendar: {
            sameDay:
              "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay:
              "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek:
              "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay:
              "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek:
              "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0628\u0639\u062f %s",
            past: "\u0645\u0646\u0630 %s",
            s: m("s"),
            ss: m("s"),
            m: m("m"),
            mm: m("m"),
            h: m("h"),
            hh: m("h"),
            d: m("d"),
            dd: m("d"),
            M: m("M"),
            MM: m("M"),
            y: m("y"),
            yy: m("y"),
          },
          preparse: function (L) {
            return L.replace(
              /[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,
              function (D) {
                return o[D];
              }
            ).replace(/\u060c/g, ",");
          },
          postformat: function (L) {
            return L.replace(/\d/g, function (D) {
              return i[D];
            }).replace(/,/g, "\u060c");
          },
          week: { dow: 6, doy: 12 },
        });
      })(f(5439));
    },
    1213: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
          1: "-inci",
          5: "-inci",
          8: "-inci",
          70: "-inci",
          80: "-inci",
          2: "-nci",
          7: "-nci",
          20: "-nci",
          50: "-nci",
          3: "-\xfcnc\xfc",
          4: "-\xfcnc\xfc",
          100: "-\xfcnc\xfc",
          6: "-nc\u0131",
          9: "-uncu",
          10: "-uncu",
          30: "-uncu",
          60: "-\u0131nc\u0131",
          90: "-\u0131nc\u0131",
        };
        u.defineLocale("az", {
          months:
            "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
              "_"
            ),
          monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split(
            "_"
          ),
          weekdays:
            "Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split(
              "_"
            ),
          weekdaysShort:
            "Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"),
          weekdaysMin: "Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split(
            "_"
          ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[bug\xfcn saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",
            lastDay: "[d\xfcn\u0259n] LT",
            lastWeek: "[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s sonra",
            past: "%s \u0259vv\u0259l",
            s: "bir ne\xe7\u0259 saniy\u0259",
            ss: "%d saniy\u0259",
            m: "bir d\u0259qiq\u0259",
            mm: "%d d\u0259qiq\u0259",
            h: "bir saat",
            hh: "%d saat",
            d: "bir g\xfcn",
            dd: "%d g\xfcn",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il",
          },
          meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
          isPM: function (r) {
            return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(r);
          },
          meridiem: function (r, e, m) {
            return r < 4
              ? "gec\u0259"
              : r < 12
              ? "s\u0259h\u0259r"
              : r < 17
              ? "g\xfcnd\xfcz"
              : "ax\u015fam";
          },
          dayOfMonthOrdinalParse:
            /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
          ordinal: function (r) {
            if (0 === r) return r + "-\u0131nc\u0131";
            var e = r % 10;
            return r + (i[e] || i[(r % 100) - e] || i[r >= 100 ? 100 : null]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    9191: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function o(e, m, c) {
          return "m" === c
            ? m
              ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430"
              : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443"
            : "h" === c
            ? m
              ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430"
              : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443"
            : e +
              " " +
              (function i(e, m) {
                var c = e.split("_");
                return m % 10 == 1 && m % 100 != 11
                  ? c[0]
                  : m % 10 >= 2 &&
                    m % 10 <= 4 &&
                    (m % 100 < 10 || m % 100 >= 20)
                  ? c[1]
                  : c[2];
              })(
                {
                  ss: m
                    ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434"
                    : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
                  mm: m
                    ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d"
                    : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",
                  hh: m
                    ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d"
                    : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",
                  dd: "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",
                  MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",
                  yy: "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e",
                }[c],
                +e
              );
        }
        u.defineLocale("be", {
          months: {
            format:
              "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split(
                "_"
              ),
            standalone:
              "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split(
                "_"
              ),
          },
          monthsShort:
            "\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split(
              "_"
            ),
          weekdays: {
            format:
              "\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split(
                "_"
              ),
            standalone:
              "\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split(
                "_"
              ),
            isFormat:
              /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/,
          },
          weekdaysShort:
            "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split(
              "_"
            ),
          weekdaysMin:
            "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0433.",
            LLL: "D MMMM YYYY \u0433., HH:mm",
            LLLL: "dddd, D MMMM YYYY \u0433., HH:mm",
          },
          calendar: {
            sameDay: "[\u0421\u0451\u043d\u043d\u044f \u045e] LT",
            nextDay: "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",
            lastDay: "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",
            nextWeek: function () {
              return "[\u0423] dddd [\u045e] LT";
            },
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";
                case 1:
                case 2:
                case 4:
                  return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "\u043f\u0440\u0430\u0437 %s",
            past: "%s \u0442\u0430\u043c\u0443",
            s: "\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",
            m: o,
            mm: o,
            h: o,
            hh: o,
            d: "\u0434\u0437\u0435\u043d\u044c",
            dd: o,
            M: "\u043c\u0435\u0441\u044f\u0446",
            MM: o,
            y: "\u0433\u043e\u0434",
            yy: o,
          },
          meridiemParse:
            /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
          isPM: function (e) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(
              e
            );
          },
          meridiem: function (e, m, c) {
            return e < 4
              ? "\u043d\u043e\u0447\u044b"
              : e < 12
              ? "\u0440\u0430\u043d\u0456\u0446\u044b"
              : e < 17
              ? "\u0434\u043d\u044f"
              : "\u0432\u0435\u0447\u0430\u0440\u0430";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
          ordinal: function (e, m) {
            switch (m) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return (e % 10 != 2 && e % 10 != 3) ||
                  e % 100 == 12 ||
                  e % 100 == 13
                  ? e + "-\u044b"
                  : e + "-\u0456";
              case "D":
                return e + "-\u0433\u0430";
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    322: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("bg", {
          months:
            "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(
              "_"
            ),
          monthsShort:
            "\u044f\u043d\u0443_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split(
              "_"
            ),
          weekdays:
            "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split(
              "_"
            ),
          weekdaysShort:
            "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split(
              "_"
            ),
          weekdaysMin:
            "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split(
              "_"
            ),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT",
            nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
            nextWeek: "dddd [\u0432] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[\u041c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[\u041c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0441\u043b\u0435\u0434 %s",
            past: "\u043f\u0440\u0435\u0434\u0438 %s",
            s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            m: "\u043c\u0438\u043d\u0443\u0442\u0430",
            mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
            h: "\u0447\u0430\u0441",
            hh: "%d \u0447\u0430\u0441\u0430",
            d: "\u0434\u0435\u043d",
            dd: "%d \u0434\u0435\u043d\u0430",
            w: "\u0441\u0435\u0434\u043c\u0438\u0446\u0430",
            ww: "%d \u0441\u0435\u0434\u043c\u0438\u0446\u0438",
            M: "\u043c\u0435\u0441\u0435\u0446",
            MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430",
            y: "\u0433\u043e\u0434\u0438\u043d\u0430",
            yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438",
          },
          dayOfMonthOrdinalParse:
            /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
          ordinal: function (o) {
            var r = o % 10,
              e = o % 100;
            return 0 === o
              ? o + "-\u0435\u0432"
              : 0 === e
              ? o + "-\u0435\u043d"
              : e > 10 && e < 20
              ? o + "-\u0442\u0438"
              : 1 === r
              ? o + "-\u0432\u0438"
              : 2 === r
              ? o + "-\u0440\u0438"
              : 7 === r || 8 === r
              ? o + "-\u043c\u0438"
              : o + "-\u0442\u0438";
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    8042: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("bm", {
          months:
            "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split(
              "_"
            ),
          monthsShort:
            "Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split(
              "_"
            ),
          weekdays:
            "Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
          weekdaysShort: "Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"),
          weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "MMMM [tile] D [san] YYYY",
            LLL: "MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm",
            LLLL: "dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm",
          },
          calendar: {
            sameDay: "[Bi l\u025br\u025b] LT",
            nextDay: "[Sini l\u025br\u025b] LT",
            nextWeek: "dddd [don l\u025br\u025b] LT",
            lastDay: "[Kunu l\u025br\u025b] LT",
            lastWeek: "dddd [t\u025bm\u025bnen l\u025br\u025b] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s k\u0254n\u0254",
            past: "a b\u025b %s b\u0254",
            s: "sanga dama dama",
            ss: "sekondi %d",
            m: "miniti kelen",
            mm: "miniti %d",
            h: "l\u025br\u025b kelen",
            hh: "l\u025br\u025b %d",
            d: "tile kelen",
            dd: "tile %d",
            M: "kalo kelen",
            MM: "kalo %d",
            y: "san kelen",
            yy: "san %d",
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    5903: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u09e7",
            2: "\u09e8",
            3: "\u09e9",
            4: "\u09ea",
            5: "\u09eb",
            6: "\u09ec",
            7: "\u09ed",
            8: "\u09ee",
            9: "\u09ef",
            0: "\u09e6",
          },
          o = {
            "\u09e7": "1",
            "\u09e8": "2",
            "\u09e9": "3",
            "\u09ea": "4",
            "\u09eb": "5",
            "\u09ec": "6",
            "\u09ed": "7",
            "\u09ee": "8",
            "\u09ef": "9",
            "\u09e6": "0",
          };
        u.defineLocale("bn-bd", {
          months:
            "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(
              "_"
            ),
          monthsShort:
            "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split(
              "_"
            ),
          weekdays:
            "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(
              "_"
            ),
          weekdaysShort:
            "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split(
              "_"
            ),
          weekdaysMin:
            "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split(
              "_"
            ),
          longDateFormat: {
            LT: "A h:mm \u09b8\u09ae\u09df",
            LTS: "A h:mm:ss \u09b8\u09ae\u09df",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
          },
          calendar: {
            sameDay: "[\u0986\u099c] LT",
            nextDay: "[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0997\u09a4\u0995\u09be\u09b2] LT",
            lastWeek: "[\u0997\u09a4] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u09aa\u09b0\u09c7",
            past: "%s \u0986\u0997\u09c7",
            s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
            ss: "%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
            m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",
            mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f",
            h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",
            hh: "%d \u0998\u09a8\u09cd\u099f\u09be",
            d: "\u098f\u0995 \u09a6\u09bf\u09a8",
            dd: "%d \u09a6\u09bf\u09a8",
            M: "\u098f\u0995 \u09ae\u09be\u09b8",
            MM: "%d \u09ae\u09be\u09b8",
            y: "\u098f\u0995 \u09ac\u099b\u09b0",
            yy: "%d \u09ac\u099b\u09b0",
          },
          preparse: function (e) {
            return e.replace(
              /[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g,
              function (m) {
                return o[m];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (m) {
              return i[m];
            });
          },
          meridiemParse:
            /\u09b0\u09be\u09a4|\u09ad\u09cb\u09b0|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be|\u09b0\u09be\u09a4/,
          meridiemHour: function (e, m) {
            return (
              12 === e && (e = 0),
              "\u09b0\u09be\u09a4" === m
                ? e < 4
                  ? e
                  : e + 12
                : "\u09ad\u09cb\u09b0" === m || "\u09b8\u0995\u09be\u09b2" === m
                ? e
                : "\u09a6\u09c1\u09aa\u09c1\u09b0" === m
                ? e >= 3
                  ? e
                  : e + 12
                : "\u09ac\u09bf\u0995\u09be\u09b2" === m ||
                  "\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be" === m
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, m, c) {
            return e < 4
              ? "\u09b0\u09be\u09a4"
              : e < 6
              ? "\u09ad\u09cb\u09b0"
              : e < 12
              ? "\u09b8\u0995\u09be\u09b2"
              : e < 15
              ? "\u09a6\u09c1\u09aa\u09c1\u09b0"
              : e < 18
              ? "\u09ac\u09bf\u0995\u09be\u09b2"
              : e < 20
              ? "\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be"
              : "\u09b0\u09be\u09a4";
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    9620: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u09e7",
            2: "\u09e8",
            3: "\u09e9",
            4: "\u09ea",
            5: "\u09eb",
            6: "\u09ec",
            7: "\u09ed",
            8: "\u09ee",
            9: "\u09ef",
            0: "\u09e6",
          },
          o = {
            "\u09e7": "1",
            "\u09e8": "2",
            "\u09e9": "3",
            "\u09ea": "4",
            "\u09eb": "5",
            "\u09ec": "6",
            "\u09ed": "7",
            "\u09ee": "8",
            "\u09ef": "9",
            "\u09e6": "0",
          };
        u.defineLocale("bn", {
          months:
            "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(
              "_"
            ),
          monthsShort:
            "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split(
              "_"
            ),
          weekdays:
            "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(
              "_"
            ),
          weekdaysShort:
            "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split(
              "_"
            ),
          weekdaysMin:
            "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split(
              "_"
            ),
          longDateFormat: {
            LT: "A h:mm \u09b8\u09ae\u09df",
            LTS: "A h:mm:ss \u09b8\u09ae\u09df",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
          },
          calendar: {
            sameDay: "[\u0986\u099c] LT",
            nextDay: "[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0997\u09a4\u0995\u09be\u09b2] LT",
            lastWeek: "[\u0997\u09a4] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u09aa\u09b0\u09c7",
            past: "%s \u0986\u0997\u09c7",
            s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
            ss: "%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
            m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",
            mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f",
            h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",
            hh: "%d \u0998\u09a8\u09cd\u099f\u09be",
            d: "\u098f\u0995 \u09a6\u09bf\u09a8",
            dd: "%d \u09a6\u09bf\u09a8",
            M: "\u098f\u0995 \u09ae\u09be\u09b8",
            MM: "%d \u09ae\u09be\u09b8",
            y: "\u098f\u0995 \u09ac\u099b\u09b0",
            yy: "%d \u09ac\u099b\u09b0",
          },
          preparse: function (e) {
            return e.replace(
              /[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g,
              function (m) {
                return o[m];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (m) {
              return i[m];
            });
          },
          meridiemParse:
            /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
          meridiemHour: function (e, m) {
            return (
              12 === e && (e = 0),
              ("\u09b0\u09be\u09a4" === m && e >= 4) ||
              ("\u09a6\u09c1\u09aa\u09c1\u09b0" === m && e < 5) ||
              "\u09ac\u09bf\u0995\u09be\u09b2" === m
                ? e + 12
                : e
            );
          },
          meridiem: function (e, m, c) {
            return e < 4
              ? "\u09b0\u09be\u09a4"
              : e < 10
              ? "\u09b8\u0995\u09be\u09b2"
              : e < 17
              ? "\u09a6\u09c1\u09aa\u09c1\u09b0"
              : e < 20
              ? "\u09ac\u09bf\u0995\u09be\u09b2"
              : "\u09b0\u09be\u09a4";
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    9645: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u0f21",
            2: "\u0f22",
            3: "\u0f23",
            4: "\u0f24",
            5: "\u0f25",
            6: "\u0f26",
            7: "\u0f27",
            8: "\u0f28",
            9: "\u0f29",
            0: "\u0f20",
          },
          o = {
            "\u0f21": "1",
            "\u0f22": "2",
            "\u0f23": "3",
            "\u0f24": "4",
            "\u0f25": "5",
            "\u0f26": "6",
            "\u0f27": "7",
            "\u0f28": "8",
            "\u0f29": "9",
            "\u0f20": "0",
          };
        u.defineLocale("bo", {
          months:
            "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split(
              "_"
            ),
          monthsShort:
            "\u0f5f\u0fb3\u0f0b1_\u0f5f\u0fb3\u0f0b2_\u0f5f\u0fb3\u0f0b3_\u0f5f\u0fb3\u0f0b4_\u0f5f\u0fb3\u0f0b5_\u0f5f\u0fb3\u0f0b6_\u0f5f\u0fb3\u0f0b7_\u0f5f\u0fb3\u0f0b8_\u0f5f\u0fb3\u0f0b9_\u0f5f\u0fb3\u0f0b10_\u0f5f\u0fb3\u0f0b11_\u0f5f\u0fb3\u0f0b12".split(
              "_"
            ),
          monthsShortRegex: /^(\u0f5f\u0fb3\u0f0b\d{1,2})/,
          monthsParseExact: !0,
          weekdays:
            "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split(
              "_"
            ),
          weekdaysShort:
            "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split(
              "_"
            ),
          weekdaysMin:
            "\u0f49\u0f72_\u0f5f\u0fb3_\u0f58\u0f72\u0f42_\u0f63\u0fb7\u0f42_\u0f55\u0f74\u0f62_\u0f66\u0f44\u0f66_\u0f66\u0fa4\u0f7a\u0f53".split(
              "_"
            ),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm",
          },
          calendar: {
            sameDay: "[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT",
            nextDay: "[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT",
            nextWeek:
              "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT",
            lastDay: "[\u0f41\u0f0b\u0f66\u0f44] LT",
            lastWeek:
              "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0f63\u0f0b",
            past: "%s \u0f66\u0f94\u0f53\u0f0b\u0f63",
            s: "\u0f63\u0f58\u0f0b\u0f66\u0f44",
            ss: "%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d",
            m: "\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42",
            mm: "%d \u0f66\u0f90\u0f62\u0f0b\u0f58",
            h: "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42",
            hh: "%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51",
            d: "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42",
            dd: "%d \u0f49\u0f72\u0f53\u0f0b",
            M: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42",
            MM: "%d \u0f5f\u0fb3\u0f0b\u0f56",
            y: "\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42",
            yy: "%d \u0f63\u0f7c",
          },
          preparse: function (e) {
            return e.replace(
              /[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g,
              function (m) {
                return o[m];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (m) {
              return i[m];
            });
          },
          meridiemParse:
            /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
          meridiemHour: function (e, m) {
            return (
              12 === e && (e = 0),
              ("\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" === m && e >= 4) ||
              ("\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" === m && e < 5) ||
              "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" === m
                ? e + 12
                : e
            );
          },
          meridiem: function (e, m, c) {
            return e < 4
              ? "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"
              : e < 10
              ? "\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66"
              : e < 17
              ? "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44"
              : e < 20
              ? "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42"
              : "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c";
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    5020: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(A, ie, J) {
          return (
            A +
            " " +
            (function e(A, ie) {
              return 2 === ie
                ? (function m(A) {
                    var ie = { m: "v", b: "v", d: "z" };
                    return void 0 === ie[A.charAt(0)]
                      ? A
                      : ie[A.charAt(0)] + A.substring(1);
                  })(A)
                : A;
            })({ mm: "munutenn", MM: "miz", dd: "devezh" }[J], A)
          );
        }
        function r(A) {
          return A > 9 ? r(A % 10) : A;
        }
        var c = [
            /^gen/i,
            /^c[\u02bc\']hwe/i,
            /^meu/i,
            /^ebr/i,
            /^mae/i,
            /^(mez|eve)/i,
            /^gou/i,
            /^eos/i,
            /^gwe/i,
            /^her/i,
            /^du/i,
            /^ker/i,
          ],
          M =
            /^(genver|c[\u02bc\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[\u02bc\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
          O = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
        u.defineLocale("br", {
          months:
            "Genver_C\u02bchwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
              "_"
            ),
          monthsShort:
            "Gen_C\u02bchwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
          weekdays: "Sul_Lun_Meurzh_Merc\u02bcher_Yaou_Gwener_Sadorn".split(
            "_"
          ),
          weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
          weekdaysParse: O,
          fullWeekdaysParse: [
            /^sul/i,
            /^lun/i,
            /^meurzh/i,
            /^merc[\u02bc\']her/i,
            /^yaou/i,
            /^gwener/i,
            /^sadorn/i,
          ],
          shortWeekdaysParse: [
            /^Sul/i,
            /^Lun/i,
            /^Meu/i,
            /^Mer/i,
            /^Yao/i,
            /^Gwe/i,
            /^Sad/i,
          ],
          minWeekdaysParse: O,
          monthsRegex: M,
          monthsShortRegex: M,
          monthsStrictRegex:
            /^(genver|c[\u02bc\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
          monthsShortStrictRegex:
            /^(gen|c[\u02bc\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
          monthsParse: c,
          longMonthsParse: c,
          shortMonthsParse: c,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY HH:mm",
            LLLL: "dddd, D [a viz] MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warc\u02bchoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Dec\u02bch da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "a-benn %s",
            past: "%s \u02bczo",
            s: "un nebeud segondenno\xf9",
            ss: "%d eilenn",
            m: "ur vunutenn",
            mm: i,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: i,
            M: "ur miz",
            MM: i,
            y: "ur bloaz",
            yy: function o(A) {
              switch (r(A)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                  return A + " bloaz";
                default:
                  return A + " vloaz";
              }
            },
          },
          dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
          ordinal: function (A) {
            return A + (1 === A ? "a\xf1" : "vet");
          },
          week: { dow: 1, doy: 4 },
          meridiemParse: /a.m.|g.m./,
          isPM: function (A) {
            return "g.m." === A;
          },
          meridiem: function (A, ie, J) {
            return A < 12 ? "a.m." : "g.m.";
          },
        });
      })(f(5439));
    },
    4792: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(r, e, m) {
          var c = r + " ";
          switch (m) {
            case "ss":
              return (
                c +
                (1 === r
                  ? "sekunda"
                  : 2 === r || 3 === r || 4 === r
                  ? "sekunde"
                  : "sekundi")
              );
            case "m":
              return e ? "jedna minuta" : "jedne minute";
            case "mm":
              return (
                c +
                (1 === r
                  ? "minuta"
                  : 2 === r || 3 === r || 4 === r
                  ? "minute"
                  : "minuta")
              );
            case "h":
              return e ? "jedan sat" : "jednog sata";
            case "hh":
              return (
                c +
                (1 === r
                  ? "sat"
                  : 2 === r || 3 === r || 4 === r
                  ? "sata"
                  : "sati")
              );
            case "dd":
              return c + (1 === r ? "dan" : "dana");
            case "MM":
              return (
                c +
                (1 === r
                  ? "mjesec"
                  : 2 === r || 3 === r || 4 === r
                  ? "mjeseca"
                  : "mjeseci")
              );
            case "yy":
              return (
                c +
                (1 === r
                  ? "godina"
                  : 2 === r || 3 === r || 4 === r
                  ? "godine"
                  : "godina")
              );
          }
        }
        u.defineLocale("bs", {
          months:
            "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
              "_"
            ),
          monthsShort:
            "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split(
              "_"
            ),
          weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[ju\u010der u] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                  return "[pro\u0161lu] dddd [u] LT";
                case 6:
                  return "[pro\u0161le] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[pro\u0161li] dddd [u] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: "dan",
            dd: i,
            M: "mjesec",
            MM: i,
            y: "godinu",
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    7980: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ca", {
          months: {
            standalone:
              "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
                "_"
              ),
            format:
              "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
                "_"
              ),
            isFormat: /D[oD]?(\s)+MMMM/,
          },
          monthsShort:
            "gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split(
              "_"
            ),
          weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
          weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a les] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
            llll: "ddd D MMM YYYY, H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextDay: function () {
              return (
                "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT"
              );
            },
            nextWeek: function () {
              return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastDay: function () {
              return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [passat a " +
                (1 !== this.hours() ? "les" : "la") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "d'aqu\xed %s",
            past: "fa %s",
            s: "uns segons",
            ss: "%d segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
          ordinal: function (o, r) {
            var e =
              1 === o
                ? "r"
                : 2 === o
                ? "n"
                : 3 === o
                ? "r"
                : 4 === o
                ? "t"
                : "\xe8";
            return ("w" === r || "W" === r) && (e = "a"), o + e;
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    6466: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
            "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split(
              "_"
            ),
          o =
            "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split(
              "_"
            ),
          r = [
            /^led/i,
            /^\xfano/i,
            /^b\u0159e/i,
            /^dub/i,
            /^kv\u011b/i,
            /^(\u010dvn|\u010derven$|\u010dervna)/i,
            /^(\u010dvc|\u010dervenec|\u010dervence)/i,
            /^srp/i,
            /^z\xe1\u0159/i,
            /^\u0159\xedj/i,
            /^lis/i,
            /^pro/i,
          ],
          e =
            /^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;
        function m(L) {
          return L > 1 && L < 5 && 1 != ~~(L / 10);
        }
        function c(L, D, x, N) {
          var O = L + " ";
          switch (x) {
            case "s":
              return D || N ? "p\xe1r sekund" : "p\xe1r sekundami";
            case "ss":
              return D || N
                ? O + (m(L) ? "sekundy" : "sekund")
                : O + "sekundami";
            case "m":
              return D ? "minuta" : N ? "minutu" : "minutou";
            case "mm":
              return D || N ? O + (m(L) ? "minuty" : "minut") : O + "minutami";
            case "h":
              return D ? "hodina" : N ? "hodinu" : "hodinou";
            case "hh":
              return D || N ? O + (m(L) ? "hodiny" : "hodin") : O + "hodinami";
            case "d":
              return D || N ? "den" : "dnem";
            case "dd":
              return D || N ? O + (m(L) ? "dny" : "dn\xed") : O + "dny";
            case "M":
              return D || N ? "m\u011bs\xedc" : "m\u011bs\xedcem";
            case "MM":
              return D || N
                ? O + (m(L) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f")
                : O + "m\u011bs\xedci";
            case "y":
              return D || N ? "rok" : "rokem";
            case "yy":
              return D || N ? O + (m(L) ? "roky" : "let") : O + "lety";
          }
        }
        u.defineLocale("cs", {
          months: i,
          monthsShort: o,
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i,
          monthsShortStrictRegex:
            /^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i,
          monthsParse: r,
          longMonthsParse: r,
          shortMonthsParse: r,
          weekdays:
            "ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split(
              "_"
            ),
          weekdaysShort: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
          weekdaysMin: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY",
          },
          calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[z\xedtra v] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v ned\u011bli v] LT";
                case 1:
                case 2:
                  return "[v] dddd [v] LT";
                case 3:
                  return "[ve st\u0159edu v] LT";
                case 4:
                  return "[ve \u010dtvrtek v] LT";
                case 5:
                  return "[v p\xe1tek v] LT";
                case 6:
                  return "[v sobotu v] LT";
              }
            },
            lastDay: "[v\u010dera v] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[minulou ned\u011bli v] LT";
                case 1:
                case 2:
                  return "[minul\xe9] dddd [v] LT";
                case 3:
                  return "[minulou st\u0159edu v] LT";
                case 4:
                case 5:
                  return "[minul\xfd] dddd [v] LT";
                case 6:
                  return "[minulou sobotu v] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "p\u0159ed %s",
            s: c,
            ss: c,
            m: c,
            mm: c,
            h: c,
            hh: c,
            d: c,
            dd: c,
            M: c,
            MM: c,
            y: c,
            yy: c,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    365: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("cv", {
          months:
            "\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split(
              "_"
            ),
          monthsShort:
            "\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split(
              "_"
            ),
          weekdays:
            "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split(
              "_"
            ),
          weekdaysShort:
            "\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split(
              "_"
            ),
          weekdaysMin:
            "\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]",
            LLL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm",
            LLLL: "dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm",
          },
          calendar: {
            sameDay:
              "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            nextDay:
              "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            lastDay:
              "[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            nextWeek:
              "[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            lastWeek:
              "[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            sameElse: "L",
          },
          relativeTime: {
            future: function (o) {
              return (
                o +
                (/\u0441\u0435\u0445\u0435\u0442$/i.exec(o)
                  ? "\u0440\u0435\u043d"
                  : /\u04ab\u0443\u043b$/i.exec(o)
                  ? "\u0442\u0430\u043d"
                  : "\u0440\u0430\u043d")
              );
            },
            past: "%s \u043a\u0430\u044f\u043b\u043b\u0430",
            s: "\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",
            ss: "%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",
            m: "\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442",
            mm: "%d \u043c\u0438\u043d\u0443\u0442",
            h: "\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442",
            hh: "%d \u0441\u0435\u0445\u0435\u0442",
            d: "\u043f\u04d7\u0440 \u043a\u0443\u043d",
            dd: "%d \u043a\u0443\u043d",
            M: "\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445",
            MM: "%d \u0443\u0439\u04d1\u0445",
            y: "\u043f\u04d7\u0440 \u04ab\u0443\u043b",
            yy: "%d \u04ab\u0443\u043b",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/,
          ordinal: "%d-\u043c\u04d7\u0448",
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    2092: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("cy", {
          months:
            "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split(
              "_"
            ),
          monthsShort:
            "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
          weekdays:
            "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split(
              "_"
            ),
          weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "mewn %s",
            past: "%s yn \xf4l",
            s: "ychydig eiliadau",
            ss: "%d eiliad",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
          ordinal: function (o) {
            var e = "";
            return (
              o > 20
                ? (e =
                    40 === o || 50 === o || 60 === o || 80 === o || 100 === o
                      ? "fed"
                      : "ain")
                : o > 0 &&
                  (e = [
                    "",
                    "af",
                    "il",
                    "ydd",
                    "ydd",
                    "ed",
                    "ed",
                    "ed",
                    "fed",
                    "fed",
                    "fed",
                    "eg",
                    "fed",
                    "eg",
                    "eg",
                    "fed",
                    "eg",
                    "eg",
                    "fed",
                    "eg",
                    "fed",
                  ][o]),
              o + e
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    7387: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("da", {
          months:
            "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
              "_"
            ),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
            "_"
          ),
          weekdays:
            "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split(
              "_"
            ),
          weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),
          weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "p\xe5 dddd [kl.] LT",
            lastDay: "[i g\xe5r kl.] LT",
            lastWeek: "[i] dddd[s kl.] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "f\xe5 sekunder",
            ss: "%d sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en m\xe5ned",
            MM: "%d m\xe5neder",
            y: "et \xe5r",
            yy: "%d \xe5r",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    9459: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(r, e, m, c) {
          var M = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [r + " Tage", r + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [r + " Monate", r + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [r + " Jahre", r + " Jahren"],
          };
          return e ? M[m][0] : M[m][1];
        }
        u.defineLocale("de-at", {
          months:
            "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_"
            ),
          monthsShort:
            "J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
              "_"
            ),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]",
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: i,
            mm: "%d Minuten",
            h: i,
            hh: "%d Stunden",
            d: i,
            dd: i,
            w: i,
            ww: "%d Wochen",
            M: i,
            MM: i,
            y: i,
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    3694: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(r, e, m, c) {
          var M = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [r + " Tage", r + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [r + " Monate", r + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [r + " Jahre", r + " Jahren"],
          };
          return e ? M[m][0] : M[m][1];
        }
        u.defineLocale("de-ch", {
          months:
            "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_"
            ),
          monthsShort:
            "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
              "_"
            ),
          weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]",
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: i,
            mm: "%d Minuten",
            h: i,
            hh: "%d Stunden",
            d: i,
            dd: i,
            w: i,
            ww: "%d Wochen",
            M: i,
            MM: i,
            y: i,
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    4307: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(r, e, m, c) {
          var M = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [r + " Tage", r + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [r + " Monate", r + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [r + " Jahre", r + " Jahren"],
          };
          return e ? M[m][0] : M[m][1];
        }
        u.defineLocale("de", {
          months:
            "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_"
            ),
          monthsShort:
            "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
              "_"
            ),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]",
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: i,
            mm: "%d Minuten",
            h: i,
            hh: "%d Stunden",
            d: i,
            dd: i,
            w: i,
            ww: "%d Wochen",
            M: i,
            MM: i,
            y: i,
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    9659: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = [
            "\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9",
            "\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9",
            "\u0789\u07a7\u0783\u07a8\u0797\u07aa",
            "\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa",
            "\u0789\u07ad",
            "\u0796\u07ab\u0782\u07b0",
            "\u0796\u07aa\u078d\u07a6\u0787\u07a8",
            "\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa",
            "\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa",
            "\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa",
            "\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa",
            "\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa",
          ],
          o = [
            "\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6",
            "\u0780\u07af\u0789\u07a6",
            "\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6",
            "\u0784\u07aa\u078b\u07a6",
            "\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8",
            "\u0780\u07aa\u0786\u07aa\u0783\u07aa",
            "\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa",
          ];
        u.defineLocale("dv", {
          months: i,
          monthsShort: i,
          weekdays: o,
          weekdaysShort: o,
          weekdaysMin:
            "\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /\u0789\u0786|\u0789\u078a/,
          isPM: function (e) {
            return "\u0789\u078a" === e;
          },
          meridiem: function (e, m, c) {
            return e < 12 ? "\u0789\u0786" : "\u0789\u078a";
          },
          calendar: {
            sameDay: "[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT",
            nextDay: "[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT",
            nextWeek: "dddd LT",
            lastDay: "[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT",
            lastWeek:
              "[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s",
            past: "\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s",
            s: "\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0",
            ss: "d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa",
            m: "\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0",
            mm: "\u0789\u07a8\u0782\u07a8\u0793\u07aa %d",
            h: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0",
            hh: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d",
            d: "\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0",
            dd: "\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d",
            M: "\u0789\u07a6\u0780\u07ac\u0787\u07b0",
            MM: "\u0789\u07a6\u0790\u07b0 %d",
            y: "\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0",
            yy: "\u0787\u07a6\u0780\u07a6\u0783\u07aa %d",
          },
          preparse: function (e) {
            return e.replace(/\u060c/g, ",");
          },
          postformat: function (e) {
            return e.replace(/,/g, "\u060c");
          },
          week: { dow: 7, doy: 12 },
        });
      })(f(5439));
    },
    3460: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("el", {
          monthsNominativeEl:
            "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split(
              "_"
            ),
          monthsGenitiveEl:
            "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split(
              "_"
            ),
          months: function (r, e) {
            return r
              ? "string" == typeof e &&
                /D/.test(e.substring(0, e.indexOf("MMMM")))
                ? this._monthsGenitiveEl[r.month()]
                : this._monthsNominativeEl[r.month()]
              : this._monthsNominativeEl;
          },
          monthsShort:
            "\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split(
              "_"
            ),
          weekdays:
            "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split(
              "_"
            ),
          weekdaysShort:
            "\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split(
              "_"
            ),
          weekdaysMin:
            "\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split(
              "_"
            ),
          meridiem: function (r, e, m) {
            return r > 11
              ? m
                ? "\u03bc\u03bc"
                : "\u039c\u039c"
              : m
              ? "\u03c0\u03bc"
              : "\u03a0\u039c";
          },
          isPM: function (r) {
            return "\u03bc" === (r + "").toLowerCase()[0];
          },
          meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendarEl: {
            sameDay: "[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT",
            nextDay: "[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[\u03a7\u03b8\u03b5\u03c2 {}] LT",
            lastWeek: function () {
              return 6 === this.day()
                ? "[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT"
                : "[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT";
            },
            sameElse: "L",
          },
          calendar: function (r, e) {
            var m = this._calendarEl[r],
              c = e && e.hours();
            return (
              (function i(r) {
                return (
                  ("undefined" != typeof Function && r instanceof Function) ||
                  "[object Function]" === Object.prototype.toString.call(r)
                );
              })(m) && (m = m.apply(e)),
              m.replace(
                "{}",
                c % 12 == 1 ? "\u03c3\u03c4\u03b7" : "\u03c3\u03c4\u03b9\u03c2"
              )
            );
          },
          relativeTime: {
            future: "\u03c3\u03b5 %s",
            past: "%s \u03c0\u03c1\u03b9\u03bd",
            s: "\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
            ss: "%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
            m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
            mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac",
            h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",
            hh: "%d \u03ce\u03c1\u03b5\u03c2",
            d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",
            dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2",
            M: "\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",
            MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2",
            y: "\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2",
            yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
          ordinal: "%d\u03b7",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    4369: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("en-au", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (o) {
            var r = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === r
                ? "st"
                : 2 === r
                ? "nd"
                : 3 === r
                ? "rd"
                : "th")
            );
          },
          week: { dow: 0, doy: 4 },
        });
      })(f(5439));
    },
    530: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("en-ca", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (o) {
            var r = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === r
                ? "st"
                : 2 === r
                ? "nd"
                : 3 === r
                ? "rd"
                : "th")
            );
          },
        });
      })(f(5439));
    },
    9998: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("en-gb", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (o) {
            var r = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === r
                ? "st"
                : 2 === r
                ? "nd"
                : 3 === r
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    3391: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("en-ie", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (o) {
            var r = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === r
                ? "st"
                : 2 === r
                ? "nd"
                : 3 === r
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    5414: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("en-il", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (o) {
            var r = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === r
                ? "st"
                : 2 === r
                ? "nd"
                : 3 === r
                ? "rd"
                : "th")
            );
          },
        });
      })(f(5439));
    },
    9615: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("en-in", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (o) {
            var r = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === r
                ? "st"
                : 2 === r
                ? "nd"
                : 3 === r
                ? "rd"
                : "th")
            );
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    1248: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("en-nz", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (o) {
            var r = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === r
                ? "st"
                : 2 === r
                ? "nd"
                : 3 === r
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    3767: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("en-sg", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_"
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (o) {
            var r = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === r
                ? "st"
                : 2 === r
                ? "nd"
                : 3 === r
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    4530: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("eo", {
          months:
            "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split(
              "_"
            ),
          monthsShort:
            "jan_feb_mart_apr_maj_jun_jul_a\u016dg_sept_okt_nov_dec".split("_"),
          weekdays:
            "diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split(
              "_"
            ),
          weekdaysShort: "dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"),
          weekdaysMin: "di_lu_ma_me_\u0135a_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "[la] D[-an de] MMMM, YYYY",
            LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
            LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
            llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm",
          },
          meridiemParse: /[ap]\.t\.m/i,
          isPM: function (o) {
            return "p" === o.charAt(0).toLowerCase();
          },
          meridiem: function (o, r, e) {
            return o > 11 ? (e ? "p.t.m." : "P.T.M.") : e ? "a.t.m." : "A.T.M.";
          },
          calendar: {
            sameDay: "[Hodia\u016d je] LT",
            nextDay: "[Morga\u016d je] LT",
            nextWeek: "dddd[n je] LT",
            lastDay: "[Hiera\u016d je] LT",
            lastWeek: "[pasintan] dddd[n je] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "post %s",
            past: "anta\u016d %s",
            s: "kelkaj sekundoj",
            ss: "%d sekundoj",
            m: "unu minuto",
            mm: "%d minutoj",
            h: "unu horo",
            hh: "%d horoj",
            d: "unu tago",
            dd: "%d tagoj",
            M: "unu monato",
            MM: "%d monatoj",
            y: "unu jaro",
            yy: "%d jaroj",
          },
          dayOfMonthOrdinalParse: /\d{1,2}a/,
          ordinal: "%da",
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    8944: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_"
            ),
          o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          r = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          e =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        u.defineLocale("es-do", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_"
            ),
          monthsShort: function (c, M) {
            return c ? (/-MMM-/.test(M) ? o[c.month()] : i[c.month()]) : i;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: r,
          longMonthsParse: r,
          shortMonthsParse: r,
          weekdays:
            "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split(
              "_"
            ),
          weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return (
                "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              );
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\xeda",
            dd: "%d d\xedas",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\xf1o",
            yy: "%d a\xf1os",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    9116: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_"
            ),
          o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          r = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          e =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        u.defineLocale("es-mx", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_"
            ),
          monthsShort: function (c, M) {
            return c ? (/-MMM-/.test(M) ? o[c.month()] : i[c.month()]) : i;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: r,
          longMonthsParse: r,
          shortMonthsParse: r,
          weekdays:
            "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split(
              "_"
            ),
          weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return (
                "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              );
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\xeda",
            dd: "%d d\xedas",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\xf1o",
            yy: "%d a\xf1os",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          week: { dow: 0, doy: 4 },
          invalidDate: "Fecha inv\xe1lida",
        });
      })(f(5439));
    },
    3609: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_"
            ),
          o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          r = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          e =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        u.defineLocale("es-us", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_"
            ),
          monthsShort: function (c, M) {
            return c ? (/-MMM-/.test(M) ? o[c.month()] : i[c.month()]) : i;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: r,
          longMonthsParse: r,
          shortMonthsParse: r,
          weekdays:
            "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split(
              "_"
            ),
          weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "MM/DD/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return (
                "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              );
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\xeda",
            dd: "%d d\xedas",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\xf1o",
            yy: "%d a\xf1os",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    6866: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_"
            ),
          o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          r = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          e =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        u.defineLocale("es", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_"
            ),
          monthsShort: function (c, M) {
            return c ? (/-MMM-/.test(M) ? o[c.month()] : i[c.month()]) : i;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: r,
          longMonthsParse: r,
          shortMonthsParse: r,
          weekdays:
            "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split(
              "_"
            ),
          weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return (
                "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
              );
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\xeda",
            dd: "%d d\xedas",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\xf1o",
            yy: "%d a\xf1os",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          week: { dow: 1, doy: 4 },
          invalidDate: "Fecha inv\xe1lida",
        });
      })(f(5439));
    },
    6725: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(r, e, m, c) {
          var M = {
            s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"],
            ss: [r + "sekundi", r + "sekundit"],
            m: ["\xfche minuti", "\xfcks minut"],
            mm: [r + " minuti", r + " minutit"],
            h: ["\xfche tunni", "tund aega", "\xfcks tund"],
            hh: [r + " tunni", r + " tundi"],
            d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"],
            M: ["kuu aja", "kuu aega", "\xfcks kuu"],
            MM: [r + " kuu", r + " kuud"],
            y: ["\xfche aasta", "aasta", "\xfcks aasta"],
            yy: [r + " aasta", r + " aastat"],
          };
          return e ? (M[m][2] ? M[m][2] : M[m][1]) : c ? M[m][0] : M[m][1];
        }
        u.defineLocale("et", {
          months:
            "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
              "_"
            ),
          monthsShort:
            "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
              "_"
            ),
          weekdays:
            "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split(
              "_"
            ),
          weekdaysShort: "P_E_T_K_N_R_L".split("_"),
          weekdaysMin: "P_E_T_K_N_R_L".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[T\xe4na,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[J\xe4rgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s p\xe4rast",
            past: "%s tagasi",
            s: i,
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: i,
            dd: "%d p\xe4eva",
            M: i,
            MM: i,
            y: i,
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    7931: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("eu", {
          months:
            "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
              "_"
            ),
          monthsShort:
            "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
              "_"
            ),
          weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
          weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm",
          },
          calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            ss: "%d segundo",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    6417: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u06f1",
            2: "\u06f2",
            3: "\u06f3",
            4: "\u06f4",
            5: "\u06f5",
            6: "\u06f6",
            7: "\u06f7",
            8: "\u06f8",
            9: "\u06f9",
            0: "\u06f0",
          },
          o = {
            "\u06f1": "1",
            "\u06f2": "2",
            "\u06f3": "3",
            "\u06f4": "4",
            "\u06f5": "5",
            "\u06f6": "6",
            "\u06f7": "7",
            "\u06f8": "8",
            "\u06f9": "9",
            "\u06f0": "0",
          };
        u.defineLocale("fa", {
          months:
            "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split(
              "_"
            ),
          monthsShort:
            "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split(
              "_"
            ),
          weekdays:
            "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split(
              "_"
            ),
          weekdaysShort:
            "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split(
              "_"
            ),
          weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split(
            "_"
          ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          meridiemParse:
            /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
          isPM: function (e) {
            return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e);
          },
          meridiem: function (e, m, c) {
            return e < 12
              ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631"
              : "\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631";
          },
          calendar: {
            sameDay:
              "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
            nextDay: "[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT",
            nextWeek: "dddd [\u0633\u0627\u0639\u062a] LT",
            lastDay:
              "[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
            lastWeek: "dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u062f\u0631 %s",
            past: "%s \u067e\u06cc\u0634",
            s: "\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647",
            ss: "%d \u062b\u0627\u0646\u06cc\u0647",
            m: "\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647",
            mm: "%d \u062f\u0642\u06cc\u0642\u0647",
            h: "\u06cc\u06a9 \u0633\u0627\u0639\u062a",
            hh: "%d \u0633\u0627\u0639\u062a",
            d: "\u06cc\u06a9 \u0631\u0648\u0632",
            dd: "%d \u0631\u0648\u0632",
            M: "\u06cc\u06a9 \u0645\u0627\u0647",
            MM: "%d \u0645\u0627\u0647",
            y: "\u06cc\u06a9 \u0633\u0627\u0644",
            yy: "%d \u0633\u0627\u0644",
          },
          preparse: function (e) {
            return e
              .replace(/[\u06f0-\u06f9]/g, function (m) {
                return o[m];
              })
              .replace(/\u060c/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (m) {
                return i[m];
              })
              .replace(/,/g, "\u060c");
          },
          dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
          ordinal: "%d\u0645",
          week: { dow: 6, doy: 12 },
        });
      })(f(5439));
    },
    944: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
            "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(
              " "
            ),
          o = [
            "nolla",
            "yhden",
            "kahden",
            "kolmen",
            "nelj\xe4n",
            "viiden",
            "kuuden",
            i[7],
            i[8],
            i[9],
          ];
        function r(c, M, L, D) {
          var x = "";
          switch (L) {
            case "s":
              return D ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
              x = D ? "sekunnin" : "sekuntia";
              break;
            case "m":
              return D ? "minuutin" : "minuutti";
            case "mm":
              x = D ? "minuutin" : "minuuttia";
              break;
            case "h":
              return D ? "tunnin" : "tunti";
            case "hh":
              x = D ? "tunnin" : "tuntia";
              break;
            case "d":
              return D ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
            case "dd":
              x = D ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";
              break;
            case "M":
              return D ? "kuukauden" : "kuukausi";
            case "MM":
              x = D ? "kuukauden" : "kuukautta";
              break;
            case "y":
              return D ? "vuoden" : "vuosi";
            case "yy":
              x = D ? "vuoden" : "vuotta";
          }
          return (
            (function e(c, M) {
              return c < 10 ? (M ? o[c] : i[c]) : c;
            })(c, D) +
            " " +
            x
          );
        }
        u.defineLocale("fi", {
          months:
            "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
              "_"
            ),
          monthsShort:
            "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split(
              "_"
            ),
          weekdays:
            "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
              "_"
            ),
          weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
          weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm",
          },
          calendar: {
            sameDay: "[t\xe4n\xe4\xe4n] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s p\xe4\xe4st\xe4",
            past: "%s sitten",
            s: r,
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: r,
            dd: r,
            M: r,
            MM: r,
            y: r,
            yy: r,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    1766: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("fil", {
          months:
            "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
              "_"
            ),
          monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
            "_"
          ),
          weekdays:
            "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
          weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
          weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm",
          },
          calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L",
          },
          relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon",
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (o) {
            return o;
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    5867: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("fo", {
          months:
            "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split(
              "_"
            ),
          monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split(
            "_"
          ),
          weekdays:
            "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split(
              "_"
            ),
          weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),
          weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm",
          },
          calendar: {
            sameDay: "[\xcd dag kl.] LT",
            nextDay: "[\xcd morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[\xcd gj\xe1r kl.] LT",
            lastWeek: "[s\xed\xf0stu] dddd [kl] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "um %s",
            past: "%s s\xed\xf0ani",
            s: "f\xe1 sekund",
            ss: "%d sekundir",
            m: "ein minuttur",
            mm: "%d minuttir",
            h: "ein t\xedmi",
            hh: "%d t\xedmar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein m\xe1na\xf0ur",
            MM: "%d m\xe1na\xf0ir",
            y: "eitt \xe1r",
            yy: "%d \xe1r",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    6848: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("fr-ca", {
          months:
            "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split(
              "_"
            ),
          monthsShort:
            "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_"
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Aujourd\u2019hui \xe0] LT",
            nextDay: "[Demain \xe0] LT",
            nextWeek: "dddd [\xe0] LT",
            lastDay: "[Hier \xe0] LT",
            lastWeek: "dddd [dernier \xe0] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function (o, r) {
            switch (r) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return o + (1 === o ? "er" : "e");
              case "w":
              case "W":
                return o + (1 === o ? "re" : "e");
            }
          },
        });
      })(f(5439));
    },
    7773: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("fr-ch", {
          months:
            "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split(
              "_"
            ),
          monthsShort:
            "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_"
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Aujourd\u2019hui \xe0] LT",
            nextDay: "[Demain \xe0] LT",
            nextWeek: "dddd [\xe0] LT",
            lastDay: "[Hier \xe0] LT",
            lastWeek: "dddd [dernier \xe0] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function (o, r) {
            switch (r) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return o + (1 === o ? "er" : "e");
              case "w":
              case "W":
                return o + (1 === o ? "re" : "e");
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    1636: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var r =
            /(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?|janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,
          e = [
            /^janv/i,
            /^f\xe9vr/i,
            /^mars/i,
            /^avr/i,
            /^mai/i,
            /^juin/i,
            /^juil/i,
            /^ao\xfbt/i,
            /^sept/i,
            /^oct/i,
            /^nov/i,
            /^d\xe9c/i,
          ];
        u.defineLocale("fr", {
          months:
            "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split(
              "_"
            ),
          monthsShort:
            "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split(
              "_"
            ),
          monthsRegex: r,
          monthsShortRegex: r,
          monthsStrictRegex:
            /^(janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,
          monthsShortStrictRegex:
            /(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?)/i,
          monthsParse: e,
          longMonthsParse: e,
          shortMonthsParse: e,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_"
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Aujourd\u2019hui \xe0] LT",
            nextDay: "[Demain \xe0] LT",
            nextWeek: "dddd [\xe0] LT",
            lastDay: "[Hier \xe0] LT",
            lastWeek: "dddd [dernier \xe0] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            w: "une semaine",
            ww: "%d semaines",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
          ordinal: function (c, M) {
            switch (M) {
              case "D":
                return c + (1 === c ? "er" : "");
              default:
              case "M":
              case "Q":
              case "DDD":
              case "d":
                return c + (1 === c ? "er" : "e");
              case "w":
              case "W":
                return c + (1 === c ? "re" : "e");
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    4940: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
            "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
              "_"
            ),
          o = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        u.defineLocale("fy", {
          months:
            "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
              "_"
            ),
          monthsShort: function (e, m) {
            return e ? (/-MMM-/.test(m) ? o[e.month()] : i[e.month()]) : i;
          },
          monthsParseExact: !0,
          weekdays:
            "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
          weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
          weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[\xf4fr\xfbne] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            ss: "%d sekonden",
            m: "ien min\xfat",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    1402: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ga", {
          months: [
            "Ean\xe1ir",
            "Feabhra",
            "M\xe1rta",
            "Aibre\xe1n",
            "Bealtaine",
            "Meitheamh",
            "I\xfail",
            "L\xfanasa",
            "Me\xe1n F\xf3mhair",
            "Deireadh F\xf3mhair",
            "Samhain",
            "Nollaig",
          ],
          monthsShort: [
            "Ean",
            "Feabh",
            "M\xe1rt",
            "Aib",
            "Beal",
            "Meith",
            "I\xfail",
            "L\xfan",
            "M.F.",
            "D.F.",
            "Samh",
            "Noll",
          ],
          monthsParseExact: !0,
          weekdays: [
            "D\xe9 Domhnaigh",
            "D\xe9 Luain",
            "D\xe9 M\xe1irt",
            "D\xe9 C\xe9adaoin",
            "D\xe9ardaoin",
            "D\xe9 hAoine",
            "D\xe9 Sathairn",
          ],
          weekdaysShort: [
            "Domh",
            "Luan",
            "M\xe1irt",
            "C\xe9ad",
            "D\xe9ar",
            "Aoine",
            "Sath",
          ],
          weekdaysMin: ["Do", "Lu", "M\xe1", "C\xe9", "D\xe9", "A", "Sa"],
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Inniu ag] LT",
            nextDay: "[Am\xe1rach ag] LT",
            nextWeek: "dddd [ag] LT",
            lastDay: "[Inn\xe9 ag] LT",
            lastWeek: "dddd [seo caite] [ag] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "i %s",
            past: "%s \xf3 shin",
            s: "c\xfapla soicind",
            ss: "%d soicind",
            m: "n\xf3im\xe9ad",
            mm: "%d n\xf3im\xe9ad",
            h: "uair an chloig",
            hh: "%d uair an chloig",
            d: "l\xe1",
            dd: "%d l\xe1",
            M: "m\xed",
            MM: "%d m\xedonna",
            y: "bliain",
            yy: "%d bliain",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function (M) {
            return M + (1 === M ? "d" : M % 10 == 2 ? "na" : "mh");
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    6924: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("gd", {
          months: [
            "Am Faoilleach",
            "An Gearran",
            "Am M\xe0rt",
            "An Giblean",
            "An C\xe8itean",
            "An t-\xd2gmhios",
            "An t-Iuchar",
            "An L\xf9nastal",
            "An t-Sultain",
            "An D\xe0mhair",
            "An t-Samhain",
            "An D\xf9bhlachd",
          ],
          monthsShort: [
            "Faoi",
            "Gear",
            "M\xe0rt",
            "Gibl",
            "C\xe8it",
            "\xd2gmh",
            "Iuch",
            "L\xf9n",
            "Sult",
            "D\xe0mh",
            "Samh",
            "D\xf9bh",
          ],
          monthsParseExact: !0,
          weekdays: [
            "Did\xf2mhnaich",
            "Diluain",
            "Dim\xe0irt",
            "Diciadain",
            "Diardaoin",
            "Dihaoine",
            "Disathairne",
          ],
          weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
          weekdaysMin: ["D\xf2", "Lu", "M\xe0", "Ci", "Ar", "Ha", "Sa"],
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-m\xe0ireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-d\xe8 aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            ss: "%d diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "m\xecos",
            MM: "%d m\xecosan",
            y: "bliadhna",
            yy: "%d bliadhna",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function (M) {
            return M + (1 === M ? "d" : M % 10 == 2 ? "na" : "mh");
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    6398: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("gl", {
          months:
            "xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split(
              "_"
            ),
          monthsShort:
            "xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"),
          weekdaysShort: "dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"),
          weekdaysMin: "do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
          },
          calendar: {
            sameDay: function () {
              return (
                "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT"
              );
            },
            nextDay: function () {
              return (
                "[ma\xf1\xe1 " +
                (1 !== this.hours() ? "\xe1s" : "\xe1") +
                "] LT"
              );
            },
            nextWeek: function () {
              return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT";
            },
            lastDay: function () {
              return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT";
            },
            lastWeek: function () {
              return (
                "[o] dddd [pasado " +
                (1 !== this.hours() ? "\xe1s" : "a") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: function (o) {
              return 0 === o.indexOf("un") ? "n" + o : "en " + o;
            },
            past: "hai %s",
            s: "uns segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un d\xeda",
            dd: "%d d\xedas",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    2457: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(r, e, m, c) {
          var M = {
            s: [
              "\u0925\u094b\u0921\u092f\u093e \u0938\u0945\u0915\u0902\u0921\u093e\u0902\u0928\u0940",
              "\u0925\u094b\u0921\u0947 \u0938\u0945\u0915\u0902\u0921",
            ],
            ss: [
              r + " \u0938\u0945\u0915\u0902\u0921\u093e\u0902\u0928\u0940",
              r + " \u0938\u0945\u0915\u0902\u0921",
            ],
            m: [
              "\u090f\u0915\u093e \u092e\u093f\u0923\u091f\u093e\u0928",
              "\u090f\u0915 \u092e\u093f\u0928\u0942\u091f",
            ],
            mm: [
              r + " \u092e\u093f\u0923\u091f\u093e\u0902\u0928\u0940",
              r + " \u092e\u093f\u0923\u091f\u093e\u0902",
            ],
            h: [
              "\u090f\u0915\u093e \u0935\u0930\u093e\u0928",
              "\u090f\u0915 \u0935\u0930",
            ],
            hh: [
              r + " \u0935\u0930\u093e\u0902\u0928\u0940",
              r + " \u0935\u0930\u093e\u0902",
            ],
            d: [
              "\u090f\u0915\u093e \u0926\u093f\u0938\u093e\u0928",
              "\u090f\u0915 \u0926\u0940\u0938",
            ],
            dd: [
              r + " \u0926\u093f\u0938\u093e\u0902\u0928\u0940",
              r + " \u0926\u0940\u0938",
            ],
            M: [
              "\u090f\u0915\u093e \u092e\u094d\u0939\u092f\u0928\u094d\u092f\u093e\u0928",
              "\u090f\u0915 \u092e\u094d\u0939\u092f\u0928\u094b",
            ],
            MM: [
              r +
                " \u092e\u094d\u0939\u092f\u0928\u094d\u092f\u093e\u0928\u0940",
              r + " \u092e\u094d\u0939\u092f\u0928\u0947",
            ],
            y: [
              "\u090f\u0915\u093e \u0935\u0930\u094d\u0938\u093e\u0928",
              "\u090f\u0915 \u0935\u0930\u094d\u0938",
            ],
            yy: [
              r + " \u0935\u0930\u094d\u0938\u093e\u0902\u0928\u0940",
              r + " \u0935\u0930\u094d\u0938\u093e\u0902",
            ],
          };
          return c ? M[m][0] : M[m][1];
        }
        u.defineLocale("gom-deva", {
          months: {
            standalone:
              "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u0940\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u092f_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split(
                "_"
              ),
            format:
              "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940\u091a\u094d\u092f\u093e_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940\u091a\u094d\u092f\u093e_\u092e\u093e\u0930\u094d\u091a\u093e\u091a\u094d\u092f\u093e_\u090f\u092a\u094d\u0930\u0940\u0932\u093e\u091a\u094d\u092f\u093e_\u092e\u0947\u092f\u093e\u091a\u094d\u092f\u093e_\u091c\u0942\u0928\u093e\u091a\u094d\u092f\u093e_\u091c\u0941\u0932\u092f\u093e\u091a\u094d\u092f\u093e_\u0911\u0917\u0938\u094d\u091f\u093e\u091a\u094d\u092f\u093e_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930\u093e\u091a\u094d\u092f\u093e_\u0911\u0915\u094d\u091f\u094b\u092c\u0930\u093e\u091a\u094d\u092f\u093e_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930\u093e\u091a\u094d\u092f\u093e_\u0921\u093f\u0938\u0947\u0902\u092c\u0930\u093e\u091a\u094d\u092f\u093e".split(
                "_"
              ),
            isFormat: /MMMM(\s)+D[oD]?/,
          },
          monthsShort:
            "\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u0940._\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "\u0906\u092f\u0924\u093e\u0930_\u0938\u094b\u092e\u093e\u0930_\u092e\u0902\u0917\u0933\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u092c\u093f\u0930\u0947\u0938\u094d\u0924\u093e\u0930_\u0938\u0941\u0915\u094d\u0930\u093e\u0930_\u0936\u0947\u0928\u0935\u093e\u0930".split(
              "_"
            ),
          weekdaysShort:
            "\u0906\u092f\u0924._\u0938\u094b\u092e._\u092e\u0902\u0917\u0933._\u092c\u0941\u0927._\u092c\u094d\u0930\u0947\u0938\u094d\u0924._\u0938\u0941\u0915\u094d\u0930._\u0936\u0947\u0928.".split(
              "_"
            ),
          weekdaysMin:
            "\u0906_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u092c\u094d\u0930\u0947_\u0938\u0941_\u0936\u0947".split(
              "_"
            ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]",
            LTS: "A h:mm:ss [\u0935\u093e\u091c\u0924\u093e\u0902]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]",
            LLLL: "dddd, MMMM Do, YYYY, A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]",
            llll: "ddd, D MMM YYYY, A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]",
          },
          calendar: {
            sameDay: "[\u0906\u092f\u091c] LT",
            nextDay: "[\u092b\u093e\u0932\u094d\u092f\u093e\u0902] LT",
            nextWeek: "[\u092b\u0941\u0921\u0932\u094b] dddd[,] LT",
            lastDay: "[\u0915\u093e\u0932] LT",
            lastWeek: "[\u092b\u093e\u091f\u0932\u094b] dddd[,] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s",
            past: "%s \u0906\u0926\u0940\u0902",
            s: i,
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: i,
            dd: i,
            M: i,
            MM: i,
            y: i,
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\u0935\u0947\u0930)/,
          ordinal: function (r, e) {
            return "D" === e ? r + "\u0935\u0947\u0930" : r;
          },
          week: { dow: 0, doy: 3 },
          meridiemParse:
            /\u0930\u093e\u0924\u0940|\u0938\u0915\u093e\u0933\u0940\u0902|\u0926\u0928\u092a\u093e\u0930\u093e\u0902|\u0938\u093e\u0902\u091c\u0947/,
          meridiemHour: function (r, e) {
            return (
              12 === r && (r = 0),
              "\u0930\u093e\u0924\u0940" === e
                ? r < 4
                  ? r
                  : r + 12
                : "\u0938\u0915\u093e\u0933\u0940\u0902" === e
                ? r
                : "\u0926\u0928\u092a\u093e\u0930\u093e\u0902" === e
                ? r > 12
                  ? r
                  : r + 12
                : "\u0938\u093e\u0902\u091c\u0947" === e
                ? r + 12
                : void 0
            );
          },
          meridiem: function (r, e, m) {
            return r < 4
              ? "\u0930\u093e\u0924\u0940"
              : r < 12
              ? "\u0938\u0915\u093e\u0933\u0940\u0902"
              : r < 16
              ? "\u0926\u0928\u092a\u093e\u0930\u093e\u0902"
              : r < 20
              ? "\u0938\u093e\u0902\u091c\u0947"
              : "\u0930\u093e\u0924\u0940";
          },
        });
      })(f(5439));
    },
    2545: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(r, e, m, c) {
          var M = {
            s: ["thoddea sekondamni", "thodde sekond"],
            ss: [r + " sekondamni", r + " sekond"],
            m: ["eka mintan", "ek minut"],
            mm: [r + " mintamni", r + " mintam"],
            h: ["eka voran", "ek vor"],
            hh: [r + " voramni", r + " voram"],
            d: ["eka disan", "ek dis"],
            dd: [r + " disamni", r + " dis"],
            M: ["eka mhoinean", "ek mhoino"],
            MM: [r + " mhoineamni", r + " mhoine"],
            y: ["eka vorsan", "ek voros"],
            yy: [r + " vorsamni", r + " vorsam"],
          };
          return c ? M[m][0] : M[m][1];
        }
        u.defineLocale("gom-latn", {
          months: {
            standalone:
              "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
                "_"
              ),
            format:
              "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split(
                "_"
              ),
            isFormat: /MMMM(\s)+D[oD]?/,
          },
          monthsShort:
            "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
          weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
          weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "A h:mm [vazta]",
            LTS: "A h:mm:ss [vazta]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [vazta]",
            LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
            llll: "ddd, D MMM YYYY, A h:mm [vazta]",
          },
          calendar: {
            sameDay: "[Aiz] LT",
            nextDay: "[Faleam] LT",
            nextWeek: "[Fuddlo] dddd[,] LT",
            lastDay: "[Kal] LT",
            lastWeek: "[Fattlo] dddd[,] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s",
            past: "%s adim",
            s: i,
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: i,
            dd: i,
            M: i,
            MM: i,
            y: i,
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er)/,
          ordinal: function (r, e) {
            return "D" === e ? r + "er" : r;
          },
          week: { dow: 0, doy: 3 },
          meridiemParse: /rati|sokallim|donparam|sanje/,
          meridiemHour: function (r, e) {
            return (
              12 === r && (r = 0),
              "rati" === e
                ? r < 4
                  ? r
                  : r + 12
                : "sokallim" === e
                ? r
                : "donparam" === e
                ? r > 12
                  ? r
                  : r + 12
                : "sanje" === e
                ? r + 12
                : void 0
            );
          },
          meridiem: function (r, e, m) {
            return r < 4
              ? "rati"
              : r < 12
              ? "sokallim"
              : r < 16
              ? "donparam"
              : r < 20
              ? "sanje"
              : "rati";
          },
        });
      })(f(5439));
    },
    2641: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u0ae7",
            2: "\u0ae8",
            3: "\u0ae9",
            4: "\u0aea",
            5: "\u0aeb",
            6: "\u0aec",
            7: "\u0aed",
            8: "\u0aee",
            9: "\u0aef",
            0: "\u0ae6",
          },
          o = {
            "\u0ae7": "1",
            "\u0ae8": "2",
            "\u0ae9": "3",
            "\u0aea": "4",
            "\u0aeb": "5",
            "\u0aec": "6",
            "\u0aed": "7",
            "\u0aee": "8",
            "\u0aef": "9",
            "\u0ae6": "0",
          };
        u.defineLocale("gu", {
          months:
            "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split(
              "_"
            ),
          monthsShort:
            "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split(
              "_"
            ),
          weekdaysShort:
            "\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split(
              "_"
            ),
          weekdaysMin:
            "\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split(
              "_"
            ),
          longDateFormat: {
            LT: "A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
            LTS: "A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
          },
          calendar: {
            sameDay: "[\u0a86\u0a9c] LT",
            nextDay: "[\u0a95\u0abe\u0ab2\u0ac7] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT",
            lastWeek: "[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0aae\u0abe",
            past: "%s \u0aaa\u0ab9\u0ac7\u0ab2\u0abe",
            s: "\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb",
            ss: "%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1",
            m: "\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f",
            mm: "%d \u0aae\u0abf\u0aa8\u0abf\u0a9f",
            h: "\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95",
            hh: "%d \u0a95\u0ab2\u0abe\u0a95",
            d: "\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8",
            dd: "%d \u0aa6\u0abf\u0ab5\u0ab8",
            M: "\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb",
            MM: "%d \u0aae\u0ab9\u0abf\u0aa8\u0acb",
            y: "\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7",
            yy: "%d \u0ab5\u0ab0\u0acd\u0ab7",
          },
          preparse: function (e) {
            return e.replace(
              /[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g,
              function (m) {
                return o[m];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (m) {
              return i[m];
            });
          },
          meridiemParse:
            /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
          meridiemHour: function (e, m) {
            return (
              12 === e && (e = 0),
              "\u0ab0\u0abe\u0aa4" === m
                ? e < 4
                  ? e
                  : e + 12
                : "\u0ab8\u0ab5\u0abe\u0ab0" === m
                ? e
                : "\u0aac\u0aaa\u0acb\u0ab0" === m
                ? e >= 10
                  ? e
                  : e + 12
                : "\u0ab8\u0abe\u0a82\u0a9c" === m
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, m, c) {
            return e < 4
              ? "\u0ab0\u0abe\u0aa4"
              : e < 10
              ? "\u0ab8\u0ab5\u0abe\u0ab0"
              : e < 17
              ? "\u0aac\u0aaa\u0acb\u0ab0"
              : e < 20
              ? "\u0ab8\u0abe\u0a82\u0a9c"
              : "\u0ab0\u0abe\u0aa4";
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    7536: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("he", {
          months:
            "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split(
              "_"
            ),
          monthsShort:
            "\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split(
              "_"
            ),
          weekdays:
            "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split(
              "_"
            ),
          weekdaysShort:
            "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split(
              "_"
            ),
          weekdaysMin: "\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split(
            "_"
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [\u05d1]MMMM YYYY",
            LLL: "D [\u05d1]MMMM YYYY HH:mm",
            LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT",
            nextDay: "[\u05de\u05d7\u05e8 \u05d1\u05be]LT",
            nextWeek: "dddd [\u05d1\u05e9\u05e2\u05d4] LT",
            lastDay: "[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT",
            lastWeek:
              "[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u05d1\u05e2\u05d5\u05d3 %s",
            past: "\u05dc\u05e4\u05e0\u05d9 %s",
            s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",
            ss: "%d \u05e9\u05e0\u05d9\u05d5\u05ea",
            m: "\u05d3\u05e7\u05d4",
            mm: "%d \u05d3\u05e7\u05d5\u05ea",
            h: "\u05e9\u05e2\u05d4",
            hh: function (o) {
              return 2 === o
                ? "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd"
                : o + " \u05e9\u05e2\u05d5\u05ea";
            },
            d: "\u05d9\u05d5\u05dd",
            dd: function (o) {
              return 2 === o
                ? "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd"
                : o + " \u05d9\u05de\u05d9\u05dd";
            },
            M: "\u05d7\u05d5\u05d3\u05e9",
            MM: function (o) {
              return 2 === o
                ? "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd"
                : o + " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd";
            },
            y: "\u05e9\u05e0\u05d4",
            yy: function (o) {
              return 2 === o
                ? "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd"
                : o % 10 == 0 && 10 !== o
                ? o + " \u05e9\u05e0\u05d4"
                : o + " \u05e9\u05e0\u05d9\u05dd";
            },
          },
          meridiemParse:
            /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,
          isPM: function (o) {
            return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(
              o
            );
          },
          meridiem: function (o, r, e) {
            return o < 5
              ? "\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8"
              : o < 10
              ? "\u05d1\u05d1\u05d5\u05e7\u05e8"
              : o < 12
              ? e
                ? '\u05dc\u05e4\u05e0\u05d4"\u05e6'
                : "\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd"
              : o < 18
              ? e
                ? '\u05d0\u05d7\u05d4"\u05e6'
                : "\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd"
              : "\u05d1\u05e2\u05e8\u05d1";
          },
        });
      })(f(5439));
    },
    6335: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966",
          },
          o = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0",
          },
          r = [
            /^\u091c\u0928/i,
            /^\u092b\u093c\u0930|\u092b\u0930/i,
            /^\u092e\u093e\u0930\u094d\u091a/i,
            /^\u0905\u092a\u094d\u0930\u0948/i,
            /^\u092e\u0908/i,
            /^\u091c\u0942\u0928/i,
            /^\u091c\u0941\u0932/i,
            /^\u0905\u0917/i,
            /^\u0938\u093f\u0924\u0902|\u0938\u093f\u0924/i,
            /^\u0905\u0915\u094d\u091f\u0942/i,
            /^\u0928\u0935|\u0928\u0935\u0902/i,
            /^\u0926\u093f\u0938\u0902|\u0926\u093f\u0938/i,
          ];
        u.defineLocale("hi", {
          months: {
            format:
              "\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split(
                "_"
              ),
            standalone:
              "\u091c\u0928\u0935\u0930\u0940_\u092b\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u0902\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u0902\u092c\u0930_\u0926\u093f\u0938\u0902\u092c\u0930".split(
                "_"
              ),
          },
          monthsShort:
            "\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split(
              "_"
            ),
          weekdays:
            "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split(
              "_"
            ),
          weekdaysShort:
            "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split(
              "_"
            ),
          weekdaysMin:
            "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split(
              "_"
            ),
          longDateFormat: {
            LT: "A h:mm \u092c\u091c\u0947",
            LTS: "A h:mm:ss \u092c\u091c\u0947",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u092c\u091c\u0947",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947",
          },
          monthsParse: r,
          longMonthsParse: r,
          shortMonthsParse: [
            /^\u091c\u0928/i,
            /^\u092b\u093c\u0930/i,
            /^\u092e\u093e\u0930\u094d\u091a/i,
            /^\u0905\u092a\u094d\u0930\u0948/i,
            /^\u092e\u0908/i,
            /^\u091c\u0942\u0928/i,
            /^\u091c\u0941\u0932/i,
            /^\u0905\u0917/i,
            /^\u0938\u093f\u0924/i,
            /^\u0905\u0915\u094d\u091f\u0942/i,
            /^\u0928\u0935/i,
            /^\u0926\u093f\u0938/i,
          ],
          monthsRegex:
            /^(\u091c\u0928\u0935\u0930\u0940|\u091c\u0928\.?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908|\u091c\u0941\u0932\.?|\u0905\u0917\u0938\u094d\u0924|\u0905\u0917\.?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930|\u0928\u0935\.?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930|\u0926\u093f\u0938\.?)/i,
          monthsShortRegex:
            /^(\u091c\u0928\u0935\u0930\u0940|\u091c\u0928\.?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908|\u091c\u0941\u0932\.?|\u0905\u0917\u0938\u094d\u0924|\u0905\u0917\.?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930|\u0928\u0935\.?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930|\u0926\u093f\u0938\.?)/i,
          monthsStrictRegex:
            /^(\u091c\u0928\u0935\u0930\u0940?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908?|\u0905\u0917\u0938\u094d\u0924?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924?\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930?)/i,
          monthsShortStrictRegex:
            /^(\u091c\u0928\.?|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\.?|\u0905\u0917\.?|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\.?|\u0926\u093f\u0938\.?)/i,
          calendar: {
            sameDay: "[\u0906\u091c] LT",
            nextDay: "[\u0915\u0932] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0915\u0932] LT",
            lastWeek: "[\u092a\u093f\u091b\u0932\u0947] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u092e\u0947\u0902",
            past: "%s \u092a\u0939\u0932\u0947",
            s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",
            ss: "%d \u0938\u0947\u0915\u0902\u0921",
            m: "\u090f\u0915 \u092e\u093f\u0928\u091f",
            mm: "%d \u092e\u093f\u0928\u091f",
            h: "\u090f\u0915 \u0918\u0902\u091f\u093e",
            hh: "%d \u0918\u0902\u091f\u0947",
            d: "\u090f\u0915 \u0926\u093f\u0928",
            dd: "%d \u0926\u093f\u0928",
            M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",
            MM: "%d \u092e\u0939\u0940\u0928\u0947",
            y: "\u090f\u0915 \u0935\u0930\u094d\u0937",
            yy: "%d \u0935\u0930\u094d\u0937",
          },
          preparse: function (c) {
            return c.replace(
              /[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,
              function (M) {
                return o[M];
              }
            );
          },
          postformat: function (c) {
            return c.replace(/\d/g, function (M) {
              return i[M];
            });
          },
          meridiemParse:
            /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
          meridiemHour: function (c, M) {
            return (
              12 === c && (c = 0),
              "\u0930\u093e\u0924" === M
                ? c < 4
                  ? c
                  : c + 12
                : "\u0938\u0941\u092c\u0939" === M
                ? c
                : "\u0926\u094b\u092a\u0939\u0930" === M
                ? c >= 10
                  ? c
                  : c + 12
                : "\u0936\u093e\u092e" === M
                ? c + 12
                : void 0
            );
          },
          meridiem: function (c, M, L) {
            return c < 4
              ? "\u0930\u093e\u0924"
              : c < 10
              ? "\u0938\u0941\u092c\u0939"
              : c < 17
              ? "\u0926\u094b\u092a\u0939\u0930"
              : c < 20
              ? "\u0936\u093e\u092e"
              : "\u0930\u093e\u0924";
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    7458: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(r, e, m) {
          var c = r + " ";
          switch (m) {
            case "ss":
              return (
                c +
                (1 === r
                  ? "sekunda"
                  : 2 === r || 3 === r || 4 === r
                  ? "sekunde"
                  : "sekundi")
              );
            case "m":
              return e ? "jedna minuta" : "jedne minute";
            case "mm":
              return (
                c +
                (1 === r
                  ? "minuta"
                  : 2 === r || 3 === r || 4 === r
                  ? "minute"
                  : "minuta")
              );
            case "h":
              return e ? "jedan sat" : "jednog sata";
            case "hh":
              return (
                c +
                (1 === r
                  ? "sat"
                  : 2 === r || 3 === r || 4 === r
                  ? "sata"
                  : "sati")
              );
            case "dd":
              return c + (1 === r ? "dan" : "dana");
            case "MM":
              return (
                c +
                (1 === r
                  ? "mjesec"
                  : 2 === r || 3 === r || 4 === r
                  ? "mjeseca"
                  : "mjeseci")
              );
            case "yy":
              return (
                c +
                (1 === r
                  ? "godina"
                  : 2 === r || 3 === r || 4 === r
                  ? "godine"
                  : "godina")
              );
          }
        }
        u.defineLocale("hr", {
          months: {
            format:
              "sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
                "_"
              ),
            standalone:
              "sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
                "_"
              ),
          },
          monthsShort:
            "sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split(
              "_"
            ),
          weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM YYYY",
            LLL: "Do MMMM YYYY H:mm",
            LLLL: "dddd, Do MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[ju\u010der u] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[pro\u0161lu] [nedjelju] [u] LT";
                case 3:
                  return "[pro\u0161lu] [srijedu] [u] LT";
                case 6:
                  return "[pro\u0161le] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[pro\u0161li] dddd [u] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: "dan",
            dd: i,
            M: "mjesec",
            MM: i,
            y: "godinu",
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    6540: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
          "vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(
            " "
          );
        function o(m, c, M, L) {
          var D = m;
          switch (M) {
            case "s":
              return L || c
                ? "n\xe9h\xe1ny m\xe1sodperc"
                : "n\xe9h\xe1ny m\xe1sodperce";
            case "ss":
              return D + (L || c) ? " m\xe1sodperc" : " m\xe1sodperce";
            case "m":
              return "egy" + (L || c ? " perc" : " perce");
            case "mm":
              return D + (L || c ? " perc" : " perce");
            case "h":
              return "egy" + (L || c ? " \xf3ra" : " \xf3r\xe1ja");
            case "hh":
              return D + (L || c ? " \xf3ra" : " \xf3r\xe1ja");
            case "d":
              return "egy" + (L || c ? " nap" : " napja");
            case "dd":
              return D + (L || c ? " nap" : " napja");
            case "M":
              return "egy" + (L || c ? " h\xf3nap" : " h\xf3napja");
            case "MM":
              return D + (L || c ? " h\xf3nap" : " h\xf3napja");
            case "y":
              return "egy" + (L || c ? " \xe9v" : " \xe9ve");
            case "yy":
              return D + (L || c ? " \xe9v" : " \xe9ve");
          }
          return "";
        }
        function r(m) {
          return (m ? "" : "[m\xfalt] ") + "[" + i[this.day()] + "] LT[-kor]";
        }
        u.defineLocale("hu", {
          months:
            "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split(
              "_"
            ),
          monthsShort:
            "jan._feb._m\xe1rc._\xe1pr._m\xe1j._j\xfan._j\xfal._aug._szept._okt._nov._dec.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split(
              "_"
            ),
          weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),
          weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm",
          },
          meridiemParse: /de|du/i,
          isPM: function (m) {
            return "u" === m.charAt(1).toLowerCase();
          },
          meridiem: function (m, c, M) {
            return m < 12 ? (!0 === M ? "de" : "DE") : !0 === M ? "du" : "DU";
          },
          calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function () {
              return r.call(this, !0);
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function () {
              return r.call(this, !1);
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "%s m\xfalva",
            past: "%s",
            s: o,
            ss: o,
            m: o,
            mm: o,
            h: o,
            hh: o,
            d: o,
            dd: o,
            M: o,
            MM: o,
            y: o,
            yy: o,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    5283: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("hy-am", {
          months: {
            format:
              "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split(
                "_"
              ),
            standalone:
              "\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split(
                "_"
              ),
          },
          monthsShort:
            "\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split(
              "_"
            ),
          weekdays:
            "\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split(
              "_"
            ),
          weekdaysShort:
            "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split(
              "_"
            ),
          weekdaysMin:
            "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0569.",
            LLL: "D MMMM YYYY \u0569., HH:mm",
            LLLL: "dddd, D MMMM YYYY \u0569., HH:mm",
          },
          calendar: {
            sameDay: "[\u0561\u0575\u057d\u0585\u0580] LT",
            nextDay: "[\u057e\u0561\u0572\u0568] LT",
            lastDay: "[\u0565\u0580\u0565\u056f] LT",
            nextWeek: function () {
              return "dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT";
            },
            lastWeek: function () {
              return "[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0570\u0565\u057f\u0578",
            past: "%s \u0561\u057c\u0561\u057b",
            s: "\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
            ss: "%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
            m: "\u0580\u0578\u057a\u0565",
            mm: "%d \u0580\u0578\u057a\u0565",
            h: "\u056a\u0561\u0574",
            hh: "%d \u056a\u0561\u0574",
            d: "\u0585\u0580",
            dd: "%d \u0585\u0580",
            M: "\u0561\u0574\u056b\u057d",
            MM: "%d \u0561\u0574\u056b\u057d",
            y: "\u057f\u0561\u0580\u056b",
            yy: "%d \u057f\u0561\u0580\u056b",
          },
          meridiemParse:
            /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
          isPM: function (o) {
            return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(
              o
            );
          },
          meridiem: function (o) {
            return o < 4
              ? "\u0563\u056b\u0577\u0565\u0580\u057e\u0561"
              : o < 12
              ? "\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561"
              : o < 17
              ? "\u0581\u0565\u0580\u0565\u056f\u057e\u0561"
              : "\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576";
          },
          dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
          ordinal: function (o, r) {
            switch (r) {
              case "DDD":
              case "w":
              case "W":
              case "DDDo":
                return 1 === o ? o + "-\u056b\u0576" : o + "-\u0580\u0564";
              default:
                return o;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    8780: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("id", {
          months:
            "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split(
            "_"
          ),
          weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /pagi|siang|sore|malam/,
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              "pagi" === r
                ? o
                : "siang" === r
                ? o >= 11
                  ? o
                  : o + 12
                : "sore" === r || "malam" === r
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, r, e) {
            return o < 11
              ? "pagi"
              : o < 15
              ? "siang"
              : o < 19
              ? "sore"
              : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            ss: "%d detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun",
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    4205: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(e) {
          return e % 100 == 11 || e % 10 != 1;
        }
        function o(e, m, c, M) {
          var L = e + " ";
          switch (c) {
            case "s":
              return m || M ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";
            case "ss":
              return i(e)
                ? L + (m || M ? "sek\xfandur" : "sek\xfandum")
                : L + "sek\xfanda";
            case "m":
              return m ? "m\xedn\xfata" : "m\xedn\xfatu";
            case "mm":
              return i(e)
                ? L + (m || M ? "m\xedn\xfatur" : "m\xedn\xfatum")
                : m
                ? L + "m\xedn\xfata"
                : L + "m\xedn\xfatu";
            case "hh":
              return i(e)
                ? L + (m || M ? "klukkustundir" : "klukkustundum")
                : L + "klukkustund";
            case "d":
              return m ? "dagur" : M ? "dag" : "degi";
            case "dd":
              return i(e)
                ? m
                  ? L + "dagar"
                  : L + (M ? "daga" : "d\xf6gum")
                : m
                ? L + "dagur"
                : L + (M ? "dag" : "degi");
            case "M":
              return m ? "m\xe1nu\xf0ur" : M ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";
            case "MM":
              return i(e)
                ? m
                  ? L + "m\xe1nu\xf0ir"
                  : L + (M ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um")
                : m
                ? L + "m\xe1nu\xf0ur"
                : L + (M ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");
            case "y":
              return m || M ? "\xe1r" : "\xe1ri";
            case "yy":
              return i(e)
                ? L + (m || M ? "\xe1r" : "\xe1rum")
                : L + (m || M ? "\xe1r" : "\xe1ri");
          }
        }
        u.defineLocale("is", {
          months:
            "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split(
              "_"
            ),
          monthsShort:
            "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split(
              "_"
            ),
          weekdays:
            "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split(
              "_"
            ),
          weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),
          weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
          },
          calendar: {
            sameDay: "[\xed dag kl.] LT",
            nextDay: "[\xe1 morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[\xed g\xe6r kl.] LT",
            lastWeek: "[s\xed\xf0asta] dddd [kl.] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "eftir %s",
            past: "fyrir %s s\xed\xf0an",
            s: o,
            ss: o,
            m: o,
            mm: o,
            h: "klukkustund",
            hh: o,
            d: o,
            dd: o,
            M: o,
            MM: o,
            y: o,
            yy: o,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    9985: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("it-ch", {
          months:
            "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
              "_"
            ),
          monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
            "_"
          ),
          weekdays:
            "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split(
              "_"
            ),
          weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
          weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function () {
              return 0 === this.day()
                ? "[la scorsa] dddd [alle] LT"
                : "[lo scorso] dddd [alle] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: function (o) {
              return (/^[0-9].+$/.test(o) ? "tra" : "in") + " " + o;
            },
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    4211: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("it", {
          months:
            "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
              "_"
            ),
          monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
            "_"
          ),
          weekdays:
            "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split(
              "_"
            ),
          weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
          weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: function () {
              return (
                "[Oggi a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            nextDay: function () {
              return (
                "[Domani a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            nextWeek: function () {
              return (
                "dddd [a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            lastDay: function () {
              return (
                "[Ieri a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            lastWeek: function () {
              return 0 === this.day()
                ? "[La scorsa] dddd [a" +
                    (this.hours() > 1
                      ? "lle "
                      : 0 === this.hours()
                      ? " "
                      : "ll'") +
                    "]LT"
                : "[Lo scorso] dddd [a" +
                    (this.hours() > 1
                      ? "lle "
                      : 0 === this.hours()
                      ? " "
                      : "ll'") +
                    "]LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "tra %s",
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            w: "una settimana",
            ww: "%d settimane",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    1003: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ja", {
          eras: [
            {
              since: "2019-05-01",
              offset: 1,
              name: "\u4ee4\u548c",
              narrow: "\u32ff",
              abbr: "R",
            },
            {
              since: "1989-01-08",
              until: "2019-04-30",
              offset: 1,
              name: "\u5e73\u6210",
              narrow: "\u337b",
              abbr: "H",
            },
            {
              since: "1926-12-25",
              until: "1989-01-07",
              offset: 1,
              name: "\u662d\u548c",
              narrow: "\u337c",
              abbr: "S",
            },
            {
              since: "1912-07-30",
              until: "1926-12-24",
              offset: 1,
              name: "\u5927\u6b63",
              narrow: "\u337d",
              abbr: "T",
            },
            {
              since: "1873-01-01",
              until: "1912-07-29",
              offset: 6,
              name: "\u660e\u6cbb",
              narrow: "\u337e",
              abbr: "M",
            },
            {
              since: "0001-01-01",
              until: "1873-12-31",
              offset: 1,
              name: "\u897f\u66a6",
              narrow: "AD",
              abbr: "AD",
            },
            {
              since: "0000-12-31",
              until: -1 / 0,
              offset: 1,
              name: "\u7d00\u5143\u524d",
              narrow: "BC",
              abbr: "BC",
            },
          ],
          eraYearOrdinalRegex: /(\u5143|\d+)\u5e74/,
          eraYearOrdinalParse: function (o, r) {
            return "\u5143" === r[1] ? 1 : parseInt(r[1] || o, 10);
          },
          months:
            "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split(
              "_"
            ),
          monthsShort:
            "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split(
              "_"
            ),
          weekdays:
            "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split(
              "_"
            ),
          weekdaysShort:
            "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
          weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split(
            "_"
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            LLLL: "YYYY\u5e74M\u6708D\u65e5 dddd HH:mm",
            l: "YYYY/MM/DD",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm",
          },
          meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
          isPM: function (o) {
            return "\u5348\u5f8c" === o;
          },
          meridiem: function (o, r, e) {
            return o < 12 ? "\u5348\u524d" : "\u5348\u5f8c";
          },
          calendar: {
            sameDay: "[\u4eca\u65e5] LT",
            nextDay: "[\u660e\u65e5] LT",
            nextWeek: function (o) {
              return o.week() !== this.week()
                ? "[\u6765\u9031]dddd LT"
                : "dddd LT";
            },
            lastDay: "[\u6628\u65e5] LT",
            lastWeek: function (o) {
              return this.week() !== o.week()
                ? "[\u5148\u9031]dddd LT"
                : "dddd LT";
            },
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
          ordinal: function (o, r) {
            switch (r) {
              case "y":
                return 1 === o ? "\u5143\u5e74" : o + "\u5e74";
              case "d":
              case "D":
              case "DDD":
                return o + "\u65e5";
              default:
                return o;
            }
          },
          relativeTime: {
            future: "%s\u5f8c",
            past: "%s\u524d",
            s: "\u6570\u79d2",
            ss: "%d\u79d2",
            m: "1\u5206",
            mm: "%d\u5206",
            h: "1\u6642\u9593",
            hh: "%d\u6642\u9593",
            d: "1\u65e5",
            dd: "%d\u65e5",
            M: "1\u30f6\u6708",
            MM: "%d\u30f6\u6708",
            y: "1\u5e74",
            yy: "%d\u5e74",
          },
        });
      })(f(5439));
    },
    420: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("jv", {
          months:
            "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split(
            "_"
          ),
          weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /enjing|siyang|sonten|ndalu/,
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              "enjing" === r
                ? o
                : "siyang" === r
                ? o >= 11
                  ? o
                  : o + 12
                : "sonten" === r || "ndalu" === r
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, r, e) {
            return o < 11
              ? "enjing"
              : o < 15
              ? "siyang"
              : o < 19
              ? "sonten"
              : "ndalu";
          },
          calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            ss: "%d detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun",
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    851: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ka", {
          months:
            "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split(
              "_"
            ),
          monthsShort:
            "\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split(
              "_"
            ),
          weekdays: {
            standalone:
              "\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split(
                "_"
              ),
            format:
              "\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split(
                "_"
              ),
            isFormat:
              /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/,
          },
          weekdaysShort:
            "\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split(
              "_"
            ),
          weekdaysMin:
            "\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]",
            nextDay: "[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]",
            lastDay: "[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]",
            nextWeek:
              "[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]",
            lastWeek: "[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4",
            sameElse: "L",
          },
          relativeTime: {
            future: function (o) {
              return o.replace(
                /(\u10ec\u10d0\u10db|\u10ec\u10e3\u10d7|\u10e1\u10d0\u10d0\u10d7|\u10ec\u10d4\u10da|\u10d3\u10e6|\u10d7\u10d5)(\u10d8|\u10d4)/,
                function (r, e, m) {
                  return "\u10d8" === m
                    ? e + "\u10e8\u10d8"
                    : e + m + "\u10e8\u10d8";
                }
              );
            },
            past: function (o) {
              return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(
                o
              )
                ? o.replace(
                    /(\u10d8|\u10d4)$/,
                    "\u10d8\u10e1 \u10ec\u10d8\u10dc"
                  )
                : /\u10ec\u10d4\u10da\u10d8/.test(o)
                ? o.replace(
                    /\u10ec\u10d4\u10da\u10d8$/,
                    "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc"
                  )
                : o;
            },
            s: "\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8",
            ss: "%d \u10ec\u10d0\u10db\u10d8",
            m: "\u10ec\u10e3\u10d7\u10d8",
            mm: "%d \u10ec\u10e3\u10d7\u10d8",
            h: "\u10e1\u10d0\u10d0\u10d7\u10d8",
            hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8",
            d: "\u10d3\u10e6\u10d4",
            dd: "%d \u10d3\u10e6\u10d4",
            M: "\u10d7\u10d5\u10d4",
            MM: "%d \u10d7\u10d5\u10d4",
            y: "\u10ec\u10d4\u10da\u10d8",
            yy: "%d \u10ec\u10d4\u10da\u10d8",
          },
          dayOfMonthOrdinalParse:
            /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
          ordinal: function (o) {
            return 0 === o
              ? o
              : 1 === o
              ? o + "-\u10da\u10d8"
              : o < 20 || (o <= 100 && o % 20 == 0) || o % 100 == 0
              ? "\u10db\u10d4-" + o
              : o + "-\u10d4";
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    6074: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
          0: "-\u0448\u0456",
          1: "-\u0448\u0456",
          2: "-\u0448\u0456",
          3: "-\u0448\u0456",
          4: "-\u0448\u0456",
          5: "-\u0448\u0456",
          6: "-\u0448\u044b",
          7: "-\u0448\u0456",
          8: "-\u0448\u0456",
          9: "-\u0448\u044b",
          10: "-\u0448\u044b",
          20: "-\u0448\u044b",
          30: "-\u0448\u044b",
          40: "-\u0448\u044b",
          50: "-\u0448\u0456",
          60: "-\u0448\u044b",
          70: "-\u0448\u0456",
          80: "-\u0448\u0456",
          90: "-\u0448\u044b",
          100: "-\u0448\u0456",
        };
        u.defineLocale("kk", {
          months:
            "\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split(
              "_"
            ),
          monthsShort:
            "\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split(
              "_"
            ),
          weekdays:
            "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split(
              "_"
            ),
          weekdaysShort:
            "\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split(
              "_"
            ),
          weekdaysMin:
            "\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay:
              "[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT",
            nextDay:
              "[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT",
            nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT",
            lastDay:
              "[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",
            lastWeek:
              "[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0456\u0448\u0456\u043d\u0434\u0435",
            past: "%s \u0431\u04b1\u0440\u044b\u043d",
            s: "\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434",
            m: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442",
            mm: "%d \u043c\u0438\u043d\u0443\u0442",
            h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",
            hh: "%d \u0441\u0430\u0493\u0430\u0442",
            d: "\u0431\u0456\u0440 \u043a\u04af\u043d",
            dd: "%d \u043a\u04af\u043d",
            M: "\u0431\u0456\u0440 \u0430\u0439",
            MM: "%d \u0430\u0439",
            y: "\u0431\u0456\u0440 \u0436\u044b\u043b",
            yy: "%d \u0436\u044b\u043b",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/,
          ordinal: function (r) {
            return r + (i[r] || i[r % 10] || i[r >= 100 ? 100 : null]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    3343: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u17e1",
            2: "\u17e2",
            3: "\u17e3",
            4: "\u17e4",
            5: "\u17e5",
            6: "\u17e6",
            7: "\u17e7",
            8: "\u17e8",
            9: "\u17e9",
            0: "\u17e0",
          },
          o = {
            "\u17e1": "1",
            "\u17e2": "2",
            "\u17e3": "3",
            "\u17e4": "4",
            "\u17e5": "5",
            "\u17e6": "6",
            "\u17e7": "7",
            "\u17e8": "8",
            "\u17e9": "9",
            "\u17e0": "0",
          };
        u.defineLocale("km", {
          months:
            "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split(
              "_"
            ),
          monthsShort:
            "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split(
              "_"
            ),
          weekdays:
            "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split(
              "_"
            ),
          weekdaysShort:
            "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split(
              "_"
            ),
          weekdaysMin:
            "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split(
              "_"
            ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          meridiemParse:
            /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,
          isPM: function (e) {
            return "\u179b\u17d2\u1784\u17b6\u1785" === e;
          },
          meridiem: function (e, m, c) {
            return e < 12
              ? "\u1796\u17d2\u179a\u17b9\u1780"
              : "\u179b\u17d2\u1784\u17b6\u1785";
          },
          calendar: {
            sameDay:
              "[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT",
            nextDay:
              "[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT",
            nextWeek: "dddd [\u1798\u17c9\u17c4\u1784] LT",
            lastDay:
              "[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT",
            lastWeek:
              "dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s\u1791\u17c0\u178f",
            past: "%s\u1798\u17bb\u1793",
            s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",
            ss: "%d \u179c\u17b7\u1793\u17b6\u1791\u17b8",
            m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",
            mm: "%d \u1793\u17b6\u1791\u17b8",
            h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",
            hh: "%d \u1798\u17c9\u17c4\u1784",
            d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",
            dd: "%d \u1790\u17d2\u1784\u17c3",
            M: "\u1798\u17bd\u1799\u1781\u17c2",
            MM: "%d \u1781\u17c2",
            y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",
            yy: "%d \u1786\u17d2\u1793\u17b6\u17c6",
          },
          dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/,
          ordinal: "\u1791\u17b8%d",
          preparse: function (e) {
            return e.replace(
              /[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g,
              function (m) {
                return o[m];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (m) {
              return i[m];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    4799: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u0ce7",
            2: "\u0ce8",
            3: "\u0ce9",
            4: "\u0cea",
            5: "\u0ceb",
            6: "\u0cec",
            7: "\u0ced",
            8: "\u0cee",
            9: "\u0cef",
            0: "\u0ce6",
          },
          o = {
            "\u0ce7": "1",
            "\u0ce8": "2",
            "\u0ce9": "3",
            "\u0cea": "4",
            "\u0ceb": "5",
            "\u0cec": "6",
            "\u0ced": "7",
            "\u0cee": "8",
            "\u0cef": "9",
            "\u0ce6": "0",
          };
        u.defineLocale("kn", {
          months:
            "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split(
              "_"
            ),
          monthsShort:
            "\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5_\u0ca8\u0cb5\u0cc6\u0c82_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split(
              "_"
            ),
          weekdaysShort:
            "\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split(
              "_"
            ),
          weekdaysMin:
            "\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split(
              "_"
            ),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm",
          },
          calendar: {
            sameDay: "[\u0c87\u0c82\u0ca6\u0cc1] LT",
            nextDay: "[\u0ca8\u0cbe\u0cb3\u0cc6] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT",
            lastWeek: "[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0ca8\u0c82\u0ca4\u0cb0",
            past: "%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6",
            s: "\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1",
            ss: "%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1",
            m: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",
            mm: "%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",
            h: "\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6",
            hh: "%d \u0c97\u0c82\u0c9f\u0cc6",
            d: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8",
            dd: "%d \u0ca6\u0cbf\u0ca8",
            M: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",
            MM: "%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",
            y: "\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7",
            yy: "%d \u0cb5\u0cb0\u0ccd\u0cb7",
          },
          preparse: function (e) {
            return e.replace(
              /[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g,
              function (m) {
                return o[m];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (m) {
              return i[m];
            });
          },
          meridiemParse:
            /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
          meridiemHour: function (e, m) {
            return (
              12 === e && (e = 0),
              "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" === m
                ? e < 4
                  ? e
                  : e + 12
                : "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" === m
                ? e
                : "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" === m
                ? e >= 10
                  ? e
                  : e + 12
                : "\u0cb8\u0c82\u0c9c\u0cc6" === m
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, m, c) {
            return e < 4
              ? "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"
              : e < 10
              ? "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6"
              : e < 17
              ? "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8"
              : e < 20
              ? "\u0cb8\u0c82\u0c9c\u0cc6"
              : "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf";
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
          ordinal: function (e) {
            return e + "\u0ca8\u0cc6\u0cd5";
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    3549: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ko", {
          months:
            "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split(
              "_"
            ),
          monthsShort:
            "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split(
              "_"
            ),
          weekdays:
            "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split(
              "_"
            ),
          weekdaysShort:
            "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
          weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split(
            "_"
          ),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY\ub144 MMMM D\uc77c",
            LLL: "YYYY\ub144 MMMM D\uc77c A h:mm",
            LLLL: "YYYY\ub144 MMMM D\uc77c dddd A h:mm",
            l: "YYYY.MM.DD.",
            ll: "YYYY\ub144 MMMM D\uc77c",
            lll: "YYYY\ub144 MMMM D\uc77c A h:mm",
            llll: "YYYY\ub144 MMMM D\uc77c dddd A h:mm",
          },
          calendar: {
            sameDay: "\uc624\ub298 LT",
            nextDay: "\ub0b4\uc77c LT",
            nextWeek: "dddd LT",
            lastDay: "\uc5b4\uc81c LT",
            lastWeek: "\uc9c0\ub09c\uc8fc dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \ud6c4",
            past: "%s \uc804",
            s: "\uba87 \ucd08",
            ss: "%d\ucd08",
            m: "1\ubd84",
            mm: "%d\ubd84",
            h: "\ud55c \uc2dc\uac04",
            hh: "%d\uc2dc\uac04",
            d: "\ud558\ub8e8",
            dd: "%d\uc77c",
            M: "\ud55c \ub2ec",
            MM: "%d\ub2ec",
            y: "\uc77c \ub144",
            yy: "%d\ub144",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,
          ordinal: function (o, r) {
            switch (r) {
              case "d":
              case "D":
              case "DDD":
                return o + "\uc77c";
              case "M":
                return o + "\uc6d4";
              case "w":
              case "W":
                return o + "\uc8fc";
              default:
                return o;
            }
          },
          meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
          isPM: function (o) {
            return "\uc624\ud6c4" === o;
          },
          meridiem: function (o, r, e) {
            return o < 12 ? "\uc624\uc804" : "\uc624\ud6c4";
          },
        });
      })(f(5439));
    },
    1037: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u0661",
            2: "\u0662",
            3: "\u0663",
            4: "\u0664",
            5: "\u0665",
            6: "\u0666",
            7: "\u0667",
            8: "\u0668",
            9: "\u0669",
            0: "\u0660",
          },
          o = {
            "\u0661": "1",
            "\u0662": "2",
            "\u0663": "3",
            "\u0664": "4",
            "\u0665": "5",
            "\u0666": "6",
            "\u0667": "7",
            "\u0668": "8",
            "\u0669": "9",
            "\u0660": "0",
          },
          r = [
            "\u06a9\u0627\u0646\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645",
            "\u0634\u0648\u0628\u0627\u062a",
            "\u0626\u0627\u0632\u0627\u0631",
            "\u0646\u06cc\u0633\u0627\u0646",
            "\u0626\u0627\u06cc\u0627\u0631",
            "\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646",
            "\u062a\u06d5\u0645\u0645\u0648\u0632",
            "\u0626\u0627\u0628",
            "\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644",
            "\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u0643\u06d5\u0645",
            "\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645",
            "\u0643\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645",
          ];
        u.defineLocale("ku", {
          months: r,
          monthsShort: r,
          weekdays:
            "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u062f\u0648\u0648\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0633\u06ce\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split(
              "_"
            ),
          weekdaysShort:
            "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645_\u062f\u0648\u0648\u0634\u0647\u200c\u0645_\u0633\u06ce\u0634\u0647\u200c\u0645_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split(
              "_"
            ),
          weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u0647_\u0634".split(
            "_"
          ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          meridiemParse:
            /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/,
          isPM: function (m) {
            return /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(m);
          },
          meridiem: function (m, c, M) {
            return m < 12
              ? "\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc"
              : "\u0626\u06ce\u0648\u0627\u0631\u0647\u200c";
          },
          calendar: {
            sameDay:
              "[\u0626\u0647\u200c\u0645\u0631\u06c6 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            nextDay:
              "[\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            nextWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            lastDay:
              "[\u062f\u0648\u06ce\u0646\u06ce \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            lastWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0644\u0647\u200c %s",
            past: "%s",
            s: "\u0686\u0647\u200c\u0646\u062f \u0686\u0631\u0643\u0647\u200c\u06cc\u0647\u200c\u0643",
            ss: "\u0686\u0631\u0643\u0647\u200c %d",
            m: "\u06cc\u0647\u200c\u0643 \u062e\u0648\u0644\u0647\u200c\u0643",
            mm: "%d \u062e\u0648\u0644\u0647\u200c\u0643",
            h: "\u06cc\u0647\u200c\u0643 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",
            hh: "%d \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",
            d: "\u06cc\u0647\u200c\u0643 \u0695\u06c6\u0698",
            dd: "%d \u0695\u06c6\u0698",
            M: "\u06cc\u0647\u200c\u0643 \u0645\u0627\u0646\u06af",
            MM: "%d \u0645\u0627\u0646\u06af",
            y: "\u06cc\u0647\u200c\u0643 \u0633\u0627\u06b5",
            yy: "%d \u0633\u0627\u06b5",
          },
          preparse: function (m) {
            return m
              .replace(
                /[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,
                function (c) {
                  return o[c];
                }
              )
              .replace(/\u060c/g, ",");
          },
          postformat: function (m) {
            return m
              .replace(/\d/g, function (c) {
                return i[c];
              })
              .replace(/,/g, "\u060c");
          },
          week: { dow: 6, doy: 12 },
        });
      })(f(5439));
    },
    3125: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
          0: "-\u0447\u04af",
          1: "-\u0447\u0438",
          2: "-\u0447\u0438",
          3: "-\u0447\u04af",
          4: "-\u0447\u04af",
          5: "-\u0447\u0438",
          6: "-\u0447\u044b",
          7: "-\u0447\u0438",
          8: "-\u0447\u0438",
          9: "-\u0447\u0443",
          10: "-\u0447\u0443",
          20: "-\u0447\u044b",
          30: "-\u0447\u0443",
          40: "-\u0447\u044b",
          50: "-\u0447\u04af",
          60: "-\u0447\u044b",
          70: "-\u0447\u0438",
          80: "-\u0447\u0438",
          90: "-\u0447\u0443",
          100: "-\u0447\u04af",
        };
        u.defineLocale("ky", {
          months:
            "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split(
              "_"
            ),
          monthsShort:
            "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split(
              "_"
            ),
          weekdays:
            "\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split(
              "_"
            ),
          weekdaysShort:
            "\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split(
              "_"
            ),
          weekdaysMin:
            "\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay:
              "[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT",
            nextDay:
              "[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT",
            nextWeek: "dddd [\u0441\u0430\u0430\u0442] LT",
            lastDay:
              "[\u041a\u0435\u0447\u044d\u044d \u0441\u0430\u0430\u0442] LT",
            lastWeek:
              "[\u04e8\u0442\u043a\u04e9\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0438\u0447\u0438\u043d\u0434\u0435",
            past: "%s \u043c\u0443\u0440\u0443\u043d",
            s: "\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434",
            m: "\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442",
            mm: "%d \u043c\u04af\u043d\u04e9\u0442",
            h: "\u0431\u0438\u0440 \u0441\u0430\u0430\u0442",
            hh: "%d \u0441\u0430\u0430\u0442",
            d: "\u0431\u0438\u0440 \u043a\u04af\u043d",
            dd: "%d \u043a\u04af\u043d",
            M: "\u0431\u0438\u0440 \u0430\u0439",
            MM: "%d \u0430\u0439",
            y: "\u0431\u0438\u0440 \u0436\u044b\u043b",
            yy: "%d \u0436\u044b\u043b",
          },
          dayOfMonthOrdinalParse:
            /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,
          ordinal: function (r) {
            return r + (i[r] || i[r % 10] || i[r >= 100 ? 100 : null]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    9586: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(c, M, L, D) {
          var x = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"],
          };
          return M ? x[L][0] : x[L][1];
        }
        function e(c) {
          if (((c = parseInt(c, 10)), isNaN(c))) return !1;
          if (c < 0) return !0;
          if (c < 10) return 4 <= c && c <= 7;
          if (c < 100) {
            var M = c % 10;
            return e(0 === M ? c / 10 : M);
          }
          if (c < 1e4) {
            for (; c >= 10; ) c /= 10;
            return e(c);
          }
          return e((c /= 1e3));
        }
        u.defineLocale("lb", {
          months:
            "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_"
            ),
          monthsShort:
            "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split(
              "_"
            ),
          weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
          },
          calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[G\xebschter um] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 2:
                case 4:
                  return "[Leschten] dddd [um] LT";
                default:
                  return "[Leschte] dddd [um] LT";
              }
            },
          },
          relativeTime: {
            future: function o(c) {
              return e(c.substr(0, c.indexOf(" "))) ? "a " + c : "an " + c;
            },
            past: function r(c) {
              return e(c.substr(0, c.indexOf(" ")))
                ? "viru " + c
                : "virun " + c;
            },
            s: "e puer Sekonnen",
            ss: "%d Sekonnen",
            m: i,
            mm: "%d Minutten",
            h: i,
            hh: "%d Stonnen",
            d: i,
            dd: "%d Deeg",
            M: i,
            MM: "%d M\xe9int",
            y: i,
            yy: "%d Joer",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    2349: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("lo", {
          months:
            "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split(
              "_"
            ),
          monthsShort:
            "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split(
              "_"
            ),
          weekdays:
            "\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split(
              "_"
            ),
          weekdaysShort:
            "\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split(
              "_"
            ),
          weekdaysMin:
            "\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split(
              "_"
            ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm",
          },
          meridiemParse:
            /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,
          isPM: function (o) {
            return "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" === o;
          },
          meridiem: function (o, r, e) {
            return o < 12
              ? "\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2"
              : "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87";
          },
          calendar: {
            sameDay:
              "[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            nextDay:
              "[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            nextWeek:
              "[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            lastDay:
              "[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            lastWeek:
              "[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0ead\u0eb5\u0e81 %s",
            past: "%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2",
            s: "\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
            ss: "%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
            m: "1 \u0e99\u0eb2\u0e97\u0eb5",
            mm: "%d \u0e99\u0eb2\u0e97\u0eb5",
            h: "1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
            hh: "%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
            d: "1 \u0ea1\u0eb7\u0ec9",
            dd: "%d \u0ea1\u0eb7\u0ec9",
            M: "1 \u0ec0\u0e94\u0eb7\u0ead\u0e99",
            MM: "%d \u0ec0\u0e94\u0eb7\u0ead\u0e99",
            y: "1 \u0e9b\u0eb5",
            yy: "%d \u0e9b\u0eb5",
          },
          dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/,
          ordinal: function (o) {
            return "\u0e97\u0eb5\u0ec8" + o;
          },
        });
      })(f(5439));
    },
    2400: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
          ss: "sekund\u0117_sekund\u017ei\u0173_sekundes",
          m: "minut\u0117_minut\u0117s_minut\u0119",
          mm: "minut\u0117s_minu\u010di\u0173_minutes",
          h: "valanda_valandos_valand\u0105",
          hh: "valandos_valand\u0173_valandas",
          d: "diena_dienos_dien\u0105",
          dd: "dienos_dien\u0173_dienas",
          M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",
          MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
          y: "metai_met\u0173_metus",
          yy: "metai_met\u0173_metus",
        };
        function r(L, D, x, N) {
          return D ? m(x)[0] : N ? m(x)[1] : m(x)[2];
        }
        function e(L) {
          return L % 10 == 0 || (L > 10 && L < 20);
        }
        function m(L) {
          return i[L].split("_");
        }
        function c(L, D, x, N) {
          var O = L + " ";
          return 1 === L
            ? O + r(0, D, x[0], N)
            : D
            ? O + (e(L) ? m(x)[1] : m(x)[0])
            : N
            ? O + m(x)[1]
            : O + (e(L) ? m(x)[1] : m(x)[2]);
        }
        u.defineLocale("lt", {
          months: {
            format:
              "sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split(
                "_"
              ),
            standalone:
              "sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split(
                "_"
              ),
            isFormat:
              /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
          },
          monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split(
            "_"
          ),
          weekdays: {
            format:
              "sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split(
                "_"
              ),
            standalone:
              "sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split(
                "_"
              ),
            isFormat: /dddd HH:mm/,
          },
          weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),
          weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
          },
          calendar: {
            sameDay: "[\u0160iandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Pra\u0117jus\u012f] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "po %s",
            past: "prie\u0161 %s",
            s: function o(L, D, x, N) {
              return D
                ? "kelios sekund\u0117s"
                : N
                ? "keli\u0173 sekund\u017ei\u0173"
                : "kelias sekundes";
            },
            ss: c,
            m: r,
            mm: c,
            h: r,
            hh: c,
            d: r,
            dd: c,
            M: r,
            MM: c,
            y: r,
            yy: c,
          },
          dayOfMonthOrdinalParse: /\d{1,2}-oji/,
          ordinal: function (L) {
            return L + "-oji";
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    9991: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
          ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"),
          m: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split(
            "_"
          ),
          mm: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split(
            "_"
          ),
          h: "stundas_stund\u0101m_stunda_stundas".split("_"),
          hh: "stundas_stund\u0101m_stunda_stundas".split("_"),
          d: "dienas_dien\u0101m_diena_dienas".split("_"),
          dd: "dienas_dien\u0101m_diena_dienas".split("_"),
          M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split(
            "_"
          ),
          MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split(
            "_"
          ),
          y: "gada_gadiem_gads_gadi".split("_"),
          yy: "gada_gadiem_gads_gadi".split("_"),
        };
        function o(M, L, D) {
          return D
            ? L % 10 == 1 && L % 100 != 11
              ? M[2]
              : M[3]
            : L % 10 == 1 && L % 100 != 11
            ? M[0]
            : M[1];
        }
        function r(M, L, D) {
          return M + " " + o(i[D], M, L);
        }
        function e(M, L, D) {
          return o(i[D], M, L);
        }
        u.defineLocale("lv", {
          months:
            "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split(
              "_"
            ),
          monthsShort:
            "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split(
              "_"
            ),
          weekdays:
            "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split(
              "_"
            ),
          weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
          },
          calendar: {
            sameDay: "[\u0160odien pulksten] LT",
            nextDay: "[R\u012bt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "p\u0113c %s",
            past: "pirms %s",
            s: function m(M, L) {
              return L
                ? "da\u017eas sekundes"
                : "da\u017e\u0101m sekund\u0113m";
            },
            ss: r,
            m: e,
            mm: r,
            h: e,
            hh: r,
            d: e,
            dd: r,
            M: e,
            MM: r,
            y: e,
            yy: r,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    8477: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
          words: {
            ss: ["sekund", "sekunda", "sekundi"],
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mjesec", "mjeseca", "mjeseci"],
            yy: ["godina", "godine", "godina"],
          },
          correctGrammaticalCase: function (r, e) {
            return 1 === r ? e[0] : r >= 2 && r <= 4 ? e[1] : e[2];
          },
          translate: function (r, e, m) {
            var c = i.words[m];
            return 1 === m.length
              ? e
                ? c[0]
                : c[1]
              : r + " " + i.correctGrammaticalCase(r, c);
          },
        };
        u.defineLocale("me", {
          months:
            "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
              "_"
            ),
          monthsShort:
            "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split(
              "_"
            ),
          weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[ju\u010de u] LT",
            lastWeek: function () {
              return [
                "[pro\u0161le] [nedjelje] [u] LT",
                "[pro\u0161log] [ponedjeljka] [u] LT",
                "[pro\u0161log] [utorka] [u] LT",
                "[pro\u0161le] [srijede] [u] LT",
                "[pro\u0161log] [\u010detvrtka] [u] LT",
                "[pro\u0161log] [petka] [u] LT",
                "[pro\u0161le] [subote] [u] LT",
              ][this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            ss: i.translate,
            m: i.translate,
            mm: i.translate,
            h: i.translate,
            hh: i.translate,
            d: "dan",
            dd: i.translate,
            M: "mjesec",
            MM: i.translate,
            y: "godinu",
            yy: i.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    5118: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("mi", {
          months:
            "Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split(
              "_"
            ),
          monthsShort:
            "Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split(
              "_"
            ),
          monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
          weekdays:
            "R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split(
              "_"
            ),
          weekdaysShort: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),
          weekdaysMin: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [i] HH:mm",
            LLLL: "dddd, D MMMM YYYY [i] HH:mm",
          },
          calendar: {
            sameDay: "[i teie mahana, i] LT",
            nextDay: "[apopo i] LT",
            nextWeek: "dddd [i] LT",
            lastDay: "[inanahi i] LT",
            lastWeek: "dddd [whakamutunga i] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "i roto i %s",
            past: "%s i mua",
            s: "te h\u0113kona ruarua",
            ss: "%d h\u0113kona",
            m: "he meneti",
            mm: "%d meneti",
            h: "te haora",
            hh: "%d haora",
            d: "he ra",
            dd: "%d ra",
            M: "he marama",
            MM: "%d marama",
            y: "he tau",
            yy: "%d tau",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    5943: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("mk", {
          months:
            "\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(
              "_"
            ),
          monthsShort:
            "\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split(
              "_"
            ),
          weekdays:
            "\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split(
              "_"
            ),
          weekdaysShort:
            "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split(
              "_"
            ),
          weekdaysMin:
            "\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split(
              "_"
            ),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT",
            nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043e] LT",
            nextWeek: "[\u0412\u043e] dddd [\u0432\u043e] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0437\u0430 %s",
            past: "\u043f\u0440\u0435\u0434 %s",
            s: "\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            m: "\u0435\u0434\u043d\u0430 \u043c\u0438\u043d\u0443\u0442\u0430",
            mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
            h: "\u0435\u0434\u0435\u043d \u0447\u0430\u0441",
            hh: "%d \u0447\u0430\u0441\u0430",
            d: "\u0435\u0434\u0435\u043d \u0434\u0435\u043d",
            dd: "%d \u0434\u0435\u043d\u0430",
            M: "\u0435\u0434\u0435\u043d \u043c\u0435\u0441\u0435\u0446",
            MM: "%d \u043c\u0435\u0441\u0435\u0446\u0438",
            y: "\u0435\u0434\u043d\u0430 \u0433\u043e\u0434\u0438\u043d\u0430",
            yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438",
          },
          dayOfMonthOrdinalParse:
            /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
          ordinal: function (o) {
            var r = o % 10,
              e = o % 100;
            return 0 === o
              ? o + "-\u0435\u0432"
              : 0 === e
              ? o + "-\u0435\u043d"
              : e > 10 && e < 20
              ? o + "-\u0442\u0438"
              : 1 === r
              ? o + "-\u0432\u0438"
              : 2 === r
              ? o + "-\u0440\u0438"
              : 7 === r || 8 === r
              ? o + "-\u043c\u0438"
              : o + "-\u0442\u0438";
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    3849: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ml", {
          months:
            "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split(
              "_"
            ),
          monthsShort:
            "\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split(
              "_"
            ),
          weekdaysShort:
            "\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split(
              "_"
            ),
          weekdaysMin:
            "\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split(
              "_"
            ),
          longDateFormat: {
            LT: "A h:mm -\u0d28\u0d41",
            LTS: "A h:mm:ss -\u0d28\u0d41",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -\u0d28\u0d41",
            LLLL: "dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41",
          },
          calendar: {
            sameDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT",
            nextDay: "[\u0d28\u0d3e\u0d33\u0d46] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT",
            lastWeek: "[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d",
            past: "%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d",
            s: "\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e",
            ss: "%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d",
            m: "\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
            mm: "%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
            h: "\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
            hh: "%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
            d: "\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02",
            dd: "%d \u0d26\u0d3f\u0d35\u0d38\u0d02",
            M: "\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02",
            MM: "%d \u0d2e\u0d3e\u0d38\u0d02",
            y: "\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02",
            yy: "%d \u0d35\u0d7c\u0d37\u0d02",
          },
          meridiemParse:
            /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              ("\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" === r && o >= 4) ||
              "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" ===
                r ||
              "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" ===
                r
                ? o + 12
                : o
            );
          },
          meridiem: function (o, r, e) {
            return o < 4
              ? "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"
              : o < 12
              ? "\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46"
              : o < 17
              ? "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d"
              : o < 20
              ? "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02"
              : "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f";
          },
        });
      })(f(5439));
    },
    1977: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(r, e, m, c) {
          switch (m) {
            case "s":
              return e
                ? "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434"
                : "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d";
            case "ss":
              return (
                r +
                (e
                  ? " \u0441\u0435\u043a\u0443\u043d\u0434"
                  : " \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d")
              );
            case "m":
            case "mm":
              return (
                r +
                (e
                  ? " \u043c\u0438\u043d\u0443\u0442"
                  : " \u043c\u0438\u043d\u0443\u0442\u044b\u043d")
              );
            case "h":
            case "hh":
              return (
                r +
                (e
                  ? " \u0446\u0430\u0433"
                  : " \u0446\u0430\u0433\u0438\u0439\u043d")
              );
            case "d":
            case "dd":
              return (
                r +
                (e
                  ? " \u04e9\u0434\u04e9\u0440"
                  : " \u04e9\u0434\u0440\u0438\u0439\u043d")
              );
            case "M":
            case "MM":
              return (
                r +
                (e ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044b\u043d")
              );
            case "y":
            case "yy":
              return (
                r +
                (e
                  ? " \u0436\u0438\u043b"
                  : " \u0436\u0438\u043b\u0438\u0439\u043d")
              );
            default:
              return r;
          }
        }
        u.defineLocale("mn", {
          months:
            "\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split(
              "_"
            ),
          monthsShort:
            "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "\u041d\u044f\u043c_\u0414\u0430\u0432\u0430\u0430_\u041c\u044f\u0433\u043c\u0430\u0440_\u041b\u0445\u0430\u0433\u0432\u0430_\u041f\u04af\u0440\u044d\u0432_\u0411\u0430\u0430\u0441\u0430\u043d_\u0411\u044f\u043c\u0431\u0430".split(
              "_"
            ),
          weekdaysShort:
            "\u041d\u044f\u043c_\u0414\u0430\u0432_\u041c\u044f\u0433_\u041b\u0445\u0430_\u041f\u04af\u0440_\u0411\u0430\u0430_\u0411\u044f\u043c".split(
              "_"
            ),
          weekdaysMin:
            "\u041d\u044f_\u0414\u0430_\u041c\u044f_\u041b\u0445_\u041f\u04af_\u0411\u0430_\u0411\u044f".split(
              "_"
            ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D",
            LLL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm",
            LLLL: "dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm",
          },
          meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i,
          isPM: function (r) {
            return "\u04ae\u0425" === r;
          },
          meridiem: function (r, e, m) {
            return r < 12 ? "\u04ae\u04e8" : "\u04ae\u0425";
          },
          calendar: {
            sameDay: "[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT",
            nextDay: "[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT",
            nextWeek: "[\u0418\u0440\u044d\u0445] dddd LT",
            lastDay: "[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT",
            lastWeek:
              "[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0434\u0430\u0440\u0430\u0430",
            past: "%s \u04e9\u043c\u043d\u04e9",
            s: i,
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: i,
            dd: i,
            M: i,
            MM: i,
            y: i,
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/,
          ordinal: function (r, e) {
            switch (e) {
              case "d":
              case "D":
              case "DDD":
                return r + " \u04e9\u0434\u04e9\u0440";
              default:
                return r;
            }
          },
        });
      })(f(5439));
    },
    6184: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966",
          },
          o = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0",
          };
        function r(m, c, M, L) {
          var D = "";
          if (c)
            switch (M) {
              case "s":
                D = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";
                break;
              case "ss":
                D = "%d \u0938\u0947\u0915\u0902\u0926";
                break;
              case "m":
                D = "\u090f\u0915 \u092e\u093f\u0928\u093f\u091f";
                break;
              case "mm":
                D = "%d \u092e\u093f\u0928\u093f\u091f\u0947";
                break;
              case "h":
                D = "\u090f\u0915 \u0924\u093e\u0938";
                break;
              case "hh":
                D = "%d \u0924\u093e\u0938";
                break;
              case "d":
                D = "\u090f\u0915 \u0926\u093f\u0935\u0938";
                break;
              case "dd":
                D = "%d \u0926\u093f\u0935\u0938";
                break;
              case "M":
                D = "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e";
                break;
              case "MM":
                D = "%d \u092e\u0939\u093f\u0928\u0947";
                break;
              case "y":
                D = "\u090f\u0915 \u0935\u0930\u094d\u0937";
                break;
              case "yy":
                D = "%d \u0935\u0930\u094d\u0937\u0947";
            }
          else
            switch (M) {
              case "s":
                D =
                  "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                break;
              case "ss":
                D = "%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                break;
              case "m":
                D = "\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e";
                break;
              case "mm":
                D = "%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902";
                break;
              case "h":
                D = "\u090f\u0915\u093e \u0924\u093e\u0938\u093e";
                break;
              case "hh":
                D = "%d \u0924\u093e\u0938\u093e\u0902";
                break;
              case "d":
                D = "\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e";
                break;
              case "dd":
                D = "%d \u0926\u093f\u0935\u0938\u093e\u0902";
                break;
              case "M":
                D =
                  "\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e";
                break;
              case "MM":
                D = "%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902";
                break;
              case "y":
                D = "\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e";
                break;
              case "yy":
                D = "%d \u0935\u0930\u094d\u0937\u093e\u0902";
            }
          return D.replace(/%d/i, m);
        }
        u.defineLocale("mr", {
          months:
            "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split(
              "_"
            ),
          monthsShort:
            "\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split(
              "_"
            ),
          weekdaysShort:
            "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split(
              "_"
            ),
          weekdaysMin:
            "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split(
              "_"
            ),
          longDateFormat: {
            LT: "A h:mm \u0935\u093e\u091c\u0924\u093e",
            LTS: "A h:mm:ss \u0935\u093e\u091c\u0924\u093e",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e",
          },
          calendar: {
            sameDay: "[\u0906\u091c] LT",
            nextDay: "[\u0909\u0926\u094d\u092f\u093e] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0915\u093e\u0932] LT",
            lastWeek: "[\u092e\u093e\u0917\u0940\u0932] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s\u092e\u0927\u094d\u092f\u0947",
            past: "%s\u092a\u0942\u0930\u094d\u0935\u0940",
            s: r,
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: r,
            dd: r,
            M: r,
            MM: r,
            y: r,
            yy: r,
          },
          preparse: function (m) {
            return m.replace(
              /[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,
              function (c) {
                return o[c];
              }
            );
          },
          postformat: function (m) {
            return m.replace(/\d/g, function (c) {
              return i[c];
            });
          },
          meridiemParse:
            /\u092a\u0939\u093e\u091f\u0947|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940|\u0930\u093e\u0924\u094d\u0930\u0940/,
          meridiemHour: function (m, c) {
            return (
              12 === m && (m = 0),
              "\u092a\u0939\u093e\u091f\u0947" === c ||
              "\u0938\u0915\u093e\u0933\u0940" === c
                ? m
                : "\u0926\u0941\u092a\u093e\u0930\u0940" === c ||
                  "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" === c ||
                  "\u0930\u093e\u0924\u094d\u0930\u0940" === c
                ? m >= 12
                  ? m
                  : m + 12
                : void 0
            );
          },
          meridiem: function (m, c, M) {
            return m >= 0 && m < 6
              ? "\u092a\u0939\u093e\u091f\u0947"
              : m < 12
              ? "\u0938\u0915\u093e\u0933\u0940"
              : m < 17
              ? "\u0926\u0941\u092a\u093e\u0930\u0940"
              : m < 20
              ? "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940"
              : "\u0930\u093e\u0924\u094d\u0930\u0940";
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    4524: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ms-my", {
          months:
            "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
            "_"
          ),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              "pagi" === r
                ? o
                : "tengahari" === r
                ? o >= 11
                  ? o
                  : o + 12
                : "petang" === r || "malam" === r
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, r, e) {
            return o < 11
              ? "pagi"
              : o < 15
              ? "tengahari"
              : o < 19
              ? "petang"
              : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun",
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    485: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ms", {
          months:
            "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
            "_"
          ),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              "pagi" === r
                ? o
                : "tengahari" === r
                ? o >= 11
                  ? o
                  : o + 12
                : "petang" === r || "malam" === r
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, r, e) {
            return o < 11
              ? "pagi"
              : o < 15
              ? "tengahari"
              : o < 19
              ? "petang"
              : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun",
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    6681: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("mt", {
          months:
            "Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru".split(
              "_"
            ),
          monthsShort:
            "Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b".split(
              "_"
            ),
          weekdays:
            "Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split(
              "_"
            ),
          weekdaysShort: "\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split(
            "_"
          ),
          weekdaysMin: "\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Illum fil-]LT",
            nextDay: "[G\u0127ada fil-]LT",
            nextWeek: "dddd [fil-]LT",
            lastDay: "[Il-biera\u0127 fil-]LT",
            lastWeek: "dddd [li g\u0127adda] [fil-]LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "f\u2019 %s",
            past: "%s ilu",
            s: "ftit sekondi",
            ss: "%d sekondi",
            m: "minuta",
            mm: "%d minuti",
            h: "sieg\u0127a",
            hh: "%d sieg\u0127at",
            d: "\u0121urnata",
            dd: "%d \u0121ranet",
            M: "xahar",
            MM: "%d xhur",
            y: "sena",
            yy: "%d sni",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    2024: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u1041",
            2: "\u1042",
            3: "\u1043",
            4: "\u1044",
            5: "\u1045",
            6: "\u1046",
            7: "\u1047",
            8: "\u1048",
            9: "\u1049",
            0: "\u1040",
          },
          o = {
            "\u1041": "1",
            "\u1042": "2",
            "\u1043": "3",
            "\u1044": "4",
            "\u1045": "5",
            "\u1046": "6",
            "\u1047": "7",
            "\u1048": "8",
            "\u1049": "9",
            "\u1040": "0",
          };
        u.defineLocale("my", {
          months:
            "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split(
              "_"
            ),
          monthsShort:
            "\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split(
              "_"
            ),
          weekdays:
            "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split(
              "_"
            ),
          weekdaysShort:
            "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split(
              "_"
            ),
          weekdaysMin:
            "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]",
            nextDay:
              "[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]",
            nextWeek: "dddd LT [\u1019\u103e\u102c]",
            lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]",
            lastWeek:
              "[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]",
            sameElse: "L",
          },
          relativeTime: {
            future:
              "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",
            past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",
            s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",
            ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a",
            m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",
            mm: "%d \u1019\u102d\u1014\u1005\u103a",
            h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e",
            hh: "%d \u1014\u102c\u101b\u102e",
            d: "\u1010\u1005\u103a\u101b\u1000\u103a",
            dd: "%d \u101b\u1000\u103a",
            M: "\u1010\u1005\u103a\u101c",
            MM: "%d \u101c",
            y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a",
            yy: "%d \u1014\u103e\u1005\u103a",
          },
          preparse: function (e) {
            return e.replace(
              /[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g,
              function (m) {
                return o[m];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (m) {
              return i[m];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    2688: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("nb", {
          months:
            "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
              "_"
            ),
          monthsShort:
            "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split(
              "_"
            ),
          weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),
          weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i g\xe5r kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            ss: "%d sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            w: "en uke",
            ww: "%d uker",
            M: "en m\xe5ned",
            MM: "%d m\xe5neder",
            y: "ett \xe5r",
            yy: "%d \xe5r",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    8914: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966",
          },
          o = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0",
          };
        u.defineLocale("ne", {
          months:
            "\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split(
              "_"
            ),
          monthsShort:
            "\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split(
              "_"
            ),
          weekdaysShort:
            "\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split(
              "_"
            ),
          weekdaysMin:
            "\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split(
              "_"
            ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "A\u0915\u094b h:mm \u092c\u091c\u0947",
            LTS: "A\u0915\u094b h:mm:ss \u092c\u091c\u0947",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947",
            LLLL: "dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947",
          },
          preparse: function (e) {
            return e.replace(
              /[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,
              function (m) {
                return o[m];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (m) {
              return i[m];
            });
          },
          meridiemParse:
            /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
          meridiemHour: function (e, m) {
            return (
              12 === e && (e = 0),
              "\u0930\u093e\u0924\u093f" === m
                ? e < 4
                  ? e
                  : e + 12
                : "\u092c\u093f\u0939\u093e\u0928" === m
                ? e
                : "\u0926\u093f\u0909\u0901\u0938\u094b" === m
                ? e >= 10
                  ? e
                  : e + 12
                : "\u0938\u093e\u0901\u091d" === m
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, m, c) {
            return e < 3
              ? "\u0930\u093e\u0924\u093f"
              : e < 12
              ? "\u092c\u093f\u0939\u093e\u0928"
              : e < 16
              ? "\u0926\u093f\u0909\u0901\u0938\u094b"
              : e < 20
              ? "\u0938\u093e\u0901\u091d"
              : "\u0930\u093e\u0924\u093f";
          },
          calendar: {
            sameDay: "[\u0906\u091c] LT",
            nextDay: "[\u092d\u094b\u0932\u093f] LT",
            nextWeek: "[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT",
            lastDay: "[\u0939\u093f\u091c\u094b] LT",
            lastWeek: "[\u0917\u090f\u0915\u094b] dddd[,] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s\u092e\u093e",
            past: "%s \u0905\u0917\u093e\u0921\u093f",
            s: "\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923",
            ss: "%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921",
            m: "\u090f\u0915 \u092e\u093f\u0928\u0947\u091f",
            mm: "%d \u092e\u093f\u0928\u0947\u091f",
            h: "\u090f\u0915 \u0918\u0923\u094d\u091f\u093e",
            hh: "%d \u0918\u0923\u094d\u091f\u093e",
            d: "\u090f\u0915 \u0926\u093f\u0928",
            dd: "%d \u0926\u093f\u0928",
            M: "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",
            MM: "%d \u092e\u0939\u093f\u0928\u093e",
            y: "\u090f\u0915 \u092c\u0930\u094d\u0937",
            yy: "%d \u092c\u0930\u094d\u0937",
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    2272: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
            "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
              "_"
            ),
          o = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          r = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i,
          ],
          e =
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        u.defineLocale("nl-be", {
          months:
            "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
              "_"
            ),
          monthsShort: function (c, M) {
            return c ? (/-MMM-/.test(M) ? o[c.month()] : i[c.month()]) : i;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex:
            /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: r,
          longMonthsParse: r,
          shortMonthsParse: r,
          weekdays:
            "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
              "_"
            ),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "\xe9\xe9n minuut",
            mm: "%d minuten",
            h: "\xe9\xe9n uur",
            hh: "%d uur",
            d: "\xe9\xe9n dag",
            dd: "%d dagen",
            M: "\xe9\xe9n maand",
            MM: "%d maanden",
            y: "\xe9\xe9n jaar",
            yy: "%d jaar",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (c) {
            return c + (1 === c || 8 === c || c >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    1758: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
            "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
              "_"
            ),
          o = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          r = [
            /^jan/i,
            /^feb/i,
            /^maart|mrt.?$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i,
          ],
          e =
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        u.defineLocale("nl", {
          months:
            "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
              "_"
            ),
          monthsShort: function (c, M) {
            return c ? (/-MMM-/.test(M) ? o[c.month()] : i[c.month()]) : i;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex:
            /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: r,
          longMonthsParse: r,
          shortMonthsParse: r,
          weekdays:
            "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
              "_"
            ),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "\xe9\xe9n minuut",
            mm: "%d minuten",
            h: "\xe9\xe9n uur",
            hh: "%d uur",
            d: "\xe9\xe9n dag",
            dd: "%d dagen",
            w: "\xe9\xe9n week",
            ww: "%d weken",
            M: "\xe9\xe9n maand",
            MM: "%d maanden",
            y: "\xe9\xe9n jaar",
            yy: "%d jaar",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (c) {
            return c + (1 === c || 8 === c || c >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    1510: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("nn", {
          months:
            "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
              "_"
            ),
          monthsShort:
            "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
          weekdaysShort: "su._m\xe5._ty._on._to._fr._lau.".split("_"),
          weekdaysMin: "su_m\xe5_ty_on_to_fr_la".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
          },
          calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I g\xe5r klokka] LT",
            lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "%s sidan",
            s: "nokre sekund",
            ss: "%d sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            w: "ei veke",
            ww: "%d veker",
            M: "ein m\xe5nad",
            MM: "%d m\xe5nader",
            y: "eit \xe5r",
            yy: "%d \xe5r",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    2797: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("oc-lnc", {
          months: {
            standalone:
              "geni\xe8r_febri\xe8r_mar\xe7_abril_mai_junh_julhet_agost_setembre_oct\xf2bre_novembre_decembre".split(
                "_"
              ),
            format:
              "de geni\xe8r_de febri\xe8r_de mar\xe7_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'oct\xf2bre_de novembre_de decembre".split(
                "_"
              ),
            isFormat: /D[oD]?(\s)+MMMM/,
          },
          monthsShort:
            "gen._febr._mar\xe7_abr._mai_junh_julh._ago._set._oct._nov._dec.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "dimenge_diluns_dimars_dim\xe8cres_dij\xf2us_divendres_dissabte".split(
              "_"
            ),
          weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
          weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
            llll: "ddd D MMM YYYY, H:mm",
          },
          calendar: {
            sameDay: "[u\xe8i a] LT",
            nextDay: "[deman a] LT",
            nextWeek: "dddd [a] LT",
            lastDay: "[i\xe8r a] LT",
            lastWeek: "dddd [passat a] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "d'aqu\xed %s",
            past: "fa %s",
            s: "unas segondas",
            ss: "%d segondas",
            m: "una minuta",
            mm: "%d minutas",
            h: "una ora",
            hh: "%d oras",
            d: "un jorn",
            dd: "%d jorns",
            M: "un mes",
            MM: "%d meses",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
          ordinal: function (o, r) {
            var e =
              1 === o
                ? "r"
                : 2 === o
                ? "n"
                : 3 === o
                ? "r"
                : 4 === o
                ? "t"
                : "\xe8";
            return ("w" === r || "W" === r) && (e = "a"), o + e;
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    7944: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u0a67",
            2: "\u0a68",
            3: "\u0a69",
            4: "\u0a6a",
            5: "\u0a6b",
            6: "\u0a6c",
            7: "\u0a6d",
            8: "\u0a6e",
            9: "\u0a6f",
            0: "\u0a66",
          },
          o = {
            "\u0a67": "1",
            "\u0a68": "2",
            "\u0a69": "3",
            "\u0a6a": "4",
            "\u0a6b": "5",
            "\u0a6c": "6",
            "\u0a6d": "7",
            "\u0a6e": "8",
            "\u0a6f": "9",
            "\u0a66": "0",
          };
        u.defineLocale("pa-in", {
          months:
            "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split(
              "_"
            ),
          monthsShort:
            "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split(
              "_"
            ),
          weekdays:
            "\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split(
              "_"
            ),
          weekdaysShort:
            "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split(
              "_"
            ),
          weekdaysMin:
            "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split(
              "_"
            ),
          longDateFormat: {
            LT: "A h:mm \u0a35\u0a1c\u0a47",
            LTS: "A h:mm:ss \u0a35\u0a1c\u0a47",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47",
          },
          calendar: {
            sameDay: "[\u0a05\u0a1c] LT",
            nextDay: "[\u0a15\u0a32] LT",
            nextWeek: "[\u0a05\u0a17\u0a32\u0a3e] dddd, LT",
            lastDay: "[\u0a15\u0a32] LT",
            lastWeek: "[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0a35\u0a3f\u0a71\u0a1a",
            past: "%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47",
            s: "\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f",
            ss: "%d \u0a38\u0a15\u0a3f\u0a70\u0a1f",
            m: "\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f",
            mm: "%d \u0a2e\u0a3f\u0a70\u0a1f",
            h: "\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e",
            hh: "%d \u0a18\u0a70\u0a1f\u0a47",
            d: "\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28",
            dd: "%d \u0a26\u0a3f\u0a28",
            M: "\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e",
            MM: "%d \u0a2e\u0a39\u0a40\u0a28\u0a47",
            y: "\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32",
            yy: "%d \u0a38\u0a3e\u0a32",
          },
          preparse: function (e) {
            return e.replace(
              /[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g,
              function (m) {
                return o[m];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (m) {
              return i[m];
            });
          },
          meridiemParse:
            /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
          meridiemHour: function (e, m) {
            return (
              12 === e && (e = 0),
              "\u0a30\u0a3e\u0a24" === m
                ? e < 4
                  ? e
                  : e + 12
                : "\u0a38\u0a35\u0a47\u0a30" === m
                ? e
                : "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" === m
                ? e >= 10
                  ? e
                  : e + 12
                : "\u0a38\u0a3c\u0a3e\u0a2e" === m
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, m, c) {
            return e < 4
              ? "\u0a30\u0a3e\u0a24"
              : e < 10
              ? "\u0a38\u0a35\u0a47\u0a30"
              : e < 17
              ? "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30"
              : e < 20
              ? "\u0a38\u0a3c\u0a3e\u0a2e"
              : "\u0a30\u0a3e\u0a24";
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    1605: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
            "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split(
              "_"
            ),
          o =
            "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split(
              "_"
            ),
          r = [
            /^sty/i,
            /^lut/i,
            /^mar/i,
            /^kwi/i,
            /^maj/i,
            /^cze/i,
            /^lip/i,
            /^sie/i,
            /^wrz/i,
            /^pa\u017a/i,
            /^lis/i,
            /^gru/i,
          ];
        function e(M) {
          return M % 10 < 5 && M % 10 > 1 && ~~(M / 10) % 10 != 1;
        }
        function m(M, L, D) {
          var x = M + " ";
          switch (D) {
            case "ss":
              return x + (e(M) ? "sekundy" : "sekund");
            case "m":
              return L ? "minuta" : "minut\u0119";
            case "mm":
              return x + (e(M) ? "minuty" : "minut");
            case "h":
              return L ? "godzina" : "godzin\u0119";
            case "hh":
              return x + (e(M) ? "godziny" : "godzin");
            case "ww":
              return x + (e(M) ? "tygodnie" : "tygodni");
            case "MM":
              return x + (e(M) ? "miesi\u0105ce" : "miesi\u0119cy");
            case "yy":
              return x + (e(M) ? "lata" : "lat");
          }
        }
        u.defineLocale("pl", {
          months: function (M, L) {
            return M ? (/D MMMM/.test(L) ? o[M.month()] : i[M.month()]) : i;
          },
          monthsShort:
            "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),
          monthsParse: r,
          longMonthsParse: r,
          shortMonthsParse: r,
          weekdays:
            "niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split(
              "_"
            ),
          weekdaysShort: "ndz_pon_wt_\u015br_czw_pt_sob".split("_"),
          weekdaysMin: "Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Dzi\u015b o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[W niedziel\u0119 o] LT";
                case 2:
                  return "[We wtorek o] LT";
                case 3:
                  return "[W \u015brod\u0119 o] LT";
                case 6:
                  return "[W sobot\u0119 o] LT";
                default:
                  return "[W] dddd [o] LT";
              }
            },
            lastDay: "[Wczoraj o] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
                case 3:
                  return "[W zesz\u0142\u0105 \u015brod\u0119 o] LT";
                case 6:
                  return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
                default:
                  return "[W zesz\u0142y] dddd [o] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            ss: m,
            m,
            mm: m,
            h: m,
            hh: m,
            d: "1 dzie\u0144",
            dd: "%d dni",
            w: "tydzie\u0144",
            ww: m,
            M: "miesi\u0105c",
            MM: m,
            y: "rok",
            yy: m,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    3840: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("pt-br", {
          months:
            "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
              "_"
            ),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
            "_"
          ),
          weekdays:
            "domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split(
              "_"
            ),
          weekdaysShort: "dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),
          weekdaysMin: "do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_s\xe1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm",
          },
          calendar: {
            sameDay: "[Hoje \xe0s] LT",
            nextDay: "[Amanh\xe3 \xe0s] LT",
            nextWeek: "dddd [\xe0s] LT",
            lastDay: "[Ontem \xe0s] LT",
            lastWeek: function () {
              return 0 === this.day() || 6 === this.day()
                ? "[\xdaltimo] dddd [\xe0s] LT"
                : "[\xdaltima] dddd [\xe0s] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "em %s",
            past: "h\xe1 %s",
            s: "poucos segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um m\xeas",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          invalidDate: "Data inv\xe1lida",
        });
      })(f(5439));
    },
    4225: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("pt", {
          months:
            "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
              "_"
            ),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
            "_"
          ),
          weekdays:
            "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split(
              "_"
            ),
          weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),
          weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Hoje \xe0s] LT",
            nextDay: "[Amanh\xe3 \xe0s] LT",
            nextWeek: "dddd [\xe0s] LT",
            lastDay: "[Ontem \xe0s] LT",
            lastWeek: function () {
              return 0 === this.day() || 6 === this.day()
                ? "[\xdaltimo] dddd [\xe0s] LT"
                : "[\xdaltima] dddd [\xe0s] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "em %s",
            past: "h\xe1 %s",
            s: "segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            w: "uma semana",
            ww: "%d semanas",
            M: "um m\xeas",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\xba/,
          ordinal: "%d\xba",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    352: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(r, e, m) {
          var M = " ";
          return (
            (r % 100 >= 20 || (r >= 100 && r % 100 == 0)) && (M = " de "),
            r +
              M +
              {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                ww: "s\u0103pt\u0103m\xe2ni",
                MM: "luni",
                yy: "ani",
              }[m]
          );
        }
        u.defineLocale("ro", {
          months:
            "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
              "_"
            ),
          monthsShort:
            "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split(
              "_"
            ),
          weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),
          weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[m\xe2ine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "peste %s",
            past: "%s \xeen urm\u0103",
            s: "c\xe2teva secunde",
            ss: i,
            m: "un minut",
            mm: i,
            h: "o or\u0103",
            hh: i,
            d: "o zi",
            dd: i,
            w: "o s\u0103pt\u0103m\xe2n\u0103",
            ww: i,
            M: "o lun\u0103",
            MM: i,
            y: "un an",
            yy: i,
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    5127: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function o(m, c, M) {
          return "m" === M
            ? c
              ? "\u043c\u0438\u043d\u0443\u0442\u0430"
              : "\u043c\u0438\u043d\u0443\u0442\u0443"
            : m +
                " " +
                (function i(m, c) {
                  var M = m.split("_");
                  return c % 10 == 1 && c % 100 != 11
                    ? M[0]
                    : c % 10 >= 2 &&
                      c % 10 <= 4 &&
                      (c % 100 < 10 || c % 100 >= 20)
                    ? M[1]
                    : M[2];
                })(
                  {
                    ss: c
                      ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434"
                      : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
                    mm: c
                      ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442"
                      : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",
                    hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",
                    dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",
                    ww: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043d\u0435\u0434\u0435\u043b\u0438_\u043d\u0435\u0434\u0435\u043b\u044c",
                    MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                    yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442",
                  }[M],
                  +m
                );
        }
        var r = [
          /^\u044f\u043d\u0432/i,
          /^\u0444\u0435\u0432/i,
          /^\u043c\u0430\u0440/i,
          /^\u0430\u043f\u0440/i,
          /^\u043c\u0430[\u0439\u044f]/i,
          /^\u0438\u044e\u043d/i,
          /^\u0438\u044e\u043b/i,
          /^\u0430\u0432\u0433/i,
          /^\u0441\u0435\u043d/i,
          /^\u043e\u043a\u0442/i,
          /^\u043d\u043e\u044f/i,
          /^\u0434\u0435\u043a/i,
        ];
        u.defineLocale("ru", {
          months: {
            format:
              "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split(
                "_"
              ),
            standalone:
              "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split(
                "_"
              ),
          },
          monthsShort: {
            format:
              "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split(
                "_"
              ),
            standalone:
              "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split(
                "_"
              ),
          },
          weekdays: {
            standalone:
              "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(
                "_"
              ),
            format:
              "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split(
                "_"
              ),
            isFormat:
              /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?] ?dddd/,
          },
          weekdaysShort:
            "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split(
              "_"
            ),
          weekdaysMin:
            "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split(
              "_"
            ),
          monthsParse: r,
          longMonthsParse: r,
          shortMonthsParse: r,
          monthsRegex:
            /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
          monthsShortRegex:
            /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
          monthsStrictRegex:
            /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,
          monthsShortStrictRegex:
            /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0433.",
            LLL: "D MMMM YYYY \u0433., H:mm",
            LLLL: "dddd, D MMMM YYYY \u0433., H:mm",
          },
          calendar: {
            sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT",
            nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",
            nextWeek: function (m) {
              if (m.week() === this.week())
                return 2 === this.day()
                  ? "[\u0412\u043e] dddd, [\u0432] LT"
                  : "[\u0412] dddd, [\u0432] LT";
              switch (this.day()) {
                case 0:
                  return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd, [\u0432] LT";
                case 1:
                case 2:
                case 4:
                  return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd, [\u0432] LT";
                case 3:
                case 5:
                case 6:
                  return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd, [\u0432] LT";
              }
            },
            lastWeek: function (m) {
              if (m.week() === this.week())
                return 2 === this.day()
                  ? "[\u0412\u043e] dddd, [\u0432] LT"
                  : "[\u0412] dddd, [\u0432] LT";
              switch (this.day()) {
                case 0:
                  return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd, [\u0432] LT";
                case 1:
                case 2:
                case 4:
                  return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd, [\u0432] LT";
                case 3:
                case 5:
                case 6:
                  return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd, [\u0432] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0447\u0435\u0440\u0435\u0437 %s",
            past: "%s \u043d\u0430\u0437\u0430\u0434",
            s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: o,
            m: o,
            mm: o,
            h: "\u0447\u0430\u0441",
            hh: o,
            d: "\u0434\u0435\u043d\u044c",
            dd: o,
            w: "\u043d\u0435\u0434\u0435\u043b\u044f",
            ww: o,
            M: "\u043c\u0435\u0441\u044f\u0446",
            MM: o,
            y: "\u0433\u043e\u0434",
            yy: o,
          },
          meridiemParse:
            /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
          isPM: function (m) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(
              m
            );
          },
          meridiem: function (m, c, M) {
            return m < 4
              ? "\u043d\u043e\u0447\u0438"
              : m < 12
              ? "\u0443\u0442\u0440\u0430"
              : m < 17
              ? "\u0434\u043d\u044f"
              : "\u0432\u0435\u0447\u0435\u0440\u0430";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
          ordinal: function (m, c) {
            switch (c) {
              case "M":
              case "d":
              case "DDD":
                return m + "-\u0439";
              case "D":
                return m + "-\u0433\u043e";
              case "w":
              case "W":
                return m + "-\u044f";
              default:
                return m;
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    2525: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = [
            "\u062c\u0646\u0648\u0631\u064a",
            "\u0641\u064a\u0628\u0631\u0648\u0631\u064a",
            "\u0645\u0627\u0631\u0686",
            "\u0627\u067e\u0631\u064a\u0644",
            "\u0645\u0626\u064a",
            "\u062c\u0648\u0646",
            "\u062c\u0648\u0644\u0627\u0621\u0650",
            "\u0622\u06af\u0633\u067d",
            "\u0633\u064a\u067e\u067d\u0645\u0628\u0631",
            "\u0622\u06aa\u067d\u0648\u0628\u0631",
            "\u0646\u0648\u0645\u0628\u0631",
            "\u068a\u0633\u0645\u0628\u0631",
          ],
          o = [
            "\u0622\u0686\u0631",
            "\u0633\u0648\u0645\u0631",
            "\u0627\u06b1\u0627\u0631\u0648",
            "\u0627\u0631\u0628\u0639",
            "\u062e\u0645\u064a\u0633",
            "\u062c\u0645\u0639",
            "\u0687\u0646\u0687\u0631",
          ];
        u.defineLocale("sd", {
          months: i,
          monthsShort: i,
          weekdays: o,
          weekdaysShort: o,
          weekdaysMin: o,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd\u060c D MMMM YYYY HH:mm",
          },
          meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
          isPM: function (e) {
            return "\u0634\u0627\u0645" === e;
          },
          meridiem: function (e, m, c) {
            return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645";
          },
          calendar: {
            sameDay: "[\u0627\u0684] LT",
            nextDay: "[\u0633\u0680\u0627\u06bb\u064a] LT",
            nextWeek:
              "dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT",
            lastDay: "[\u06aa\u0627\u0644\u0647\u0647] LT",
            lastWeek:
              "[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u067e\u0648\u0621",
            past: "%s \u0627\u06b3",
            s: "\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a",
            ss: "%d \u0633\u064a\u06aa\u0646\u068a",
            m: "\u0647\u06aa \u0645\u0646\u067d",
            mm: "%d \u0645\u0646\u067d",
            h: "\u0647\u06aa \u06aa\u0644\u0627\u06aa",
            hh: "%d \u06aa\u0644\u0627\u06aa",
            d: "\u0647\u06aa \u068f\u064a\u0646\u0647\u0646",
            dd: "%d \u068f\u064a\u0646\u0647\u0646",
            M: "\u0647\u06aa \u0645\u0647\u064a\u0646\u0648",
            MM: "%d \u0645\u0647\u064a\u0646\u0627",
            y: "\u0647\u06aa \u0633\u0627\u0644",
            yy: "%d \u0633\u0627\u0644",
          },
          preparse: function (e) {
            return e.replace(/\u060c/g, ",");
          },
          postformat: function (e) {
            return e.replace(/,/g, "\u060c");
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    9893: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("se", {
          months:
            "o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split(
              "_"
            ),
          monthsShort:
            "o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split(
              "_"
            ),
          weekdays:
            "sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split(
              "_"
            ),
          weekdaysShort: "sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"),
          weekdaysMin: "s_v_m_g_d_b_L".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
          },
          calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s gea\u017ees",
            past: "ma\u014bit %s",
            s: "moadde sekunddat",
            ss: "%d sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta m\xe1nnu",
            MM: "%d m\xe1nut",
            y: "okta jahki",
            yy: "%d jagit",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    3123: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("si", {
          months:
            "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split(
              "_"
            ),
          monthsShort:
            "\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split(
              "_"
            ),
          weekdays:
            "\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split(
              "_"
            ),
          weekdaysShort:
            "\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split(
              "_"
            ),
          weekdaysMin:
            "\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split(
              "_"
            ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss",
          },
          calendar: {
            sameDay: "[\u0d85\u0daf] LT[\u0da7]",
            nextDay: "[\u0dc4\u0dd9\u0da7] LT[\u0da7]",
            nextWeek: "dddd LT[\u0da7]",
            lastDay: "[\u0d8a\u0dba\u0dda] LT[\u0da7]",
            lastWeek: "[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s\u0d9a\u0dd2\u0db1\u0dca",
            past: "%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb",
            s: "\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba",
            ss: "\u0dad\u0dad\u0dca\u0db4\u0dbb %d",
            m: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0",
            mm: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d",
            h: "\u0db4\u0dd0\u0dba",
            hh: "\u0db4\u0dd0\u0dba %d",
            d: "\u0daf\u0dd2\u0db1\u0dba",
            dd: "\u0daf\u0dd2\u0db1 %d",
            M: "\u0db8\u0dcf\u0dc3\u0dba",
            MM: "\u0db8\u0dcf\u0dc3 %d",
            y: "\u0dc0\u0dc3\u0dbb",
            yy: "\u0dc0\u0dc3\u0dbb %d",
          },
          dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,
          ordinal: function (o) {
            return o + " \u0dc0\u0dd0\u0db1\u0dd2";
          },
          meridiemParse:
            /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,
          isPM: function (o) {
            return (
              "\u0db4.\u0dc0." === o ||
              "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" === o
            );
          },
          meridiem: function (o, r, e) {
            return o > 11
              ? e
                ? "\u0db4.\u0dc0."
                : "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4"
              : e
              ? "\u0db4\u0dd9.\u0dc0."
              : "\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4";
          },
        });
      })(f(5439));
    },
    9635: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
            "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split(
              "_"
            ),
          o = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split(
            "_"
          );
        function r(c) {
          return c > 1 && c < 5;
        }
        function e(c, M, L, D) {
          var x = c + " ";
          switch (L) {
            case "s":
              return M || D ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
            case "ss":
              return M || D
                ? x + (r(c) ? "sekundy" : "sek\xfand")
                : x + "sekundami";
            case "m":
              return M ? "min\xfata" : D ? "min\xfatu" : "min\xfatou";
            case "mm":
              return M || D
                ? x + (r(c) ? "min\xfaty" : "min\xfat")
                : x + "min\xfatami";
            case "h":
              return M ? "hodina" : D ? "hodinu" : "hodinou";
            case "hh":
              return M || D
                ? x + (r(c) ? "hodiny" : "hod\xedn")
                : x + "hodinami";
            case "d":
              return M || D ? "de\u0148" : "d\u0148om";
            case "dd":
              return M || D ? x + (r(c) ? "dni" : "dn\xed") : x + "d\u0148ami";
            case "M":
              return M || D ? "mesiac" : "mesiacom";
            case "MM":
              return M || D
                ? x + (r(c) ? "mesiace" : "mesiacov")
                : x + "mesiacmi";
            case "y":
              return M || D ? "rok" : "rokom";
            case "yy":
              return M || D ? x + (r(c) ? "roky" : "rokov") : x + "rokmi";
          }
        }
        u.defineLocale("sk", {
          months: i,
          monthsShort: o,
          weekdays:
            "nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split(
              "_"
            ),
          weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
          weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v nede\u013eu o] LT";
                case 1:
                case 2:
                  return "[v] dddd [o] LT";
                case 3:
                  return "[v stredu o] LT";
                case 4:
                  return "[vo \u0161tvrtok o] LT";
                case 5:
                  return "[v piatok o] LT";
                case 6:
                  return "[v sobotu o] LT";
              }
            },
            lastDay: "[v\u010dera o] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[minul\xfa nede\u013eu o] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[minul\xfd] dddd [o] LT";
                case 3:
                  return "[minul\xfa stredu o] LT";
                case 6:
                  return "[minul\xfa sobotu o] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: e,
            ss: e,
            m: e,
            mm: e,
            h: e,
            hh: e,
            d: e,
            dd: e,
            M: e,
            MM: e,
            y: e,
            yy: e,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    8106: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function i(r, e, m, c) {
          var M = r + " ";
          switch (m) {
            case "s":
              return e || c ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
              return (
                M +
                (1 === r
                  ? e
                    ? "sekundo"
                    : "sekundi"
                  : 2 === r
                  ? e || c
                    ? "sekundi"
                    : "sekundah"
                  : r < 5
                  ? e || c
                    ? "sekunde"
                    : "sekundah"
                  : "sekund")
              );
            case "m":
              return e ? "ena minuta" : "eno minuto";
            case "mm":
              return (
                M +
                (1 === r
                  ? e
                    ? "minuta"
                    : "minuto"
                  : 2 === r
                  ? e || c
                    ? "minuti"
                    : "minutama"
                  : r < 5
                  ? e || c
                    ? "minute"
                    : "minutami"
                  : e || c
                  ? "minut"
                  : "minutami")
              );
            case "h":
              return e ? "ena ura" : "eno uro";
            case "hh":
              return (
                M +
                (1 === r
                  ? e
                    ? "ura"
                    : "uro"
                  : 2 === r
                  ? e || c
                    ? "uri"
                    : "urama"
                  : r < 5
                  ? e || c
                    ? "ure"
                    : "urami"
                  : e || c
                  ? "ur"
                  : "urami")
              );
            case "d":
              return e || c ? "en dan" : "enim dnem";
            case "dd":
              return (
                M +
                (1 === r
                  ? e || c
                    ? "dan"
                    : "dnem"
                  : 2 === r
                  ? e || c
                    ? "dni"
                    : "dnevoma"
                  : e || c
                  ? "dni"
                  : "dnevi")
              );
            case "M":
              return e || c ? "en mesec" : "enim mesecem";
            case "MM":
              return (
                M +
                (1 === r
                  ? e || c
                    ? "mesec"
                    : "mesecem"
                  : 2 === r
                  ? e || c
                    ? "meseca"
                    : "mesecema"
                  : r < 5
                  ? e || c
                    ? "mesece"
                    : "meseci"
                  : e || c
                  ? "mesecev"
                  : "meseci")
              );
            case "y":
              return e || c ? "eno leto" : "enim letom";
            case "yy":
              return (
                M +
                (1 === r
                  ? e || c
                    ? "leto"
                    : "letom"
                  : 2 === r
                  ? e || c
                    ? "leti"
                    : "letoma"
                  : r < 5
                  ? e || c
                    ? "leta"
                    : "leti"
                  : e || c
                  ? "let"
                  : "leti")
              );
          }
        }
        u.defineLocale("sl", {
          months:
            "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
              "_"
            ),
          monthsShort:
            "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split(
              "_"
            ),
          weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"),
          weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v] [nedeljo] [ob] LT";
                case 3:
                  return "[v] [sredo] [ob] LT";
                case 6:
                  return "[v] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[v] dddd [ob] LT";
              }
            },
            lastDay: "[v\u010deraj ob] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[prej\u0161njo] [nedeljo] [ob] LT";
                case 3:
                  return "[prej\u0161njo] [sredo] [ob] LT";
                case 6:
                  return "[prej\u0161njo] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prej\u0161nji] dddd [ob] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "\u010dez %s",
            past: "pred %s",
            s: i,
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: i,
            dd: i,
            M: i,
            MM: i,
            y: i,
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    8799: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("sq", {
          months:
            "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split(
              "_"
            ),
          monthsShort:
            "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"),
          weekdays:
            "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split(
              "_"
            ),
          weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"),
          weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"),
          weekdaysParseExact: !0,
          meridiemParse: /PD|MD/,
          isPM: function (o) {
            return "M" === o.charAt(0);
          },
          meridiem: function (o, r, e) {
            return o < 12 ? "PD" : "MD";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Sot n\xeb] LT",
            nextDay: "[Nes\xebr n\xeb] LT",
            nextWeek: "dddd [n\xeb] LT",
            lastDay: "[Dje n\xeb] LT",
            lastWeek: "dddd [e kaluar n\xeb] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "n\xeb %s",
            past: "%s m\xeb par\xeb",
            s: "disa sekonda",
            ss: "%d sekonda",
            m: "nj\xeb minut\xeb",
            mm: "%d minuta",
            h: "nj\xeb or\xeb",
            hh: "%d or\xeb",
            d: "nj\xeb dit\xeb",
            dd: "%d dit\xeb",
            M: "nj\xeb muaj",
            MM: "%d muaj",
            y: "nj\xeb vit",
            yy: "%d vite",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    2872: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
          words: {
            ss: [
              "\u0441\u0435\u043a\u0443\u043d\u0434\u0430",
              "\u0441\u0435\u043a\u0443\u043d\u0434\u0435",
              "\u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            ],
            m: [
              "\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442",
              "\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435",
            ],
            mm: [
              "\u043c\u0438\u043d\u0443\u0442",
              "\u043c\u0438\u043d\u0443\u0442\u0435",
              "\u043c\u0438\u043d\u0443\u0442\u0430",
            ],
            h: [
              "\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442",
              "\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430",
            ],
            hh: [
              "\u0441\u0430\u0442",
              "\u0441\u0430\u0442\u0430",
              "\u0441\u0430\u0442\u0438",
            ],
            dd: [
              "\u0434\u0430\u043d",
              "\u0434\u0430\u043d\u0430",
              "\u0434\u0430\u043d\u0430",
            ],
            MM: [
              "\u043c\u0435\u0441\u0435\u0446",
              "\u043c\u0435\u0441\u0435\u0446\u0430",
              "\u043c\u0435\u0441\u0435\u0446\u0438",
            ],
            yy: [
              "\u0433\u043e\u0434\u0438\u043d\u0430",
              "\u0433\u043e\u0434\u0438\u043d\u0435",
              "\u0433\u043e\u0434\u0438\u043d\u0430",
            ],
          },
          correctGrammaticalCase: function (r, e) {
            return 1 === r ? e[0] : r >= 2 && r <= 4 ? e[1] : e[2];
          },
          translate: function (r, e, m) {
            var c = i.words[m];
            return 1 === m.length
              ? e
                ? c[0]
                : c[1]
              : r + " " + i.correctGrammaticalCase(r, c);
          },
        };
        u.defineLocale("sr-cyrl", {
          months:
            "\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split(
              "_"
            ),
          monthsShort:
            "\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430".split(
              "_"
            ),
          weekdaysShort:
            "\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.".split(
              "_"
            ),
          weekdaysMin:
            "\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443".split(
              "_"
            ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D. M. YYYY.",
            LL: "D. MMMM YYYY.",
            LLL: "D. MMMM YYYY. H:mm",
            LLLL: "dddd, D. MMMM YYYY. H:mm",
          },
          calendar: {
            sameDay: "[\u0434\u0430\u043d\u0430\u0441 \u0443] LT",
            nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";
                case 3:
                  return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";
                case 6:
                  return "[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[\u0443] dddd [\u0443] LT";
              }
            },
            lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT",
            lastWeek: function () {
              return [
                "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT",
                "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT",
                "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT",
                "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT",
                "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT",
                "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT",
                "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT",
              ][this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0437\u0430 %s",
            past: "\u043f\u0440\u0435 %s",
            s: "\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            ss: i.translate,
            m: i.translate,
            mm: i.translate,
            h: i.translate,
            hh: i.translate,
            d: "\u0434\u0430\u043d",
            dd: i.translate,
            M: "\u043c\u0435\u0441\u0435\u0446",
            MM: i.translate,
            y: "\u0433\u043e\u0434\u0438\u043d\u0443",
            yy: i.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    7949: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
          words: {
            ss: ["sekunda", "sekunde", "sekundi"],
            m: ["jedan minut", "jedne minute"],
            mm: ["minut", "minute", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mesec", "meseca", "meseci"],
            yy: ["godina", "godine", "godina"],
          },
          correctGrammaticalCase: function (r, e) {
            return 1 === r ? e[0] : r >= 2 && r <= 4 ? e[1] : e[2];
          },
          translate: function (r, e, m) {
            var c = i.words[m];
            return 1 === m.length
              ? e
                ? c[0]
                : c[1]
              : r + " " + i.correctGrammaticalCase(r, c);
          },
        };
        u.defineLocale("sr", {
          months:
            "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
              "_"
            ),
          monthsShort:
            "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota".split(
              "_"
            ),
          weekdaysShort: "ned._pon._uto._sre._\u010det._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D. M. YYYY.",
            LL: "D. MMMM YYYY.",
            LLL: "D. MMMM YYYY. H:mm",
            LLLL: "dddd, D. MMMM YYYY. H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedelju] [u] LT";
                case 3:
                  return "[u] [sredu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[ju\u010de u] LT",
            lastWeek: function () {
              return [
                "[pro\u0161le] [nedelje] [u] LT",
                "[pro\u0161log] [ponedeljka] [u] LT",
                "[pro\u0161log] [utorka] [u] LT",
                "[pro\u0161le] [srede] [u] LT",
                "[pro\u0161log] [\u010detvrtka] [u] LT",
                "[pro\u0161log] [petka] [u] LT",
                "[pro\u0161le] [subote] [u] LT",
              ][this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            ss: i.translate,
            m: i.translate,
            mm: i.translate,
            h: i.translate,
            hh: i.translate,
            d: "dan",
            dd: i.translate,
            M: "mesec",
            MM: i.translate,
            y: "godinu",
            yy: i.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    6167: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ss", {
          months:
            "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
              "_"
            ),
          monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split(
            "_"
          ),
          weekdays:
            "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split(
              "_"
            ),
          weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
          weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Namuhla nga] LT",
            nextDay: "[Kusasa nga] LT",
            nextWeek: "dddd [nga] LT",
            lastDay: "[Itolo nga] LT",
            lastWeek: "dddd [leliphelile] [nga] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "nga %s",
            past: "wenteka nga %s",
            s: "emizuzwana lomcane",
            ss: "%d mzuzwana",
            m: "umzuzu",
            mm: "%d emizuzu",
            h: "lihora",
            hh: "%d emahora",
            d: "lilanga",
            dd: "%d emalanga",
            M: "inyanga",
            MM: "%d tinyanga",
            y: "umnyaka",
            yy: "%d iminyaka",
          },
          meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
          meridiem: function (o, r, e) {
            return o < 11
              ? "ekuseni"
              : o < 15
              ? "emini"
              : o < 19
              ? "entsambama"
              : "ebusuku";
          },
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              "ekuseni" === r
                ? o
                : "emini" === r
                ? o >= 11
                  ? o
                  : o + 12
                : "entsambama" === r || "ebusuku" === r
                ? 0 === o
                  ? 0
                  : o + 12
                : void 0
            );
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: "%d",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    9713: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("sv", {
          months:
            "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
              "_"
            ),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
            "_"
          ),
          weekdays:
            "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split(
              "_"
            ),
          weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),
          weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Ig\xe5r] LT",
            nextWeek: "[P\xe5] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "f\xf6r %s sedan",
            s: "n\xe5gra sekunder",
            ss: "%d sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en m\xe5nad",
            MM: "%d m\xe5nader",
            y: "ett \xe5r",
            yy: "%d \xe5r",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
          ordinal: function (o) {
            var r = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? ":e"
                : 1 === r || 2 === r
                ? ":a"
                : ":e")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    1982: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("sw", {
          months:
            "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
              "_"
            ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split(
            "_"
          ),
          weekdays:
            "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
              "_"
            ),
          weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
          weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "hh:mm A",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            ss: "sekunde %d",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "siku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d",
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    2732: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
            1: "\u0be7",
            2: "\u0be8",
            3: "\u0be9",
            4: "\u0bea",
            5: "\u0beb",
            6: "\u0bec",
            7: "\u0bed",
            8: "\u0bee",
            9: "\u0bef",
            0: "\u0be6",
          },
          o = {
            "\u0be7": "1",
            "\u0be8": "2",
            "\u0be9": "3",
            "\u0bea": "4",
            "\u0beb": "5",
            "\u0bec": "6",
            "\u0bed": "7",
            "\u0bee": "8",
            "\u0bef": "9",
            "\u0be6": "0",
          };
        u.defineLocale("ta", {
          months:
            "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split(
              "_"
            ),
          monthsShort:
            "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split(
              "_"
            ),
          weekdays:
            "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split(
              "_"
            ),
          weekdaysShort:
            "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split(
              "_"
            ),
          weekdaysMin:
            "\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm",
          },
          calendar: {
            sameDay: "[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT",
            nextDay: "[\u0ba8\u0bbe\u0bb3\u0bc8] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT",
            lastWeek:
              "[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0b87\u0bb2\u0bcd",
            past: "%s \u0bae\u0bc1\u0ba9\u0bcd",
            s: "\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",
            ss: "%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",
            m: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",
            mm: "%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
            h: "\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
            hh: "%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
            d: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd",
            dd: "%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",
            M: "\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",
            MM: "%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
            y: "\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",
            yy: "%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
          ordinal: function (e) {
            return e + "\u0bb5\u0ba4\u0bc1";
          },
          preparse: function (e) {
            return e.replace(
              /[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g,
              function (m) {
                return o[m];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (m) {
              return i[m];
            });
          },
          meridiemParse:
            /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
          meridiem: function (e, m, c) {
            return e < 2
              ? " \u0baf\u0bbe\u0bae\u0bae\u0bcd"
              : e < 6
              ? " \u0bb5\u0bc8\u0b95\u0bb1\u0bc8"
              : e < 10
              ? " \u0b95\u0bbe\u0bb2\u0bc8"
              : e < 14
              ? " \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd"
              : e < 18
              ? " \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1"
              : e < 22
              ? " \u0bae\u0bbe\u0bb2\u0bc8"
              : " \u0baf\u0bbe\u0bae\u0bae\u0bcd";
          },
          meridiemHour: function (e, m) {
            return (
              12 === e && (e = 0),
              "\u0baf\u0bbe\u0bae\u0bae\u0bcd" === m
                ? e < 2
                  ? e
                  : e + 12
                : "\u0bb5\u0bc8\u0b95\u0bb1\u0bc8" === m ||
                  "\u0b95\u0bbe\u0bb2\u0bc8" === m ||
                  ("\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" === m &&
                    e >= 10)
                ? e
                : e + 12
            );
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    3636: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("te", {
          months:
            "\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split(
              "_"
            ),
          monthsShort:
            "\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split(
              "_"
            ),
          weekdaysShort:
            "\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split(
              "_"
            ),
          weekdaysMin:
            "\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split(
              "_"
            ),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm",
          },
          calendar: {
            sameDay: "[\u0c28\u0c47\u0c21\u0c41] LT",
            nextDay: "[\u0c30\u0c47\u0c2a\u0c41] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT",
            lastWeek: "[\u0c17\u0c24] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0c32\u0c4b",
            past: "%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02",
            s: "\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41",
            ss: "%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41",
            m: "\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",
            mm: "%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41",
            h: "\u0c12\u0c15 \u0c17\u0c02\u0c1f",
            hh: "%d \u0c17\u0c02\u0c1f\u0c32\u0c41",
            d: "\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41",
            dd: "%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41",
            M: "\u0c12\u0c15 \u0c28\u0c46\u0c32",
            MM: "%d \u0c28\u0c46\u0c32\u0c32\u0c41",
            y: "\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",
            yy: "%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\u0c35/,
          ordinal: "%d\u0c35",
          meridiemParse:
            /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" === r
                ? o < 4
                  ? o
                  : o + 12
                : "\u0c09\u0c26\u0c2f\u0c02" === r
                ? o
                : "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" === r
                ? o >= 10
                  ? o
                  : o + 12
                : "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" === r
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, r, e) {
            return o < 4
              ? "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"
              : o < 10
              ? "\u0c09\u0c26\u0c2f\u0c02"
              : o < 17
              ? "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02"
              : o < 20
              ? "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02"
              : "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f";
          },
          week: { dow: 0, doy: 6 },
        });
      })(f(5439));
    },
    2115: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("tet", {
          months:
            "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
              "_"
            ),
          monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split(
            "_"
          ),
          weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split(
            "_"
          ),
          weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
          weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Ohin iha] LT",
            nextDay: "[Aban iha] LT",
            nextWeek: "dddd [iha] LT",
            lastDay: "[Horiseik iha] LT",
            lastWeek: "dddd [semana kotuk] [iha] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "iha %s",
            past: "%s liuba",
            s: "segundu balun",
            ss: "segundu %d",
            m: "minutu ida",
            mm: "minutu %d",
            h: "oras ida",
            hh: "oras %d",
            d: "loron ida",
            dd: "loron %d",
            M: "fulan ida",
            MM: "fulan %d",
            y: "tinan ida",
            yy: "tinan %d",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (o) {
            var r = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === r
                ? "st"
                : 2 === r
                ? "nd"
                : 3 === r
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    9801: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
          0: "-\u0443\u043c",
          1: "-\u0443\u043c",
          2: "-\u044e\u043c",
          3: "-\u044e\u043c",
          4: "-\u0443\u043c",
          5: "-\u0443\u043c",
          6: "-\u0443\u043c",
          7: "-\u0443\u043c",
          8: "-\u0443\u043c",
          9: "-\u0443\u043c",
          10: "-\u0443\u043c",
          12: "-\u0443\u043c",
          13: "-\u0443\u043c",
          20: "-\u0443\u043c",
          30: "-\u044e\u043c",
          40: "-\u0443\u043c",
          50: "-\u0443\u043c",
          60: "-\u0443\u043c",
          70: "-\u0443\u043c",
          80: "-\u0443\u043c",
          90: "-\u0443\u043c",
          100: "-\u0443\u043c",
        };
        u.defineLocale("tg", {
          months: {
            format:
              "\u044f\u043d\u0432\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0430\u043b\u0438_\u043c\u0430\u0440\u0442\u0438_\u0430\u043f\u0440\u0435\u043b\u0438_\u043c\u0430\u0439\u0438_\u0438\u044e\u043d\u0438_\u0438\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442\u0438_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u0438_\u043e\u043a\u0442\u044f\u0431\u0440\u0438_\u043d\u043e\u044f\u0431\u0440\u0438_\u0434\u0435\u043a\u0430\u0431\u0440\u0438".split(
                "_"
              ),
            standalone:
              "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split(
                "_"
              ),
          },
          monthsShort:
            "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split(
              "_"
            ),
          weekdays:
            "\u044f\u043a\u0448\u0430\u043d\u0431\u0435_\u0434\u0443\u0448\u0430\u043d\u0431\u0435_\u0441\u0435\u0448\u0430\u043d\u0431\u0435_\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435_\u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435_\u04b7\u0443\u043c\u044a\u0430_\u0448\u0430\u043d\u0431\u0435".split(
              "_"
            ),
          weekdaysShort:
            "\u044f\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043f\u0448\u0431_\u04b7\u0443\u043c_\u0448\u043d\u0431".split(
              "_"
            ),
          weekdaysMin:
            "\u044f\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043f\u0448_\u04b7\u043c_\u0448\u0431".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay:
              "[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",
            nextDay:
              "[\u0424\u0430\u0440\u0434\u043e \u0441\u043e\u0430\u0442\u0438] LT",
            lastDay:
              "[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",
            nextWeek:
              "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT",
            lastWeek:
              "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0431\u0430\u044a\u0434\u0438 %s",
            past: "%s \u043f\u0435\u0448",
            s: "\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f",
            m: "\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430",
            mm: "%d \u0434\u0430\u049b\u0438\u049b\u0430",
            h: "\u044f\u043a \u0441\u043e\u0430\u0442",
            hh: "%d \u0441\u043e\u0430\u0442",
            d: "\u044f\u043a \u0440\u04ef\u0437",
            dd: "%d \u0440\u04ef\u0437",
            M: "\u044f\u043a \u043c\u043e\u04b3",
            MM: "%d \u043c\u043e\u04b3",
            y: "\u044f\u043a \u0441\u043e\u043b",
            yy: "%d \u0441\u043e\u043b",
          },
          meridiemParse:
            /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,
          meridiemHour: function (r, e) {
            return (
              12 === r && (r = 0),
              "\u0448\u0430\u0431" === e
                ? r < 4
                  ? r
                  : r + 12
                : "\u0441\u0443\u0431\u04b3" === e
                ? r
                : "\u0440\u04ef\u0437" === e
                ? r >= 11
                  ? r
                  : r + 12
                : "\u0431\u0435\u0433\u043e\u04b3" === e
                ? r + 12
                : void 0
            );
          },
          meridiem: function (r, e, m) {
            return r < 4
              ? "\u0448\u0430\u0431"
              : r < 11
              ? "\u0441\u0443\u0431\u04b3"
              : r < 16
              ? "\u0440\u04ef\u0437"
              : r < 19
              ? "\u0431\u0435\u0433\u043e\u04b3"
              : "\u0448\u0430\u0431";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/,
          ordinal: function (r) {
            return r + (i[r] || i[r % 10] || i[r >= 100 ? 100 : null]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    2868: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("th", {
          months:
            "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split(
              "_"
            ),
          monthsShort:
            "\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split(
              "_"
            ),
          weekdaysShort:
            "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split(
              "_"
            ),
          weekdaysMin:
            "\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split(
              "_"
            ),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",
            LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",
          },
          meridiemParse:
            /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
          isPM: function (o) {
            return (
              "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" ===
              o
            );
          },
          meridiem: function (o, r, e) {
            return o < 12
              ? "\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"
              : "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07";
          },
          calendar: {
            sameDay:
              "[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
            nextDay:
              "[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
            nextWeek:
              "dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT",
            lastDay:
              "[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
            lastWeek:
              "[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0e2d\u0e35\u0e01 %s",
            past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",
            s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
            ss: "%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
            m: "1 \u0e19\u0e32\u0e17\u0e35",
            mm: "%d \u0e19\u0e32\u0e17\u0e35",
            h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
            hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
            d: "1 \u0e27\u0e31\u0e19",
            dd: "%d \u0e27\u0e31\u0e19",
            w: "1 \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c",
            ww: "%d \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c",
            M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19",
            MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19",
            y: "1 \u0e1b\u0e35",
            yy: "%d \u0e1b\u0e35",
          },
        });
      })(f(5439));
    },
    1310: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
          1: "'inji",
          5: "'inji",
          8: "'inji",
          70: "'inji",
          80: "'inji",
          2: "'nji",
          7: "'nji",
          20: "'nji",
          50: "'nji",
          3: "'\xfcnji",
          4: "'\xfcnji",
          100: "'\xfcnji",
          6: "'njy",
          9: "'unjy",
          10: "'unjy",
          30: "'unjy",
          60: "'ynjy",
          90: "'ynjy",
        };
        u.defineLocale("tk", {
          months:
            "\xddanwar_Fewral_Mart_Aprel_Ma\xfd_I\xfdun_I\xfdul_Awgust_Sent\xfdabr_Okt\xfdabr_No\xfdabr_Dekabr".split(
              "_"
            ),
          monthsShort:
            "\xddan_Few_Mar_Apr_Ma\xfd_I\xfdn_I\xfdl_Awg_Sen_Okt_No\xfd_Dek".split(
              "_"
            ),
          weekdays:
            "\xddek\u015fenbe_Du\u015fenbe_Si\u015fenbe_\xc7ar\u015fenbe_Pen\u015fenbe_Anna_\u015eenbe".split(
              "_"
            ),
          weekdaysShort:
            "\xddek_Du\u015f_Si\u015f_\xc7ar_Pen_Ann_\u015een".split("_"),
          weekdaysMin: "\xddk_D\u015f_S\u015f_\xc7r_Pn_An_\u015en".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[bug\xfcn sagat] LT",
            nextDay: "[ertir sagat] LT",
            nextWeek: "[indiki] dddd [sagat] LT",
            lastDay: "[d\xfc\xfdn] LT",
            lastWeek: "[ge\xe7en] dddd [sagat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s so\u0148",
            past: "%s \xf6\u0148",
            s: "birn\xe4\xe7e sekunt",
            m: "bir minut",
            mm: "%d minut",
            h: "bir sagat",
            hh: "%d sagat",
            d: "bir g\xfcn",
            dd: "%d g\xfcn",
            M: "bir a\xfd",
            MM: "%d a\xfd",
            y: "bir \xfdyl",
            yy: "%d \xfdyl",
          },
          ordinal: function (r, e) {
            switch (e) {
              case "d":
              case "D":
              case "Do":
              case "DD":
                return r;
              default:
                if (0 === r) return r + "'unjy";
                var m = r % 10;
                return (
                  r + (i[m] || i[(r % 100) - m] || i[r >= 100 ? 100 : null])
                );
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    2360: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("tl-ph", {
          months:
            "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
              "_"
            ),
          monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
            "_"
          ),
          weekdays:
            "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
          weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
          weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm",
          },
          calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L",
          },
          relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon",
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (o) {
            return o;
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    6645: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i =
          "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        function e(M, L, D, x) {
          var N = (function m(M) {
            var L = Math.floor((M % 1e3) / 100),
              D = Math.floor((M % 100) / 10),
              x = M % 10,
              N = "";
            return (
              L > 0 && (N += i[L] + "vatlh"),
              D > 0 && (N += ("" !== N ? " " : "") + i[D] + "maH"),
              x > 0 && (N += ("" !== N ? " " : "") + i[x]),
              "" === N ? "pagh" : N
            );
          })(M);
          switch (D) {
            case "ss":
              return N + " lup";
            case "mm":
              return N + " tup";
            case "hh":
              return N + " rep";
            case "dd":
              return N + " jaj";
            case "MM":
              return N + " jar";
            case "yy":
              return N + " DIS";
          }
        }
        u.defineLocale("tlh", {
          months:
            "tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split(
              "_"
            ),
          monthsShort:
            "jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_"
            ),
          weekdaysShort:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_"
            ),
          weekdaysMin:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa\u2019leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa\u2019Hu\u2019] LT",
            lastWeek: "LLL",
            sameElse: "L",
          },
          relativeTime: {
            future: function o(M) {
              var L = M;
              return -1 !== M.indexOf("jaj")
                ? L.slice(0, -3) + "leS"
                : -1 !== M.indexOf("jar")
                ? L.slice(0, -3) + "waQ"
                : -1 !== M.indexOf("DIS")
                ? L.slice(0, -3) + "nem"
                : L + " pIq";
            },
            past: function r(M) {
              var L = M;
              return -1 !== M.indexOf("jaj")
                ? L.slice(0, -3) + "Hu\u2019"
                : -1 !== M.indexOf("jar")
                ? L.slice(0, -3) + "wen"
                : -1 !== M.indexOf("DIS")
                ? L.slice(0, -3) + "ben"
                : L + " ret";
            },
            s: "puS lup",
            ss: e,
            m: "wa\u2019 tup",
            mm: e,
            h: "wa\u2019 rep",
            hh: e,
            d: "wa\u2019 jaj",
            dd: e,
            M: "wa\u2019 jar",
            MM: e,
            y: "wa\u2019 DIS",
            yy: e,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    8374: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = {
          1: "'inci",
          5: "'inci",
          8: "'inci",
          70: "'inci",
          80: "'inci",
          2: "'nci",
          7: "'nci",
          20: "'nci",
          50: "'nci",
          3: "'\xfcnc\xfc",
          4: "'\xfcnc\xfc",
          100: "'\xfcnc\xfc",
          6: "'nc\u0131",
          9: "'uncu",
          10: "'uncu",
          30: "'uncu",
          60: "'\u0131nc\u0131",
          90: "'\u0131nc\u0131",
        };
        u.defineLocale("tr", {
          months:
            "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split(
              "_"
            ),
          monthsShort:
            "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split(
              "_"
            ),
          weekdays:
            "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split(
              "_"
            ),
          weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),
          weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),
          meridiem: function (r, e, m) {
            return r < 12
              ? m
                ? "\xf6\xf6"
                : "\xd6\xd6"
              : m
              ? "\xf6s"
              : "\xd6S";
          },
          meridiemParse: /\xf6\xf6|\xd6\xd6|\xf6s|\xd6S/,
          isPM: function (r) {
            return "\xf6s" === r || "\xd6S" === r;
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[bug\xfcn saat] LT",
            nextDay: "[yar\u0131n saat] LT",
            nextWeek: "[gelecek] dddd [saat] LT",
            lastDay: "[d\xfcn] LT",
            lastWeek: "[ge\xe7en] dddd [saat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s sonra",
            past: "%s \xf6nce",
            s: "birka\xe7 saniye",
            ss: "%d saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir g\xfcn",
            dd: "%d g\xfcn",
            w: "bir hafta",
            ww: "%d hafta",
            M: "bir ay",
            MM: "%d ay",
            y: "bir y\u0131l",
            yy: "%d y\u0131l",
          },
          ordinal: function (r, e) {
            switch (e) {
              case "d":
              case "D":
              case "Do":
              case "DD":
                return r;
              default:
                if (0 === r) return r + "'\u0131nc\u0131";
                var m = r % 10;
                return (
                  r + (i[m] || i[(r % 100) - m] || i[r >= 100 ? 100 : null])
                );
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    256: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function o(r, e, m, c) {
          var M = {
            s: ["viensas secunds", "'iensas secunds"],
            ss: [r + " secunds", r + " secunds"],
            m: ["'n m\xedut", "'iens m\xedut"],
            mm: [r + " m\xeduts", r + " m\xeduts"],
            h: ["'n \xfeora", "'iensa \xfeora"],
            hh: [r + " \xfeoras", r + " \xfeoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [r + " ziuas", r + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [r + " mesen", r + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [r + " ars", r + " ars"],
          };
          return c || e ? M[m][0] : M[m][1];
        }
        u.defineLocale("tzl", {
          months:
            "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split(
              "_"
            ),
          monthsShort:
            "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
          weekdays:
            "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split(
              "_"
            ),
          weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split(
            "_"
          ),
          weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm",
          },
          meridiemParse: /d\'o|d\'a/i,
          isPM: function (r) {
            return "d'o" === r.toLowerCase();
          },
          meridiem: function (r, e, m) {
            return r > 11 ? (m ? "d'o" : "D'O") : m ? "d'a" : "D'A";
          },
          calendar: {
            sameDay: "[oxhi \xe0] LT",
            nextDay: "[dem\xe0 \xe0] LT",
            nextWeek: "dddd [\xe0] LT",
            lastDay: "[ieiri \xe0] LT",
            lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: o,
            ss: o,
            m: o,
            mm: o,
            h: o,
            hh: o,
            d: o,
            dd: o,
            M: o,
            MM: o,
            y: o,
            yy: o,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    1631: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("tzm-latn", {
          months:
            "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split(
              "_"
            ),
          monthsShort:
            "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split(
              "_"
            ),
          weekdays:
            "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
          weekdaysShort:
            "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
          weekdaysMin:
            "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            ss: "%d imik",
            m: "minu\u1e0d",
            mm: "%d minu\u1e0d",
            h: "sa\u025ba",
            hh: "%d tassa\u025bin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn",
          },
          week: { dow: 6, doy: 12 },
        });
      })(f(5439));
    },
    1595: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("tzm", {
          months:
            "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split(
              "_"
            ),
          monthsShort:
            "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split(
              "_"
            ),
          weekdays:
            "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split(
              "_"
            ),
          weekdaysShort:
            "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split(
              "_"
            ),
          weekdaysMin:
            "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT",
            nextDay: "[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT",
            nextWeek: "dddd [\u2d34] LT",
            lastDay: "[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT",
            lastWeek: "dddd [\u2d34] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s",
            past: "\u2d62\u2d30\u2d4f %s",
            s: "\u2d49\u2d4e\u2d49\u2d3d",
            ss: "%d \u2d49\u2d4e\u2d49\u2d3d",
            m: "\u2d4e\u2d49\u2d4f\u2d53\u2d3a",
            mm: "%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a",
            h: "\u2d59\u2d30\u2d44\u2d30",
            hh: "%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f",
            d: "\u2d30\u2d59\u2d59",
            dd: "%d o\u2d59\u2d59\u2d30\u2d4f",
            M: "\u2d30\u2d62o\u2d53\u2d54",
            MM: "%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f",
            y: "\u2d30\u2d59\u2d33\u2d30\u2d59",
            yy: "%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f",
          },
          week: { dow: 6, doy: 12 },
        });
      })(f(5439));
    },
    6050: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("ug-cn", {
          months:
            "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split(
              "_"
            ),
          monthsShort:
            "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split(
              "_"
            ),
          weekdays:
            "\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5_\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5_\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5_\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u062c\u06c8\u0645\u06d5_\u0634\u06d5\u0646\u0628\u06d5".split(
              "_"
            ),
          weekdaysShort:
            "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split(
              "_"
            ),
          weekdaysMin:
            "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649",
            LLL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm",
            LLLL: "dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm",
          },
          meridiemParse:
            /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" === r ||
              "\u0633\u06d5\u06be\u06d5\u0631" === r ||
              "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" ===
                r
                ? o
                : "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" ===
                    r || "\u0643\u06d5\u0686" === r
                ? o + 12
                : o >= 11
                ? o
                : o + 12
            );
          },
          meridiem: function (o, r, e) {
            var m = 100 * o + r;
            return m < 600
              ? "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5"
              : m < 900
              ? "\u0633\u06d5\u06be\u06d5\u0631"
              : m < 1130
              ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646"
              : m < 1230
              ? "\u0686\u06c8\u0634"
              : m < 1800
              ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646"
              : "\u0643\u06d5\u0686";
          },
          calendar: {
            sameDay:
              "[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT",
            nextDay:
              "[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT",
            nextWeek:
              "[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",
            lastDay: "[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT",
            lastWeek:
              "[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0643\u06d0\u064a\u0649\u0646",
            past: "%s \u0628\u06c7\u0631\u06c7\u0646",
            s: "\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a",
            ss: "%d \u0633\u06d0\u0643\u0648\u0646\u062a",
            m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a",
            mm: "%d \u0645\u0649\u0646\u06c7\u062a",
            h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",
            hh: "%d \u0633\u0627\u0626\u06d5\u062a",
            d: "\u0628\u0649\u0631 \u0643\u06c8\u0646",
            dd: "%d \u0643\u06c8\u0646",
            M: "\u0628\u0649\u0631 \u0626\u0627\u064a",
            MM: "%d \u0626\u0627\u064a",
            y: "\u0628\u0649\u0631 \u064a\u0649\u0644",
            yy: "%d \u064a\u0649\u0644",
          },
          dayOfMonthOrdinalParse:
            /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,
          ordinal: function (o, r) {
            switch (r) {
              case "d":
              case "D":
              case "DDD":
                return o + "-\u0643\u06c8\u0646\u0649";
              case "w":
              case "W":
                return o + "-\u06be\u06d5\u067e\u062a\u06d5";
              default:
                return o;
            }
          },
          preparse: function (o) {
            return o.replace(/\u060c/g, ",");
          },
          postformat: function (o) {
            return o.replace(/,/g, "\u060c");
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    5610: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        function o(c, M, L) {
          return "m" === L
            ? M
              ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430"
              : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443"
            : "h" === L
            ? M
              ? "\u0433\u043e\u0434\u0438\u043d\u0430"
              : "\u0433\u043e\u0434\u0438\u043d\u0443"
            : c +
              " " +
              (function i(c, M) {
                var L = c.split("_");
                return M % 10 == 1 && M % 100 != 11
                  ? L[0]
                  : M % 10 >= 2 &&
                    M % 10 <= 4 &&
                    (M % 100 < 10 || M % 100 >= 20)
                  ? L[1]
                  : L[2];
              })(
                {
                  ss: M
                    ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434"
                    : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434",
                  mm: M
                    ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d"
                    : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",
                  hh: M
                    ? "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d"
                    : "\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",
                  dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",
                  MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",
                  yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432",
                }[L],
                +c
              );
        }
        function e(c) {
          return function () {
            return (
              c + "\u043e" + (11 === this.hours() ? "\u0431" : "") + "] LT"
            );
          };
        }
        u.defineLocale("uk", {
          months: {
            format:
              "\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split(
                "_"
              ),
            standalone:
              "\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split(
                "_"
              ),
          },
          monthsShort:
            "\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split(
              "_"
            ),
          weekdays: function r(c, M) {
            var L = {
              nominative:
                "\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split(
                  "_"
                ),
              accusative:
                "\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split(
                  "_"
                ),
              genitive:
                "\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split(
                  "_"
                ),
            };
            return !0 === c
              ? L.nominative.slice(1, 7).concat(L.nominative.slice(0, 1))
              : c
              ? L[
                  /(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(M)
                    ? "accusative"
                    : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(
                        M
                      )
                    ? "genitive"
                    : "nominative"
                ][c.day()]
              : L.nominative;
          },
          weekdaysShort:
            "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split(
              "_"
            ),
          weekdaysMin:
            "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0440.",
            LLL: "D MMMM YYYY \u0440., HH:mm",
            LLLL: "dddd, D MMMM YYYY \u0440., HH:mm",
          },
          calendar: {
            sameDay: e("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "),
            nextDay: e("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
            lastDay: e("[\u0412\u0447\u043e\u0440\u0430 "),
            nextWeek: e("[\u0423] dddd ["),
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return e(
                    "[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd ["
                  ).call(this);
                case 1:
                case 2:
                case 4:
                  return e(
                    "[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd ["
                  ).call(this);
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "\u0437\u0430 %s",
            past: "%s \u0442\u043e\u043c\u0443",
            s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: o,
            m: o,
            mm: o,
            h: "\u0433\u043e\u0434\u0438\u043d\u0443",
            hh: o,
            d: "\u0434\u0435\u043d\u044c",
            dd: o,
            M: "\u043c\u0456\u0441\u044f\u0446\u044c",
            MM: o,
            y: "\u0440\u0456\u043a",
            yy: o,
          },
          meridiemParse:
            /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
          isPM: function (c) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(
              c
            );
          },
          meridiem: function (c, M, L) {
            return c < 4
              ? "\u043d\u043e\u0447\u0456"
              : c < 12
              ? "\u0440\u0430\u043d\u043a\u0443"
              : c < 17
              ? "\u0434\u043d\u044f"
              : "\u0432\u0435\u0447\u043e\u0440\u0430";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
          ordinal: function (c, M) {
            switch (M) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return c + "-\u0439";
              case "D":
                return c + "-\u0433\u043e";
              default:
                return c;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    6077: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        var i = [
            "\u062c\u0646\u0648\u0631\u06cc",
            "\u0641\u0631\u0648\u0631\u06cc",
            "\u0645\u0627\u0631\u0686",
            "\u0627\u067e\u0631\u06cc\u0644",
            "\u0645\u0626\u06cc",
            "\u062c\u0648\u0646",
            "\u062c\u0648\u0644\u0627\u0626\u06cc",
            "\u0627\u06af\u0633\u062a",
            "\u0633\u062a\u0645\u0628\u0631",
            "\u0627\u06a9\u062a\u0648\u0628\u0631",
            "\u0646\u0648\u0645\u0628\u0631",
            "\u062f\u0633\u0645\u0628\u0631",
          ],
          o = [
            "\u0627\u062a\u0648\u0627\u0631",
            "\u067e\u06cc\u0631",
            "\u0645\u0646\u06af\u0644",
            "\u0628\u062f\u06be",
            "\u062c\u0645\u0639\u0631\u0627\u062a",
            "\u062c\u0645\u0639\u06c1",
            "\u06c1\u0641\u062a\u06c1",
          ];
        u.defineLocale("ur", {
          months: i,
          monthsShort: i,
          weekdays: o,
          weekdaysShort: o,
          weekdaysMin: o,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd\u060c D MMMM YYYY HH:mm",
          },
          meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
          isPM: function (e) {
            return "\u0634\u0627\u0645" === e;
          },
          meridiem: function (e, m, c) {
            return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645";
          },
          calendar: {
            sameDay: "[\u0622\u062c \u0628\u0648\u0642\u062a] LT",
            nextDay: "[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT",
            nextWeek: "dddd [\u0628\u0648\u0642\u062a] LT",
            lastDay:
              "[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT",
            lastWeek:
              "[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s \u0628\u0639\u062f",
            past: "%s \u0642\u0628\u0644",
            s: "\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688",
            ss: "%d \u0633\u06cc\u06a9\u0646\u0688",
            m: "\u0627\u06cc\u06a9 \u0645\u0646\u0679",
            mm: "%d \u0645\u0646\u0679",
            h: "\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1",
            hh: "%d \u06af\u06be\u0646\u0679\u06d2",
            d: "\u0627\u06cc\u06a9 \u062f\u0646",
            dd: "%d \u062f\u0646",
            M: "\u0627\u06cc\u06a9 \u0645\u0627\u06c1",
            MM: "%d \u0645\u0627\u06c1",
            y: "\u0627\u06cc\u06a9 \u0633\u0627\u0644",
            yy: "%d \u0633\u0627\u0644",
          },
          preparse: function (e) {
            return e.replace(/\u060c/g, ",");
          },
          postformat: function (e) {
            return e.replace(/,/g, "\u060c");
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    2207: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("uz-latn", {
          months:
            "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split(
              "_"
            ),
          monthsShort:
            "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
          weekdays:
            "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split(
              "_"
            ),
          weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
          weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm",
          },
          calendar: {
            sameDay: "[Bugun soat] LT [da]",
            nextDay: "[Ertaga] LT [da]",
            nextWeek: "dddd [kuni soat] LT [da]",
            lastDay: "[Kecha soat] LT [da]",
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: "L",
          },
          relativeTime: {
            future: "Yaqin %s ichida",
            past: "Bir necha %s oldin",
            s: "soniya",
            ss: "%d soniya",
            m: "bir daqiqa",
            mm: "%d daqiqa",
            h: "bir soat",
            hh: "%d soat",
            d: "bir kun",
            dd: "%d kun",
            M: "bir oy",
            MM: "%d oy",
            y: "bir yil",
            yy: "%d yil",
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    2862: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("uz", {
          months:
            "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split(
              "_"
            ),
          monthsShort:
            "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split(
              "_"
            ),
          weekdays:
            "\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split(
              "_"
            ),
          weekdaysShort:
            "\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split(
              "_"
            ),
          weekdaysMin:
            "\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split(
              "_"
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm",
          },
          calendar: {
            sameDay:
              "[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            nextDay: "[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]",
            nextWeek:
              "dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            lastDay:
              "[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            lastWeek:
              "[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            sameElse: "L",
          },
          relativeTime: {
            future:
              "\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430",
            past: "\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d",
            s: "\u0444\u0443\u0440\u0441\u0430\u0442",
            ss: "%d \u0444\u0443\u0440\u0441\u0430\u0442",
            m: "\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430",
            mm: "%d \u0434\u0430\u043a\u0438\u043a\u0430",
            h: "\u0431\u0438\u0440 \u0441\u043e\u0430\u0442",
            hh: "%d \u0441\u043e\u0430\u0442",
            d: "\u0431\u0438\u0440 \u043a\u0443\u043d",
            dd: "%d \u043a\u0443\u043d",
            M: "\u0431\u0438\u0440 \u043e\u0439",
            MM: "%d \u043e\u0439",
            y: "\u0431\u0438\u0440 \u0439\u0438\u043b",
            yy: "%d \u0439\u0438\u043b",
          },
          week: { dow: 1, doy: 7 },
        });
      })(f(5439));
    },
    8093: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("vi", {
          months:
            "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split(
              "_"
            ),
          monthsShort:
            "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split(
              "_"
            ),
          weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysParseExact: !0,
          meridiemParse: /sa|ch/i,
          isPM: function (o) {
            return /^ch$/i.test(o);
          },
          meridiem: function (o, r, e) {
            return o < 12 ? (e ? "sa" : "SA") : e ? "ch" : "CH";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [n\u0103m] YYYY",
            LLL: "D MMMM [n\u0103m] YYYY HH:mm",
            LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[H\xf4m nay l\xfac] LT",
            nextDay: "[Ng\xe0y mai l\xfac] LT",
            nextWeek: "dddd [tu\u1ea7n t\u1edbi l\xfac] LT",
            lastDay: "[H\xf4m qua l\xfac] LT",
            lastWeek: "dddd [tu\u1ea7n tr\u01b0\u1edbc l\xfac] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s t\u1edbi",
            past: "%s tr\u01b0\u1edbc",
            s: "v\xe0i gi\xe2y",
            ss: "%d gi\xe2y",
            m: "m\u1ed9t ph\xfat",
            mm: "%d ph\xfat",
            h: "m\u1ed9t gi\u1edd",
            hh: "%d gi\u1edd",
            d: "m\u1ed9t ng\xe0y",
            dd: "%d ng\xe0y",
            w: "m\u1ed9t tu\u1ea7n",
            ww: "%d tu\u1ea7n",
            M: "m\u1ed9t th\xe1ng",
            MM: "%d th\xe1ng",
            y: "m\u1ed9t n\u0103m",
            yy: "%d n\u0103m",
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (o) {
            return o;
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    5590: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("x-pseudo", {
          months:
            "J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split(
              "_"
            ),
          monthsShort:
            "J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split(
              "_"
            ),
          monthsParseExact: !0,
          weekdays:
            "S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split(
              "_"
            ),
          weekdaysShort:
            "S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split(
              "_"
            ),
          weekdaysMin: "S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[T~\xf3d\xe1~\xfd \xe1t] LT",
            nextDay: "[T~\xf3m\xf3~rr\xf3~w \xe1t] LT",
            nextWeek: "dddd [\xe1t] LT",
            lastDay: "[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT",
            lastWeek: "[L~\xe1st] dddd [\xe1t] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "\xed~\xf1 %s",
            past: "%s \xe1~g\xf3",
            s: "\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds",
            ss: "%d s~\xe9c\xf3\xf1~ds",
            m: "\xe1 ~m\xed\xf1~\xfat\xe9",
            mm: "%d m~\xed\xf1\xfa~t\xe9s",
            h: "\xe1~\xf1 h\xf3~\xfar",
            hh: "%d h~\xf3\xfars",
            d: "\xe1 ~d\xe1\xfd",
            dd: "%d d~\xe1\xfds",
            M: "\xe1 ~m\xf3\xf1~th",
            MM: "%d m~\xf3\xf1t~hs",
            y: "\xe1 ~\xfd\xe9\xe1r",
            yy: "%d \xfd~\xe9\xe1rs",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (o) {
            var r = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === r
                ? "st"
                : 2 === r
                ? "nd"
                : 3 === r
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    9058: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("yo", {
          months:
            "S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split(
              "_"
            ),
          monthsShort:
            "S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split(
              "_"
            ),
          weekdays:
            "A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split(
              "_"
            ),
          weekdaysShort:
            "A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split(
              "_"
            ),
          weekdaysMin:
            "A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split(
              "_"
            ),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[O\u0300ni\u0300 ni] LT",
            nextDay: "[\u1ecc\u0300la ni] LT",
            nextWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT",
            lastDay: "[A\u0300na ni] LT",
            lastWeek:
              "dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ni\u0301 %s",
            past: "%s k\u1ecdja\u0301",
            s: "i\u0300s\u1eb9ju\u0301 aaya\u0301 die",
            ss: "aaya\u0301 %d",
            m: "i\u0300s\u1eb9ju\u0301 kan",
            mm: "i\u0300s\u1eb9ju\u0301 %d",
            h: "wa\u0301kati kan",
            hh: "wa\u0301kati %d",
            d: "\u1ecdj\u1ecd\u0301 kan",
            dd: "\u1ecdj\u1ecd\u0301 %d",
            M: "osu\u0300 kan",
            MM: "osu\u0300 %d",
            y: "\u1ecddu\u0301n kan",
            yy: "\u1ecddu\u0301n %d",
          },
          dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/,
          ordinal: "\u1ecdj\u1ecd\u0301 %d",
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    7908: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("zh-cn", {
          months:
            "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split(
              "_"
            ),
          monthsShort:
            "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split(
              "_"
            ),
          weekdays:
            "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split(
              "_"
            ),
          weekdaysShort:
            "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split(
              "_"
            ),
          weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split(
            "_"
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",
            LLLL: "YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",
            l: "YYYY/M/D",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
          },
          meridiemParse:
            /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              "\u51cc\u6668" === r ||
              "\u65e9\u4e0a" === r ||
              "\u4e0a\u5348" === r
                ? o
                : "\u4e0b\u5348" === r || "\u665a\u4e0a" === r
                ? o + 12
                : o >= 11
                ? o
                : o + 12
            );
          },
          meridiem: function (o, r, e) {
            var m = 100 * o + r;
            return m < 600
              ? "\u51cc\u6668"
              : m < 900
              ? "\u65e9\u4e0a"
              : m < 1130
              ? "\u4e0a\u5348"
              : m < 1230
              ? "\u4e2d\u5348"
              : m < 1800
              ? "\u4e0b\u5348"
              : "\u665a\u4e0a";
          },
          calendar: {
            sameDay: "[\u4eca\u5929]LT",
            nextDay: "[\u660e\u5929]LT",
            nextWeek: function (o) {
              return o.week() !== this.week()
                ? "[\u4e0b]dddLT"
                : "[\u672c]dddLT";
            },
            lastDay: "[\u6628\u5929]LT",
            lastWeek: function (o) {
              return this.week() !== o.week()
                ? "[\u4e0a]dddLT"
                : "[\u672c]dddLT";
            },
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
          ordinal: function (o, r) {
            switch (r) {
              case "d":
              case "D":
              case "DDD":
                return o + "\u65e5";
              case "M":
                return o + "\u6708";
              case "w":
              case "W":
                return o + "\u5468";
              default:
                return o;
            }
          },
          relativeTime: {
            future: "%s\u540e",
            past: "%s\u524d",
            s: "\u51e0\u79d2",
            ss: "%d \u79d2",
            m: "1 \u5206\u949f",
            mm: "%d \u5206\u949f",
            h: "1 \u5c0f\u65f6",
            hh: "%d \u5c0f\u65f6",
            d: "1 \u5929",
            dd: "%d \u5929",
            w: "1 \u5468",
            ww: "%d \u5468",
            M: "1 \u4e2a\u6708",
            MM: "%d \u4e2a\u6708",
            y: "1 \u5e74",
            yy: "%d \u5e74",
          },
          week: { dow: 1, doy: 4 },
        });
      })(f(5439));
    },
    8867: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("zh-hk", {
          months:
            "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split(
              "_"
            ),
          monthsShort:
            "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split(
              "_"
            ),
          weekdays:
            "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split(
              "_"
            ),
          weekdaysShort:
            "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split(
              "_"
            ),
          weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split(
            "_"
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
          },
          meridiemParse:
            /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              "\u51cc\u6668" === r ||
              "\u65e9\u4e0a" === r ||
              "\u4e0a\u5348" === r
                ? o
                : "\u4e2d\u5348" === r
                ? o >= 11
                  ? o
                  : o + 12
                : "\u4e0b\u5348" === r || "\u665a\u4e0a" === r
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, r, e) {
            var m = 100 * o + r;
            return m < 600
              ? "\u51cc\u6668"
              : m < 900
              ? "\u65e9\u4e0a"
              : m < 1200
              ? "\u4e0a\u5348"
              : 1200 === m
              ? "\u4e2d\u5348"
              : m < 1800
              ? "\u4e0b\u5348"
              : "\u665a\u4e0a";
          },
          calendar: {
            sameDay: "[\u4eca\u5929]LT",
            nextDay: "[\u660e\u5929]LT",
            nextWeek: "[\u4e0b]ddddLT",
            lastDay: "[\u6628\u5929]LT",
            lastWeek: "[\u4e0a]ddddLT",
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
          ordinal: function (o, r) {
            switch (r) {
              case "d":
              case "D":
              case "DDD":
                return o + "\u65e5";
              case "M":
                return o + "\u6708";
              case "w":
              case "W":
                return o + "\u9031";
              default:
                return o;
            }
          },
          relativeTime: {
            future: "%s\u5f8c",
            past: "%s\u524d",
            s: "\u5e7e\u79d2",
            ss: "%d \u79d2",
            m: "1 \u5206\u9418",
            mm: "%d \u5206\u9418",
            h: "1 \u5c0f\u6642",
            hh: "%d \u5c0f\u6642",
            d: "1 \u5929",
            dd: "%d \u5929",
            M: "1 \u500b\u6708",
            MM: "%d \u500b\u6708",
            y: "1 \u5e74",
            yy: "%d \u5e74",
          },
        });
      })(f(5439));
    },
    1133: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("zh-mo", {
          months:
            "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split(
              "_"
            ),
          monthsShort:
            "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split(
              "_"
            ),
          weekdays:
            "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split(
              "_"
            ),
          weekdaysShort:
            "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split(
              "_"
            ),
          weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split(
            "_"
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
            l: "D/M/YYYY",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
          },
          meridiemParse:
            /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              "\u51cc\u6668" === r ||
              "\u65e9\u4e0a" === r ||
              "\u4e0a\u5348" === r
                ? o
                : "\u4e2d\u5348" === r
                ? o >= 11
                  ? o
                  : o + 12
                : "\u4e0b\u5348" === r || "\u665a\u4e0a" === r
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, r, e) {
            var m = 100 * o + r;
            return m < 600
              ? "\u51cc\u6668"
              : m < 900
              ? "\u65e9\u4e0a"
              : m < 1130
              ? "\u4e0a\u5348"
              : m < 1230
              ? "\u4e2d\u5348"
              : m < 1800
              ? "\u4e0b\u5348"
              : "\u665a\u4e0a";
          },
          calendar: {
            sameDay: "[\u4eca\u5929] LT",
            nextDay: "[\u660e\u5929] LT",
            nextWeek: "[\u4e0b]dddd LT",
            lastDay: "[\u6628\u5929] LT",
            lastWeek: "[\u4e0a]dddd LT",
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
          ordinal: function (o, r) {
            switch (r) {
              case "d":
              case "D":
              case "DDD":
                return o + "\u65e5";
              case "M":
                return o + "\u6708";
              case "w":
              case "W":
                return o + "\u9031";
              default:
                return o;
            }
          },
          relativeTime: {
            future: "%s\u5167",
            past: "%s\u524d",
            s: "\u5e7e\u79d2",
            ss: "%d \u79d2",
            m: "1 \u5206\u9418",
            mm: "%d \u5206\u9418",
            h: "1 \u5c0f\u6642",
            hh: "%d \u5c0f\u6642",
            d: "1 \u5929",
            dd: "%d \u5929",
            M: "1 \u500b\u6708",
            MM: "%d \u500b\u6708",
            y: "1 \u5e74",
            yy: "%d \u5e74",
          },
        });
      })(f(5439));
    },
    3291: function (Y, Z, f) {
      !(function (u) {
        "use strict";
        u.defineLocale("zh-tw", {
          months:
            "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split(
              "_"
            ),
          monthsShort:
            "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split(
              "_"
            ),
          weekdays:
            "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split(
              "_"
            ),
          weekdaysShort:
            "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split(
              "_"
            ),
          weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split(
            "_"
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
          },
          meridiemParse:
            /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
          meridiemHour: function (o, r) {
            return (
              12 === o && (o = 0),
              "\u51cc\u6668" === r ||
              "\u65e9\u4e0a" === r ||
              "\u4e0a\u5348" === r
                ? o
                : "\u4e2d\u5348" === r
                ? o >= 11
                  ? o
                  : o + 12
                : "\u4e0b\u5348" === r || "\u665a\u4e0a" === r
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, r, e) {
            var m = 100 * o + r;
            return m < 600
              ? "\u51cc\u6668"
              : m < 900
              ? "\u65e9\u4e0a"
              : m < 1130
              ? "\u4e0a\u5348"
              : m < 1230
              ? "\u4e2d\u5348"
              : m < 1800
              ? "\u4e0b\u5348"
              : "\u665a\u4e0a";
          },
          calendar: {
            sameDay: "[\u4eca\u5929] LT",
            nextDay: "[\u660e\u5929] LT",
            nextWeek: "[\u4e0b]dddd LT",
            lastDay: "[\u6628\u5929] LT",
            lastWeek: "[\u4e0a]dddd LT",
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
          ordinal: function (o, r) {
            switch (r) {
              case "d":
              case "D":
              case "DDD":
                return o + "\u65e5";
              case "M":
                return o + "\u6708";
              case "w":
              case "W":
                return o + "\u9031";
              default:
                return o;
            }
          },
          relativeTime: {
            future: "%s\u5f8c",
            past: "%s\u524d",
            s: "\u5e7e\u79d2",
            ss: "%d \u79d2",
            m: "1 \u5206\u9418",
            mm: "%d \u5206\u9418",
            h: "1 \u5c0f\u6642",
            hh: "%d \u5c0f\u6642",
            d: "1 \u5929",
            dd: "%d \u5929",
            M: "1 \u500b\u6708",
            MM: "%d \u500b\u6708",
            y: "1 \u5e74",
            yy: "%d \u5e74",
          },
        });
      })(f(5439));
    },
    5439: function (Y, Z, f) {
      (Y = f.nmd(Y)).exports = (function () {
        "use strict";
        var u, ie;
        function i() {
          return u.apply(null, arguments);
        }
        function r(t) {
          return (
            t instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(t)
          );
        }
        function e(t) {
          return (
            null != t && "[object Object]" === Object.prototype.toString.call(t)
          );
        }
        function m(t, n) {
          return Object.prototype.hasOwnProperty.call(t, n);
        }
        function c(t) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(t).length;
          var n;
          for (n in t) if (m(t, n)) return !1;
          return !0;
        }
        function M(t) {
          return void 0 === t;
        }
        function L(t) {
          return (
            "number" == typeof t ||
            "[object Number]" === Object.prototype.toString.call(t)
          );
        }
        function D(t) {
          return (
            t instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(t)
          );
        }
        function x(t, n) {
          var l,
            _ = [];
          for (l = 0; l < t.length; ++l) _.push(n(t[l], l));
          return _;
        }
        function N(t, n) {
          for (var _ in n) m(n, _) && (t[_] = n[_]);
          return (
            m(n, "toString") && (t.toString = n.toString),
            m(n, "valueOf") && (t.valueOf = n.valueOf),
            t
          );
        }
        function O(t, n, _, l) {
          return fa(t, n, _, l, !0).utc();
        }
        function A(t) {
          return (
            null == t._pf &&
              (t._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidEra: null,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                era: null,
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1,
              }),
            t._pf
          );
        }
        function J(t) {
          if (null == t._isValid) {
            var n = A(t),
              _ = ie.call(n.parsedDateParts, function (p) {
                return null != p;
              }),
              l =
                !isNaN(t._d.getTime()) &&
                n.overflow < 0 &&
                !n.empty &&
                !n.invalidEra &&
                !n.invalidMonth &&
                !n.invalidWeekday &&
                !n.weekdayMismatch &&
                !n.nullInput &&
                !n.invalidFormat &&
                !n.userInvalidated &&
                (!n.meridiem || (n.meridiem && _));
            if (
              (t._strict &&
                (l =
                  l &&
                  0 === n.charsLeftOver &&
                  0 === n.unusedTokens.length &&
                  void 0 === n.bigHour),
              null != Object.isFrozen && Object.isFrozen(t))
            )
              return l;
            t._isValid = l;
          }
          return t._isValid;
        }
        function Ue(t) {
          var n = O(NaN);
          return null != t ? N(A(n), t) : (A(n).userInvalidated = !0), n;
        }
        ie = Array.prototype.some
          ? Array.prototype.some
          : function (t) {
              var l,
                n = Object(this),
                _ = n.length >>> 0;
              for (l = 0; l < _; l++)
                if (l in n && t.call(this, n[l], l, n)) return !0;
              return !1;
            };
        var Ee = (i.momentProperties = []),
          I = !1;
        function Me(t, n) {
          var _, l, p;
          if (
            (M(n._isAMomentObject) || (t._isAMomentObject = n._isAMomentObject),
            M(n._i) || (t._i = n._i),
            M(n._f) || (t._f = n._f),
            M(n._l) || (t._l = n._l),
            M(n._strict) || (t._strict = n._strict),
            M(n._tzm) || (t._tzm = n._tzm),
            M(n._isUTC) || (t._isUTC = n._isUTC),
            M(n._offset) || (t._offset = n._offset),
            M(n._pf) || (t._pf = A(n)),
            M(n._locale) || (t._locale = n._locale),
            Ee.length > 0)
          )
            for (_ = 0; _ < Ee.length; _++)
              M((p = n[(l = Ee[_])])) || (t[l] = p);
          return t;
        }
        function ye(t) {
          Me(this, t),
            (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === I && ((I = !0), i.updateOffset(this), (I = !1));
        }
        function oe(t) {
          return t instanceof ye || (null != t && null != t._isAMomentObject);
        }
        function Qt(t) {
          !1 === i.suppressDeprecationWarnings &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + t);
        }
        function te(t, n) {
          var _ = !0;
          return N(function () {
            if (
              (null != i.deprecationHandler && i.deprecationHandler(null, t), _)
            ) {
              var p,
                y,
                k,
                l = [];
              for (y = 0; y < arguments.length; y++) {
                if (((p = ""), "object" == typeof arguments[y])) {
                  for (k in ((p += "\n[" + y + "] "), arguments[0]))
                    m(arguments[0], k) &&
                      (p += k + ": " + arguments[0][k] + ", ");
                  p = p.slice(0, -2);
                } else p = arguments[y];
                l.push(p);
              }
              Qt(
                t +
                  "\nArguments: " +
                  Array.prototype.slice.call(l).join("") +
                  "\n" +
                  new Error().stack
              ),
                (_ = !1);
            }
            return n.apply(this, arguments);
          }, n);
        }
        var C,
          qa = {};
        function Na(t, n) {
          null != i.deprecationHandler && i.deprecationHandler(t, n),
            qa[t] || (Qt(n), (qa[t] = !0));
        }
        function Te(t) {
          return (
            ("undefined" != typeof Function && t instanceof Function) ||
            "[object Function]" === Object.prototype.toString.call(t)
          );
        }
        function P(t, n) {
          var l,
            _ = N({}, t);
          for (l in n)
            m(n, l) &&
              (e(t[l]) && e(n[l])
                ? ((_[l] = {}), N(_[l], t[l]), N(_[l], n[l]))
                : null != n[l]
                ? (_[l] = n[l])
                : delete _[l]);
          for (l in t) m(t, l) && !m(n, l) && e(t[l]) && (_[l] = N({}, _[l]));
          return _;
        }
        function _e(t) {
          null != t && this.set(t);
        }
        (i.suppressDeprecationWarnings = !1),
          (i.deprecationHandler = null),
          (C = Object.keys
            ? Object.keys
            : function (t) {
                var n,
                  _ = [];
                for (n in t) m(t, n) && _.push(n);
                return _;
              });
        function le(t, n, _) {
          var l = "" + Math.abs(t);
          return (
            (t >= 0 ? (_ ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, n - l.length))
              .toString()
              .substr(1) +
            l
          );
        }
        var kt =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          st = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          vt = {},
          Pe = {};
        function S(t, n, _, l) {
          var p = l;
          "string" == typeof l &&
            (p = function () {
              return this[l]();
            }),
            t && (Pe[t] = p),
            n &&
              (Pe[n[0]] = function () {
                return le(p.apply(this, arguments), n[1], n[2]);
              }),
            _ &&
              (Pe[_] = function () {
                return this.localeData().ordinal(p.apply(this, arguments), t);
              });
        }
        function Oa(t) {
          return t.match(/\[[\s\S]/)
            ? t.replace(/^\[|\]$/g, "")
            : t.replace(/\\/g, "");
        }
        function rt(t, n) {
          return t.isValid()
            ? ((n = zt(n, t.localeData())),
              (vt[n] =
                vt[n] ||
                (function Ha(t) {
                  var _,
                    l,
                    n = t.match(kt);
                  for (_ = 0, l = n.length; _ < l; _++)
                    n[_] = Pe[n[_]] ? Pe[n[_]] : Oa(n[_]);
                  return function (p) {
                    var k,
                      y = "";
                    for (k = 0; k < l; k++)
                      y += Te(n[k]) ? n[k].call(p, t) : n[k];
                    return y;
                  };
                })(n)),
              vt[n](t))
            : t.localeData().invalidDate();
        }
        function zt(t, n) {
          var _ = 5;
          function l(p) {
            return n.longDateFormat(p) || p;
          }
          for (st.lastIndex = 0; _ >= 0 && st.test(t); )
            (t = t.replace(st, l)), (st.lastIndex = 0), (_ -= 1);
          return t;
        }
        var Be = {};
        function K(t, n) {
          var _ = t.toLowerCase();
          Be[_] = Be[_ + "s"] = Be[n] = t;
        }
        function se(t) {
          return "string" == typeof t ? Be[t] || Be[t.toLowerCase()] : void 0;
        }
        function At(t) {
          var _,
            l,
            n = {};
          for (l in t) m(t, l) && (_ = se(l)) && (n[_] = t[l]);
          return n;
        }
        var Bt = {};
        function X(t, n) {
          Bt[t] = n;
        }
        function ve(t) {
          return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
        }
        function re(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        }
        function H(t) {
          var n = +t,
            _ = 0;
          return 0 !== n && isFinite(n) && (_ = re(n)), _;
        }
        function je(t, n) {
          return function (_) {
            return null != _
              ? ($t(this, t, _), i.updateOffset(this, n), this)
              : ot(this, t);
          };
        }
        function ot(t, n) {
          return t.isValid()
            ? t._d["get" + (t._isUTC ? "UTC" : "") + n]()
            : NaN;
        }
        function $t(t, n, _) {
          t.isValid() &&
            !isNaN(_) &&
            ("FullYear" === n &&
            ve(t.year()) &&
            1 === t.month() &&
            29 === t.date()
              ? ((_ = H(_)),
                t._d["set" + (t._isUTC ? "UTC" : "") + n](
                  _,
                  t.month(),
                  ct(_, t.month())
                ))
              : t._d["set" + (t._isUTC ? "UTC" : "") + n](_));
        }
        var mt,
          Kt = /\d/,
          ae = /\d\d/,
          Xt = /\d{3}/,
          wt = /\d{4}/,
          _t = /[+-]?\d{6}/,
          W = /\d\d?/,
          ea = /\d\d\d\d?/,
          dt = /\d\d\d\d\d\d?/,
          fe = /\d{1,3}/,
          Ie = /\d{1,4}/,
          Le = /[+-]?\d{1,6}/,
          Fe = /\d+/,
          lt = /[+-]?\d+/,
          Ra = /Z|[+-]\d\d:?\d\d/gi,
          ut = /Z|[+-]\d\d(?::?\d\d)?/gi,
          Ve =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
        function w(t, n, _) {
          mt[t] = Te(n)
            ? n
            : function (l, p) {
                return l && _ ? _ : n;
              };
        }
        function za(t, n) {
          return m(mt, t)
            ? mt[t](n._strict, n._locale)
            : new RegExp(
                (function Ga(t) {
                  return ne(
                    t
                      .replace("\\", "")
                      .replace(
                        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                        function (n, _, l, p, y) {
                          return _ || l || p || y;
                        }
                      )
                  );
                })(t)
              );
        }
        function ne(t) {
          return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        mt = {};
        var xt = {};
        function F(t, n) {
          var _,
            l = n;
          for (
            "string" == typeof t && (t = [t]),
              L(n) &&
                (l = function (p, y) {
                  y[n] = H(p);
                }),
              _ = 0;
            _ < t.length;
            _++
          )
            xt[t[_]] = l;
        }
        function $e(t, n) {
          F(t, function (_, l, p, y) {
            (p._w = p._w || {}), n(_, p._w, p, y);
          });
        }
        function Ba(t, n, _) {
          null != n && m(xt, t) && xt[t](n, _._a, _, t);
        }
        var B;
        function ct(t, n) {
          if (isNaN(t) || isNaN(n)) return NaN;
          var _ = (function Ka(t, n) {
            return ((t % n) + n) % n;
          })(n, 12);
          return (
            (t += (n - _) / 12),
            1 === _ ? (ve(t) ? 29 : 28) : 31 - ((_ % 7) % 2)
          );
        }
        (B = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function (t) {
              var n;
              for (n = 0; n < this.length; ++n) if (this[n] === t) return n;
              return -1;
            }),
          S("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
          S("MMM", 0, 0, function (t) {
            return this.localeData().monthsShort(this, t);
          }),
          S("MMMM", 0, 0, function (t) {
            return this.localeData().months(this, t);
          }),
          K("month", "M"),
          X("month", 8),
          w("M", W),
          w("MM", W, ae),
          w("MMM", function (t, n) {
            return n.monthsShortRegex(t);
          }),
          w("MMMM", function (t, n) {
            return n.monthsRegex(t);
          }),
          F(["M", "MM"], function (t, n) {
            n[1] = H(t) - 1;
          }),
          F(["MMM", "MMMM"], function (t, n, _, l) {
            var p = _._locale.monthsParse(t, l, _._strict);
            null != p ? (n[1] = p) : (A(_).invalidMonth = t);
          });
        var Xa =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ta = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          aa = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          en = Ve,
          tn = Ve;
        function sn(t, n, _) {
          var l,
            p,
            y,
            k = t.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                l = 0;
              l < 12;
              ++l
            )
              (y = O([2e3, l])),
                (this._shortMonthsParse[l] = this.monthsShort(
                  y,
                  ""
                ).toLocaleLowerCase()),
                (this._longMonthsParse[l] = this.months(
                  y,
                  ""
                ).toLocaleLowerCase());
          return _
            ? "MMM" === n
              ? -1 !== (p = B.call(this._shortMonthsParse, k))
                ? p
                : null
              : -1 !== (p = B.call(this._longMonthsParse, k))
              ? p
              : null
            : "MMM" === n
            ? -1 !== (p = B.call(this._shortMonthsParse, k)) ||
              -1 !== (p = B.call(this._longMonthsParse, k))
              ? p
              : null
            : -1 !== (p = B.call(this._longMonthsParse, k)) ||
              -1 !== (p = B.call(this._shortMonthsParse, k))
            ? p
            : null;
        }
        function na(t, n) {
          var _;
          if (!t.isValid()) return t;
          if ("string" == typeof n)
            if (/^\d+$/.test(n)) n = H(n);
            else if (!L((n = t.localeData().monthsParse(n)))) return t;
          return (
            (_ = Math.min(t.date(), ct(t.year(), n))),
            t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](n, _),
            t
          );
        }
        function pt(t) {
          return null != t
            ? (na(this, t), i.updateOffset(this, !0), this)
            : ot(this, "Month");
        }
        function ia() {
          function t(k, q) {
            return q.length - k.length;
          }
          var p,
            y,
            n = [],
            _ = [],
            l = [];
          for (p = 0; p < 12; p++)
            (y = O([2e3, p])),
              n.push(this.monthsShort(y, "")),
              _.push(this.months(y, "")),
              l.push(this.months(y, "")),
              l.push(this.monthsShort(y, ""));
          for (n.sort(t), _.sort(t), l.sort(t), p = 0; p < 12; p++)
            (n[p] = ne(n[p])), (_[p] = ne(_[p]));
          for (p = 0; p < 24; p++) l[p] = ne(l[p]);
          (this._monthsRegex = new RegExp("^(" + l.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              "^(" + _.join("|") + ")",
              "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
              "^(" + n.join("|") + ")",
              "i"
            ));
        }
        function Ke(t) {
          return ve(t) ? 366 : 365;
        }
        S("Y", 0, 0, function () {
          var t = this.year();
          return t <= 9999 ? le(t, 4) : "+" + t;
        }),
          S(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          S(0, ["YYYY", 4], 0, "year"),
          S(0, ["YYYYY", 5], 0, "year"),
          S(0, ["YYYYYY", 6, !0], 0, "year"),
          K("year", "y"),
          X("year", 1),
          w("Y", lt),
          w("YY", W, ae),
          w("YYYY", Ie, wt),
          w("YYYYY", Le, _t),
          w("YYYYYY", Le, _t),
          F(["YYYYY", "YYYYYY"], 0),
          F("YYYY", function (t, n) {
            n[0] = 2 === t.length ? i.parseTwoDigitYear(t) : H(t);
          }),
          F("YY", function (t, n) {
            n[0] = i.parseTwoDigitYear(t);
          }),
          F("Y", function (t, n) {
            n[0] = parseInt(t, 10);
          }),
          (i.parseTwoDigitYear = function (t) {
            return H(t) + (H(t) > 68 ? 1900 : 2e3);
          });
        var Ct = je("FullYear", !0);
        function ln(t, n, _, l, p, y, k) {
          var q;
          return (
            t < 100 && t >= 0
              ? ((q = new Date(t + 400, n, _, l, p, y, k)),
                isFinite(q.getFullYear()) && q.setFullYear(t))
              : (q = new Date(t, n, _, l, p, y, k)),
            q
          );
        }
        function Xe(t) {
          var n, _;
          return (
            t < 100 && t >= 0
              ? (((_ = Array.prototype.slice.call(arguments))[0] = t + 400),
                (n = new Date(Date.UTC.apply(null, _))),
                isFinite(n.getUTCFullYear()) && n.setUTCFullYear(t))
              : (n = new Date(Date.UTC.apply(null, arguments))),
            n
          );
        }
        function ht(t, n, _) {
          var l = 7 + n - _;
          return (-(7 + Xe(t, 0, l).getUTCDay() - n) % 7) + l - 1;
        }
        function ra(t, n, _, l, p) {
          var U,
            z,
            q = 1 + 7 * (n - 1) + ((7 + _ - l) % 7) + ht(t, l, p);
          return (
            q <= 0
              ? (z = Ke((U = t - 1)) + q)
              : q > Ke(t)
              ? ((U = t + 1), (z = q - Ke(t)))
              : ((U = t), (z = q)),
            { year: U, dayOfYear: z }
          );
        }
        function et(t, n, _) {
          var y,
            k,
            l = ht(t.year(), n, _),
            p = Math.floor((t.dayOfYear() - l - 1) / 7) + 1;
          return (
            p < 1
              ? (y = p + De((k = t.year() - 1), n, _))
              : p > De(t.year(), n, _)
              ? ((y = p - De(t.year(), n, _)), (k = t.year() + 1))
              : ((k = t.year()), (y = p)),
            { week: y, year: k }
          );
        }
        function De(t, n, _) {
          var l = ht(t, n, _),
            p = ht(t + 1, n, _);
          return (Ke(t) - l + p) / 7;
        }
        S("w", ["ww", 2], "wo", "week"),
          S("W", ["WW", 2], "Wo", "isoWeek"),
          K("week", "w"),
          K("isoWeek", "W"),
          X("week", 5),
          X("isoWeek", 5),
          w("w", W),
          w("ww", W, ae),
          w("W", W),
          w("WW", W, ae),
          $e(["w", "ww", "W", "WW"], function (t, n, _, l) {
            n[l.substr(0, 1)] = H(t);
          });
        function St(t, n) {
          return t.slice(n, 7).concat(t.slice(0, n));
        }
        S("d", 0, "do", "day"),
          S("dd", 0, 0, function (t) {
            return this.localeData().weekdaysMin(this, t);
          }),
          S("ddd", 0, 0, function (t) {
            return this.localeData().weekdaysShort(this, t);
          }),
          S("dddd", 0, 0, function (t) {
            return this.localeData().weekdays(this, t);
          }),
          S("e", 0, 0, "weekday"),
          S("E", 0, 0, "isoWeekday"),
          K("day", "d"),
          K("weekday", "e"),
          K("isoWeekday", "E"),
          X("day", 11),
          X("weekday", 11),
          X("isoWeekday", 11),
          w("d", W),
          w("e", W),
          w("E", W),
          w("dd", function (t, n) {
            return n.weekdaysMinRegex(t);
          }),
          w("ddd", function (t, n) {
            return n.weekdaysShortRegex(t);
          }),
          w("dddd", function (t, n) {
            return n.weekdaysRegex(t);
          }),
          $e(["dd", "ddd", "dddd"], function (t, n, _, l) {
            var p = _._locale.weekdaysParse(t, l, _._strict);
            null != p ? (n.d = p) : (A(_).invalidWeekday = t);
          }),
          $e(["d", "e", "E"], function (t, n, _, l) {
            n[l] = H(t);
          });
        var yn =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          oa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          Tn = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          Ln = Ve,
          Yn = Ve,
          Zn = Ve;
        function bn(t, n, _) {
          var l,
            p,
            y,
            k = t.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                l = 0;
              l < 7;
              ++l
            )
              (y = O([2e3, 1]).day(l)),
                (this._minWeekdaysParse[l] = this.weekdaysMin(
                  y,
                  ""
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[l] = this.weekdaysShort(
                  y,
                  ""
                ).toLocaleLowerCase()),
                (this._weekdaysParse[l] = this.weekdays(
                  y,
                  ""
                ).toLocaleLowerCase());
          return _
            ? "dddd" === n
              ? -1 !== (p = B.call(this._weekdaysParse, k))
                ? p
                : null
              : "ddd" === n
              ? -1 !== (p = B.call(this._shortWeekdaysParse, k))
                ? p
                : null
              : -1 !== (p = B.call(this._minWeekdaysParse, k))
              ? p
              : null
            : "dddd" === n
            ? -1 !== (p = B.call(this._weekdaysParse, k)) ||
              -1 !== (p = B.call(this._shortWeekdaysParse, k)) ||
              -1 !== (p = B.call(this._minWeekdaysParse, k))
              ? p
              : null
            : "ddd" === n
            ? -1 !== (p = B.call(this._shortWeekdaysParse, k)) ||
              -1 !== (p = B.call(this._weekdaysParse, k)) ||
              -1 !== (p = B.call(this._minWeekdaysParse, k))
              ? p
              : null
            : -1 !== (p = B.call(this._minWeekdaysParse, k)) ||
              -1 !== (p = B.call(this._weekdaysParse, k)) ||
              -1 !== (p = B.call(this._shortWeekdaysParse, k))
            ? p
            : null;
        }
        function qt() {
          function t(Ae, He) {
            return He.length - Ae.length;
          }
          var y,
            k,
            q,
            U,
            z,
            n = [],
            _ = [],
            l = [],
            p = [];
          for (y = 0; y < 7; y++)
            (k = O([2e3, 1]).day(y)),
              (q = ne(this.weekdaysMin(k, ""))),
              (U = ne(this.weekdaysShort(k, ""))),
              (z = ne(this.weekdays(k, ""))),
              n.push(q),
              _.push(U),
              l.push(z),
              p.push(q),
              p.push(U),
              p.push(z);
          n.sort(t),
            _.sort(t),
            l.sort(t),
            p.sort(t),
            (this._weekdaysRegex = new RegExp("^(" + p.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
              "^(" + l.join("|") + ")",
              "i"
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
              "^(" + _.join("|") + ")",
              "i"
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
              "^(" + n.join("|") + ")",
              "i"
            ));
        }
        function Nt() {
          return this.hours() % 12 || 12;
        }
        function _a(t, n) {
          S(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), n);
          });
        }
        function da(t, n) {
          return n._meridiemParse;
        }
        S("H", ["HH", 2], 0, "hour"),
          S("h", ["hh", 2], 0, Nt),
          S("k", ["kk", 2], 0, function On() {
            return this.hours() || 24;
          }),
          S("hmm", 0, 0, function () {
            return "" + Nt.apply(this) + le(this.minutes(), 2);
          }),
          S("hmmss", 0, 0, function () {
            return (
              "" +
              Nt.apply(this) +
              le(this.minutes(), 2) +
              le(this.seconds(), 2)
            );
          }),
          S("Hmm", 0, 0, function () {
            return "" + this.hours() + le(this.minutes(), 2);
          }),
          S("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + le(this.minutes(), 2) + le(this.seconds(), 2)
            );
          }),
          _a("a", !0),
          _a("A", !1),
          K("hour", "h"),
          X("hour", 13),
          w("a", da),
          w("A", da),
          w("H", W),
          w("h", W),
          w("k", W),
          w("HH", W, ae),
          w("hh", W, ae),
          w("kk", W, ae),
          w("hmm", ea),
          w("hmmss", dt),
          w("Hmm", ea),
          w("Hmmss", dt),
          F(["H", "HH"], 3),
          F(["k", "kk"], function (t, n, _) {
            var l = H(t);
            n[3] = 24 === l ? 0 : l;
          }),
          F(["a", "A"], function (t, n, _) {
            (_._isPm = _._locale.isPM(t)), (_._meridiem = t);
          }),
          F(["h", "hh"], function (t, n, _) {
            (n[3] = H(t)), (A(_).bigHour = !0);
          }),
          F("hmm", function (t, n, _) {
            var l = t.length - 2;
            (n[3] = H(t.substr(0, l))),
              (n[4] = H(t.substr(l))),
              (A(_).bigHour = !0);
          }),
          F("hmmss", function (t, n, _) {
            var l = t.length - 4,
              p = t.length - 2;
            (n[3] = H(t.substr(0, l))),
              (n[4] = H(t.substr(l, 2))),
              (n[5] = H(t.substr(p))),
              (A(_).bigHour = !0);
          }),
          F("Hmm", function (t, n, _) {
            var l = t.length - 2;
            (n[3] = H(t.substr(0, l))), (n[4] = H(t.substr(l)));
          }),
          F("Hmmss", function (t, n, _) {
            var l = t.length - 4,
              p = t.length - 2;
            (n[3] = H(t.substr(0, l))),
              (n[4] = H(t.substr(l, 2))),
              (n[5] = H(t.substr(p)));
          });
        var En = je("Hours", !0);
        var at,
          la = {
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            longDateFormat: {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A",
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              w: "a week",
              ww: "%d weeks",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            months: Xa,
            monthsShort: ta,
            week: { dow: 0, doy: 6 },
            weekdays: yn,
            weekdaysMin: Tn,
            weekdaysShort: oa,
            meridiemParse: /[ap]\.?m?\.?/i,
          },
          Q = {},
          tt = {};
        function jn(t, n) {
          var _,
            l = Math.min(t.length, n.length);
          for (_ = 0; _ < l; _ += 1) if (t[_] !== n[_]) return _;
          return l;
        }
        function ua(t) {
          return t && t.toLowerCase().replace("_", "-");
        }
        function ft(t) {
          var n = null;
          if (void 0 === Q[t] && Y && Y.exports)
            try {
              (n = at._abbr), f(6700)("./" + t), be(n);
            } catch (l) {
              Q[t] = null;
            }
          return Q[t];
        }
        function be(t, n) {
          var _;
          return (
            t &&
              ((_ = M(n) ? ke(t) : Ot(t, n))
                ? (at = _)
                : "undefined" != typeof console &&
                  console.warn &&
                  console.warn(
                    "Locale " + t + " not found. Did you forget to load it?"
                  )),
            at._abbr
          );
        }
        function Ot(t, n) {
          if (null !== n) {
            var _,
              l = la;
            if (((n.abbr = t), null != Q[t]))
              Na(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              ),
                (l = Q[t]._config);
            else if (null != n.parentLocale)
              if (null != Q[n.parentLocale]) l = Q[n.parentLocale]._config;
              else {
                if (null == (_ = ft(n.parentLocale)))
                  return (
                    tt[n.parentLocale] || (tt[n.parentLocale] = []),
                    tt[n.parentLocale].push({ name: t, config: n }),
                    null
                  );
                l = _._config;
              }
            return (
              (Q[t] = new _e(P(l, n))),
              tt[t] &&
                tt[t].forEach(function (p) {
                  Ot(p.name, p.config);
                }),
              be(t),
              Q[t]
            );
          }
          return delete Q[t], null;
        }
        function ke(t) {
          var n;
          if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
            return at;
          if (!r(t)) {
            if ((n = ft(t))) return n;
            t = [t];
          }
          return (function In(t) {
            for (var _, l, p, y, n = 0; n < t.length; ) {
              for (
                _ = (y = ua(t[n]).split("-")).length,
                  l = (l = ua(t[n + 1])) ? l.split("-") : null;
                _ > 0;

              ) {
                if ((p = ft(y.slice(0, _).join("-")))) return p;
                if (l && l.length >= _ && jn(y, l) >= _ - 1) break;
                _--;
              }
              n++;
            }
            return at;
          })(t);
        }
        function Ht(t) {
          var n,
            _ = t._a;
          return (
            _ &&
              -2 === A(t).overflow &&
              ((n =
                _[1] < 0 || _[1] > 11
                  ? 1
                  : _[2] < 1 || _[2] > ct(_[0], _[1])
                  ? 2
                  : _[3] < 0 ||
                    _[3] > 24 ||
                    (24 === _[3] && (0 !== _[4] || 0 !== _[5] || 0 !== _[6]))
                  ? 3
                  : _[4] < 0 || _[4] > 59
                  ? 4
                  : _[5] < 0 || _[5] > 59
                  ? 5
                  : _[6] < 0 || _[6] > 999
                  ? 6
                  : -1),
              A(t)._overflowDayOfYear && (n < 0 || n > 2) && (n = 2),
              A(t)._overflowWeeks && -1 === n && (n = 7),
              A(t)._overflowWeekday && -1 === n && (n = 8),
              (A(t).overflow = n)),
            t
          );
        }
        var Wn =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Rn =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Qn = /Z|[+-]\d\d(?::?\d\d)?/,
          gt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1],
          ],
          Ut = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
          ],
          zn = /^\/?Date\((-?\d+)/i,
          Gn =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          Bn = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
        function ma(t) {
          var n,
            _,
            y,
            k,
            q,
            U,
            l = t._i,
            p = Wn.exec(l) || Rn.exec(l);
          if (p) {
            for (A(t).iso = !0, n = 0, _ = gt.length; n < _; n++)
              if (gt[n][1].exec(p[1])) {
                (k = gt[n][0]), (y = !1 !== gt[n][2]);
                break;
              }
            if (null == k) return void (t._isValid = !1);
            if (p[3]) {
              for (n = 0, _ = Ut.length; n < _; n++)
                if (Ut[n][1].exec(p[3])) {
                  q = (p[2] || " ") + Ut[n][0];
                  break;
                }
              if (null == q) return void (t._isValid = !1);
            }
            if (!y && null != q) return void (t._isValid = !1);
            if (p[4]) {
              if (!Qn.exec(p[4])) return void (t._isValid = !1);
              U = "Z";
            }
            (t._f = k + (q || "") + (U || "")), Pt(t);
          } else t._isValid = !1;
        }
        function $n(t) {
          var n = parseInt(t, 10);
          return n <= 49 ? 2e3 + n : n <= 999 ? 1900 + n : n;
        }
        function ca(t) {
          var _,
            n = Gn.exec(
              (function Kn(t) {
                return t
                  .replace(/\([^)]*\)|[\n\t]/g, " ")
                  .replace(/(\s\s+)/g, " ")
                  .replace(/^\s\s*/, "")
                  .replace(/\s\s*$/, "");
              })(t._i)
            );
          if (n) {
            if (
              ((_ = (function Vn(t, n, _, l, p, y) {
                var k = [
                  $n(t),
                  ta.indexOf(n),
                  parseInt(_, 10),
                  parseInt(l, 10),
                  parseInt(p, 10),
                ];
                return y && k.push(parseInt(y, 10)), k;
              })(n[4], n[3], n[2], n[5], n[6], n[7])),
              !(function Xn(t, n, _) {
                return (
                  !t ||
                  oa.indexOf(t) === new Date(n[0], n[1], n[2]).getDay() ||
                  ((A(_).weekdayMismatch = !0), (_._isValid = !1), !1)
                );
              })(n[1], _, t))
            )
              return;
            (t._a = _),
              (t._tzm = (function ei(t, n, _) {
                if (t) return Bn[t];
                if (n) return 0;
                var l = parseInt(_, 10),
                  p = l % 100;
                return ((l - p) / 100) * 60 + p;
              })(n[8], n[9], n[10])),
              (t._d = Xe.apply(null, t._a)),
              t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
              (A(t).rfc2822 = !0);
          } else t._isValid = !1;
        }
        function Je(t, n, _) {
          return null != t ? t : null != n ? n : _;
        }
        function Et(t) {
          var n,
            _,
            p,
            y,
            k,
            l = [];
          if (!t._d) {
            for (
              p = (function ti(t) {
                var n = new Date(i.now());
                return t._useUTC
                  ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()]
                  : [n.getFullYear(), n.getMonth(), n.getDate()];
              })(t),
                t._w &&
                  null == t._a[2] &&
                  null == t._a[1] &&
                  (function ai(t) {
                    var n, _, l, p, y, k, q, U, z;
                    null != (n = t._w).GG || null != n.W || null != n.E
                      ? ((y = 1),
                        (k = 4),
                        (_ = Je(n.GG, t._a[0], et(R(), 1, 4).year)),
                        (l = Je(n.W, 1)),
                        ((p = Je(n.E, 1)) < 1 || p > 7) && (U = !0))
                      : ((y = t._locale._week.dow),
                        (k = t._locale._week.doy),
                        (z = et(R(), y, k)),
                        (_ = Je(n.gg, t._a[0], z.year)),
                        (l = Je(n.w, z.week)),
                        null != n.d
                          ? ((p = n.d) < 0 || p > 6) && (U = !0)
                          : null != n.e
                          ? ((p = n.e + y), (n.e < 0 || n.e > 6) && (U = !0))
                          : (p = y)),
                      l < 1 || l > De(_, y, k)
                        ? (A(t)._overflowWeeks = !0)
                        : null != U
                        ? (A(t)._overflowWeekday = !0)
                        : ((q = ra(_, l, p, y, k)),
                          (t._a[0] = q.year),
                          (t._dayOfYear = q.dayOfYear));
                  })(t),
                null != t._dayOfYear &&
                  ((k = Je(t._a[0], p[0])),
                  (t._dayOfYear > Ke(k) || 0 === t._dayOfYear) &&
                    (A(t)._overflowDayOfYear = !0),
                  (_ = Xe(k, 0, t._dayOfYear)),
                  (t._a[1] = _.getUTCMonth()),
                  (t._a[2] = _.getUTCDate())),
                n = 0;
              n < 3 && null == t._a[n];
              ++n
            )
              t._a[n] = l[n] = p[n];
            for (; n < 7; n++)
              t._a[n] = l[n] = null == t._a[n] ? (2 === n ? 1 : 0) : t._a[n];
            24 === t._a[3] &&
              0 === t._a[4] &&
              0 === t._a[5] &&
              0 === t._a[6] &&
              ((t._nextDay = !0), (t._a[3] = 0)),
              (t._d = (t._useUTC ? Xe : ln).apply(null, l)),
              (y = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
              null != t._tzm &&
                t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
              t._nextDay && (t._a[3] = 24),
              t._w &&
                void 0 !== t._w.d &&
                t._w.d !== y &&
                (A(t).weekdayMismatch = !0);
          }
        }
        function Pt(t) {
          if (t._f !== i.ISO_8601)
            if (t._f !== i.RFC_2822) {
              (t._a = []), (A(t).empty = !0);
              var _,
                l,
                p,
                y,
                k,
                z,
                n = "" + t._i,
                q = n.length,
                U = 0;
              for (
                p = zt(t._f, t._locale).match(kt) || [], _ = 0;
                _ < p.length;
                _++
              )
                (l = (n.match(za((y = p[_]), t)) || [])[0]) &&
                  ((k = n.substr(0, n.indexOf(l))).length > 0 &&
                    A(t).unusedInput.push(k),
                  (n = n.slice(n.indexOf(l) + l.length)),
                  (U += l.length)),
                  Pe[y]
                    ? (l ? (A(t).empty = !1) : A(t).unusedTokens.push(y),
                      Ba(y, l, t))
                    : t._strict && !l && A(t).unusedTokens.push(y);
              (A(t).charsLeftOver = q - U),
                n.length > 0 && A(t).unusedInput.push(n),
                t._a[3] <= 12 &&
                  !0 === A(t).bigHour &&
                  t._a[3] > 0 &&
                  (A(t).bigHour = void 0),
                (A(t).parsedDateParts = t._a.slice(0)),
                (A(t).meridiem = t._meridiem),
                (t._a[3] = (function ni(t, n, _) {
                  var l;
                  return null == _
                    ? n
                    : null != t.meridiemHour
                    ? t.meridiemHour(n, _)
                    : (null != t.isPM &&
                        ((l = t.isPM(_)) && n < 12 && (n += 12),
                        !l && 12 === n && (n = 0)),
                      n);
                })(t._locale, t._a[3], t._meridiem)),
                null !== (z = A(t).era) &&
                  (t._a[0] = t._locale.erasConvertYear(z, t._a[0])),
                Et(t),
                Ht(t);
            } else ca(t);
          else ma(t);
        }
        function ha(t) {
          var n = t._i,
            _ = t._f;
          return (
            (t._locale = t._locale || ke(t._l)),
            null === n || (void 0 === _ && "" === n)
              ? Ue({ nullInput: !0 })
              : ("string" == typeof n && (t._i = n = t._locale.preparse(n)),
                oe(n)
                  ? new ye(Ht(n))
                  : (D(n)
                      ? (t._d = n)
                      : r(_)
                      ? (function ii(t) {
                          var n,
                            _,
                            l,
                            p,
                            y,
                            k,
                            q = !1;
                          if (0 === t._f.length)
                            return (
                              (A(t).invalidFormat = !0),
                              void (t._d = new Date(NaN))
                            );
                          for (p = 0; p < t._f.length; p++)
                            (y = 0),
                              (k = !1),
                              (n = Me({}, t)),
                              null != t._useUTC && (n._useUTC = t._useUTC),
                              (n._f = t._f[p]),
                              Pt(n),
                              J(n) && (k = !0),
                              (y += A(n).charsLeftOver),
                              (y += 10 * A(n).unusedTokens.length),
                              (A(n).score = y),
                              q
                                ? y < l && ((l = y), (_ = n))
                                : (null == l || y < l || k) &&
                                  ((l = y), (_ = n), k && (q = !0));
                          N(t, _ || n);
                        })(t)
                      : _
                      ? Pt(t)
                      : (function ri(t) {
                          var n = t._i;
                          M(n)
                            ? (t._d = new Date(i.now()))
                            : D(n)
                            ? (t._d = new Date(n.valueOf()))
                            : "string" == typeof n
                            ? (function pa(t) {
                                var n = zn.exec(t._i);
                                null === n
                                  ? (ma(t),
                                    !1 === t._isValid &&
                                      (delete t._isValid,
                                      ca(t),
                                      !1 === t._isValid &&
                                        (delete t._isValid,
                                        t._strict
                                          ? (t._isValid = !1)
                                          : i.createFromInputFallback(t))))
                                  : (t._d = new Date(+n[1]));
                              })(t)
                            : r(n)
                            ? ((t._a = x(n.slice(0), function (_) {
                                return parseInt(_, 10);
                              })),
                              Et(t))
                            : e(n)
                            ? (function si(t) {
                                if (!t._d) {
                                  var n = At(t._i);
                                  (t._a = x(
                                    [
                                      n.year,
                                      n.month,
                                      void 0 === n.day ? n.date : n.day,
                                      n.hour,
                                      n.minute,
                                      n.second,
                                      n.millisecond,
                                    ],
                                    function (l) {
                                      return l && parseInt(l, 10);
                                    }
                                  )),
                                    Et(t);
                                }
                              })(t)
                            : L(n)
                            ? (t._d = new Date(n))
                            : i.createFromInputFallback(t);
                        })(t),
                    J(t) || (t._d = null),
                    t))
          );
        }
        function fa(t, n, _, l, p) {
          var y = {};
          return (
            (!0 === n || !1 === n) && ((l = n), (n = void 0)),
            (!0 === _ || !1 === _) && ((l = _), (_ = void 0)),
            ((e(t) && c(t)) || (r(t) && 0 === t.length)) && (t = void 0),
            (y._isAMomentObject = !0),
            (y._useUTC = y._isUTC = p),
            (y._l = _),
            (y._i = t),
            (y._f = n),
            (y._strict = l),
            (function Mt(t) {
              var n = new ye(Ht(ha(t)));
              return n._nextDay && (n.add(1, "d"), (n._nextDay = void 0)), n;
            })(y)
          );
        }
        function R(t, n, _, l) {
          return fa(t, n, _, l, !1);
        }
        (i.createFromInputFallback = te(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function (t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
          }
        )),
          (i.ISO_8601 = function () {}),
          (i.RFC_2822 = function () {});
        var oi = te(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var t = R.apply(null, arguments);
              return this.isValid() && t.isValid()
                ? t < this
                  ? this
                  : t
                : Ue();
            }
          ),
          _i = te(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var t = R.apply(null, arguments);
              return this.isValid() && t.isValid()
                ? t > this
                  ? this
                  : t
                : Ue();
            }
          );
        function ga(t, n) {
          var _, l;
          if ((1 === n.length && r(n[0]) && (n = n[0]), !n.length)) return R();
          for (_ = n[0], l = 1; l < n.length; ++l)
            (!n[l].isValid() || n[l][t](_)) && (_ = n[l]);
          return _;
        }
        var nt = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond",
        ];
        function yt(t) {
          var n = At(t),
            _ = n.year || 0,
            l = n.quarter || 0,
            p = n.month || 0,
            y = n.week || n.isoWeek || 0,
            k = n.day || 0,
            q = n.hour || 0,
            U = n.minute || 0,
            z = n.second || 0,
            Ae = n.millisecond || 0;
          (this._isValid = (function mi(t) {
            var n,
              l,
              _ = !1;
            for (n in t)
              if (
                m(t, n) &&
                (-1 === B.call(nt, n) || (null != t[n] && isNaN(t[n])))
              )
                return !1;
            for (l = 0; l < nt.length; ++l)
              if (t[nt[l]]) {
                if (_) return !1;
                parseFloat(t[nt[l]]) !== H(t[nt[l]]) && (_ = !0);
              }
            return !0;
          })(n)),
            (this._milliseconds = +Ae + 1e3 * z + 6e4 * U + 1e3 * q * 60 * 60),
            (this._days = +k + 7 * y),
            (this._months = +p + 3 * l + 12 * _),
            (this._data = {}),
            (this._locale = ke()),
            this._bubble();
        }
        function Tt(t) {
          return t instanceof yt;
        }
        function jt(t) {
          return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
        }
        function Ma(t, n) {
          S(t, 0, 0, function () {
            var _ = this.utcOffset(),
              l = "+";
            return (
              _ < 0 && ((_ = -_), (l = "-")),
              l + le(~~(_ / 60), 2) + n + le(~~_ % 60, 2)
            );
          });
        }
        Ma("Z", ":"),
          Ma("ZZ", ""),
          w("Z", ut),
          w("ZZ", ut),
          F(["Z", "ZZ"], function (t, n, _) {
            (_._useUTC = !0), (_._tzm = It(ut, t));
          });
        var fi = /([\+\-]|\d\d)/gi;
        function It(t, n) {
          var p,
            y,
            _ = (n || "").match(t);
          return null === _
            ? null
            : 0 ===
              (y =
                60 *
                  (p = ((_[_.length - 1] || []) + "").match(fi) || [
                    "-",
                    0,
                    0,
                  ])[1] +
                H(p[2]))
            ? 0
            : "+" === p[0]
            ? y
            : -y;
        }
        function Ft(t, n) {
          var _, l;
          return n._isUTC
            ? ((_ = n.clone()),
              (l =
                (oe(t) || D(t) ? t.valueOf() : R(t).valueOf()) - _.valueOf()),
              _._d.setTime(_._d.valueOf() + l),
              i.updateOffset(_, !1),
              _)
            : R(t).local();
        }
        function Jt(t) {
          return -Math.round(t._d.getTimezoneOffset());
        }
        function ya() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        i.updateOffset = function () {};
        var bi = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          Ai =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function ce(t, n) {
          var p,
            y,
            k,
            _ = t,
            l = null;
          return (
            Tt(t)
              ? (_ = { ms: t._milliseconds, d: t._days, M: t._months })
              : L(t) || !isNaN(+t)
              ? ((_ = {}), n ? (_[n] = +t) : (_.milliseconds = +t))
              : (l = bi.exec(t))
              ? ((p = "-" === l[1] ? -1 : 1),
                (_ = {
                  y: 0,
                  d: H(l[2]) * p,
                  h: H(l[3]) * p,
                  m: H(l[4]) * p,
                  s: H(l[5]) * p,
                  ms: H(jt(1e3 * l[6])) * p,
                }))
              : (l = Ai.exec(t))
              ? (_ = {
                  y: xe(l[2], (p = "-" === l[1] ? -1 : 1)),
                  M: xe(l[3], p),
                  w: xe(l[4], p),
                  d: xe(l[5], p),
                  h: xe(l[6], p),
                  m: xe(l[7], p),
                  s: xe(l[8], p),
                })
              : null == _
              ? (_ = {})
              : "object" == typeof _ &&
                ("from" in _ || "to" in _) &&
                ((k = (function La(t, n) {
                  var _;
                  return t.isValid() && n.isValid()
                    ? ((n = Ft(n, t)),
                      t.isBefore(n)
                        ? (_ = Ta(t, n))
                        : (((_ = Ta(n, t)).milliseconds = -_.milliseconds),
                          (_.months = -_.months)),
                      _)
                    : { milliseconds: 0, months: 0 };
                })(R(_.from), R(_.to))),
                ((_ = {}).ms = k.milliseconds),
                (_.M = k.months)),
            (y = new yt(_)),
            Tt(t) && m(t, "_locale") && (y._locale = t._locale),
            Tt(t) && m(t, "_isValid") && (y._isValid = t._isValid),
            y
          );
        }
        function xe(t, n) {
          var _ = t && parseFloat(t.replace(",", "."));
          return (isNaN(_) ? 0 : _) * n;
        }
        function Ta(t, n) {
          var _ = {};
          return (
            (_.months = n.month() - t.month() + 12 * (n.year() - t.year())),
            t.clone().add(_.months, "M").isAfter(n) && --_.months,
            (_.milliseconds = +n - +t.clone().add(_.months, "M")),
            _
          );
        }
        function Ya(t, n) {
          return function (_, l) {
            var y;
            return (
              null !== l &&
                !isNaN(+l) &&
                (Na(
                  n,
                  "moment()." +
                    n +
                    "(period, number) is deprecated. Please use moment()." +
                    n +
                    "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                ),
                (y = _),
                (_ = l),
                (l = y)),
              Za(this, ce(_, l), t),
              this
            );
          };
        }
        function Za(t, n, _, l) {
          var p = n._milliseconds,
            y = jt(n._days),
            k = jt(n._months);
          !t.isValid() ||
            ((l = null == l || l),
            k && na(t, ot(t, "Month") + k * _),
            y && $t(t, "Date", ot(t, "Date") + y * _),
            p && t._d.setTime(t._d.valueOf() + p * _),
            l && i.updateOffset(t, y || k));
        }
        (ce.fn = yt.prototype),
          (ce.invalid = function pi() {
            return ce(NaN);
          });
        var wi = Ya(1, "add"),
          xi = Ya(-1, "subtract");
        function Da(t) {
          return "string" == typeof t || t instanceof String;
        }
        function Ci(t) {
          return (
            oe(t) ||
            D(t) ||
            Da(t) ||
            L(t) ||
            (function qi(t) {
              var n = r(t),
                _ = !1;
              return (
                n &&
                  (_ =
                    0 ===
                    t.filter(function (l) {
                      return !L(l) && Da(t);
                    }).length),
                n && _
              );
            })(t) ||
            (function Si(t) {
              var p,
                n = e(t) && !c(t),
                _ = !1,
                l = [
                  "years",
                  "year",
                  "y",
                  "months",
                  "month",
                  "M",
                  "days",
                  "day",
                  "d",
                  "dates",
                  "date",
                  "D",
                  "hours",
                  "hour",
                  "h",
                  "minutes",
                  "minute",
                  "m",
                  "seconds",
                  "second",
                  "s",
                  "milliseconds",
                  "millisecond",
                  "ms",
                ];
              for (p = 0; p < l.length; p += 1) _ = _ || m(t, l[p]);
              return n && _;
            })(t) ||
            null == t
          );
        }
        function Ni(t) {
          var p,
            n = e(t) && !c(t),
            _ = !1,
            l = [
              "sameDay",
              "nextDay",
              "lastDay",
              "nextWeek",
              "lastWeek",
              "sameElse",
            ];
          for (p = 0; p < l.length; p += 1) _ = _ || m(t, l[p]);
          return n && _;
        }
        function Lt(t, n) {
          if (t.date() < n.date()) return -Lt(n, t);
          var _ = 12 * (n.year() - t.year()) + (n.month() - t.month()),
            l = t.clone().add(_, "months");
          return (
            -(
              _ +
              (n - l < 0
                ? (n - l) / (l - t.clone().add(_ - 1, "months"))
                : (n - l) / (t.clone().add(_ + 1, "months") - l))
            ) || 0
          );
        }
        function ka(t) {
          var n;
          return void 0 === t
            ? this._locale._abbr
            : (null != (n = ke(t)) && (this._locale = n), this);
        }
        (i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
          (i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
        var va = te(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function (t) {
            return void 0 === t ? this.localeData() : this.locale(t);
          }
        );
        function ba() {
          return this._locale;
        }
        var We = 6e4,
          Wt = 60 * We,
          Aa = 3506328 * Wt;
        function Re(t, n) {
          return ((t % n) + n) % n;
        }
        function wa(t, n, _) {
          return t < 100 && t >= 0
            ? new Date(t + 400, n, _) - Aa
            : new Date(t, n, _).valueOf();
        }
        function s(t, n, _) {
          return t < 100 && t >= 0
            ? Date.UTC(t + 400, n, _) - Aa
            : Date.UTC(t, n, _);
        }
        function Xi(t, n) {
          return n.erasAbbrRegex(t);
        }
        function es() {
          var p,
            y,
            t = [],
            n = [],
            _ = [],
            l = [],
            k = this.eras();
          for (p = 0, y = k.length; p < y; ++p)
            n.push(ne(k[p].name)),
              t.push(ne(k[p].abbr)),
              _.push(ne(k[p].narrow)),
              l.push(ne(k[p].name)),
              l.push(ne(k[p].abbr)),
              l.push(ne(k[p].narrow));
          (this._erasRegex = new RegExp("^(" + l.join("|") + ")", "i")),
            (this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i")),
            (this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i")),
            (this._erasNarrowRegex = new RegExp("^(" + _.join("|") + ")", "i"));
        }
        function xa(t, n) {
          S(0, [t, t.length], 0, n);
        }
        function is(t, n, _, l, p) {
          var y;
          return null == t
            ? et(this, l, p).year
            : (n > (y = De(t, l, p)) && (n = y), qs.call(this, t, n, _, l, p));
        }
        function qs(t, n, _, l, p) {
          var y = ra(t, n, _, l, p),
            k = Xe(y.year, 0, y.dayOfYear);
          return (
            this.year(k.getUTCFullYear()),
            this.month(k.getUTCMonth()),
            this.date(k.getUTCDate()),
            this
          );
        }
        S("N", 0, 0, "eraAbbr"),
          S("NN", 0, 0, "eraAbbr"),
          S("NNN", 0, 0, "eraAbbr"),
          S("NNNN", 0, 0, "eraName"),
          S("NNNNN", 0, 0, "eraNarrow"),
          S("y", ["y", 1], "yo", "eraYear"),
          S("y", ["yy", 2], 0, "eraYear"),
          S("y", ["yyy", 3], 0, "eraYear"),
          S("y", ["yyyy", 4], 0, "eraYear"),
          w("N", Xi),
          w("NN", Xi),
          w("NNN", Xi),
          w("NNNN", function Ds(t, n) {
            return n.erasNameRegex(t);
          }),
          w("NNNNN", function ks(t, n) {
            return n.erasNarrowRegex(t);
          }),
          F(["N", "NN", "NNN", "NNNN", "NNNNN"], function (t, n, _, l) {
            var p = _._locale.erasParse(t, l, _._strict);
            p ? (A(_).era = p) : (A(_).invalidEra = t);
          }),
          w("y", Fe),
          w("yy", Fe),
          w("yyy", Fe),
          w("yyyy", Fe),
          w("yo", function vs(t, n) {
            return n._eraYearOrdinalRegex || Fe;
          }),
          F(["y", "yy", "yyy", "yyyy"], 0),
          F(["yo"], function (t, n, _, l) {
            var p;
            _._locale._eraYearOrdinalRegex &&
              (p = t.match(_._locale._eraYearOrdinalRegex)),
              (n[0] = _._locale.eraYearOrdinalParse
                ? _._locale.eraYearOrdinalParse(t, p)
                : parseInt(t, 10));
          }),
          S(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
          S(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          xa("gggg", "weekYear"),
          xa("ggggg", "weekYear"),
          xa("GGGG", "isoWeekYear"),
          xa("GGGGG", "isoWeekYear"),
          K("weekYear", "gg"),
          K("isoWeekYear", "GG"),
          X("weekYear", 1),
          X("isoWeekYear", 1),
          w("G", lt),
          w("g", lt),
          w("GG", W, ae),
          w("gg", W, ae),
          w("GGGG", Ie, wt),
          w("gggg", Ie, wt),
          w("GGGGG", Le, _t),
          w("ggggg", Le, _t),
          $e(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, n, _, l) {
            n[l.substr(0, 2)] = H(t);
          }),
          $e(["gg", "GG"], function (t, n, _, l) {
            n[l] = i.parseTwoDigitYear(t);
          }),
          S("Q", 0, "Qo", "quarter"),
          K("quarter", "Q"),
          X("quarter", 7),
          w("Q", Kt),
          F("Q", function (t, n) {
            n[1] = 3 * (H(t) - 1);
          }),
          S("D", ["DD", 2], "Do", "date"),
          K("date", "D"),
          X("date", 9),
          w("D", W),
          w("DD", W, ae),
          w("Do", function (t, n) {
            return t
              ? n._dayOfMonthOrdinalParse || n._ordinalParse
              : n._dayOfMonthOrdinalParseLenient;
          }),
          F(["D", "DD"], 2),
          F("Do", function (t, n) {
            n[2] = H(t.match(W)[0]);
          });
        var ss = je("Date", !0);
        S("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          K("dayOfYear", "DDD"),
          X("dayOfYear", 4),
          w("DDD", fe),
          w("DDDD", Xt),
          F(["DDD", "DDDD"], function (t, n, _) {
            _._dayOfYear = H(t);
          }),
          S("m", ["mm", 2], 0, "minute"),
          K("minute", "m"),
          X("minute", 14),
          w("m", W),
          w("mm", W, ae),
          F(["m", "mm"], 4);
        var Hs = je("Minutes", !1);
        S("s", ["ss", 2], 0, "second"),
          K("second", "s"),
          X("second", 15),
          w("s", W),
          w("ss", W, ae),
          F(["s", "ss"], 5);
        var ze,
          rs,
          Us = je("Seconds", !1);
        for (
          S("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
          }),
            S(0, ["SS", 2], 0, function () {
              return ~~(this.millisecond() / 10);
            }),
            S(0, ["SSS", 3], 0, "millisecond"),
            S(0, ["SSSS", 4], 0, function () {
              return 10 * this.millisecond();
            }),
            S(0, ["SSSSS", 5], 0, function () {
              return 100 * this.millisecond();
            }),
            S(0, ["SSSSSS", 6], 0, function () {
              return 1e3 * this.millisecond();
            }),
            S(0, ["SSSSSSS", 7], 0, function () {
              return 1e4 * this.millisecond();
            }),
            S(0, ["SSSSSSSS", 8], 0, function () {
              return 1e5 * this.millisecond();
            }),
            S(0, ["SSSSSSSSS", 9], 0, function () {
              return 1e6 * this.millisecond();
            }),
            K("millisecond", "ms"),
            X("millisecond", 16),
            w("S", fe, Kt),
            w("SS", fe, ae),
            w("SSS", fe, Xt),
            ze = "SSSS";
          ze.length <= 9;
          ze += "S"
        )
          w(ze, Fe);
        function Es(t, n) {
          n[6] = H(1e3 * ("0." + t));
        }
        for (ze = "S"; ze.length <= 9; ze += "S") F(ze, Es);
        (rs = je("Milliseconds", !1)),
          S("z", 0, 0, "zoneAbbr"),
          S("zz", 0, 0, "zoneName");
        var b = ye.prototype;
        function os(t) {
          return t;
        }
        (b.add = wi),
          (b.calendar = function Hi(t, n) {
            1 === arguments.length &&
              (arguments[0]
                ? Ci(arguments[0])
                  ? ((t = arguments[0]), (n = void 0))
                  : Ni(arguments[0]) && ((n = arguments[0]), (t = void 0))
                : ((t = void 0), (n = void 0)));
            var _ = t || R(),
              l = Ft(_, this).startOf("day"),
              p = i.calendarFormat(this, l) || "sameElse",
              y = n && (Te(n[p]) ? n[p].call(this, _) : n[p]);
            return this.format(y || this.localeData().calendar(p, this, R(_)));
          }),
          (b.clone = function Ui() {
            return new ye(this);
          }),
          (b.diff = function Wi(t, n, _) {
            var l, p, y;
            if (!this.isValid()) return NaN;
            if (!(l = Ft(t, this)).isValid()) return NaN;
            switch (
              ((p = 6e4 * (l.utcOffset() - this.utcOffset())), (n = se(n)))
            ) {
              case "year":
                y = Lt(this, l) / 12;
                break;
              case "month":
                y = Lt(this, l);
                break;
              case "quarter":
                y = Lt(this, l) / 3;
                break;
              case "second":
                y = (this - l) / 1e3;
                break;
              case "minute":
                y = (this - l) / 6e4;
                break;
              case "hour":
                y = (this - l) / 36e5;
                break;
              case "day":
                y = (this - l - p) / 864e5;
                break;
              case "week":
                y = (this - l - p) / 6048e5;
                break;
              default:
                y = this - l;
            }
            return _ ? y : re(y);
          }),
          (b.endOf = function a(t) {
            var n, _;
            if (
              void 0 === (t = se(t)) ||
              "millisecond" === t ||
              !this.isValid()
            )
              return this;
            switch (((_ = this._isUTC ? s : wa), t)) {
              case "year":
                n = _(this.year() + 1, 0, 1) - 1;
                break;
              case "quarter":
                n =
                  _(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                break;
              case "month":
                n = _(this.year(), this.month() + 1, 1) - 1;
                break;
              case "week":
                n =
                  _(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                  ) - 1;
                break;
              case "isoWeek":
                n =
                  _(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                  ) - 1;
                break;
              case "day":
              case "date":
                n = _(this.year(), this.month(), this.date() + 1) - 1;
                break;
              case "hour":
                (n = this._d.valueOf()),
                  (n +=
                    Wt -
                    Re(n + (this._isUTC ? 0 : this.utcOffset() * We), Wt) -
                    1);
                break;
              case "minute":
                (n = this._d.valueOf()), (n += We - Re(n, We) - 1);
                break;
              case "second":
                (n = this._d.valueOf()), (n += 1e3 - Re(n, 1e3) - 1);
            }
            return this._d.setTime(n), i.updateOffset(this, !0), this;
          }),
          (b.format = function Gi(t) {
            t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
            var n = rt(this, t);
            return this.localeData().postformat(n);
          }),
          (b.from = function Bi(t, n) {
            return this.isValid() && ((oe(t) && t.isValid()) || R(t).isValid())
              ? ce({ to: this, from: t }).locale(this.locale()).humanize(!n)
              : this.localeData().invalidDate();
          }),
          (b.fromNow = function Vi(t) {
            return this.from(R(), t);
          }),
          (b.to = function $i(t, n) {
            return this.isValid() && ((oe(t) && t.isValid()) || R(t).isValid())
              ? ce({ from: this, to: t }).locale(this.locale()).humanize(!n)
              : this.localeData().invalidDate();
          }),
          (b.toNow = function Ki(t) {
            return this.to(R(), t);
          }),
          (b.get = function Ja(t) {
            return Te(this[(t = se(t))]) ? this[t]() : this;
          }),
          (b.invalidAt = function ms() {
            return A(this).overflow;
          }),
          (b.isAfter = function Ei(t, n) {
            var _ = oe(t) ? t : R(t);
            return (
              !(!this.isValid() || !_.isValid()) &&
              ("millisecond" === (n = se(n) || "millisecond")
                ? this.valueOf() > _.valueOf()
                : _.valueOf() < this.clone().startOf(n).valueOf())
            );
          }),
          (b.isBefore = function Pi(t, n) {
            var _ = oe(t) ? t : R(t);
            return (
              !(!this.isValid() || !_.isValid()) &&
              ("millisecond" === (n = se(n) || "millisecond")
                ? this.valueOf() < _.valueOf()
                : this.clone().endOf(n).valueOf() < _.valueOf())
            );
          }),
          (b.isBetween = function ji(t, n, _, l) {
            var p = oe(t) ? t : R(t),
              y = oe(n) ? n : R(n);
            return (
              !!(this.isValid() && p.isValid() && y.isValid()) &&
              ("(" === (l = l || "()")[0]
                ? this.isAfter(p, _)
                : !this.isBefore(p, _)) &&
              (")" === l[1] ? this.isBefore(y, _) : !this.isAfter(y, _))
            );
          }),
          (b.isSame = function Ii(t, n) {
            var l,
              _ = oe(t) ? t : R(t);
            return (
              !(!this.isValid() || !_.isValid()) &&
              ("millisecond" === (n = se(n) || "millisecond")
                ? this.valueOf() === _.valueOf()
                : ((l = _.valueOf()),
                  this.clone().startOf(n).valueOf() <= l &&
                    l <= this.clone().endOf(n).valueOf()))
            );
          }),
          (b.isSameOrAfter = function Fi(t, n) {
            return this.isSame(t, n) || this.isAfter(t, n);
          }),
          (b.isSameOrBefore = function Ji(t, n) {
            return this.isSame(t, n) || this.isBefore(t, n);
          }),
          (b.isValid = function Qe() {
            return J(this);
          }),
          (b.lang = va),
          (b.locale = ka),
          (b.localeData = ba),
          (b.max = _i),
          (b.min = oi),
          (b.parsingFlags = function Rt() {
            return N({}, A(this));
          }),
          (b.set = function Wa(t, n) {
            if ("object" == typeof t) {
              var l,
                _ = (function Vt(t) {
                  var _,
                    n = [];
                  for (_ in t) m(t, _) && n.push({ unit: _, priority: Bt[_] });
                  return (
                    n.sort(function (l, p) {
                      return l.priority - p.priority;
                    }),
                    n
                  );
                })((t = At(t)));
              for (l = 0; l < _.length; l++) this[_[l].unit](t[_[l].unit]);
            } else if (Te(this[(t = se(t))])) return this[t](n);
            return this;
          }),
          (b.startOf = function h(t) {
            var n, _;
            if (
              void 0 === (t = se(t)) ||
              "millisecond" === t ||
              !this.isValid()
            )
              return this;
            switch (((_ = this._isUTC ? s : wa), t)) {
              case "year":
                n = _(this.year(), 0, 1);
                break;
              case "quarter":
                n = _(this.year(), this.month() - (this.month() % 3), 1);
                break;
              case "month":
                n = _(this.year(), this.month(), 1);
                break;
              case "week":
                n = _(this.year(), this.month(), this.date() - this.weekday());
                break;
              case "isoWeek":
                n = _(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1)
                );
                break;
              case "day":
              case "date":
                n = _(this.year(), this.month(), this.date());
                break;
              case "hour":
                (n = this._d.valueOf()),
                  (n -= Re(n + (this._isUTC ? 0 : this.utcOffset() * We), Wt));
                break;
              case "minute":
                (n = this._d.valueOf()), (n -= Re(n, We));
                break;
              case "second":
                (n = this._d.valueOf()), (n -= Re(n, 1e3));
            }
            return this._d.setTime(n), i.updateOffset(this, !0), this;
          }),
          (b.subtract = xi),
          (b.toArray = function v() {
            var t = this;
            return [
              t.year(),
              t.month(),
              t.date(),
              t.hour(),
              t.minute(),
              t.second(),
              t.millisecond(),
            ];
          }),
          (b.toObject = function Ce() {
            var t = this;
            return {
              years: t.year(),
              months: t.month(),
              date: t.date(),
              hours: t.hours(),
              minutes: t.minutes(),
              seconds: t.seconds(),
              milliseconds: t.milliseconds(),
            };
          }),
          (b.toDate = function T() {
            return new Date(this.valueOf());
          }),
          (b.toISOString = function Qi(t) {
            if (!this.isValid()) return null;
            var n = !0 !== t,
              _ = n ? this.clone().utc() : this;
            return _.year() < 0 || _.year() > 9999
              ? rt(
                  _,
                  n
                    ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                )
              : Te(Date.prototype.toISOString)
              ? n
                ? this.toDate().toISOString()
                : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                    .toISOString()
                    .replace("Z", rt(_, "Z"))
              : rt(
                  _,
                  n
                    ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                );
          }),
          (b.inspect = function zi() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var _,
              l,
              t = "moment",
              n = "";
            return (
              this.isLocal() ||
                ((t =
                  0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (n = "Z")),
              (_ = "[" + t + '("]'),
              (l = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
              this.format(_ + l + "-MM-DD[T]HH:mm:ss.SSS" + n + '[")]')
            );
          }),
          "undefined" != typeof Symbol &&
            null != Symbol.for &&
            (b[Symbol.for("nodejs.util.inspect.custom")] = function () {
              return "Moment<" + this.format() + ">";
            }),
          (b.toJSON = function Se() {
            return this.isValid() ? this.toISOString() : null;
          }),
          (b.toString = function Ri() {
            return this.clone()
              .locale("en")
              .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }),
          (b.unix = function g() {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (b.valueOf = function d() {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
          }),
          (b.creationData = function cs() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            };
          }),
          (b.eraName = function gs() {
            var t,
              n,
              _,
              l = this.localeData().eras();
            for (t = 0, n = l.length; t < n; ++t)
              if (
                ((_ = this.clone().startOf("day").valueOf()),
                (l[t].since <= _ && _ <= l[t].until) ||
                  (l[t].until <= _ && _ <= l[t].since))
              )
                return l[t].name;
            return "";
          }),
          (b.eraNarrow = function Ms() {
            var t,
              n,
              _,
              l = this.localeData().eras();
            for (t = 0, n = l.length; t < n; ++t)
              if (
                ((_ = this.clone().startOf("day").valueOf()),
                (l[t].since <= _ && _ <= l[t].until) ||
                  (l[t].until <= _ && _ <= l[t].since))
              )
                return l[t].narrow;
            return "";
          }),
          (b.eraAbbr = function ys() {
            var t,
              n,
              _,
              l = this.localeData().eras();
            for (t = 0, n = l.length; t < n; ++t)
              if (
                ((_ = this.clone().startOf("day").valueOf()),
                (l[t].since <= _ && _ <= l[t].until) ||
                  (l[t].until <= _ && _ <= l[t].since))
              )
                return l[t].abbr;
            return "";
          }),
          (b.eraYear = function Ts() {
            var t,
              n,
              _,
              l,
              p = this.localeData().eras();
            for (t = 0, n = p.length; t < n; ++t)
              if (
                ((_ = p[t].since <= p[t].until ? 1 : -1),
                (l = this.clone().startOf("day").valueOf()),
                (p[t].since <= l && l <= p[t].until) ||
                  (p[t].until <= l && l <= p[t].since))
              )
                return (this.year() - i(p[t].since).year()) * _ + p[t].offset;
            return this.year();
          }),
          (b.year = Ct),
          (b.isLeapYear = function sa() {
            return ve(this.year());
          }),
          (b.weekYear = function bs(t) {
            return is.call(
              this,
              t,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }),
          (b.isoWeekYear = function As(t) {
            return is.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
          }),
          (b.quarter = b.quarters =
            function Ns(t) {
              return null == t
                ? Math.ceil((this.month() + 1) / 3)
                : this.month(3 * (t - 1) + (this.month() % 3));
            }),
          (b.month = pt),
          (b.daysInMonth = function on() {
            return ct(this.year(), this.month());
          }),
          (b.week = b.weeks =
            function hn(t) {
              var n = this.localeData().week(this);
              return null == t ? n : this.add(7 * (t - n), "d");
            }),
          (b.isoWeek = b.isoWeeks =
            function fn(t) {
              var n = et(this, 1, 4).week;
              return null == t ? n : this.add(7 * (t - n), "d");
            }),
          (b.weeksInYear = function Cs() {
            var t = this.localeData()._week;
            return De(this.year(), t.dow, t.doy);
          }),
          (b.weeksInWeekYear = function Ss() {
            var t = this.localeData()._week;
            return De(this.weekYear(), t.dow, t.doy);
          }),
          (b.isoWeeksInYear = function ws() {
            return De(this.year(), 1, 4);
          }),
          (b.isoWeeksInISOWeekYear = function xs() {
            return De(this.isoWeekYear(), 1, 4);
          }),
          (b.date = ss),
          (b.day = b.days =
            function wn(t) {
              if (!this.isValid()) return null != t ? this : NaN;
              var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
              return null != t
                ? ((t = (function gn(t, n) {
                    return "string" != typeof t
                      ? t
                      : isNaN(t)
                      ? "number" == typeof (t = n.weekdaysParse(t))
                        ? t
                        : null
                      : parseInt(t, 10);
                  })(t, this.localeData())),
                  this.add(t - n, "d"))
                : n;
            }),
          (b.weekday = function xn(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var n = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? n : this.add(t - n, "d");
          }),
          (b.isoWeekday = function Cn(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
              var n = (function Mn(t, n) {
                return "string" == typeof t
                  ? n.weekdaysParse(t) % 7 || 7
                  : isNaN(t)
                  ? null
                  : t;
              })(t, this.localeData());
              return this.day(this.day() % 7 ? n : n - 7);
            }
            return this.day() || 7;
          }),
          (b.dayOfYear = function Os(t) {
            var n =
              Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                  864e5
              ) + 1;
            return null == t ? n : this.add(t - n, "d");
          }),
          (b.hour = b.hours = En),
          (b.minute = b.minutes = Hs),
          (b.second = b.seconds = Us),
          (b.millisecond = b.milliseconds = rs),
          (b.utcOffset = function gi(t, n, _) {
            var p,
              l = this._offset || 0;
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
              if ("string" == typeof t) {
                if (null === (t = It(ut, t))) return this;
              } else Math.abs(t) < 16 && !_ && (t *= 60);
              return (
                !this._isUTC && n && (p = Jt(this)),
                (this._offset = t),
                (this._isUTC = !0),
                null != p && this.add(p, "m"),
                l !== t &&
                  (!n || this._changeInProgress
                    ? Za(this, ce(t - l, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      i.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              );
            }
            return this._isUTC ? l : Jt(this);
          }),
          (b.utc = function yi(t) {
            return this.utcOffset(0, t);
          }),
          (b.local = function Ti(t) {
            return (
              this._isUTC &&
                (this.utcOffset(0, t),
                (this._isUTC = !1),
                t && this.subtract(Jt(this), "m")),
              this
            );
          }),
          (b.parseZone = function Li() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
              var t = It(Ra, this._i);
              null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
            }
            return this;
          }),
          (b.hasAlignedHourOffset = function Yi(t) {
            return (
              !!this.isValid() &&
              ((t = t ? R(t).utcOffset() : 0), (this.utcOffset() - t) % 60 == 0)
            );
          }),
          (b.isDST = function Zi() {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            );
          }),
          (b.isLocal = function ki() {
            return !!this.isValid() && !this._isUTC;
          }),
          (b.isUtcOffset = function vi() {
            return !!this.isValid() && this._isUTC;
          }),
          (b.isUtc = ya),
          (b.isUTC = ya),
          (b.zoneAbbr = function Ps() {
            return this._isUTC ? "UTC" : "";
          }),
          (b.zoneName = function js() {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }),
          (b.dates = te("dates accessor is deprecated. Use date instead.", ss)),
          (b.months = te(
            "months accessor is deprecated. Use month instead",
            pt
          )),
          (b.years = te("years accessor is deprecated. Use year instead", Ct)),
          (b.zone = te(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            function Mi(t, n) {
              return null != t
                ? ("string" != typeof t && (t = -t), this.utcOffset(t, n), this)
                : -this.utcOffset();
            }
          )),
          (b.isDSTShifted = te(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            function Di() {
              if (!M(this._isDSTShifted)) return this._isDSTShifted;
              var n,
                t = {};
              return (
                Me(t, this),
                (t = ha(t))._a
                  ? ((n = t._isUTC ? O(t._a) : R(t._a)),
                    (this._isDSTShifted =
                      this.isValid() &&
                      (function hi(t, n, _) {
                        var k,
                          l = Math.min(t.length, n.length),
                          p = Math.abs(t.length - n.length),
                          y = 0;
                        for (k = 0; k < l; k++)
                          ((_ && t[k] !== n[k]) ||
                            (!_ && H(t[k]) !== H(n[k]))) &&
                            y++;
                        return y + p;
                      })(t._a, n.toArray()) > 0))
                  : (this._isDSTShifted = !1),
                this._isDSTShifted
              );
            }
          ));
        var j = _e.prototype;
        function Ca(t, n, _, l) {
          var p = ke(),
            y = O().set(l, n);
          return p[_](y, t);
        }
        function _s(t, n, _) {
          if ((L(t) && ((n = t), (t = void 0)), (t = t || ""), null != n))
            return Ca(t, n, _, "month");
          var l,
            p = [];
          for (l = 0; l < 12; l++) p[l] = Ca(t, l, _, "month");
          return p;
        }
        function ts(t, n, _, l) {
          "boolean" == typeof t
            ? (L(n) && ((_ = n), (n = void 0)), (n = n || ""))
            : ((_ = n = t),
              (t = !1),
              L(n) && ((_ = n), (n = void 0)),
              (n = n || ""));
          var k,
            p = ke(),
            y = t ? p._week.dow : 0,
            q = [];
          if (null != _) return Ca(n, (_ + y) % 7, l, "day");
          for (k = 0; k < 7; k++) q[k] = Ca(n, (k + y) % 7, l, "day");
          return q;
        }
        (j.calendar = function G(t, n, _) {
          var l = this._calendar[t] || this._calendar.sameElse;
          return Te(l) ? l.call(n, _) : l;
        }),
          (j.longDateFormat = function Ea(t) {
            var n = this._longDateFormat[t],
              _ = this._longDateFormat[t.toUpperCase()];
            return n || !_
              ? n
              : ((this._longDateFormat[t] = _.match(kt)
                  .map(function (l) {
                    return "MMMM" === l ||
                      "MM" === l ||
                      "DD" === l ||
                      "dddd" === l
                      ? l.slice(1)
                      : l;
                  })
                  .join("")),
                this._longDateFormat[t]);
          }),
          (j.invalidDate = function ja() {
            return this._invalidDate;
          }),
          (j.ordinal = function bt(t) {
            return this._ordinal.replace("%d", t);
          }),
          (j.preparse = os),
          (j.postformat = os),
          (j.relativeTime = function Ia(t, n, _, l) {
            var p = this._relativeTime[_];
            return Te(p) ? p(t, n, _, l) : p.replace(/%d/i, t);
          }),
          (j.pastFuture = function Fa(t, n) {
            var _ = this._relativeTime[t > 0 ? "future" : "past"];
            return Te(_) ? _(n) : _.replace(/%s/i, n);
          }),
          (j.set = function he(t) {
            var n, _;
            for (_ in t)
              m(t, _) && (Te((n = t[_])) ? (this[_] = n) : (this["_" + _] = n));
            (this._config = t),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  "|" +
                  /\d{1,2}/.source
              ));
          }),
          (j.eras = function ps(t, n) {
            var _,
              l,
              p,
              y = this._eras || ke("en")._eras;
            for (_ = 0, l = y.length; _ < l; ++_)
              switch (
                ("string" == typeof y[_].since &&
                  ((p = i(y[_].since).startOf("day")),
                  (y[_].since = p.valueOf())),
                typeof y[_].until)
              ) {
                case "undefined":
                  y[_].until = 1 / 0;
                  break;
                case "string":
                  (p = i(y[_].until).startOf("day").valueOf()),
                    (y[_].until = p.valueOf());
              }
            return y;
          }),
          (j.erasParse = function hs(t, n, _) {
            var l,
              p,
              k,
              q,
              U,
              y = this.eras();
            for (t = t.toUpperCase(), l = 0, p = y.length; l < p; ++l)
              if (
                ((k = y[l].name.toUpperCase()),
                (q = y[l].abbr.toUpperCase()),
                (U = y[l].narrow.toUpperCase()),
                _)
              )
                switch (n) {
                  case "N":
                  case "NN":
                  case "NNN":
                    if (q === t) return y[l];
                    break;
                  case "NNNN":
                    if (k === t) return y[l];
                    break;
                  case "NNNNN":
                    if (U === t) return y[l];
                }
              else if ([k, q, U].indexOf(t) >= 0) return y[l];
          }),
          (j.erasConvertYear = function fs(t, n) {
            var _ = t.since <= t.until ? 1 : -1;
            return void 0 === n
              ? i(t.since).year()
              : i(t.since).year() + (n - t.offset) * _;
          }),
          (j.erasAbbrRegex = function Ys(t) {
            return (
              m(this, "_erasAbbrRegex") || es.call(this),
              t ? this._erasAbbrRegex : this._erasRegex
            );
          }),
          (j.erasNameRegex = function Ls(t) {
            return (
              m(this, "_erasNameRegex") || es.call(this),
              t ? this._erasNameRegex : this._erasRegex
            );
          }),
          (j.erasNarrowRegex = function Zs(t) {
            return (
              m(this, "_erasNarrowRegex") || es.call(this),
              t ? this._erasNarrowRegex : this._erasRegex
            );
          }),
          (j.months = function an(t, n) {
            return t
              ? r(this._months)
                ? this._months[t.month()]
                : this._months[
                    (this._months.isFormat || aa).test(n)
                      ? "format"
                      : "standalone"
                  ][t.month()]
              : r(this._months)
              ? this._months
              : this._months.standalone;
          }),
          (j.monthsShort = function nn(t, n) {
            return t
              ? r(this._monthsShort)
                ? this._monthsShort[t.month()]
                : this._monthsShort[aa.test(n) ? "format" : "standalone"][
                    t.month()
                  ]
              : r(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
          }),
          (j.monthsParse = function rn(t, n, _) {
            var l, p, y;
            if (this._monthsParseExact) return sn.call(this, t, n, _);
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                l = 0;
              l < 12;
              l++
            ) {
              if (
                ((p = O([2e3, l])),
                _ &&
                  !this._longMonthsParse[l] &&
                  ((this._longMonthsParse[l] = new RegExp(
                    "^" + this.months(p, "").replace(".", "") + "$",
                    "i"
                  )),
                  (this._shortMonthsParse[l] = new RegExp(
                    "^" + this.monthsShort(p, "").replace(".", "") + "$",
                    "i"
                  ))),
                !_ &&
                  !this._monthsParse[l] &&
                  ((y =
                    "^" + this.months(p, "") + "|^" + this.monthsShort(p, "")),
                  (this._monthsParse[l] = new RegExp(y.replace(".", ""), "i"))),
                _ && "MMMM" === n && this._longMonthsParse[l].test(t))
              )
                return l;
              if (_ && "MMM" === n && this._shortMonthsParse[l].test(t))
                return l;
              if (!_ && this._monthsParse[l].test(t)) return l;
            }
          }),
          (j.monthsRegex = function dn(t) {
            return this._monthsParseExact
              ? (m(this, "_monthsRegex") || ia.call(this),
                t ? this._monthsStrictRegex : this._monthsRegex)
              : (m(this, "_monthsRegex") || (this._monthsRegex = tn),
                this._monthsStrictRegex && t
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
          }),
          (j.monthsShortRegex = function _n(t) {
            return this._monthsParseExact
              ? (m(this, "_monthsRegex") || ia.call(this),
                t ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = en),
                this._monthsShortStrictRegex && t
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
          }),
          (j.week = function un(t) {
            return et(t, this._week.dow, this._week.doy).week;
          }),
          (j.firstDayOfYear = function pn() {
            return this._week.doy;
          }),
          (j.firstDayOfWeek = function cn() {
            return this._week.dow;
          }),
          (j.weekdays = function Dn(t, n) {
            var _ = r(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                  t && !0 !== t && this._weekdays.isFormat.test(n)
                    ? "format"
                    : "standalone"
                ];
            return !0 === t ? St(_, this._week.dow) : t ? _[t.day()] : _;
          }),
          (j.weekdaysMin = function vn(t) {
            return !0 === t
              ? St(this._weekdaysMin, this._week.dow)
              : t
              ? this._weekdaysMin[t.day()]
              : this._weekdaysMin;
          }),
          (j.weekdaysShort = function kn(t) {
            return !0 === t
              ? St(this._weekdaysShort, this._week.dow)
              : t
              ? this._weekdaysShort[t.day()]
              : this._weekdaysShort;
          }),
          (j.weekdaysParse = function An(t, n, _) {
            var l, p, y;
            if (this._weekdaysParseExact) return bn.call(this, t, n, _);
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                l = 0;
              l < 7;
              l++
            ) {
              if (
                ((p = O([2e3, 1]).day(l)),
                _ &&
                  !this._fullWeekdaysParse[l] &&
                  ((this._fullWeekdaysParse[l] = new RegExp(
                    "^" + this.weekdays(p, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._shortWeekdaysParse[l] = new RegExp(
                    "^" + this.weekdaysShort(p, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._minWeekdaysParse[l] = new RegExp(
                    "^" + this.weekdaysMin(p, "").replace(".", "\\.?") + "$",
                    "i"
                  ))),
                this._weekdaysParse[l] ||
                  ((y =
                    "^" +
                    this.weekdays(p, "") +
                    "|^" +
                    this.weekdaysShort(p, "") +
                    "|^" +
                    this.weekdaysMin(p, "")),
                  (this._weekdaysParse[l] = new RegExp(
                    y.replace(".", ""),
                    "i"
                  ))),
                _ && "dddd" === n && this._fullWeekdaysParse[l].test(t))
              )
                return l;
              if (_ && "ddd" === n && this._shortWeekdaysParse[l].test(t))
                return l;
              if (_ && "dd" === n && this._minWeekdaysParse[l].test(t))
                return l;
              if (!_ && this._weekdaysParse[l].test(t)) return l;
            }
          }),
          (j.weekdaysRegex = function Sn(t) {
            return this._weekdaysParseExact
              ? (m(this, "_weekdaysRegex") || qt.call(this),
                t ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = Ln),
                this._weekdaysStrictRegex && t
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
          }),
          (j.weekdaysShortRegex = function qn(t) {
            return this._weekdaysParseExact
              ? (m(this, "_weekdaysRegex") || qt.call(this),
                t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (m(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = Yn),
                this._weekdaysShortStrictRegex && t
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
          }),
          (j.weekdaysMinRegex = function Nn(t) {
            return this._weekdaysParseExact
              ? (m(this, "_weekdaysRegex") || qt.call(this),
                t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Zn),
                this._weekdaysMinStrictRegex && t
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
          }),
          (j.isPM = function Hn(t) {
            return "p" === (t + "").toLowerCase().charAt(0);
          }),
          (j.meridiem = function Pn(t, n, _) {
            return t > 11 ? (_ ? "pm" : "PM") : _ ? "am" : "AM";
          }),
          be("en", {
            eras: [
              {
                since: "0001-01-01",
                until: 1 / 0,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD",
              },
              {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC",
              },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (t) {
              var n = t % 10;
              return (
                t +
                (1 === H((t % 100) / 10)
                  ? "th"
                  : 1 === n
                  ? "st"
                  : 2 === n
                  ? "nd"
                  : 3 === n
                  ? "rd"
                  : "th")
              );
            },
          }),
          (i.lang = te(
            "moment.lang is deprecated. Use moment.locale instead.",
            be
          )),
          (i.langData = te(
            "moment.langData is deprecated. Use moment.localeData instead.",
            ke
          ));
        var qe = Math.abs;
        function ds(t, n, _, l) {
          var p = ce(n, _);
          return (
            (t._milliseconds += l * p._milliseconds),
            (t._days += l * p._days),
            (t._months += l * p._months),
            t._bubble()
          );
        }
        function ls(t) {
          return t < 0 ? Math.floor(t) : Math.ceil(t);
        }
        function us(t) {
          return (4800 * t) / 146097;
        }
        function as(t) {
          return (146097 * t) / 4800;
        }
        function Ne(t) {
          return function () {
            return this.as(t);
          };
        }
        var er = Ne("ms"),
          tr = Ne("s"),
          ar = Ne("m"),
          nr = Ne("h"),
          ir = Ne("d"),
          sr = Ne("w"),
          rr = Ne("M"),
          or = Ne("Q"),
          _r = Ne("y");
        function it(t) {
          return function () {
            return this.isValid() ? this._data[t] : NaN;
          };
        }
        var ur = it("milliseconds"),
          mr = it("seconds"),
          cr = it("minutes"),
          pr = it("hours"),
          hr = it("days"),
          fr = it("months"),
          gr = it("years");
        var Oe = Math.round,
          Zt = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
        function yr(t, n, _, l, p) {
          return p.relativeTime(n || 1, !!_, t, l);
        }
        var ns = Math.abs;
        function Dt(t) {
          return (t > 0) - (t < 0) || +t;
        }
        function Sa() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var l,
            p,
            y,
            k,
            U,
            z,
            Ae,
            He,
            t = ns(this._milliseconds) / 1e3,
            n = ns(this._days),
            _ = ns(this._months),
            q = this.asSeconds();
          return q
            ? ((l = re(t / 60)),
              (p = re(l / 60)),
              (t %= 60),
              (l %= 60),
              (y = re(_ / 12)),
              (_ %= 12),
              (k = t ? t.toFixed(3).replace(/\.?0+$/, "") : ""),
              (U = q < 0 ? "-" : ""),
              (z = Dt(this._months) !== Dt(q) ? "-" : ""),
              (Ae = Dt(this._days) !== Dt(q) ? "-" : ""),
              (He = Dt(this._milliseconds) !== Dt(q) ? "-" : ""),
              U +
                "P" +
                (y ? z + y + "Y" : "") +
                (_ ? z + _ + "M" : "") +
                (n ? Ae + n + "D" : "") +
                (p || l || t ? "T" : "") +
                (p ? He + p + "H" : "") +
                (l ? He + l + "M" : "") +
                (t ? He + k + "S" : ""))
            : "P0D";
        }
        var E = yt.prototype;
        return (
          (E.isValid = function ci() {
            return this._isValid;
          }),
          (E.abs = function Gs() {
            var t = this._data;
            return (
              (this._milliseconds = qe(this._milliseconds)),
              (this._days = qe(this._days)),
              (this._months = qe(this._months)),
              (t.milliseconds = qe(t.milliseconds)),
              (t.seconds = qe(t.seconds)),
              (t.minutes = qe(t.minutes)),
              (t.hours = qe(t.hours)),
              (t.months = qe(t.months)),
              (t.years = qe(t.years)),
              this
            );
          }),
          (E.add = function Bs(t, n) {
            return ds(this, t, n, 1);
          }),
          (E.subtract = function Vs(t, n) {
            return ds(this, t, n, -1);
          }),
          (E.as = function Ks(t) {
            if (!this.isValid()) return NaN;
            var n,
              _,
              l = this._milliseconds;
            if ("month" === (t = se(t)) || "quarter" === t || "year" === t)
              switch (
                ((n = this._days + l / 864e5), (_ = this._months + us(n)), t)
              ) {
                case "month":
                  return _;
                case "quarter":
                  return _ / 3;
                case "year":
                  return _ / 12;
              }
            else
              switch (((n = this._days + Math.round(as(this._months))), t)) {
                case "week":
                  return n / 7 + l / 6048e5;
                case "day":
                  return n + l / 864e5;
                case "hour":
                  return 24 * n + l / 36e5;
                case "minute":
                  return 1440 * n + l / 6e4;
                case "second":
                  return 86400 * n + l / 1e3;
                case "millisecond":
                  return Math.floor(864e5 * n) + l;
                default:
                  throw new Error("Unknown unit " + t);
              }
          }),
          (E.asMilliseconds = er),
          (E.asSeconds = tr),
          (E.asMinutes = ar),
          (E.asHours = nr),
          (E.asDays = ir),
          (E.asWeeks = sr),
          (E.asMonths = rr),
          (E.asQuarters = or),
          (E.asYears = _r),
          (E.valueOf = function Xs() {
            return this.isValid()
              ? this._milliseconds +
                  864e5 * this._days +
                  (this._months % 12) * 2592e6 +
                  31536e6 * H(this._months / 12)
              : NaN;
          }),
          (E._bubble = function $s() {
            var p,
              y,
              k,
              q,
              U,
              t = this._milliseconds,
              n = this._days,
              _ = this._months,
              l = this._data;
            return (
              (t >= 0 && n >= 0 && _ >= 0) ||
                (t <= 0 && n <= 0 && _ <= 0) ||
                ((t += 864e5 * ls(as(_) + n)), (n = 0), (_ = 0)),
              (l.milliseconds = t % 1e3),
              (p = re(t / 1e3)),
              (l.seconds = p % 60),
              (y = re(p / 60)),
              (l.minutes = y % 60),
              (k = re(y / 60)),
              (l.hours = k % 24),
              (n += re(k / 24)),
              (_ += U = re(us(n))),
              (n -= ls(as(U))),
              (q = re(_ / 12)),
              (_ %= 12),
              (l.days = n),
              (l.months = _),
              (l.years = q),
              this
            );
          }),
          (E.clone = function dr() {
            return ce(this);
          }),
          (E.get = function lr(t) {
            return (t = se(t)), this.isValid() ? this[t + "s"]() : NaN;
          }),
          (E.milliseconds = ur),
          (E.seconds = mr),
          (E.minutes = cr),
          (E.hours = pr),
          (E.days = hr),
          (E.weeks = function Mr() {
            return re(this.days() / 7);
          }),
          (E.months = fr),
          (E.years = gr),
          (E.humanize = function Zr(t, n) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var p,
              y,
              _ = !1,
              l = Zt;
            return (
              "object" == typeof t && ((n = t), (t = !1)),
              "boolean" == typeof t && (_ = t),
              "object" == typeof n &&
                ((l = Object.assign({}, Zt, n)),
                null != n.s && null == n.ss && (l.ss = n.s - 1)),
              (y = (function Tr(t, n, _, l) {
                var p = ce(t).abs(),
                  y = Oe(p.as("s")),
                  k = Oe(p.as("m")),
                  q = Oe(p.as("h")),
                  U = Oe(p.as("d")),
                  z = Oe(p.as("M")),
                  Ae = Oe(p.as("w")),
                  He = Oe(p.as("y")),
                  Ge =
                    (y <= _.ss && ["s", y]) ||
                    (y < _.s && ["ss", y]) ||
                    (k <= 1 && ["m"]) ||
                    (k < _.m && ["mm", k]) ||
                    (q <= 1 && ["h"]) ||
                    (q < _.h && ["hh", q]) ||
                    (U <= 1 && ["d"]) ||
                    (U < _.d && ["dd", U]);
                return (
                  null != _.w &&
                    (Ge = Ge || (Ae <= 1 && ["w"]) || (Ae < _.w && ["ww", Ae])),
                  ((Ge = Ge ||
                    (z <= 1 && ["M"]) ||
                    (z < _.M && ["MM", z]) ||
                    (He <= 1 && ["y"]) || ["yy", He])[2] = n),
                  (Ge[3] = +t > 0),
                  (Ge[4] = l),
                  yr.apply(null, Ge)
                );
              })(this, !_, l, (p = this.localeData()))),
              _ && (y = p.pastFuture(+this, y)),
              p.postformat(y)
            );
          }),
          (E.toISOString = Sa),
          (E.toString = Sa),
          (E.toJSON = Sa),
          (E.locale = ka),
          (E.localeData = ba),
          (E.toIsoString = te(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            Sa
          )),
          (E.lang = va),
          S("X", 0, 0, "unix"),
          S("x", 0, 0, "valueOf"),
          w("x", lt),
          w("X", /[+-]?\d+(\.\d{1,3})?/),
          F("X", function (t, n, _) {
            _._d = new Date(1e3 * parseFloat(t));
          }),
          F("x", function (t, n, _) {
            _._d = new Date(H(t));
          }),
          (i.version = "2.29.1"),
          (function o(t) {
            u = t;
          })(R),
          (i.fn = b),
          (i.min = function di() {
            return ga("isBefore", [].slice.call(arguments, 0));
          }),
          (i.max = function li() {
            return ga("isAfter", [].slice.call(arguments, 0));
          }),
          (i.now = function () {
            return Date.now ? Date.now() : +new Date();
          }),
          (i.utc = O),
          (i.unix = function Is(t) {
            return R(1e3 * t);
          }),
          (i.months = function Js(t, n) {
            return _s(t, n, "months");
          }),
          (i.isDate = D),
          (i.locale = be),
          (i.invalid = Ue),
          (i.duration = ce),
          (i.isMoment = oe),
          (i.weekdays = function Rs(t, n, _) {
            return ts(t, n, _, "weekdays");
          }),
          (i.parseZone = function Fs() {
            return R.apply(null, arguments).parseZone();
          }),
          (i.localeData = ke),
          (i.isDuration = Tt),
          (i.monthsShort = function Ws(t, n) {
            return _s(t, n, "monthsShort");
          }),
          (i.weekdaysMin = function zs(t, n, _) {
            return ts(t, n, _, "weekdaysMin");
          }),
          (i.defineLocale = Ot),
          (i.updateLocale = function Fn(t, n) {
            if (null != n) {
              var _,
                l,
                p = la;
              null != Q[t] && null != Q[t].parentLocale
                ? Q[t].set(P(Q[t]._config, n))
                : (null != (l = ft(t)) && (p = l._config),
                  (n = P(p, n)),
                  null == l && (n.abbr = t),
                  ((_ = new _e(n)).parentLocale = Q[t]),
                  (Q[t] = _)),
                be(t);
            } else
              null != Q[t] &&
                (null != Q[t].parentLocale
                  ? ((Q[t] = Q[t].parentLocale), t === be() && be(t))
                  : null != Q[t] && delete Q[t]);
            return Q[t];
          }),
          (i.locales = function Jn() {
            return C(Q);
          }),
          (i.weekdaysShort = function Qs(t, n, _) {
            return ts(t, n, _, "weekdaysShort");
          }),
          (i.normalizeUnits = se),
          (i.relativeTimeRounding = function Lr(t) {
            return void 0 === t ? Oe : "function" == typeof t && ((Oe = t), !0);
          }),
          (i.relativeTimeThreshold = function Yr(t, n) {
            return (
              void 0 !== Zt[t] &&
              (void 0 === n
                ? Zt[t]
                : ((Zt[t] = n), "s" === t && (Zt.ss = n - 1), !0))
            );
          }),
          (i.calendarFormat = function Oi(t, n) {
            var _ = t.diff(n, "days", !0);
            return _ < -6
              ? "sameElse"
              : _ < -1
              ? "lastWeek"
              : _ < 0
              ? "lastDay"
              : _ < 1
              ? "sameDay"
              : _ < 2
              ? "nextDay"
              : _ < 7
              ? "nextWeek"
              : "sameElse";
          }),
          (i.prototype = b),
          (i.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
          }),
          i
        );
      })();
    },
    6700: (Y, Z, f) => {
      var u = {
        "./af": 7088,
        "./af.js": 7088,
        "./ar": 7038,
        "./ar-dz": 2502,
        "./ar-dz.js": 2502,
        "./ar-kw": 128,
        "./ar-kw.js": 128,
        "./ar-ly": 4519,
        "./ar-ly.js": 4519,
        "./ar-ma": 5443,
        "./ar-ma.js": 5443,
        "./ar-sa": 7642,
        "./ar-sa.js": 7642,
        "./ar-tn": 8592,
        "./ar-tn.js": 8592,
        "./ar.js": 7038,
        "./az": 1213,
        "./az.js": 1213,
        "./be": 9191,
        "./be.js": 9191,
        "./bg": 322,
        "./bg.js": 322,
        "./bm": 8042,
        "./bm.js": 8042,
        "./bn": 9620,
        "./bn-bd": 5903,
        "./bn-bd.js": 5903,
        "./bn.js": 9620,
        "./bo": 9645,
        "./bo.js": 9645,
        "./br": 5020,
        "./br.js": 5020,
        "./bs": 4792,
        "./bs.js": 4792,
        "./ca": 7980,
        "./ca.js": 7980,
        "./cs": 6466,
        "./cs.js": 6466,
        "./cv": 365,
        "./cv.js": 365,
        "./cy": 2092,
        "./cy.js": 2092,
        "./da": 7387,
        "./da.js": 7387,
        "./de": 4307,
        "./de-at": 9459,
        "./de-at.js": 9459,
        "./de-ch": 3694,
        "./de-ch.js": 3694,
        "./de.js": 4307,
        "./dv": 9659,
        "./dv.js": 9659,
        "./el": 3460,
        "./el.js": 3460,
        "./en-au": 4369,
        "./en-au.js": 4369,
        "./en-ca": 530,
        "./en-ca.js": 530,
        "./en-gb": 9998,
        "./en-gb.js": 9998,
        "./en-ie": 3391,
        "./en-ie.js": 3391,
        "./en-il": 5414,
        "./en-il.js": 5414,
        "./en-in": 9615,
        "./en-in.js": 9615,
        "./en-nz": 1248,
        "./en-nz.js": 1248,
        "./en-sg": 3767,
        "./en-sg.js": 3767,
        "./eo": 4530,
        "./eo.js": 4530,
        "./es": 6866,
        "./es-do": 8944,
        "./es-do.js": 8944,
        "./es-mx": 9116,
        "./es-mx.js": 9116,
        "./es-us": 3609,
        "./es-us.js": 3609,
        "./es.js": 6866,
        "./et": 6725,
        "./et.js": 6725,
        "./eu": 7931,
        "./eu.js": 7931,
        "./fa": 6417,
        "./fa.js": 6417,
        "./fi": 944,
        "./fi.js": 944,
        "./fil": 1766,
        "./fil.js": 1766,
        "./fo": 5867,
        "./fo.js": 5867,
        "./fr": 1636,
        "./fr-ca": 6848,
        "./fr-ca.js": 6848,
        "./fr-ch": 7773,
        "./fr-ch.js": 7773,
        "./fr.js": 1636,
        "./fy": 4940,
        "./fy.js": 4940,
        "./ga": 1402,
        "./ga.js": 1402,
        "./gd": 6924,
        "./gd.js": 6924,
        "./gl": 6398,
        "./gl.js": 6398,
        "./gom-deva": 2457,
        "./gom-deva.js": 2457,
        "./gom-latn": 2545,
        "./gom-latn.js": 2545,
        "./gu": 2641,
        "./gu.js": 2641,
        "./he": 7536,
        "./he.js": 7536,
        "./hi": 6335,
        "./hi.js": 6335,
        "./hr": 7458,
        "./hr.js": 7458,
        "./hu": 6540,
        "./hu.js": 6540,
        "./hy-am": 5283,
        "./hy-am.js": 5283,
        "./id": 8780,
        "./id.js": 8780,
        "./is": 4205,
        "./is.js": 4205,
        "./it": 4211,
        "./it-ch": 9985,
        "./it-ch.js": 9985,
        "./it.js": 4211,
        "./ja": 1003,
        "./ja.js": 1003,
        "./jv": 420,
        "./jv.js": 420,
        "./ka": 851,
        "./ka.js": 851,
        "./kk": 6074,
        "./kk.js": 6074,
        "./km": 3343,
        "./km.js": 3343,
        "./kn": 4799,
        "./kn.js": 4799,
        "./ko": 3549,
        "./ko.js": 3549,
        "./ku": 1037,
        "./ku.js": 1037,
        "./ky": 3125,
        "./ky.js": 3125,
        "./lb": 9586,
        "./lb.js": 9586,
        "./lo": 2349,
        "./lo.js": 2349,
        "./lt": 2400,
        "./lt.js": 2400,
        "./lv": 9991,
        "./lv.js": 9991,
        "./me": 8477,
        "./me.js": 8477,
        "./mi": 5118,
        "./mi.js": 5118,
        "./mk": 5943,
        "./mk.js": 5943,
        "./ml": 3849,
        "./ml.js": 3849,
        "./mn": 1977,
        "./mn.js": 1977,
        "./mr": 6184,
        "./mr.js": 6184,
        "./ms": 485,
        "./ms-my": 4524,
        "./ms-my.js": 4524,
        "./ms.js": 485,
        "./mt": 6681,
        "./mt.js": 6681,
        "./my": 2024,
        "./my.js": 2024,
        "./nb": 2688,
        "./nb.js": 2688,
        "./ne": 8914,
        "./ne.js": 8914,
        "./nl": 1758,
        "./nl-be": 2272,
        "./nl-be.js": 2272,
        "./nl.js": 1758,
        "./nn": 1510,
        "./nn.js": 1510,
        "./oc-lnc": 2797,
        "./oc-lnc.js": 2797,
        "./pa-in": 7944,
        "./pa-in.js": 7944,
        "./pl": 1605,
        "./pl.js": 1605,
        "./pt": 4225,
        "./pt-br": 3840,
        "./pt-br.js": 3840,
        "./pt.js": 4225,
        "./ro": 352,
        "./ro.js": 352,
        "./ru": 5127,
        "./ru.js": 5127,
        "./sd": 2525,
        "./sd.js": 2525,
        "./se": 9893,
        "./se.js": 9893,
        "./si": 3123,
        "./si.js": 3123,
        "./sk": 9635,
        "./sk.js": 9635,
        "./sl": 8106,
        "./sl.js": 8106,
        "./sq": 8799,
        "./sq.js": 8799,
        "./sr": 7949,
        "./sr-cyrl": 2872,
        "./sr-cyrl.js": 2872,
        "./sr.js": 7949,
        "./ss": 6167,
        "./ss.js": 6167,
        "./sv": 9713,
        "./sv.js": 9713,
        "./sw": 1982,
        "./sw.js": 1982,
        "./ta": 2732,
        "./ta.js": 2732,
        "./te": 3636,
        "./te.js": 3636,
        "./tet": 2115,
        "./tet.js": 2115,
        "./tg": 9801,
        "./tg.js": 9801,
        "./th": 2868,
        "./th.js": 2868,
        "./tk": 1310,
        "./tk.js": 1310,
        "./tl-ph": 2360,
        "./tl-ph.js": 2360,
        "./tlh": 6645,
        "./tlh.js": 6645,
        "./tr": 8374,
        "./tr.js": 8374,
        "./tzl": 256,
        "./tzl.js": 256,
        "./tzm": 1595,
        "./tzm-latn": 1631,
        "./tzm-latn.js": 1631,
        "./tzm.js": 1595,
        "./ug-cn": 6050,
        "./ug-cn.js": 6050,
        "./uk": 5610,
        "./uk.js": 5610,
        "./ur": 6077,
        "./ur.js": 6077,
        "./uz": 2862,
        "./uz-latn": 2207,
        "./uz-latn.js": 2207,
        "./uz.js": 2862,
        "./vi": 8093,
        "./vi.js": 8093,
        "./x-pseudo": 5590,
        "./x-pseudo.js": 5590,
        "./yo": 9058,
        "./yo.js": 9058,
        "./zh-cn": 7908,
        "./zh-cn.js": 7908,
        "./zh-hk": 8867,
        "./zh-hk.js": 8867,
        "./zh-mo": 1133,
        "./zh-mo.js": 1133,
        "./zh-tw": 3291,
        "./zh-tw.js": 3291,
      };
      function i(r) {
        var e = o(r);
        return f(e);
      }
      function o(r) {
        if (!f.o(u, r)) {
          var e = new Error("Cannot find module '" + r + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return u[r];
      }
      (i.keys = function () {
        return Object.keys(u);
      }),
        (i.resolve = o),
        (Y.exports = i),
        (i.id = 6700);
    },
  },
]);
