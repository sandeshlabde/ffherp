(self.webpackChunkMyProject = self.webpackChunkMyProject || []).push([
  [768],
  {
    3768: (Y, D, h) => {
      "use strict";
      h.r(D), h.d(D, { AdminModule: () => fa });
      var l = h(9808),
        n = h(1083),
        o = h(2993),
        s = h(1423),
        e = h(5e3),
        u = h(3700),
        c = h(2181);
      let g = (() => {
        class r {
          constructor(i, m) {
            (this.global = i),
              (this.router = m),
              this.global.LOGGED_IN_USER &&
                ((this.companyName = this.global.LOGGED_IN_USER.CoName),
                (this.userName = this.global.LOGGED_IN_USER.Username));
          }
          onSignOut() {
            localStorage.removeItem("Global.LOGGED_IN_USER"),
              this.router.navigate(["/login"]);
          }
          ngOnInit() {}
        }
        return (
          (r.ɵfac = function (i) {
            return new (i || r)(e.Y36(u.x), e.Y36(n.F0));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["app-header"]],
            decls: 102,
            vars: 7,
            consts: [
              ["role", "banner", 1, "toolbar"],
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
            ],
            template: function (i, m) {
              if (
                (1 & i &&
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
                    return m.onSignOut();
                  }),
                  e._uU(101, "Sign out"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA()),
                2 & i)
              ) {
                const M = e.MAs(10),
                  T = e.MAs(35),
                  v = e.MAs(72),
                  be = e.MAs(92);
                e.xp6(4),
                  e.Q6J("height", 40),
                  e.xp6(2),
                  e.hij(" ", m.companyName, " "),
                  e.xp6(1),
                  e.Q6J("matMenuTriggerFor", M),
                  e.xp6(25),
                  e.Q6J("matMenuTriggerFor", T),
                  e.xp6(37),
                  e.Q6J("matMenuTriggerFor", v),
                  e.xp6(19),
                  e.Q6J("matMenuTriggerFor", be),
                  e.xp6(2),
                  e.hij(" ", m.userName, " ");
              }
            },
            directives: [c.p6, c.VK, c.OP],
            styles: [
              ".spacer[_ngcontent-%COMP%]{flex:1}.toolbar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;height:60px;display:flex;align-items:center;background-color:#b8e0d4;color:#000;font-weight:600;z-index:100;position:fixed}.header-link[_ngcontent-%COMP%]{margin:0 16px;list-style:none}#ffh[_ngcontent-%COMP%]{color:#000;margin-right:10px}.companyLogo[_ngcontent-%COMP%]{padding-left:83px}i[_ngcontent-%COMP%]{font-size:18px;color:#000}.dropdown-list[_ngcontent-%COMP%]{color:#000;text-decoration:none}.dropdown-list[_ngcontent-%COMP%]:hover{color:#fff;background-color:#000}",
            ],
          })),
          r
        );
      })();
      var L = h(3874);
      let k = (() => {
          class r {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (r.ɵfac = function (i) {
              return new (i || r)();
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
              selectors: [["app-side-nav"]],
              decls: 153,
              vars: 0,
              consts: [
                [1, "sidebar", "close", "pb-3"],
                [1, "nav-links"],
                [1, "iocn-link"],
                [1, "sub-menu", "shadow-lg", "bg-body", "rounded"],
                ["routerLink", "/admin/Dashboard/Dashboard", 1, "link_name"],
                [1, "link_name"],
                [
                  "routerLink",
                  "/admin/ListDashboard/Prospect",
                  "routerLinkActive",
                  "active",
                ],
                [
                  "routerLink",
                  "/admin/page/Prospect",
                  "routerLinkActive",
                  "active",
                  "id",
                  "Prospect",
                ],
                ["id", "Leaddash", "onclick", "openDash()"],
                [
                  "routerLink",
                  "/admin/page/Lead",
                  "routerLinkActive",
                  "active",
                  "id",
                  "Lead",
                ],
                ["id", "SOdash"],
                [
                  "routerLink",
                  "/admin/page/SalesOrderLIst",
                  "routerLinkActive",
                  "active",
                  "id",
                  "SO",
                ],
                ["id", "MOdash"],
                [
                  "routerLink",
                  "/admin/page/MoList",
                  "routerLinkActive",
                  "active",
                  "id",
                  "MO",
                ],
                ["id", "POdash"],
                [
                  "routerLink",
                  "/admin/page/POList",
                  "routerLinkActive",
                  "active",
                  "id",
                  "PO",
                ],
                ["id", "MIdash"],
                [
                  "routerLink",
                  "/admin/page/MIList",
                  "routerLinkActive",
                  "active",
                ],
                ["id", "RepairDash"],
                ["routerLink", "/admin/page/Repair"],
                ["routerLink", "/admin/page/Payment", "id", "Invoice"],
                [
                  "routerLink",
                  "/admin/page/Payable",
                  "routerLinkActive",
                  "active",
                  "id",
                  "PI",
                ],
                ["id", "PIDash"],
                ["routerLink", "/admin/page/Voucher", "id", "vouchar"],
                [1, "fas", "fa-envelope-square"],
                [
                  "routerLink",
                  "/admin/page/Ticket",
                  "routerLinkActive",
                  "active",
                  "id",
                  "Ticket",
                ],
                ["id", "TicketDash"],
                [1, "fas", "fa-handshake"],
                [
                  "routerLink",
                  "/admin/page/AMC",
                  "routerLinkActive",
                  "active",
                  "id",
                  " AMC",
                ],
                ["id", "AMCDash"],
                [1, "fas", "fa-briefcase"],
                [
                  "routerLink",
                  "/admin/page/Work",
                  "routerLinkActive",
                  "active",
                  "id",
                  "Work",
                ],
                ["id", "WorkDash"],
                [1, "fas", "fa-tasks"],
                ["id", "Project"],
              ],
              template: function (i, m) {
                1 & i &&
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
                  e._uU(22, "ProspectDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(23, "li"),
                  e.TgZ(24, "a", 7),
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
                  e._uU(37, "LeadDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(38, "li"),
                  e.TgZ(39, "a", 9),
                  e._uU(40, "LeadList"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(41, "li"),
                  e.TgZ(42, "a", 10),
                  e._uU(43, "SODashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(44, "li"),
                  e.TgZ(45, "a", 11),
                  e._uU(46, "SOList"),
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
                  e.TgZ(57, "a", 12),
                  e._uU(58, "MODashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(59, "li"),
                  e.TgZ(60, "a", 13),
                  e._uU(61, "MOList"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(62, "li"),
                  e.TgZ(63, "a", 14),
                  e._uU(64, "PODashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(65, "li"),
                  e.TgZ(66, "a", 15),
                  e._uU(67, "POList"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(68, "li"),
                  e.TgZ(69, "a", 16),
                  e._uU(70, "MIDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(71, "li"),
                  e.TgZ(72, "a", 17),
                  e._uU(73, "MIList"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(74, "li"),
                  e.TgZ(75, "a", 18),
                  e._uU(76, "RepairDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(77, "li"),
                  e.TgZ(78, "a", 19),
                  e._uU(79, "RepairList"),
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
                  e.TgZ(90, "a"),
                  e._uU(91, "InvoiceDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(92, "li"),
                  e.TgZ(93, "a", 20),
                  e._uU(94, "InvoiceList"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(95, "li"),
                  e.TgZ(96, "a", 21),
                  e._uU(97, "PIList"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(98, "li"),
                  e.TgZ(99, "a", 22),
                  e._uU(100, "PIDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(101, "li"),
                  e.TgZ(102, "a", 23),
                  e._uU(103, "Voucher"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(104, "li"),
                  e.TgZ(105, "div", 2),
                  e._UZ(106, "i", 24),
                  e.qZA(),
                  e.TgZ(107, "ul", 3),
                  e.TgZ(108, "li"),
                  e.TgZ(109, "a", 5),
                  e._uU(110, "Support"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(111, "li"),
                  e.TgZ(112, "a", 25),
                  e._uU(113, "TicketList"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(114, "li"),
                  e.TgZ(115, "a", 26),
                  e._uU(116, "TicketDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(117, "li"),
                  e.TgZ(118, "div", 2),
                  e._UZ(119, "i", 27),
                  e.qZA(),
                  e.TgZ(120, "ul", 3),
                  e.TgZ(121, "li"),
                  e.TgZ(122, "a", 5),
                  e._uU(123, "AMC"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(124, "li"),
                  e.TgZ(125, "a", 28),
                  e._uU(126, "AMCList"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(127, "li"),
                  e.TgZ(128, "a", 29),
                  e._uU(129, "AMCDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(130, "li"),
                  e.TgZ(131, "div", 2),
                  e._UZ(132, "i", 30),
                  e.qZA(),
                  e.TgZ(133, "ul", 3),
                  e.TgZ(134, "li"),
                  e.TgZ(135, "a", 5),
                  e._uU(136, " Work"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(137, "li"),
                  e.TgZ(138, "a", 31),
                  e._uU(139, "WorkList"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(140, "li"),
                  e.TgZ(141, "a", 32),
                  e._uU(142, "WorkDashboard"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(143, "li"),
                  e.TgZ(144, "div", 2),
                  e._UZ(145, "i", 33),
                  e.qZA(),
                  e.TgZ(146, "ul", 3),
                  e.TgZ(147, "li"),
                  e.TgZ(148, "a", 5),
                  e._uU(149, " Project"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(150, "li"),
                  e.TgZ(151, "a", 34),
                  e._uU(152, "My Project"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA());
              },
              directives: [L.Hw, n.yS, n.Od],
              styles: [
                ".sidebar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100vh;width:260px;transition:all .5s ease;z-index:100}.sidebar.close[_ngcontent-%COMP%]{width:50px}.nav-links[_ngcontent-%COMP%]{height:100%;padding:60px 0 0;overflow:auto}.nav-links[_ngcontent-%COMP%]{overflow:visible}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;list-style:none;transition:all .4s ease;padding:1px 0}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#b8e0d4;color:#000}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .iocn-link[_ngcontent-%COMP%]{text-align:center;background-color:#b8e0d4}.sidebar.close[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .iocn-link[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{height:50px;min-width:50px;text-align:center;line-height:50px;color:#dcebdc;font-size:20px;cursor:pointer;transition:all .3s ease}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{margin-top:2px;background:white;display:none}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li.showMenu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;font-size:15px;padding:5px 0;white-space:nowrap;opacity:.6;transition:all .3s ease}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:1;color:#000}.sidebar.close[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{position:absolute;left:100%;top:-10px;margin-top:0;padding:10px 3px;border-radius:0 6px 6px 0;opacity:0;display:block;pointer-events:none;transition:0s}.sidebar.close[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .sub-menu[_ngcontent-%COMP%]{top:0;opacity:1;pointer-events:auto;transition:all .4s ease}.sidebar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .link_name[_ngcontent-%COMP%]{display:none}.sidebar.close[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .link_name[_ngcontent-%COMP%]{font-size:18px;opacity:1;display:block;background-color:#dcebdc}.sideNavimg[_ngcontent-%COMP%]{max-height:33px}",
              ],
            })),
            r
          );
        })(),
        C = (() => {
          class r {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (r.ɵfac = function (i) {
              return new (i || r)();
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
              selectors: [["app-comman"]],
              decls: 3,
              vars: 0,
              template: function (i, m) {
                1 & i &&
                  (e._UZ(0, "app-header"),
                  e._UZ(1, "app-side-nav"),
                  e._UZ(2, "router-outlet"));
              },
              directives: [g, k, n.lC],
              styles: [""],
            })),
            r
          );
        })();
      var A = h(5439),
        N = h.t(A, 2);
      const ne = {
        parse: { dateInput: "LL" },
        display: {
          dateInput: "LL",
          monthYearLabel: "MMM YYYY",
          dateA11yLabel: "LL",
          monthYearA11yLabel: "MMMM YYYY",
        },
      };
      var b = h(508);
      const $ = A || N,
        le = new e.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS", {
          providedIn: "root",
          factory: function qe() {
            return { useUtc: !1 };
          },
        });
      function Tt(r, f) {
        const i = Array(r);
        for (let m = 0; m < r; m++) i[m] = f(m);
        return i;
      }
      let Oe = (() => {
        class r extends b._A {
          constructor(i, m) {
            super(), (this._options = m), this.setLocale(i || $.locale());
          }
          setLocale(i) {
            super.setLocale(i);
            let m = $.localeData(i);
            this._localeData = {
              firstDayOfWeek: m.firstDayOfWeek(),
              longMonths: m.months(),
              shortMonths: m.monthsShort(),
              dates: Tt(31, (M) => this.createDate(2017, 0, M + 1).format("D")),
              longDaysOfWeek: m.weekdays(),
              shortDaysOfWeek: m.weekdaysShort(),
              narrowDaysOfWeek: m.weekdaysMin(),
            };
          }
          getYear(i) {
            return this.clone(i).year();
          }
          getMonth(i) {
            return this.clone(i).month();
          }
          getDate(i) {
            return this.clone(i).date();
          }
          getDayOfWeek(i) {
            return this.clone(i).day();
          }
          getMonthNames(i) {
            return "long" == i
              ? this._localeData.longMonths
              : this._localeData.shortMonths;
          }
          getDateNames() {
            return this._localeData.dates;
          }
          getDayOfWeekNames(i) {
            return "long" == i
              ? this._localeData.longDaysOfWeek
              : "short" == i
              ? this._localeData.shortDaysOfWeek
              : this._localeData.narrowDaysOfWeek;
          }
          getYearName(i) {
            return this.clone(i).format("YYYY");
          }
          getFirstDayOfWeek() {
            return this._localeData.firstDayOfWeek;
          }
          getNumDaysInMonth(i) {
            return this.clone(i).daysInMonth();
          }
          clone(i) {
            return i.clone().locale(this.locale);
          }
          createDate(i, m, M) {
            const T = this._createMoment({ year: i, month: m, date: M }).locale(
              this.locale
            );
            return T.isValid(), T;
          }
          today() {
            return this._createMoment().locale(this.locale);
          }
          parse(i, m) {
            return i && "string" == typeof i
              ? this._createMoment(i, m, this.locale)
              : i
              ? this._createMoment(i).locale(this.locale)
              : null;
          }
          format(i, m) {
            return (i = this.clone(i)), this.isValid(i), i.format(m);
          }
          addCalendarYears(i, m) {
            return this.clone(i).add({ years: m });
          }
          addCalendarMonths(i, m) {
            return this.clone(i).add({ months: m });
          }
          addCalendarDays(i, m) {
            return this.clone(i).add({ days: m });
          }
          toIso8601(i) {
            return this.clone(i).format();
          }
          deserialize(i) {
            let m;
            if (i instanceof Date)
              m = this._createMoment(i).locale(this.locale);
            else if (this.isDateInstance(i)) return this.clone(i);
            if ("string" == typeof i) {
              if (!i) return null;
              m = this._createMoment(i, $.ISO_8601).locale(this.locale);
            }
            return m && this.isValid(m)
              ? this._createMoment(m).locale(this.locale)
              : super.deserialize(i);
          }
          isDateInstance(i) {
            return $.isMoment(i);
          }
          isValid(i) {
            return this.clone(i).isValid();
          }
          invalid() {
            return $.invalid();
          }
          _createMoment(i, m, M) {
            const { strict: T, useUtc: v } = this._options || {};
            return v ? $.utc(i, m, M, T) : $(i, m, M, T);
          }
        }
        return (
          (r.ɵfac = function (i) {
            return new (i || r)(e.LFG(b.Ad, 8), e.LFG(le, 8));
          }),
          (r.ɵprov = e.Yz7({ token: r, factory: r.ɵfac })),
          r
        );
      })();
      var re = h(7626),
        ee = h(520),
        j = h(7322),
        he = h(4107),
        S = h(3075),
        me = h(7531),
        z = h(6856),
        fe = h(7423),
        et = h(9224),
        Da = h(483);
      function Za(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 16), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.s9C("id", i.id),
            e.Q6J("value", i.key),
            e.xp6(1),
            e.hij(" ", i.value, " ");
        }
      }
      function ce(r, f) {
        if ((1 & r && (e.TgZ(0, "th"), e._uU(1), e.qZA()), 2 & r)) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function Lt(r, f) {
        if (
          (1 & r && (e.ynx(0), e.YNc(1, ce, 2, 1, "th", 15), e.BQk()), 2 & r)
        ) {
          const i = f.$implicit;
          e.xp6(1), e.Q6J("ngIf", "total" != i);
        }
      }
      function tt(r, f) {
        if ((1 & r && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & r)) {
          const i = e.oxw().$implicit,
            m = e.oxw().$implicit;
          e.xp6(1), e.Oqu(m.value[i]);
        }
      }
      function Yt(r, f) {
        if (
          (1 & r && (e.ynx(0), e.YNc(1, tt, 2, 1, "td", 15), e.BQk()), 2 & r)
        ) {
          const i = f.$implicit;
          e.xp6(1), e.Q6J("ngIf", "total" != i);
        }
      }
      function Ne(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "tr"),
            e.TgZ(1, "td"),
            e.TgZ(2, "a", 20),
            e.NdJ("click", function () {
              const T = e.CHM(i).$implicit;
              return e.oxw(2).piChart(T.value);
            }),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.YNc(4, Yt, 2, 1, "ng-container", 19),
            e.TgZ(5, "td"),
            e.TgZ(6, "a", 21),
            e._uU(7),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = f.$implicit,
            m = e.oxw(2);
          e.xp6(3),
            e.hij(" ", i.key, " "),
            e.xp6(1),
            e.Q6J("ngForOf", m.columns),
            e.xp6(3),
            e.Oqu(i.value.total);
        }
      }
      function q(r, f) {
        if ((1 & r && (e.TgZ(0, "td"), e._uU(1), e.qZA()), 2 & r)) {
          const i = e.oxw().$implicit,
            m = e.oxw(2);
          e.xp6(1), e.hij(" ", m.getTotal(i), " ");
        }
      }
      function ka(r, f) {
        if (
          (1 & r && (e.ynx(0), e.YNc(1, q, 2, 1, "td", 15), e.BQk()), 2 & r)
        ) {
          const i = f.$implicit;
          e.xp6(1), e.Q6J("ngIf", "total" != i);
        }
      }
      function va(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "table", 17),
            e.TgZ(1, "thead"),
            e.TgZ(2, "tr", 18),
            e.TgZ(3, "th"),
            e._uU(4, "Actor"),
            e.qZA(),
            e.YNc(5, Lt, 2, 1, "ng-container", 19),
            e.TgZ(6, "th"),
            e._uU(7, "Total"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(8, "tbody"),
            e.YNc(9, Ne, 8, 3, "tr", 19),
            e.ALo(10, "keyvalue"),
            e.TgZ(11, "tr"),
            e.TgZ(12, "td"),
            e._uU(13, "Total"),
            e.qZA(),
            e.YNc(14, ka, 2, 1, "ng-container", 19),
            e.TgZ(15, "td"),
            e._uU(16),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & r)
        ) {
          const i = e.oxw();
          e.xp6(5),
            e.Q6J("ngForOf", i.columns),
            e.xp6(4),
            e.Q6J("ngForOf", e.lcZ(10, 4, i.tableData)),
            e.xp6(5),
            e.Q6J("ngForOf", i.columns),
            e.xp6(2),
            e.Oqu(i.getTotal("total"));
        }
      }
      function at(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "div"),
            e.TgZ(1, "h2", 22),
            e._uU(2, "Chart"),
            e.qZA(),
            e.TgZ(3, "mat-card"),
            e._UZ(4, "canvas", 23),
            e.qZA(),
            e.qZA()),
          2 & r)
        ) {
          const i = e.oxw();
          e.xp6(4),
            e.Q6J("type", "pie")("datasets", i.pieChartData)(
              "labels",
              i.pieChartLabels
            )("options", i.pieChartOptions)("legend", i.pieChartLegend);
        }
      }
      let Rt = (() => {
        class r {
          constructor(i, m, M) {
            (this.listService = i),
              (this.global = m),
              (this.httpClient = M),
              (this.selectedValue = "entActionType"),
              (this.From = A().format("YYYY-MM-DD")),
              (this.To = A().format("YYYY-MM-DD")),
              (this.minDate = A().format("YYYY-MM-DD")),
              (this.maxDate = A().format("YYYY-MM-DD")),
              this.httpClient.get("./assets/inputlabel.json").subscribe((T) => {
                (this.jsonData = T), (this.ddData = this.jsonData.DDvalue);
              });
          }
          getPivotTable(i, m) {
            const M = new Map();
            return (
              i.forEach((T) => {
                M.set(
                  T.entActionContactName,
                  Object.assign(
                    Object.assign({}, M.get(T.entActionContactName)),
                    {
                      [T[m]]:
                        M.get(T.entActionContactName) &&
                        M.get(T.entActionContactName)[T[m]]
                          ? M.get(T.entActionContactName)[T[m]] + 1
                          : 1,
                      total:
                        M.get(T.entActionContactName) &&
                        M.get(T.entActionContactName).total
                          ? M.get(T.entActionContactName).total + 1
                          : 1,
                    }
                  )
                );
              }),
              M
            );
          }
          submitValue() {
            const i = A(this.From).format("YYYY-MM-DD"),
              m = A(this.To).format("YYYY-MM-DD");
            this.listService
              .showtotalActivity({
                eDbname: this.global.LOGGED_IN_USER.DbName,
                eFromDate: i,
                eMissedFlag: "1",
                eModuleFlag: "All",
                ePassword: this.global.LOGGED_IN_USER.encryptPswd,
                eToDate: m,
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
              const i = Array.from(this.tableData).reduce(
                (m, M) => (
                  Object.keys(M[1]).forEach((T) => {
                    m.add(T.trim());
                  }),
                  m
                ),
                new Set()
              );
              return Array.from(i);
            }
            return [];
          }
          updateTable() {
            this.submitValue();
          }
          getTotal(i) {
            return Array.from(this.tableData).reduce(
              (m, M) => (M[1] && M[1][i] ? M[1][i] + m : m),
              0
            );
          }
          piChart(i) {
            const m = Object.keys(i)
                .filter((T) => "total" !== T)
                .reduce((T, v) => ((T[v] = i[v]), T), {}),
              M = Object.values(m);
            (this.pieChartLabels = Object.keys(m)),
              (this.pieChartOptions = {
                scaleShowVerticalLines: !1,
                responsive: !0,
              }),
              (this.pieChartLegend = !0),
              (this.pieChartData = [{ data: M }]);
          }
          ngOnInit() {}
        }
        return (
          (r.ɵfac = function (i) {
            return new (i || r)(e.Y36(re.L), e.Y36(u.x), e.Y36(ee.eN));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["app-dash-board"]],
            features: [
              e._Bn([
                { provide: b.Ad, useValue: "en-GB" },
                { provide: b._A, useClass: Oe, deps: [b.Ad, le] },
                { provide: b.sG, useValue: ne },
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
              ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"],
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
            template: function (i, m) {
              if (
                (1 & i &&
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
                    return (m.selectedValue = T);
                  })("ngModelChange", function () {
                    return m.updateTable();
                  }),
                  e.YNc(8, Za, 2, 3, "mat-option", 5),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(9, "mat-form-field"),
                  e.TgZ(10, "mat-label"),
                  e._uU(11, "From Date"),
                  e.qZA(),
                  e.TgZ(12, "input", 6, 7),
                  e.NdJ("ngModelChange", function (T) {
                    return (m.From = T);
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
                    return (m.To = T);
                  }),
                  e.qZA(),
                  e._UZ(22, "mat-datepicker-toggle", 8),
                  e._UZ(23, "mat-datepicker", null, 11),
                  e.qZA(),
                  e.TgZ(25, "button", 12),
                  e.NdJ("click", function () {
                    return m.submitValue();
                  }),
                  e._uU(26, " Go "),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(27, "div"),
                  e.YNc(28, va, 17, 6, "table", 13),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(29, "div", 14),
                  e.YNc(30, at, 5, 5, "div", 15),
                  e.qZA(),
                  e.qZA(),
                  e.qZA()),
                2 & i)
              ) {
                const M = e.MAs(16),
                  T = e.MAs(24);
                e.xp6(7),
                  e.Q6J("ngModel", m.selectedValue),
                  e.xp6(1),
                  e.Q6J("ngForOf", m.ddData),
                  e.xp6(4),
                  e.Q6J("matDatepicker", M)("ngModel", m.From)(
                    "max",
                    m.maxDate
                  ),
                  e.xp6(2),
                  e.Q6J("for", M),
                  e.xp6(6),
                  e.Q6J("matDatepicker", T)("ngModel", m.To),
                  e.xp6(2),
                  e.Q6J("for", T),
                  e.xp6(6),
                  e.Q6J("ngIf", m.tableData),
                  e.xp6(2),
                  e.Q6J("ngIf", m.pieChartData);
              }
            },
            directives: [
              j.KE,
              j.hX,
              he.gD,
              S.JJ,
              S.On,
              l.sg,
              me.Nt,
              z.hl,
              S.Fj,
              z.nW,
              j.R9,
              z.Mq,
              fe.lW,
              l.O5,
              b.ey,
              et.a8,
              Da.jh,
            ],
            pipes: [l.Nd],
            styles: [
              ".chart[_ngcontent-%COMP%]{display:block;width:400px;height:400px}.contain[_ngcontent-%COMP%]{padding:64px 17px 0 67px}th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}button[_ngcontent-%COMP%]{box-shadow:0 2px 5px #00000042!important;height:45px;margin-bottom:10px;border:1px solid rgb(108,166,231)!important}button[_ngcontent-%COMP%]:hover{color:#000}mat-form-field[_ngcontent-%COMP%]{margin:0 10px}.ChartHeading[_ngcontent-%COMP%]{text-align:center;margin-top:10px}.mat-card[_ngcontent-%COMP%]{margin-top:30px;display:block;width:500px;height:500px;box-shadow:2px 2px 2px 2px #0003,2px 2px 2px 2px #00000024,2px 2px 2px 2px #0000001f}.piaChart[_ngcontent-%COMP%]{display:flex;justify-content:center}.option[_ngcontent-%COMP%]{display:flex;margin:20px 0 10px;height:54px}.a[_ngcontent-%COMP%]{text-decoration:none;font-size:11px;font-weight:400}.a[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer;font-size:small}",
            ],
          })),
          r
        );
      })();
      var ba = h(2313);
      let wa = (() => {
        class r {
          constructor(i) {
            this.sanitizer = i;
          }
          ngOnInit() {
            this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
              "https://ffherp.co.in/Pages/Modules/Lead/SupDashboard.aspx"
            );
          }
        }
        return (
          (r.ɵfac = function (i) {
            return new (i || r)(e.Y36(ba.H7));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["app-list-dashboard"]],
            decls: 2,
            vars: 1,
            consts: [
              [1, "DashBoard"],
              ["frameborder", "0", 1, "Iframe", 3, "src"],
            ],
            template: function (i, m) {
              1 & i && (e.TgZ(0, "div", 0), e._UZ(1, "iframe", 1), e.qZA()),
                2 & i && (e.xp6(1), e.Q6J("src", m.safeUrl, e.uOi));
            },
            styles: [
              "#DashBoard[_ngcontent-%COMP%]{padding:0 17px 0 67px}.Iframe[_ngcontent-%COMP%]{height:100vh;width:100%}",
            ],
          })),
          r
        );
      })();
      var zt = h(6087),
        oe = h(4999),
        Dt = h(4847),
        Q = h(8966);
      function Aa(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "tr", 11),
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
            e.TgZ(27, "select", 12),
            e.TgZ(28, "option", 13),
            e._uU(29, "Approved"),
            e.qZA(),
            e.TgZ(30, "option", 13),
            e._uU(31, "Not Approved"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(32, "td"),
            e._UZ(33, "input", 14),
            e.qZA(),
            e.TgZ(34, "td"),
            e._UZ(35, "input", 15),
            e.qZA(),
            e.qZA()),
          2 & r)
        ) {
          const i = f.$implicit;
          e.xp6(2),
            e.Oqu(i.VoucherNo),
            e.xp6(2),
            e.Oqu(i.UpdatedBy),
            e.xp6(2),
            e.Oqu(e.xi3(7, 13, i.UpdatedOn, "dd MMM yyyy")),
            e.xp6(3),
            e.Oqu(i.ExpenseTitle),
            e.xp6(2),
            e.Oqu(i.EntityName),
            e.xp6(2),
            e.Oqu(i.Budgeted),
            e.xp6(2),
            e.Oqu(i.ExpenseTitle),
            e.xp6(2),
            e.Oqu(i.ApprovalStatus),
            e.xp6(2),
            e.Oqu(i.ApprovedAmount),
            e.xp6(2),
            e.Oqu(i.ApprovedAmount),
            e.xp6(2),
            e.Oqu(i.PaidAmount),
            e.xp6(2),
            e.Oqu(i.DueAmount),
            e.xp6(8),
            e.s9C("value", i.ApprovalStatus);
        }
      }
      let xa = (() => {
        class r {
          constructor(i, m, M) {
            (this.data = i),
              (this.listService = m),
              (this.global = M),
              console.log(i.installno, i.entityName, i.entityid),
              this.listService
                .showvoucharData({
                  id: i.installno,
                  entityName: i.entityName,
                  entityId: i.entityid,
                  dbname: this.global.LOGGED_IN_USER.DbName,
                  encrypt: this.global.LOGGED_IN_USER.encryptPswd,
                })
                .subscribe((je) => {
                  console.log(JSON.parse(je)),
                    (this.approvalData = JSON.parse(je));
                });
          }
          ngOnInit() {}
        }
        return (
          (r.ɵfac = function (i) {
            return new (i || r)(e.Y36(Q.WI), e.Y36(re.L), e.Y36(u.x));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["app-approval"]],
            decls: 45,
            vars: 1,
            consts: [
              [1, "noteBox"],
              [1, "modal-header", "bg-primary", "text-white", "text-center"],
              [1, "modal-title", "title"],
              ["type", "button", "mat-dialog-close", "", 1, "btn-close"],
              [1, "modal-body"],
              [1, "form-field"],
              ["type", "password", "id", "", 1, "input-text"],
              ["for", "", 1, "labels"],
              [1, "table", "table-hover", "table-striped"],
              [1, "table-primary"],
              ["class", "table-light", 4, "ngFor", "ngForOf"],
              [1, "table-light"],
              ["name", "", "id", "", 1, "dd"],
              ["value", ""],
              ["type", "number", "name", "", "id", "", 1, "input1", 3, "value"],
              ["type", "text", 1, "input2"],
            ],
            template: function (i, m) {
              1 & i &&
                (e.TgZ(0, "div", 0),
                e.TgZ(1, "div", 1),
                e.TgZ(2, "h4", 2),
                e._uU(3, "Vouchar Detail"),
                e.qZA(),
                e._UZ(4, "button", 3),
                e.qZA(),
                e.TgZ(5, "div", 4),
                e.TgZ(6, "div", 5),
                e._UZ(7, "input", 6),
                e.TgZ(8, "label", 7),
                e._uU(9, "Enter Password for validate and Approve..."),
                e.qZA(),
                e.qZA(),
                e.TgZ(10, "table", 8),
                e.TgZ(11, "thead"),
                e.TgZ(12, "tr", 9),
                e.TgZ(13, "th"),
                e._uU(14, "Seq"),
                e.qZA(),
                e.TgZ(15, "th"),
                e._uU(16, "By"),
                e.qZA(),
                e.TgZ(17, "th"),
                e._uU(18, "On"),
                e.qZA(),
                e.TgZ(19, "th"),
                e._uU(20, "Head"),
                e.qZA(),
                e.TgZ(21, "th"),
                e._uU(22, "Entity"),
                e.qZA(),
                e.TgZ(23, "th"),
                e._uU(24, "Budget"),
                e.qZA(),
                e.TgZ(25, "th"),
                e._uU(26, "Exp."),
                e.qZA(),
                e.TgZ(27, "th"),
                e._uU(28, "Appv Status"),
                e.qZA(),
                e.TgZ(29, "th"),
                e._uU(30, "Appv Amt"),
                e.qZA(),
                e.TgZ(31, "th"),
                e._uU(32, "Paid Amt"),
                e.qZA(),
                e.TgZ(33, "th"),
                e._uU(34, "Due Amt"),
                e.qZA(),
                e.TgZ(35, "th"),
                e._uU(36, "Paid Status"),
                e.qZA(),
                e.TgZ(37, "th"),
                e._uU(38, "Appv Status"),
                e.qZA(),
                e.TgZ(39, "th"),
                e._uU(40, "Appv Amt"),
                e.qZA(),
                e.TgZ(41, "th"),
                e._uU(42, "Remark"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(43, "tbody"),
                e.YNc(44, Aa, 36, 16, "tr", 10),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA()),
                2 & i && (e.xp6(44), e.Q6J("ngForOf", m.approvalData));
            },
            directives: [Q.ZT, l.sg, S.YN, S.Kr],
            pipes: [l.uU],
            styles: [
              "tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:left}.input1[_ngcontent-%COMP%]{width:50px}.input2[_ngcontent-%COMP%]{width:100px}.dd[_ngcontent-%COMP%]{width:40px}.form-field[_ngcontent-%COMP%]{position:relative;margin:10px 0 17px}.labels[_ngcontent-%COMP%]{display:block;position:absolute;top:-16px;font-size:14px;font-weight:400;color:gray;cursor:text}.input-text[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{color:#00f;top:-20px}.input-text[_ngcontent-%COMP%]{display:block;width:100%;height:24px;font-size:14px;font-weight:400;color:#000;background:transparent;border:none;outline:none;border-bottom:1px solid rgb(201,199,199)}.input-text[_ngcontent-%COMP%]:focus{border-bottom:1px solid blue;outline:none}",
            ],
          })),
          r
        );
      })();
      function Sa(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "div"),
            e.TgZ(1, "div", 15),
            e.TgZ(2, "div", 16),
            e._uU(3),
            e.qZA(),
            e._UZ(4, "div", 17),
            e.TgZ(5, "div", 18),
            e._uU(6),
            e.ALo(7, "date"),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & r)
        ) {
          const i = f.$implicit;
          e.xp6(3),
            e.Oqu(i.UserID),
            e.xp6(1),
            e.Q6J("innerHTML", i.Instruction, e.oJD),
            e.xp6(2),
            e.hij(" ", e.xi3(7, 3, i.UpdatedOn, "dd MMM y ,h:mm:ss a"), " ");
        }
      }
      let Ca = (() => {
          class r {
            constructor(i, m, M) {
              (this.listService = i),
                (this.data = m),
                (this.global = M),
                (this.keyword = "name"),
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
            chatDataSubmit(i) {
              this.listService
                .submitChat({
                  NoteId: "0",
                  AddedUserinChat: i.AddedUserinChat,
                  Dbname: this.global.LOGGED_IN_USER.DbName,
                  EntityId: this.Entityid,
                  Message: i.chatMessage,
                  MsgTo: "",
                  PageId: this.pageID,
                  Password: this.global.LOGGED_IN_USER.encryptPswd,
                  UserID: this.global.LOGGED_IN_USER.UserId,
                  companyname: "",
                })
                .subscribe((M) => {}),
                this.getChatData();
            }
            selectEvent(i) {
              console.log(i);
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
                .subscribe((m) => {
                  (this.chat = JSON.parse(m)), console.warn(m);
                });
            }
            onChangeSearch(i) {
              this.prefixText = i;
            }
            ngOnInit() {}
          }
          return (
            (r.ɵfac = function (i) {
              return new (i || r)(e.Y36(re.L), e.Y36(Q.WI), e.Y36(u.x));
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
              selectors: [["app-chat"]],
              decls: 18,
              vars: 1,
              consts: [
                [1, "noteBox"],
                [1, "modal-header", "bg-info", "text-white", "text-center"],
                [1, "modal-title", "title"],
                [1, "contain"],
                [4, "ngFor", "ngForOf"],
                [1, "FormContain"],
                [3, "ngSubmit"],
                ["chatData", "ngForm"],
                [1, "col-md-12", "form-field"],
                [
                  "name",
                  "AddedUserinChat",
                  "value",
                  "AddedUserinChat",
                  "type",
                  "text",
                  "ngModel",
                  "",
                  1,
                  "chat-input",
                ],
                ["for", "AddedUserinChat", 1, "labels"],
                [1, "col-md-12"],
                [
                  "name",
                  "chatMessage",
                  "placeholder",
                  "Type Your Message Here......",
                  "value",
                  "chatMessage",
                  "ngModel",
                  "",
                ],
                ["chatMessage", ""],
                ["type", "submit", 1, "btn", "btn-secondary"],
                [1, "card", "chatCard"],
                [1, "text-primary"],
                [3, "innerHTML"],
                [1, "text-end"],
              ],
              template: function (i, m) {
                if (1 & i) {
                  const M = e.EpF();
                  e.TgZ(0, "div", 0),
                    e.TgZ(1, "div", 1),
                    e.TgZ(2, "h5", 2),
                    e._uU(3, "Chat"),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(4, "div", 3),
                    e.YNc(5, Sa, 8, 6, "div", 4),
                    e.qZA(),
                    e.TgZ(6, "div", 5),
                    e.TgZ(7, "form", 6, 7),
                    e.NdJ("ngSubmit", function () {
                      e.CHM(M);
                      const v = e.MAs(8);
                      return m.chatDataSubmit(v.value);
                    }),
                    e.TgZ(9, "div", 8),
                    e._UZ(10, "input", 9),
                    e.TgZ(11, "label", 10),
                    e._uU(12, "Add Username Here....."),
                    e.qZA(),
                    e.qZA(),
                    e.TgZ(13, "div", 11),
                    e._UZ(14, "textarea", 12, 13),
                    e.qZA(),
                    e.TgZ(16, "button", 14),
                    e._uU(17, "Send"),
                    e.qZA(),
                    e.qZA(),
                    e.qZA(),
                    e.qZA();
                }
                2 & i && (e.xp6(5), e.Q6J("ngForOf", m.chat));
              },
              directives: [l.sg, S._Y, S.JL, S.F, S.Fj, S.JJ, S.On],
              pipes: [l.uU],
              styles: [
                ".chat-input[_ngcontent-%COMP%]{height:38px;display:block;width:100%;height:24px;font-size:14px;font-weight:400;color:#000;background:transparent;border:none;outline:none;border-bottom:1px solid rgb(201,199,199)}.chat-input[_ngcontent-%COMP%]:focus{border-bottom:2px solid blue;outline:none}.chat-input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{color:#00f;top:-20px}textarea[_ngcontent-%COMP%]{width:100%;resize:none;height:90px}.labels[_ngcontent-%COMP%]{display:block;position:absolute;top:-16px;font-size:14px;font-weight:400;color:gray;cursor:text}.form-field[_ngcontent-%COMP%]{position:relative;margin:10px 0 17px}.contain[_ngcontent-%COMP%]{height:428px}.chatCard[_ngcontent-%COMP%]{box-sizing:border-box;background-color:#eed1bc;margin:10px;padding:10px}.FormContain[_ngcontent-%COMP%]{margin:0 10px}",
              ],
            })),
            r
          );
        })(),
        We = (() => {
          class r {
            constructor(i, m, M) {
              (this.listService = i),
                (this.data = m),
                (this.global = M),
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
            (r.ɵfac = function (i) {
              return new (i || r)(e.Y36(re.L), e.Y36(Q.WI), e.Y36(u.x));
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
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
              template: function (i, m) {
                1 & i &&
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
            r
          );
        })();
      function K(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "div"),
            e.TgZ(1, "mat-form-field", 4),
            e.TgZ(2, "mat-label"),
            e._uU(3),
            e.qZA(),
            e._UZ(4, "input", 24),
            e.qZA(),
            e.qZA()),
          2 & r)
        ) {
          const i = f.$implicit;
          e.xp6(3),
            e.hij("", i.Label, " "),
            e.xp6(1),
            e.s9C("id", i.ID),
            e.s9C("type", i.Type),
            e.s9C("name", i.Label);
        }
      }
      let ie = (() => {
        class r {
          constructor(i, m) {
            (this.httpClient = i),
              (this.data = m),
              (this.EntityName = this.data.EntityName),
              this.httpClient.get("./assets/inputlabel.json").subscribe((M) => {
                (this.FormArry = M),
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
          (r.ɵfac = function (i) {
            return new (i || r)(e.Y36(ee.eN), e.Y36(Q.WI));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
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
            template: function (i, m) {
              if (
                (1 & i &&
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
                  e.YNc(68, K, 5, 4, "div", 18),
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
                2 & i)
              ) {
                const M = e.MAs(85),
                  T = e.MAs(92);
                e.xp6(68),
                  e.Q6J("ngForOf", m.labelData),
                  e.xp6(14),
                  e.Q6J("matDatepicker", M),
                  e.xp6(1),
                  e.Q6J("for", M),
                  e.xp6(6),
                  e.Q6J("matDatepicker", T),
                  e.xp6(1),
                  e.Q6J("for", T);
              }
            },
            directives: [
              j.KE,
              j.hX,
              me.Nt,
              l.sg,
              he.gD,
              b.ey,
              z.hl,
              z.nW,
              j.R9,
              z.Mq,
              fe.lW,
            ],
            styles: [
              "button[_ngcontent-%COMP%]{margin:0 9px}.filterSearchContain[_ngcontent-%COMP%]{margin:0 10px}.input-width[_ngcontent-%COMP%]{width:100%}.standard-color-modal[_ngcontent-%COMP%]{background-color:#dcebdc}.modal-heading[_ngcontent-%COMP%]{height:30px;text-align:center}.modal-container[_ngcontent-%COMP%]{height:700px}",
            ],
          })),
          r
        );
      })();
      function Zt(r, f) {
        if (
          (1 & r &&
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
          2 & r)
        ) {
          const i = f.$implicit;
          e.xp6(2),
            e.Oqu(i.UpdatedBy),
            e.xp6(2),
            e.Oqu(i.Fromdate),
            e.xp6(2),
            e.Oqu(i.Description);
        }
      }
      let kt = (() => {
        class r {
          constructor(i, m, M) {
            (this.listService = i),
              (this.data = m),
              (this.global = M),
              (this.description = ""),
              (this.Entityid = this.data.EntityID),
              (this.EntityName = this.data.EntityName),
              (this.companyName = this.data.companyName),
              this.getNoteList();
          }
          saveNote(i) {
            (this.Description = i),
              this.listService
                .saveNoteList(
                  this.EntityName,
                  this.Entityid,
                  this.Description,
                  this.global.LOGGED_IN_USER.DbName,
                  this.global.LOGGED_IN_USER.encryptPswd,
                  this.global.LOGGED_IN_USER.Username
                )
                .subscribe((m) => {}),
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
              .subscribe((i) => {
                (this.noteData = JSON.parse(i)), console.log(this.noteData);
              });
          }
          ngOnInit() {}
        }
        return (
          (r.ɵfac = function (i) {
            return new (i || r)(e.Y36(re.L), e.Y36(Q.WI), e.Y36(u.x));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
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
            template: function (i, m) {
              if (1 & i) {
                const M = e.EpF();
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
                  e.YNc(12, Zt, 7, 3, "tr", 5),
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
                    e.CHM(M);
                    const v = e.MAs(15);
                    return m.saveNote(v.value);
                  }),
                  e.qZA(),
                  e.qZA(),
                  e.qZA();
              }
              2 & i &&
                (e.xp6(12),
                e.Q6J("ngForOf", m.noteData),
                e.xp6(2),
                e.Q6J("value", m.description));
            },
            directives: [l.sg],
            styles: [
              "textarea[_ngcontent-%COMP%]{resize:none;display:flex}.chatHeadingSize[_ngcontent-%COMP%]{width:100px}.noteBox[_ngcontent-%COMP%]{width:100%}.table_heading[_ngcontent-%COMP%]{background-color:#bce1c6;color:#000}",
            ],
          })),
          r
        );
      })();
      var B = h(7446),
        qa = h(1018),
        nt = h(9345);
      function se(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 15), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.Q6J("value", i.Key), e.xp6(1), e.hij(" ", i.Value, " ");
        }
      }
      function H(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 15), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.Q6J("value", i.Key), e.xp6(1), e.hij(" ", i.Value, " ");
        }
      }
      function He(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 15), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.Q6J("value", i.Key), e.xp6(1), e.hij(" ", i.Value, " ");
        }
      }
      function it(r, f) {
        1 & r &&
          (e.TgZ(0, "div"), e._UZ(1, "ngx-extended-pdf-viewer", 16), e.qZA()),
          2 & r &&
            (e.xp6(1),
            e.Q6J("src", "assets/example.pdf")("useBrowserLocale", !0)(
              "textLayer",
              !0
            )("showHandToolButton", !0)("showPresentationModeButton", !0)(
              "showDownloadButton",
              !1
            ));
      }
      function Qt(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "mat-form-field", 4),
            e.TgZ(2, "mat-label"),
            e._uU(3, "To :"),
            e.qZA(),
            e.TgZ(4, "input", 22),
            e.NdJ("ngModelChange", function (M) {
              return (e.CHM(i).$implicit.EmailTo = M);
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(5, "mat-form-field", 4),
            e.TgZ(6, "mat-label"),
            e._uU(7, "CC :"),
            e.qZA(),
            e.TgZ(8, "input", 23),
            e.NdJ("ngModelChange", function (M) {
              return (e.CHM(i).$implicit.CC = M);
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(9, "mat-form-field", 4),
            e.TgZ(10, "mat-label"),
            e._uU(11, "BCC :"),
            e.qZA(),
            e.TgZ(12, "input", 24),
            e.NdJ("ngModelChange", function (M) {
              return (e.CHM(i).$implicit.BCC = M);
            }),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "mat-form-field", 4),
            e.TgZ(14, "mat-label"),
            e._uU(15, "Subject :"),
            e.qZA(),
            e.TgZ(16, "input", 25),
            e.NdJ("ngModelChange", function (M) {
              return (e.CHM(i).$implicit.EmailSubject = M);
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
            e.NdJ("ngModelChange", function (M) {
              return (e.CHM(i).$implicit.EmailBody = M);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = f.$implicit;
          e.xp6(4),
            e.Q6J("ngModel", i.EmailTo),
            e.xp6(4),
            e.Q6J("ngModel", i.CC),
            e.xp6(4),
            e.Q6J("ngModel", i.BCC),
            e.xp6(4),
            e.Q6J("ngModel", i.EmailSubject),
            e.xp6(4),
            e.hij(" ", i.EmailFileName, ""),
            e.xp6(13),
            e.Q6J("ngModel", i.EmailBody);
        }
      }
      function Oa(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "form", 17, 18),
            e.NdJ("ngSubmit", function () {
              e.CHM(i);
              const M = e.MAs(2);
              return e.oxw().onClickSubmit(M.value);
            }),
            e.YNc(3, Qt, 34, 6, "div", 19),
            e.TgZ(4, "button", 20),
            e._uU(5, " Send Email "),
            e.qZA(),
            e.TgZ(6, "button", 21),
            e._uU(7, " Send Email "),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw();
          e.xp6(3), e.Q6J("ngForOf", i.ShowEmailQuoteData);
        }
      }
      function Na(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 15), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.Q6J("value", i.Key), e.xp6(1), e.hij(" ", i.Value, " ");
        }
      }
      function Gt(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 15), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.Q6J("value", i.eLeadTermsSetID),
            e.xp6(1),
            e.hij(" ", i.eLeadTermsSetName, " ");
        }
      }
      function te(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "mat-form-field", 4),
            e.TgZ(1, "mat-label"),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, "input", 33),
            e.NdJ("ngModelChange", function (M) {
              return (e.CHM(i).$implicit.eLeadTermsDetails = M);
            }),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = f.$implicit;
          e.xp6(2),
            e.Oqu(i.eLeadTermsName),
            e.xp6(1),
            e.Q6J("ngModel", i.eLeadTermsDetails);
        }
      }
      function Bt(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "div"),
            e.YNc(1, te, 4, 2, "mat-form-field", 32),
            e.qZA()),
          2 & r)
        ) {
          const i = e.oxw(2);
          e.xp6(1), e.Q6J("ngForOf", i.termSetData);
        }
      }
      function vt(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "mat-form-field", 4),
            e.TgZ(2, "mat-label"),
            e._uU(3, "Select Format :"),
            e.qZA(),
            e.TgZ(4, "mat-select", 5),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().selectemailQuoteFormat = M);
            })("ngModelChange", function () {
              return e.CHM(i), e.oxw().selectDropDown();
            }),
            e.YNc(5, Na, 2, 2, "mat-option", 6),
            e.qZA(),
            e.qZA(),
            e.TgZ(6, "mat-form-field", 4),
            e.TgZ(7, "mat-label"),
            e._uU(8, "Select Term Set :"),
            e.qZA(),
            e.TgZ(9, "mat-select", 5),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().SelecteeLeadTermsSetID = M);
            })("ngModelChange", function () {
              return e.CHM(i), e.oxw().selectTermSet();
            }),
            e.TgZ(10, "mat-option"),
            e._uU(11, "Select Term Set"),
            e.qZA(),
            e.YNc(12, Gt, 2, 2, "mat-option", 6),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "form", 17, 30),
            e.NdJ("ngSubmit", function () {
              e.CHM(i);
              const M = e.MAs(14);
              return e.oxw().onClickSave(M.value);
            }),
            e.YNc(15, Bt, 2, 1, "div", 14),
            e.TgZ(16, "button", 31),
            e._uU(17, "Save"),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw();
          e.xp6(4),
            e.Q6J("ngModel", i.selectemailQuoteFormat),
            e.xp6(1),
            e.Q6J("ngForOf", i.emailQuoteData.slice(0, 3)),
            e.xp6(4),
            e.Q6J("ngModel", i.SelecteeLeadTermsSetID),
            e.xp6(3),
            e.Q6J("ngForOf", i.termsconditionData),
            e.xp6(3),
            e.Q6J("ngIf", i.termSection);
        }
      }
      let st = (() => {
          class r {
            constructor(i, m, M) {
              (this.listService = i),
                (this.data = m),
                (this.global = M),
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
                  .subscribe((i) => {
                    this.url = i;
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
            onClickSubmit(i) {}
            onClickSave(i) {
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
                .subscribe((i) => {
                  this.ShowEmailQuoteData = JSON.parse(i);
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
                  .subscribe((i) => {
                    this.termsconditionData = JSON.parse(i);
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
                  .subscribe((i) => {
                    (this.termSetData = JSON.parse(i)),
                      console.log(this.termSetData);
                  });
            }
            ngOnInit() {}
          }
          return (
            (r.ɵfac = function (i) {
              return new (i || r)(e.Y36(re.L), e.Y36(Q.WI), e.Y36(u.x));
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
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
              template: function (i, m) {
                1 & i &&
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
                    return (m.SelectFormat = T);
                  })("ngModelChange", function () {
                    return m.selectFormat();
                  }),
                  e.YNc(8, se, 2, 2, "mat-option", 6),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(9, "mat-form-field", 4),
                  e.TgZ(10, "mat-label"),
                  e._uU(11, "Select Header / Footer"),
                  e.qZA(),
                  e.TgZ(12, "mat-select", 5),
                  e.NdJ("ngModelChange", function (T) {
                    return (m.SelectHeaderFooter = T);
                  })("ngModelChange", function () {
                    return m.selectHeader();
                  }),
                  e.YNc(13, H, 2, 2, "mat-option", 6),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(14, "mat-form-field", 4),
                  e.TgZ(15, "mat-label"),
                  e._uU(16, "Select Bank"),
                  e.qZA(),
                  e.TgZ(17, "mat-select", 5),
                  e.NdJ("ngModelChange", function (T) {
                    return (m.SelectBank = T);
                  })("ngModelChange", function () {
                    return m.selectBank();
                  }),
                  e.YNc(18, He, 2, 2, "mat-option", 6),
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
                    return m.showPDF();
                  }),
                  e._uU(48, " View Quote"),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(49, "div"),
                  e.TgZ(50, "a", 9),
                  e.NdJ("click", function () {
                    return m.EmailQuote();
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
                    return m.TermsCondition();
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
                  e.YNc(61, it, 2, 6, "div", 14),
                  e.YNc(62, Oa, 8, 1, "div", 14),
                  e.YNc(63, vt, 18, 5, "div", 14),
                  e.qZA(),
                  e.qZA(),
                  e.qZA()),
                  2 & i &&
                    (e.xp6(7),
                    e.Q6J("ngModel", m.SelectFormat),
                    e.xp6(1),
                    e.Q6J("ngForOf", m.emailQuoteData.slice(0, 3)),
                    e.xp6(4),
                    e.Q6J("ngModel", m.SelectHeaderFooter),
                    e.xp6(1),
                    e.Q6J("ngForOf", m.emailQuoteData.slice(3, 5)),
                    e.xp6(4),
                    e.Q6J("ngModel", m.SelectBank),
                    e.xp6(1),
                    e.Q6J("ngForOf", m.emailQuoteData.slice(5, 18)),
                    e.xp6(43),
                    e.Q6J("ngIf", m.viewPDF),
                    e.xp6(1),
                    e.Q6J("ngIf", m.emailQuote),
                    e.xp6(1),
                    e.Q6J("ngIf", m.termsCondition));
              },
              directives: [
                j.KE,
                j.hX,
                he.gD,
                S.JJ,
                S.On,
                l.sg,
                B.oG,
                l.O5,
                b.ey,
                qa.S3,
                S._Y,
                S.JL,
                S.F,
                fe.lW,
                me.Nt,
                S.Fj,
                nt.s6,
              ],
              styles: [
                ".containt-Body[_ngcontent-%COMP%]{display:flex;background-color:#f3f3ec;height:100vh}.email-box[_ngcontent-%COMP%]{margin:5px}.checkbox-label[_ngcontent-%COMP%]{color:gray}.form-field[_ngcontent-%COMP%]{position:relative;margin:10px 0 15px}.selectWidth[_ngcontent-%COMP%]{width:100%}.link[_ngcontent-%COMP%]{color:#00f;text-decoration:none}.link[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}.vl[_ngcontent-%COMP%]{border-left:2px solid #333;height:100%}.Description[_ngcontent-%COMP%]{width:100%;resize:none}",
              ],
            })),
            r
          );
        })(),
        F = (() => {
          class r {
            constructor(i) {
              (this.http = i),
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
            getDefaultData(i) {
              return this.http.post(this.getDefaultDatacommonURL, i);
            }
            getCommonDataNewlyData(i) {
              return this.http.post(this.GetCommonDataNewlyUrl, i);
            }
            connanData(i) {
              return this.http.post(this.commanDataURL, i);
            }
            getContactList(i) {
              return this.http.post(this.commanContactListURL, i);
            }
            getUserlist(i) {
              return this.http.post(this.getUserDataURL, i);
            }
            getUserEmailMobile(i) {
              return this.http.post(this.getUserEmailMobileUrl, i);
            }
            saveActualCommanAction(i) {
              return this.http.post(this.saveActualCommonActionURL, i);
            }
            saveSheduleCommonAction(i) {
              return this.http.post(this.saveSheduleCommonActionURL, i);
            }
          }
          return (
            (r.ɵfac = function (i) {
              return new (i || r)(e.LFG(ee.eN));
            }),
            (r.ɵprov = e.Yz7({
              token: r,
              factory: r.ɵfac,
              providedIn: "root",
            })),
            r
          );
        })();
      var Le = h(2081),
        Je = h(9814),
        Ze = h(3251);
      function bt(r, f) {
        1 & r &&
          (e.TgZ(0, "div", 25),
          e.TgZ(1, "h1"),
          e._uU(2, "Congratulation"),
          e.qZA(),
          e.qZA());
      }
      function rt(r, f) {
        1 & r &&
          (e.TgZ(0, "div", 26),
          e.TgZ(1, "h1"),
          e._uU(2, "Better Luck Next Time"),
          e.qZA(),
          e.qZA());
      }
      function Ue(r, f) {
        1 & r &&
          (e.TgZ(0, "div", 27),
          e.TgZ(1, "h1"),
          e._uU(2, "Not Your Fault"),
          e.qZA(),
          e.qZA());
      }
      function ot(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 28), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.Q6J("value", i.Id), e.xp6(1), e.hij("", i.Name, " ");
        }
      }
      function Ha(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div", 7),
            e.TgZ(1, "mat-form-field", 8),
            e.TgZ(2, "mat-label"),
            e._uU(3, "Delivery Date"),
            e.qZA(),
            e.TgZ(4, "input", 29),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().delivery = M);
            }),
            e.qZA(),
            e._UZ(5, "mat-datepicker-toggle", 14),
            e._UZ(6, "mat-datepicker", null, 30),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = e.MAs(7),
            m = e.oxw();
          e.xp6(4),
            e.Q6J("matDatepicker", i)("ngModel", m.delivery),
            e.xp6(1),
            e.Q6J("for", i);
        }
      }
      function _t(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div", 7),
            e.TgZ(1, "mat-form-field", 8),
            e.TgZ(2, "mat-label"),
            e._uU(3, "Lost Date"),
            e.qZA(),
            e.TgZ(4, "input", 31),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().lostDate = M);
            }),
            e.qZA(),
            e._UZ(5, "mat-datepicker-toggle", 14),
            e._UZ(6, "mat-datepicker", null, 32),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = e.MAs(7),
            m = e.oxw();
          e.xp6(4),
            e.Q6J("matDatepicker", i)("ngModel", m.lostDate),
            e.xp6(1),
            e.Q6J("for", i);
        }
      }
      function Ua(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div", 7),
            e.TgZ(1, "mat-form-field", 8),
            e.TgZ(2, "mat-label"),
            e._uU(3, "Closed Date"),
            e.qZA(),
            e.TgZ(4, "input", 31),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().closedDate = M);
            }),
            e.qZA(),
            e._UZ(5, "mat-datepicker-toggle", 14),
            e._UZ(6, "mat-datepicker", null, 33),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = e.MAs(7),
            m = e.oxw();
          e.xp6(4),
            e.Q6J("matDatepicker", i)("ngModel", m.closedDate),
            e.xp6(1),
            e.Q6J("for", i);
        }
      }
      function Re(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 28), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.Q6J("value", i.Id), e.xp6(1), e.hij(" ", i.Name, "");
        }
      }
      function dt(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div", 16),
            e.TgZ(1, "mat-form-field", 8),
            e.TgZ(2, "mat-label"),
            e._uU(3, "Lost Reason"),
            e.qZA(),
            e.TgZ(4, "mat-select", 34),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().LostReason = M);
            }),
            e.YNc(5, Re, 2, 2, "mat-option", 10),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw();
          e.xp6(4),
            e.Q6J("ngModel", i.LostReason),
            e.xp6(1),
            e.Q6J("ngForOf", i.lostReasonData);
        }
      }
      function x(r, f) {
        1 & r &&
          (e.TgZ(0, "div", 16),
          e.TgZ(1, "mat-form-field", 8),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Closed Reason"),
          e.qZA(),
          e._UZ(4, "input", 35),
          e.qZA(),
          e.qZA());
      }
      function Pa(r, f) {
        1 & r &&
          (e.TgZ(0, "div", 7),
          e.TgZ(1, "mat-form-field", 8),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Coustomer Pur Order No"),
          e.qZA(),
          e._UZ(4, "input", 36),
          e.qZA(),
          e.qZA());
      }
      function Ea(r, f) {
        1 & r &&
          (e.TgZ(0, "div", 7),
          e.TgZ(1, "mat-form-field", 8),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Value Lost"),
          e.qZA(),
          e._UZ(4, "input", 36),
          e.qZA(),
          e.qZA());
      }
      function ae(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 8),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Lost To "),
          e.qZA(),
          e._UZ(3, "input", 37),
          e.qZA());
      }
      function wt(r, f) {
        1 & r &&
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
      function I(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 28), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.MGl("value", "", i.Id, " "), e.xp6(1), e.hij(" ", i.Name, "");
        }
      }
      function ze(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "div", 6),
            e.TgZ(1, "div", 7),
            e.TgZ(2, "mat-form-field", 8),
            e.TgZ(3, "mat-label"),
            e._uU(4, "Instrument type"),
            e.qZA(),
            e.TgZ(5, "mat-select", 40),
            e.YNc(6, I, 2, 2, "mat-option", 10),
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
          2 & r)
        ) {
          const i = e.oxw();
          e.xp6(6), e.Q6J("ngForOf", i.InstrumentTypeData);
        }
      }
      function ja(r, f) {
        1 & r &&
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
      let X = (() => {
        class r {
          constructor(i, m) {
            (this.actionService = i),
              (this.global = m),
              (this.date = A()),
              (this.delivery = A()),
              (this.lostDate = A()),
              (this.closedDate = A()),
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
              .subscribe((m) => {
                this.userlistData = JSON.parse(m);
              });
          }
          selectStatus(i) {
            console.log(i),
              12 == i
                ? ((this.Won = !0),
                  (this.Close = !1),
                  (this.Lost = !1),
                  (this.ValueLost = !1))
                : 13 == i
                ? ((this.Won = !1),
                  (this.Close = !1),
                  (this.Lost = !0),
                  (this.ValueLost = !0))
                : 15 == i &&
                  ((this.Won = !1),
                  (this.Close = !0),
                  (this.Lost = !1),
                  (this.ValueLost = !0));
          }
          closeActionForm(i) {}
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
          (r.ɵfac = function (i) {
            return new (i || r)(e.Y36(F), e.Y36(u.x));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
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
            template: function (i, m) {
              if (1 & i) {
                const M = e.EpF();
                e.TgZ(0, "form", 0, 1),
                  e.NdJ("submit", function () {
                    e.CHM(M);
                    const v = e.MAs(1);
                    return m.closeActionForm(v.value);
                  }),
                  e.YNc(2, bt, 3, 0, "div", 2),
                  e.YNc(3, rt, 3, 0, "div", 3),
                  e.YNc(4, Ue, 3, 0, "div", 4),
                  e.TgZ(5, "div", 5),
                  e.TgZ(6, "div", 6),
                  e.TgZ(7, "div", 7),
                  e.TgZ(8, "mat-form-field", 8),
                  e.TgZ(9, "mat-label"),
                  e._uU(10, "Opportunity Status"),
                  e.qZA(),
                  e.TgZ(11, "mat-select", 9),
                  e.NdJ("ngModelChange", function (v) {
                    return m.selectStatus(v);
                  })("ngModelChange", function (v) {
                    return (m.SelectedStatus = v);
                  }),
                  e.YNc(12, ot, 2, 2, "mat-option", 10),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(13, Ha, 8, 3, "div", 11),
                  e.YNc(14, _t, 8, 3, "div", 11),
                  e.YNc(15, Ua, 8, 3, "div", 11),
                  e.qZA(),
                  e.YNc(16, dt, 6, 2, "div", 12),
                  e.YNc(17, x, 5, 0, "div", 12),
                  e.TgZ(18, "div", 6),
                  e.YNc(19, Pa, 5, 0, "div", 11),
                  e.TgZ(20, "div", 7),
                  e.TgZ(21, "mat-form-field", 8),
                  e.TgZ(22, "mat-label"),
                  e._uU(23, " Date"),
                  e.qZA(),
                  e.TgZ(24, "input", 13),
                  e.NdJ("ngModelChange", function (v) {
                    return (m.date = v);
                  }),
                  e.qZA(),
                  e._UZ(25, "mat-datepicker-toggle", 14),
                  e._UZ(26, "mat-datepicker", null, 15),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(28, Ea, 5, 0, "div", 11),
                  e.qZA(),
                  e.TgZ(29, "div", 16),
                  e.YNc(30, ae, 4, 0, "mat-form-field", 17),
                  e.qZA(),
                  e.YNc(31, wt, 11, 0, "div", 18),
                  e.YNc(32, ze, 12, 1, "div", 18),
                  e.YNc(33, ja, 11, 0, "div", 18),
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
              if (2 & i) {
                const M = e.MAs(27);
                e.xp6(2),
                  e.Q6J("ngIf", m.Won),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Lost),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Close),
                  e.xp6(7),
                  e.Q6J("ngModel", m.SelectedStatus),
                  e.xp6(1),
                  e.Q6J("ngForOf", m.OpportunityStatusData),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Won),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Lost),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Close),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Lost),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Close),
                  e.xp6(2),
                  e.Q6J("ngIf", m.Won),
                  e.xp6(5),
                  e.Q6J("matDatepicker", M)("ngModel", m.date),
                  e.xp6(1),
                  e.Q6J("for", M),
                  e.xp6(3),
                  e.Q6J("ngIf", m.ValueLost),
                  e.xp6(2),
                  e.Q6J("ngIf", m.Lost),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Won),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Won),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Won);
              }
            },
            directives: [
              S._Y,
              S.JL,
              S.F,
              l.O5,
              j.KE,
              j.hX,
              he.gD,
              S.JJ,
              S.On,
              l.sg,
              me.Nt,
              z.hl,
              S.Fj,
              z.nW,
              j.R9,
              z.Mq,
              fe.lW,
              Le.Ic,
              b.ey,
            ],
            styles: [
              ".input-width[_ngcontent-%COMP%]{width:100%}textarea[_ngcontent-%COMP%]{height:60px;resize:none}.form-box[_ngcontent-%COMP%]{margin:5px;min-height:480px}.heading1[_ngcontent-%COMP%]{text-align:center;background-color:green;color:#fff;height:50px}.heading2[_ngcontent-%COMP%]{text-align:center;background-color:#c95d42;color:#fff;height:50px}.heading3[_ngcontent-%COMP%]{text-align:center;background-color:#dfcd2b;color:#fff;height:50px}button[_ngcontent-%COMP%]{width:50%;height:45px;margin:5px;color:#fff}.SaveAction[_ngcontent-%COMP%]{background-color:green}.backButton[_ngcontent-%COMP%]{background-color:red}.link[_ngcontent-%COMP%]{text-align:end;margin:10px 0}a[_ngcontent-%COMP%]{text-decoration:none;color:#dc143c}a[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}.contain[_ngcontent-%COMP%]{min-height:530px;margin-top:10px}",
            ],
          })),
          r
        );
      })();
      function ge(r, f) {
        if (
          (1 & r && (e.TgZ(0, "mat-radio-button", 28), e._uU(1), e.qZA()),
          2 & r)
        ) {
          const i = f.$implicit,
            m = e.oxw();
          e.s9C("name", i.Name),
            e.Q6J("value", i.Id)("checked", i.Id == m.DefaultSelect),
            e.xp6(1),
            e.hij(" ", i.Name, " ");
        }
      }
      function pe(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 29), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.s9C("value", i.Id), e.xp6(1), e.hij(" ", i.Name, "");
        }
      }
      function V(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 29), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.s9C("value", i.Id), e.xp6(1), e.hij(" ", i.Name, "");
        }
      }
      function _e(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div", 30),
            e.TgZ(1, "div", 8),
            e.TgZ(2, "mat-checkbox", 9),
            e.TgZ(3, "mat-form-field", 31),
            e.TgZ(4, "mat-label"),
            e._uU(5, "E-mail"),
            e.qZA(),
            e.TgZ(6, "input", 32),
            e.NdJ("ngModelChange", function (M) {
              return (e.CHM(i).$implicit.ContactEmail = M);
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
            e.NdJ("ngModelChange", function (M) {
              return (e.CHM(i).$implicit.ContactMobile = M);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = f.$implicit;
          e.xp6(6),
            e.Q6J("ngModel", i.ContactEmail),
            e.xp6(6),
            e.Q6J("ngModel", i.ContactMobile);
        }
      }
      function Me(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 29), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.s9C("value", i.UserId), e.xp6(1), e.hij(" ", i.UserName, "");
        }
      }
      function ke(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div", 30),
            e.TgZ(1, "div", 8),
            e.TgZ(2, "mat-form-field", 31),
            e.TgZ(3, "mat-label"),
            e._uU(4, "E-mail"),
            e.qZA(),
            e.TgZ(5, "input", 34),
            e.NdJ("ngModelChange", function (M) {
              return (e.CHM(i).$implicit.UserEmail = M);
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
            e.NdJ("ngModelChange", function (M) {
              return (e.CHM(i).$implicit.UserMobile = M);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = f.$implicit;
          e.xp6(5),
            e.Q6J("ngModel", i.UserEmail),
            e.xp6(5),
            e.Q6J("ngModel", i.UserMobile);
        }
      }
      let Ia = (() => {
        class r {
          constructor(i, m) {
            (this.actionService = i),
              (this.global = m),
              (this.scheduleActionDate = A().format("YYYY-MM-DD")),
              (this.today = new Date());
          }
          saveActionForm(i) {
            let m = {
              Dbname: this.global.LOGGED_IN_USER.DbName,
              Password: this.global.LOGGED_IN_USER.encryptPswd,
              EntityId: this.EntityId,
              EntityName: this.entityname,
              ScheduleActionType: this.ScheduleActionType,
              ScheduleActivityType: i.ScheduleActivityType,
              Discussions: i.Discussions,
              ScheduleActionDate: A(i.scheduleActionDate).format("DD/MM/YYYY"),
              ScheduleActionTime: i.ScheduleActionTime,
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
            this.actionService.saveSheduleCommonAction(m).subscribe((M) => {});
          }
          updateOptionalLabel() {}
          getuserdata(i) {
            this.actionService
              .getUserEmailMobile({
                DBNAME: this.global.LOGGED_IN_USER.DbName,
                password: this.global.LOGGED_IN_USER.encryptPswd,
                id11: i,
              })
              .subscribe((M) => {
                this.selectedUserData = JSON.parse(M);
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
          (r.ɵfac = function (i) {
            return new (i || r)(e.Y36(F), e.Y36(u.x));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
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
            template: function (i, m) {
              if (1 & i) {
                const M = e.EpF();
                e.TgZ(0, "h1", 0),
                  e._uU(1, "Your Next Action"),
                  e.qZA(),
                  e.TgZ(2, "form", 1, 2),
                  e.NdJ("submit", function () {
                    e.CHM(M);
                    const v = e.MAs(3);
                    return m.saveActionForm(v.value);
                  }),
                  e.TgZ(4, "div", 3),
                  e.TgZ(5, "mat-radio-group", 4),
                  e.NdJ("ngModelChange", function (v) {
                    return (m.ScheduleActionType = v);
                  })("ngModelChange", function () {
                    return m.updateOptionalLabel();
                  }),
                  e.YNc(6, ge, 2, 4, "mat-radio-button", 5),
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
                  e.YNc(14, pe, 2, 2, "mat-option", 11),
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
                    return (m.scheduleActionDate = v);
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
                    return (m.CoustomerContactName = v);
                  }),
                  e.YNc(44, V, 2, 2, "mat-option", 11),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(45, "div", 23),
                  e.TgZ(46, "mat-checkbox"),
                  e._uU(47, "Other"),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(48, _e, 13, 2, "div", 24),
                  e.TgZ(49, "div", 12),
                  e.TgZ(50, "mat-form-field", 9),
                  e.TgZ(51, "mat-label"),
                  e._uU(52, "Manager Alert"),
                  e.qZA(),
                  e.TgZ(53, "mat-select", 25),
                  e.NdJ("ngModelChange", function (v) {
                    return m.getuserdata(v);
                  })("ngModelChange", function (v) {
                    return (m.ManagerAlert = v);
                  }),
                  e.YNc(54, Me, 2, 2, "mat-option", 11),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.YNc(55, ke, 11, 2, "div", 24),
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
              if (2 & i) {
                const M = e.MAs(34);
                e.xp6(5),
                  e.Q6J("ngModel", m.ScheduleActionType),
                  e.xp6(1),
                  e.Q6J("ngForOf", m.SelectActionData),
                  e.xp6(8),
                  e.Q6J("ngForOf", m.activitydata),
                  e.xp6(17),
                  e.Q6J("matDatepicker", M)("max", m.today)(
                    "ngModel",
                    m.scheduleActionDate
                  ),
                  e.xp6(1),
                  e.Q6J("for", M),
                  e.xp6(11),
                  e.Q6J("ngModel", m.CoustomerContactName),
                  e.xp6(1),
                  e.Q6J("ngForOf", m.contactlistData),
                  e.xp6(4),
                  e.Q6J("ngForOf", m.CoustamerContactData),
                  e.xp6(5),
                  e.Q6J("ngModel", m.ManagerAlert),
                  e.xp6(1),
                  e.Q6J("ngForOf", m.activityByData),
                  e.xp6(1),
                  e.Q6J("ngForOf", m.selectedUserData);
              }
            },
            directives: [
              Q.uh,
              S._Y,
              S.JL,
              S.F,
              Je.VQ,
              S.JJ,
              S.On,
              l.sg,
              j.KE,
              j.hX,
              he.gD,
              me.Nt,
              S.Fj,
              z.hl,
              z.nW,
              j.R9,
              z.Mq,
              B.oG,
              fe.lW,
              Le.fd,
              Le.Ic,
              Je.U0,
              b.ey,
            ],
            styles: [
              "button[_ngcontent-%COMP%]{width:50%;height:45px;margin:5px;color:#fff}.saveButton[_ngcontent-%COMP%]{background-color:green}.backButton[_ngcontent-%COMP%]{background-color:red}mat-radio-button[_ngcontent-%COMP%]{margin:0 10px}textarea[_ngcontent-%COMP%]{height:60px;resize:none}.mat-tab-group[_ngcontent-%COMP%]{max-height:100vh!important}.SelectActionType-Checkbox[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin:10px 0}.input-width[_ngcontent-%COMP%]{width:100%}.contain2[_ngcontent-%COMP%]{margin:10px;min-height:518px}.mat-dialog-content[_ngcontent-%COMP%]{display:block;margin:0!important;padding:0!important;max-height:100vh!important;overflow:auto}.heading[_ngcontent-%COMP%]{top:0px;position:sticky;text-align:center;background-color:#e6907b;color:#fff;padding:5px 0;padding:0!important;margin:0!important}.mat-dialog-actions[_ngcontent-%COMP%]{margin-bottom:0!important}.form-contain[_ngcontent-%COMP%]{height:100%}.input-ckeck[_ngcontent-%COMP%]{width:136px!important}",
            ],
          })),
          r
        );
      })();
      function Fa(r, f) {
        if ((1 & r && e._UZ(0, "app-close-action", 52), 2 & r)) {
          const i = e.oxw();
          e.Q6J("EntityId", i.EntityId)("entityname", i.entityname)(
            "newlyActionData",
            i.newlyActionData
          )("getDefaultData", i.getDefaultData);
        }
      }
      function Wa(r, f) {
        if (
          (1 & r && (e.TgZ(0, "mat-radio-button", 53), e._uU(1), e.qZA()),
          2 & r)
        ) {
          const i = f.$implicit,
            m = e.oxw();
          e.s9C("name", i.Name),
            e.Q6J("value", i.Id)("checked", i.Id == m.DefaultSelect),
            e.xp6(1),
            e.hij(" ", i.Name, " ");
        }
      }
      function G(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 54), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.s9C("value", i.Id), e.xp6(1), e.hij(" ", i.Name, "");
        }
      }
      function lt(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 54), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.s9C("value", i.Id), e.xp6(1), e.hij(" ", i.Name, "");
        }
      }
      function Ja(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 54), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.s9C("value", i.Id), e.xp6(1), e.hij(" ", i.Name, "");
        }
      }
      function Vt(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 54), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.s9C("value", i.UserId), e.xp6(1), e.hij(" ", i.UserName, "");
        }
      }
      function $t(r, f) {
        1 & r &&
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
      function Ra(r, f) {
        if (
          (1 & r && (e.TgZ(0, "mat-radio-button", 60), e._uU(1), e.qZA()),
          2 & r)
        ) {
          const i = f.$implicit;
          e.s9C("name", i.Name),
            e.Q6J("value", i.Id),
            e.xp6(1),
            e.hij(" ", i.Name, " ");
        }
      }
      function za(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "button", 61),
            e.NdJ("click", function () {
              return e.CHM(i), e.oxw().CloseLead();
            }),
            e._uU(1, " Close Lead "),
            e.qZA();
        }
      }
      function Qa(r, f) {
        1 & r &&
          (e.TgZ(0, "button", 62), e._uU(1, " Convert To Lead "), e.qZA());
      }
      function Ga(r, f) {
        if ((1 & r && e._UZ(0, "app-next-action", 52), 2 & r)) {
          const i = e.oxw();
          e.Q6J("EntityId", i.EntityId)("entityname", i.entityname)(
            "newlyActionData",
            i.newlyActionData
          )("getDefaultData", i.getDefaultData);
        }
      }
      let Ba = (() => {
        class r {
          constructor(i, m, M) {
            (this.actionService = i),
              (this.global = m),
              (this.data = M),
              (this.TabIndex = 0),
              (this.nextAction = !1),
              (this.closeAction = !1),
              (this.actionStartDate = A()),
              (this.actionEndDate = A()),
              (this.EntityId = M.EntityID),
              (this.EntityName = M.EntityName),
              (this.clientNo = M.clientNo),
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
              .subscribe((m) => {
                (this.newlyActionData = JSON.parse(m)),
                  (this.SelectActionData = this.newlyActionData.Table6),
                  (this.activitydata = this.newlyActionData.Table),
                  (this.moveStageData = this.newlyActionData.Table1),
                  (this.contactlistData = this.newlyActionData.Table2),
                  (this.activityByData = this.newlyActionData.Table3),
                  (this.notContactableData = this.newlyActionData.Table7);
              });
          }
          ActionForm(i) {
            A(i.actionStartDate).format("DD/MM/YYYY"),
              A(i.actionEndDate).format("DD/MM/YYYY");
          }
          ngOnInit() {}
        }
        return (
          (r.ɵfac = function (i) {
            return new (i || r)(e.Y36(F), e.Y36(u.x), e.Y36(Q.WI));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["app-action"]],
            features: [
              e._Bn([
                { provide: b.Ad, useValue: "en-GB" },
                { provide: b._A, useClass: Oe, deps: [b.Ad, le] },
                { provide: b.sG, useValue: ne },
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
              [1, "container"],
              [1, "row"],
              [1, "not-Connect-Checkbox"],
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
              [1, "row", "g-0"],
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
            template: function (i, m) {
              if (1 & i) {
                const M = e.EpF();
                e.TgZ(0, "mat-stepper", 0, 1),
                  e.TgZ(2, "mat-step"),
                  e.YNc(3, Fa, 1, 4, "app-close-action", 2),
                  e.qZA(),
                  e.TgZ(4, "mat-step"),
                  e.TgZ(5, "h1", 3),
                  e._uU(6, " What Is Your Interaction "),
                  e.qZA(),
                  e.TgZ(7, "form", 4, 5),
                  e.NdJ("submit", function () {
                    e.CHM(M);
                    const v = e.MAs(8);
                    return m.ActionForm(v.value);
                  }),
                  e.TgZ(9, "div", 6),
                  e.TgZ(10, "div", 7),
                  e.TgZ(11, "mat-radio-group", 8),
                  e.NdJ("ngModelChange", function (v) {
                    return (m.SelectActionType = v);
                  })("ngModelChange", function () {
                    return m.updateOptionalLabel();
                  }),
                  e.YNc(12, Wa, 2, 4, "mat-radio-button", 9),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(13, "mat-tab-group", 10),
                  e.NdJ("selectedIndexChange", function (v) {
                    return (m.TabIndex = v);
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
                    return (m.ActivityType = v);
                  }),
                  e.YNc(21, G, 2, 2, "mat-option", 16),
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
                    return (m.MoveTostage = v);
                  }),
                  e.YNc(27, lt, 2, 2, "mat-option", 16),
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
                    return (m.actionStartDate = v);
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
                    return (m.actionEndDate = v);
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
                    return (m.CoustomerContactName = v);
                  }),
                  e.YNc(62, Ja, 2, 2, "mat-option", 16),
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
                    return (m.ActivityBy = v);
                  }),
                  e.YNc(71, Vt, 2, 2, "mat-option", 16),
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
                  e.YNc(88, $t, 18, 0, "div", 39),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(89, "mat-tab", 40),
                  e.TgZ(90, "div", 41),
                  e.TgZ(91, "div", 42),
                  e.TgZ(92, "div", 43),
                  e.TgZ(93, "mat-radio-group", 42),
                  e.YNc(94, Ra, 2, 3, "mat-radio-button", 44),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(95, "div", 45),
                  e.TgZ(96, "mat-form-field", 14),
                  e.TgZ(97, "mat-label"),
                  e._uU(98, "Call Back In"),
                  e.qZA(),
                  e._UZ(99, "input", 46),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(100, "div", 45),
                  e.TgZ(101, "mat-form-field", 14),
                  e._UZ(102, "mat-label"),
                  e._UZ(103, "input", 47),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(104, "div", 48),
                  e.YNc(105, za, 2, 0, "button", 49),
                  e.YNc(106, Qa, 2, 0, "button", 50),
                  e.TgZ(107, "button", 51),
                  e.NdJ("click", function () {
                    return m.NextAction();
                  }),
                  e._uU(108, " Next Action "),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(109, "mat-step"),
                  e.YNc(110, Ga, 1, 4, "app-next-action", 2),
                  e.qZA(),
                  e.qZA();
              }
              if (2 & i) {
                const M = e.MAs(41),
                  T = e.MAs(53);
                e.xp6(3),
                  e.Q6J("ngIf", m.closeAction),
                  e.xp6(8),
                  e.Q6J("ngModel", m.SelectActionType),
                  e.xp6(1),
                  e.Q6J("ngForOf", m.SelectActionData),
                  e.xp6(1),
                  e.Q6J("selectedIndex", m.TabIndex),
                  e.xp6(7),
                  e.Q6J("ngModel", m.ActivityType),
                  e.xp6(1),
                  e.Q6J("ngForOf", m.activitydata),
                  e.xp6(5),
                  e.Q6J("ngModel", m.MoveTostage),
                  e.xp6(1),
                  e.Q6J("ngForOf", m.moveStageData),
                  e.xp6(11),
                  e.Q6J("matDatepicker", M)("ngModel", m.actionStartDate),
                  e.xp6(1),
                  e.Q6J("for", M),
                  e.xp6(11),
                  e.Q6J("matDatepicker", T)("ngModel", m.actionEndDate),
                  e.xp6(1),
                  e.Q6J("for", T),
                  e.xp6(10),
                  e.Q6J("ngModel", m.CoustomerContactName),
                  e.xp6(1),
                  e.Q6J("ngForOf", m.contactlistData),
                  e.xp6(8),
                  e.Q6J("ngModel", m.ActivityBy),
                  e.xp6(1),
                  e.Q6J("ngForOf", m.activityByData),
                  e.xp6(17),
                  e.Q6J("ngIf", m.emailReport),
                  e.xp6(6),
                  e.Q6J("ngForOf", m.notContactableData),
                  e.xp6(11),
                  e.Q6J("ngIf", m.CloseLeadButton),
                  e.xp6(1),
                  e.Q6J("ngIf", m.ConvertToLeadButton),
                  e.xp6(4),
                  e.Q6J("ngIf", m.nextAction);
              }
            },
            directives: [
              Le.Vq,
              Le.C0,
              l.O5,
              S._Y,
              S.JL,
              S.F,
              Je.VQ,
              S.JJ,
              S.On,
              l.sg,
              Ze.SP,
              Ze.uX,
              j.KE,
              j.hX,
              he.gD,
              me.Nt,
              S.Fj,
              z.hl,
              z.nW,
              j.R9,
              z.Mq,
              B.oG,
              Le.Ic,
              fe.lW,
              X,
              Je.U0,
              b.ey,
              Le.fd,
              Ia,
            ],
            styles: [
              "mat-radio-button[_ngcontent-%COMP%]{margin:0 10px}.input-width[_ngcontent-%COMP%]{width:100%}.mat-dialog-content[_ngcontent-%COMP%]{display:block;margin:0!important;padding:0!important;height:100%!important;width:100%!important}.form-contain[_ngcontent-%COMP%]{width:100%}textarea[_ngcontent-%COMP%]{height:60px;resize:none}.heading[_ngcontent-%COMP%]{text-align:center;background-color:#dcebdc;color:#000;position:sticky;top:0;width:100%;padding:0!important;margin:0!important}.contain[_ngcontent-%COMP%]{margin:5px;min-height:480px}.not-Connect-Checkbox[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin:15px 0}.not-Connect-Checkbox[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]{margin:5px 0}.SelectActionType-Checkbox[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin:10px 0}button[_ngcontent-%COMP%]{width:100%;height:45px;margin:5px;color:#fff}.CloseConvertButton[_ngcontent-%COMP%]{background-color:red}.nextActionButton[_ngcontent-%COMP%]{background-color:green}.mat-tab-group[_ngcontent-%COMP%]{max-height:100vh!important}  .mat-horizontal-stepper-header{display:none!important}  .mat-horizontal-content-container{padding:0!important}.connent_And_not_contactable[_ngcontent-%COMP%]{overflow-x:hidden}",
            ],
          })),
          r
        );
      })();
      var At = h(3737);
      function Kt(r, f) {
        1 & r &&
          (e.TgZ(0, "div", 14),
          e.TgZ(1, "mat-form-field", 4),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Cost Of supply"),
          e.qZA(),
          e._UZ(4, "input", 15),
          e.qZA(),
          e.qZA());
      }
      function Xt(r, f) {
        1 & r &&
          (e.TgZ(0, "div", 3),
          e.TgZ(1, "mat-form-field", 4),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Challan Number"),
          e.qZA(),
          e._UZ(4, "input", 16),
          e.qZA(),
          e.qZA());
      }
      function Va(r, f) {
        1 & r &&
          (e.TgZ(0, "div", 3),
          e.TgZ(1, "mat-form-field", 4),
          e.TgZ(2, "mat-label"),
          e._uU(3, "SO ID"),
          e.qZA(),
          e._UZ(4, "input", 17),
          e.qZA(),
          e.qZA());
      }
      let $a = (() => {
          class r {
            constructor(i) {
              (this.data = i),
                (this.openDate = A().format("YYYY-MM-DD")),
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
            (r.ɵfac = function (i) {
              return new (i || r)(e.Y36(Q.WI));
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
              selectors: [["app-additional-details"]],
              features: [
                e._Bn([
                  { provide: b.Ad, useValue: "en-GB" },
                  { provide: b._A, useClass: Oe, deps: [b.Ad, le] },
                  { provide: b.sG, useValue: ne },
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
              template: function (i, m) {
                if (
                  (1 & i &&
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
                      return (m.openDate = T);
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
                    e.YNc(50, Kt, 5, 0, "div", 12),
                    e.YNc(51, Xt, 5, 0, "div", 13),
                    e.YNc(52, Va, 5, 0, "div", 13),
                    e.qZA(),
                    e.qZA(),
                    e.qZA()),
                  2 & i)
                ) {
                  const M = e.MAs(18);
                  e.xp6(15),
                    e.Q6J("matDatepicker", M)("ngModel", m.openDate),
                    e.xp6(1),
                    e.Q6J("for", M),
                    e.xp6(34),
                    e.Q6J("ngIf", m.CostOfsupply),
                    e.xp6(1),
                    e.Q6J("ngIf", m.ChallanSO),
                    e.xp6(1),
                    e.Q6J("ngIf", m.ChallanSO);
                }
              },
              directives: [
                Q.uh,
                S._Y,
                S.JL,
                S.F,
                j.KE,
                j.hX,
                me.Nt,
                z.hl,
                S.Fj,
                S.JJ,
                S.On,
                z.nW,
                j.R9,
                z.Mq,
                he.gD,
                b.ey,
                l.O5,
              ],
              styles: [
                ".example-full-width[_ngcontent-%COMP%]{width:95%}.form-container[_ngcontent-%COMP%]{min-height:400px;width:400px}",
              ],
            })),
            r
          );
        })(),
        Ka = (() => {
          class r {
            constructor() {}
            ngOnInit() {}
          }
          return (
            (r.ɵfac = function (i) {
              return new (i || r)();
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
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
              template: function (i, m) {
                1 & i &&
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
              directives: [Q.uh, S._Y, S.JL, S.F, j.KE, j.hX, me.Nt],
              styles: [
                ".example-full-width[_ngcontent-%COMP%]{width:100%}.contact_form[_ngcontent-%COMP%]{min-height:400px;width:300px}",
              ],
            })),
            r
          );
        })(),
        xt = (() => {
          class r {
            constructor(i) {
              (this.http = i),
                (this.listCommanDataURL =
                  "https://apitest.ffherp.co.in/api/FFHAMC/GetSearchDDLValue"),
                (this.createFormAutoCompleteURL =
                  "https://apitest.ffherp.co.in/api/Voucher/getAutoCompleteCompanyList"),
                (this.companyContactListURL =
                  "https://apitest.ffherp.co.in/api/Voucher/GetCommonContactList");
            }
            createFormAutoComplete(i) {
              return this.http.post(this.createFormAutoCompleteURL, i);
            }
            getCompanyContactList(i) {
              return this.http.post(this.companyContactListURL, i);
            }
            listCommanData(i) {
              return this.http.post(this.listCommanDataURL, i);
            }
          }
          return (
            (r.ɵfac = function (i) {
              return new (i || r)(e.LFG(ee.eN));
            }),
            (r.ɵprov = e.Yz7({
              token: r,
              factory: r.ɵfac,
              providedIn: "root",
            })),
            r
          );
        })();
      var Pe = h(1079);
      function ea(r, f) {
        if ((1 & r && (e.TgZ(0, "mat-option", 39), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.s9C("id", i.companyId),
            e.Q6J("value", i.companyName),
            e.xp6(1),
            e.hij(" ", i.companyName, " ");
        }
      }
      function Xa(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Source"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function en(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Delivary Mode"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function Qe(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Received Mode"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function ut(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Invoice Type"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function ta(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Complaint for product / Service type"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function Ge(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Source Detail"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function ye(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Source text"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function tn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Delivary Name"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function an(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Transport/Courier Name"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function nn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "GST Type"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function sn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Select Problem"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function rn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Allocate To"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function on(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Billed By"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function _n(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Entered By"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function dn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Ticket Type"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function St(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Dispatch By"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function ln(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Priority"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function aa(r, f) {
        1 & r &&
          (e.TgZ(0, "div", 41),
          e.TgZ(1, "mat-form-field", 9),
          e.TgZ(2, "mat-label"),
          e._uU(3, "Amount"),
          e.qZA(),
          e._UZ(4, "input", 40),
          e.qZA(),
          e.qZA());
      }
      function un(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "DropDown"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function mn(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "Exp Closer Date"),
            e.qZA(),
            e.TgZ(3, "input", 42),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().LExpCloserDate = M);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 44),
            e.qZA();
        }
        if (2 & r) {
          const i = e.MAs(6),
            m = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", i)("ngModel", m.LExpCloserDate)(
              "min",
              m.minDate
            ),
            e.xp6(1),
            e.Q6J("for", i);
        }
      }
      function cn(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "Delivary Date"),
            e.qZA(),
            e.TgZ(3, "input", 45),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().DelDate = M);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 46),
            e.qZA();
        }
        if (2 & r) {
          const i = e.MAs(6),
            m = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", i)("ngModel", m.DelDate)("min", m.minDate),
            e.xp6(1),
            e.Q6J("for", i);
        }
      }
      function pn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Problem Type"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function hn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Stage"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function fn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, " Docket/LR Number"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function gn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "......."),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Mn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Stage"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function yn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Delivar Mode"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Tn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Customer PO Number"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Ln(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Payment Terms"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Yn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Material Invard Type"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Dn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Priority"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function Zn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "PO Number"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function kn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Stage"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Ct(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, " Probability"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function qt(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Delivary By"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function vn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Warranty Terms"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function na(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Returnable Type"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function ia(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "Close Before"),
            e.qZA(),
            e.TgZ(3, "input", 47),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().TCloseBefore = M);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 48),
            e.qZA();
        }
        if (2 & r) {
          const i = e.MAs(6),
            m = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", i)("ngModel", m.TCloseBefore)(
              "min",
              m.minDate
            ),
            e.xp6(1),
            e.Q6J("for", i);
        }
      }
      function bn(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "PO Date"),
            e.qZA(),
            e.TgZ(3, "input", 49),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().MPODate = M);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 50),
            e.qZA();
        }
        if (2 & r) {
          const i = e.MAs(6),
            m = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", i)("ngModel", m.MPODate)("min", m.minDate),
            e.xp6(1),
            e.Q6J("for", i);
        }
      }
      function wn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Industry Type."),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function An(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function xn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Delivary Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function sa(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Material Out Type"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function J(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Advance Payment"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Be(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Purchase Invoice Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Ve(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Reminder Periodicity"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Sn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Supplier Invoice Number"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function ra(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Ticket Source"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function Cn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "...."),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function mt(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Product Service"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Ye(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Billing Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Ot(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Returnable"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function qn(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "Material EXP Del Date"),
            e.qZA(),
            e.TgZ(3, "input", 51),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().POEXPDelDate = M);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 52),
            e.qZA();
        }
        if (2 & r) {
          const i = e.MAs(6),
            m = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", i)("ngModel", m.POEXPDelDate)(
              "min",
              m.minDate
            ),
            e.xp6(1),
            e.Q6J("for", i);
        }
      }
      function Te(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Bill Receipt Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function On(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Stage"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function Nt(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "mat-form-field", 9),
            e.TgZ(1, "mat-label"),
            e._uU(2, "Invoice Date"),
            e.qZA(),
            e.TgZ(3, "input", 53),
            e.NdJ("ngModelChange", function (M) {
              return e.CHM(i), (e.oxw().PIInvoiceDate = M);
            }),
            e.qZA(),
            e._UZ(4, "mat-datepicker-toggle", 43),
            e._UZ(5, "mat-datepicker", null, 54),
            e.qZA();
        }
        if (2 & r) {
          const i = e.MAs(6),
            m = e.oxw();
          e.xp6(3),
            e.Q6J("matDatepicker", i)("ngModel", m.PIInvoiceDate)(
              "min",
              m.minDate
            ),
            e.xp6(1),
            e.Q6J("for", i);
        }
      }
      function Nn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Text 1"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Hn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Stage"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Un(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Material Del Status"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function ct(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Material Receipt Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Ht(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Text 2"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function Pn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Billing Status"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      function En(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Purchase Invoice Status"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function jn(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Payment Receipt Status"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function oa(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Product"),
          e.qZA(),
          e.TgZ(3, "mat-select"),
          e._UZ(4, "mat-option"),
          e.qZA(),
          e.qZA());
      }
      function In(r, f) {
        1 & r &&
          (e.TgZ(0, "mat-form-field", 9),
          e.TgZ(1, "mat-label"),
          e._uU(2, "Value"),
          e.qZA(),
          e._UZ(3, "input", 40),
          e.qZA());
      }
      let Fn = (() => {
        class r {
          constructor(i, m, M, T) {
            (this.global = i),
              (this.commanservice = m),
              (this.data = M),
              (this.dialog = T),
              (this.Company = ""),
              (this.a = A()),
              (this.minDate = this.a.toISOString()),
              (this.LExpCloserDate = this.a.toISOString()),
              (this.DelDate = this.a.toISOString()),
              (this.MPODate = this.a.toISOString()),
              (this.PPODate = this.a.toISOString()),
              (this.PIPODate = this.a.toISOString()),
              (this.TCloseBefore = this.a.toISOString()),
              (this.POEXPDelDate = this.a.toISOString()),
              (this.PIInvoiceDate = this.a.toISOString()),
              (this.CommanData = M.commanData),
              console.log(M.commanData),
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
          Autocomplete(i) {
            console.log(i),
              i.length >= 3 &&
                this.commanservice
                  .createFormAutoComplete({
                    DBName: this.global.LOGGED_IN_USER.DbName,
                    prefixText: i,
                  })
                  .subscribe((M) => {
                    (this.autoCompleteData = JSON.parse(M)),
                      console.log(this.autoCompleteData);
                  }),
              this.companyContactList(Wn);
          }
          companyContactList(i) {
            console.log(i),
              this.commanservice
                .getCompanyContactList({
                  DBNAME: this.global.LOGGED_IN_USER.DbName,
                  id11: this.Company,
                  password: this.global.LOGGED_IN_USER.encryptPswd,
                })
                .subscribe((M) => {
                  console.log(JSON.parse(M));
                });
          }
          Detail() {
            this.dialog
              .open($a, {
                position: { right: "0%", top: "10%" },
                data: { EntityName: this.EntityName },
              })
              .afterClosed()
              .subscribe();
          }
          address() {
            this.dialog.open(Ka, { data: {} }).afterClosed().subscribe();
          }
          ngOnInit() {}
        }
        return (
          (r.ɵfac = function (i) {
            return new (i || r)(
              e.Y36(u.x),
              e.Y36(xt),
              e.Y36(Q.WI),
              e.Y36(Q.uw)
            );
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["app-create-new"]],
            features: [
              e._Bn([
                { provide: b.Ad, useValue: "en-GB" },
                { provide: b._A, useClass: Oe, deps: [b.Ad, le] },
                { provide: b.sG, useValue: ne },
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
            template: function (i, m) {
              if (
                (1 & i &&
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
                    return m.Detail();
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
                    return (m.Company = T);
                  })("ngModelChange", function (T) {
                    return m.Autocomplete(T);
                  }),
                  e.qZA(),
                  e.TgZ(20, "mat-autocomplete", null, 11),
                  e.YNc(22, ea, 2, 3, "mat-option", 12),
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
                    return m.address();
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
                  e.YNc(93, Xa, 5, 0, "mat-form-field", 30),
                  e.YNc(94, en, 5, 0, "mat-form-field", 30),
                  e.YNc(95, Qe, 5, 0, "mat-form-field", 30),
                  e.YNc(96, ut, 5, 0, "mat-form-field", 30),
                  e.YNc(97, ta, 5, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.TgZ(98, "div", 29),
                  e.YNc(99, Ge, 4, 0, "mat-form-field", 30),
                  e.YNc(100, ye, 4, 0, "mat-form-field", 30),
                  e.YNc(101, tn, 4, 0, "mat-form-field", 30),
                  e.YNc(102, an, 4, 0, "mat-form-field", 30),
                  e.YNc(103, nn, 5, 0, "mat-form-field", 30),
                  e.YNc(104, sn, 5, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(105, "div", 28),
                  e.TgZ(106, "div", 6),
                  e.YNc(107, rn, 4, 0, "mat-form-field", 30),
                  e.YNc(108, on, 4, 0, "mat-form-field", 30),
                  e.YNc(109, _n, 4, 0, "mat-form-field", 30),
                  e.YNc(110, dn, 5, 0, "mat-form-field", 30),
                  e.YNc(111, St, 4, 0, "mat-form-field", 30),
                  e.YNc(112, ln, 4, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.YNc(113, aa, 5, 0, "div", 31),
                  e.TgZ(114, "div", 32),
                  e.YNc(115, un, 5, 0, "mat-form-field", 30),
                  e.YNc(116, mn, 7, 4, "mat-form-field", 30),
                  e.YNc(117, cn, 7, 4, "mat-form-field", 30),
                  e.YNc(118, pn, 5, 0, "mat-form-field", 30),
                  e.YNc(119, hn, 5, 0, "mat-form-field", 30),
                  e.YNc(120, fn, 4, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(121, "div", 28),
                  e.TgZ(122, "div", 29),
                  e.YNc(123, gn, 4, 0, "mat-form-field", 30),
                  e.YNc(124, Mn, 4, 0, "mat-form-field", 30),
                  e.YNc(125, yn, 4, 0, "mat-form-field", 30),
                  e.YNc(126, Tn, 4, 0, "mat-form-field", 30),
                  e.YNc(127, Ln, 4, 0, "mat-form-field", 30),
                  e.YNc(128, Yn, 4, 0, "mat-form-field", 30),
                  e.YNc(129, Dn, 5, 0, "mat-form-field", 30),
                  e.YNc(130, Zn, 4, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.TgZ(131, "div", 29),
                  e.YNc(132, kn, 4, 0, "mat-form-field", 30),
                  e.YNc(133, Ct, 4, 0, "mat-form-field", 30),
                  e.YNc(134, qt, 5, 0, "mat-form-field", 30),
                  e.YNc(135, vn, 4, 0, "mat-form-field", 30),
                  e.YNc(136, na, 4, 0, "mat-form-field", 30),
                  e.YNc(137, ia, 7, 4, "mat-form-field", 30),
                  e.YNc(138, bn, 7, 4, "mat-form-field", 30),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(139, "div", 28),
                  e.TgZ(140, "div", 29),
                  e.YNc(141, wn, 4, 0, "mat-form-field", 30),
                  e.YNc(142, An, 4, 0, "mat-form-field", 30),
                  e.YNc(143, xn, 4, 0, "mat-form-field", 30),
                  e.YNc(144, sa, 4, 0, "mat-form-field", 30),
                  e.YNc(145, J, 4, 0, "mat-form-field", 30),
                  e.YNc(146, Be, 4, 0, "mat-form-field", 30),
                  e.YNc(147, Ve, 4, 0, "mat-form-field", 30),
                  e.YNc(148, Sn, 4, 0, "mat-form-field", 30),
                  e.YNc(149, ra, 5, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.TgZ(150, "div", 29),
                  e.YNc(151, Cn, 4, 0, "mat-form-field", 30),
                  e.YNc(152, mt, 4, 0, "mat-form-field", 30),
                  e.YNc(153, Ye, 4, 0, "mat-form-field", 30),
                  e.YNc(154, Ot, 4, 0, "mat-form-field", 30),
                  e.YNc(155, qn, 7, 4, "mat-form-field", 30),
                  e.YNc(156, Te, 4, 0, "mat-form-field", 30),
                  e.YNc(157, On, 5, 0, "mat-form-field", 30),
                  e.YNc(158, Nt, 7, 4, "mat-form-field", 30),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(159, "div", 28),
                  e.TgZ(160, "div", 29),
                  e.YNc(161, Nn, 4, 0, "mat-form-field", 30),
                  e.YNc(162, Hn, 4, 0, "mat-form-field", 30),
                  e.YNc(163, Un, 5, 0, "mat-form-field", 30),
                  e.YNc(164, ct, 4, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.TgZ(165, "div", 29),
                  e.YNc(166, Ht, 4, 0, "mat-form-field", 30),
                  e.YNc(167, Pn, 4, 0, "mat-form-field", 30),
                  e.YNc(168, En, 5, 0, "mat-form-field", 30),
                  e.YNc(169, jn, 5, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.qZA(),
                  e.TgZ(170, "div", 28),
                  e.TgZ(171, "div", 29),
                  e.YNc(172, oa, 5, 0, "mat-form-field", 30),
                  e.qZA(),
                  e.TgZ(173, "div", 29),
                  e.YNc(174, In, 4, 0, "mat-form-field", 30),
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
                2 & i)
              ) {
                const M = e.MAs(21);
                e.xp6(19),
                  e.Q6J("ngModel", m.Company)("matAutocomplete", M),
                  e.xp6(3),
                  e.Q6J("ngForOf", m.autoCompleteData),
                  e.xp6(71),
                  e.Q6J("ngIf", m.Source),
                  e.xp6(1),
                  e.Q6J("ngIf", m.DelivaryMode),
                  e.xp6(1),
                  e.Q6J("ngIf", m.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", m.paymentpayable),
                  e.xp6(1),
                  e.Q6J("ngIf", m.ticket),
                  e.xp6(2),
                  e.Q6J("ngIf", m.prospectlead),
                  e.xp6(1),
                  e.Q6J("ngIf", m.so),
                  e.xp6(1),
                  e.Q6J("ngIf", m.DelivaryName),
                  e.xp6(1),
                  e.Q6J("ngIf", m.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", m.payment),
                  e.xp6(1),
                  e.Q6J("ngIf", m.ticket),
                  e.xp6(3),
                  e.Q6J("ngIf", m.so),
                  e.xp6(1),
                  e.Q6J("ngIf", m.payment),
                  e.xp6(1),
                  e.Q6J("ngIf", m.pi),
                  e.xp6(1),
                  e.Q6J("ngIf", m.ticket),
                  e.xp6(1),
                  e.Q6J("ngIf", m.DispatchBy),
                  e.xp6(1),
                  e.Q6J("ngIf", m.prospectlead),
                  e.xp6(1),
                  e.Q6J("ngIf", m.ticket),
                  e.xp6(2),
                  e.Q6J("ngIf", m.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", m.lead),
                  e.xp6(1),
                  e.Q6J("ngIf", m.so),
                  e.xp6(1),
                  e.Q6J("ngIf", m.ticket),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Stage),
                  e.xp6(1),
                  e.Q6J("ngIf", m.Docket),
                  e.xp6(3),
                  e.Q6J("ngIf", m.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", m.lead),
                  e.xp6(1),
                  e.Q6J("ngIf", m.so),
                  e.xp6(1),
                  e.Q6J("ngIf", m.mo),
                  e.xp6(1),
                  e.Q6J("ngIf", m.po),
                  e.xp6(1),
                  e.Q6J("ngIf", m.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", m.ticket),
                  e.xp6(1),
                  e.Q6J("ngIf", m.PONumber),
                  e.xp6(2),
                  e.Q6J("ngIf", m.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", m.lead),
                  e.xp6(1),
                  e.Q6J("ngIf", m.so),
                  e.xp6(1),
                  e.Q6J("ngIf", m.po),
                  e.xp6(1),
                  e.Q6J("ngIf", m.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", m.ticket),
                  e.xp6(1),
                  e.Q6J("ngIf", m.PODate),
                  e.xp6(3),
                  e.Q6J("ngIf", m.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", m.lead),
                  e.xp6(1),
                  e.Q6J("ngIf", m.so),
                  e.xp6(1),
                  e.Q6J("ngIf", m.mo),
                  e.xp6(1),
                  e.Q6J("ngIf", m.po),
                  e.xp6(1),
                  e.Q6J("ngIf", m.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", m.payment),
                  e.xp6(1),
                  e.Q6J("ngIf", m.pi),
                  e.xp6(1),
                  e.Q6J("ngIf", m.ticket),
                  e.xp6(2),
                  e.Q6J("ngIf", m.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", m.lead),
                  e.xp6(1),
                  e.Q6J("ngIf", m.so),
                  e.xp6(1),
                  e.Q6J("ngIf", m.mo),
                  e.xp6(1),
                  e.Q6J("ngIf", m.po),
                  e.xp6(1),
                  e.Q6J("ngIf", m.mi),
                  e.xp6(1),
                  e.Q6J("ngIf", m.ticket),
                  e.xp6(1),
                  e.Q6J("ngIf", m.paymentpayable),
                  e.xp6(3),
                  e.Q6J("ngIf", m.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", m.mo),
                  e.xp6(1),
                  e.Q6J("ngIf", m.payment),
                  e.xp6(1),
                  e.Q6J("ngIf", m.MaterialReceiptStatus),
                  e.xp6(2),
                  e.Q6J("ngIf", m.prospect),
                  e.xp6(1),
                  e.Q6J("ngIf", m.mo),
                  e.xp6(1),
                  e.Q6J("ngIf", m.po),
                  e.xp6(1),
                  e.Q6J("ngIf", m.paymentpayable),
                  e.xp6(3),
                  e.Q6J("ngIf", m.prospect),
                  e.xp6(2),
                  e.Q6J("ngIf", m.prospect),
                  e.xp6(13),
                  e.Q6J("mat-dialog-close", !0);
              }
            },
            directives: [
              Q.uh,
              S._Y,
              S.JL,
              S.F,
              j.KE,
              j.hX,
              me.Nt,
              S.Fj,
              Pe.ZL,
              S.wO,
              S.nD,
              S.Q7,
              S.JJ,
              S.On,
              Pe.XC,
              l.sg,
              he.gD,
              B.oG,
              b.ey,
              l.O5,
              fe.lW,
              Q.ZT,
              z.hl,
              z.nW,
              j.R9,
              z.Mq,
            ],
            styles: [
              ".contact_form[_ngcontent-%COMP%]{min-height:400px;margin:0 6px;padding:10px}.full-width[_ngcontent-%COMP%]{width:100%}li[_ngcontent-%COMP%]{text-decoration:none;display:inline;padding-left:10px;cursor:pointer}h4[_ngcontent-%COMP%]{text-align:center;color:#87cefa;margin:0!important}textarea[_ngcontent-%COMP%]{height:330px;resize:none}.Formheader[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.link[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer}.formFooter[_ngcontent-%COMP%]{height:48px;padding-top:7px}.mat-stroked-button[_ngcontent-%COMP%]{margin-right:15px!important;box-shadow:0 2px 5px #00000042!important}.mat-checkbox[_ngcontent-%COMP%]{margin-top:16px}",
            ],
          })),
          r
        );
      })();
      function Wn(r) {
        throw new Error("Function not implemented.");
      }
      let Jn = (() => {
        class r {
          constructor(i, m, M) {
            (this.data = i),
              (this.listService = m),
              (this.global = M),
              console.log(i);
          }
          ngOnInit() {}
        }
        return (
          (r.ɵfac = function (i) {
            return new (i || r)(e.Y36(Q.WI), e.Y36(re.L), e.Y36(u.x));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["app-edit-vouchar"]],
            decls: 2,
            vars: 0,
            template: function (i, m) {
              1 & i &&
                (e.TgZ(0, "p"), e._uU(1, "edit-vouchar works!"), e.qZA());
            },
            styles: [""],
          })),
          r
        );
      })();
      var _a = h(9772);
      function da(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "tr", 8),
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
            e.TgZ(23, "a", 9),
            e.NdJ("click", function () {
              const T = e.CHM(i).$implicit;
              return e.oxw().editVouchar(T);
            }),
            e._UZ(24, "i", 10),
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
        if (2 & r) {
          const i = f.$implicit;
          e.xp6(2),
            e.Oqu(i.VoucherNo),
            e.xp6(2),
            e.Oqu(i.UpdatedBy),
            e.xp6(2),
            e.Oqu(e.xi3(7, 13, i.UpdatedOn, "dd MMM yyyy")),
            e.xp6(3),
            e.Oqu(i.ExpenseTitle),
            e.xp6(2),
            e.Oqu(i.EntityName),
            e.xp6(2),
            e.Oqu(i.Budgeted),
            e.xp6(2),
            e.Oqu(i.ExpenseTitle),
            e.xp6(2),
            e.Oqu(i.ApprovalStatus),
            e.xp6(2),
            e.Oqu(i.ApprovedAmount),
            e.xp6(2),
            e.Oqu(i.PaidAmount),
            e.xp6(5),
            e.Oqu(i.PaymentStatus),
            e.xp6(2),
            e.Oqu(i.DueAmount),
            e.xp6(2),
            e.Oqu(i.ApprovedRemark);
        }
      }
      let Rn = (() => {
        class r {
          constructor(i, m, M, T) {
            (this.data = i),
              (this.listService = m),
              (this.global = M),
              (this.dialog = T),
              this.listService
                .showvoucharData({
                  id: i.installno,
                  entityName: i.entityName,
                  entityId: i.entityid,
                  dbname: this.global.LOGGED_IN_USER.DbName,
                  encrypt: this.global.LOGGED_IN_USER.encryptPswd,
                })
                .subscribe((Wt) => {
                  this.editData = JSON.parse(Wt);
                });
          }
          editVouchar(i) {
            this.dialog
              .open(Jn, {
                position: { left: "65%", top: "5%" },
                data: { value: i },
              })
              .afterClosed()
              .subscribe();
          }
          ngOnInit() {}
        }
        return (
          (r.ɵfac = function (i) {
            return new (i || r)(
              e.Y36(Q.WI),
              e.Y36(re.L),
              e.Y36(u.x),
              e.Y36(Q.uw)
            );
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [["app-edit-list"]],
            decls: 39,
            vars: 1,
            consts: [
              [1, "noteBox"],
              [1, "modal-header", "bg-primary", "text-white", "text-center"],
              [1, "modal-title", "title"],
              ["type", "button", "mat-dialog-close", "", 1, "btn-close"],
              [1, "modal-body"],
              [1, "table", "table-hover", "table-striped"],
              [1, "table-primary"],
              ["class", "table-light", 4, "ngFor", "ngForOf"],
              [1, "table-light"],
              [1, "a", 3, "click"],
              ["matTooltip", "Edit Vouchar", 1, "fas", "fa-pencil-alt"],
            ],
            template: function (i, m) {
              1 & i &&
                (e.TgZ(0, "div", 0),
                e.TgZ(1, "div", 1),
                e.TgZ(2, "h4", 2),
                e._uU(3, "Vouchar Detail"),
                e.qZA(),
                e._UZ(4, "button", 3),
                e.qZA(),
                e.TgZ(5, "div", 4),
                e.TgZ(6, "table", 5),
                e.TgZ(7, "thead"),
                e.TgZ(8, "tr", 6),
                e.TgZ(9, "th"),
                e._uU(10, "Seq"),
                e.qZA(),
                e.TgZ(11, "th"),
                e._uU(12, "By"),
                e.qZA(),
                e.TgZ(13, "th"),
                e._uU(14, "On"),
                e.qZA(),
                e.TgZ(15, "th"),
                e._uU(16, "Head"),
                e.qZA(),
                e.TgZ(17, "th"),
                e._uU(18, "Entity"),
                e.qZA(),
                e.TgZ(19, "th"),
                e._uU(20, "Budget"),
                e.qZA(),
                e.TgZ(21, "th"),
                e._uU(22, "Exp."),
                e.qZA(),
                e.TgZ(23, "th"),
                e._uU(24, "Appv Status"),
                e.qZA(),
                e.TgZ(25, "th"),
                e._uU(26, "Appv Amt"),
                e.qZA(),
                e.TgZ(27, "th"),
                e._uU(28, "Paid Amt"),
                e.qZA(),
                e.TgZ(29, "th"),
                e._uU(30, "Due Amt"),
                e.qZA(),
                e.TgZ(31, "th"),
                e._uU(32, "Paid Status"),
                e.qZA(),
                e.TgZ(33, "th"),
                e._uU(34, "Appv Amt"),
                e.qZA(),
                e.TgZ(35, "th"),
                e._uU(36, "Remark"),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.TgZ(37, "tbody"),
                e.YNc(38, da, 31, 16, "tr", 7),
                e.qZA(),
                e.qZA(),
                e.qZA(),
                e.qZA()),
                2 & i && (e.xp6(38), e.Q6J("ngForOf", m.editData));
            },
            directives: [Q.ZT, l.sg, _a.gM],
            pipes: [l.uU],
            styles: [
              "th[_ngcontent-%COMP%]{height:30px;text-align:center}td[_ngcontent-%COMP%]{font-size:13px}",
            ],
          })),
          r
        );
      })();
      function Ee(r, f) {
        if (
          (1 & r &&
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
          2 & r)
        ) {
          const i = f.$implicit;
          e.xp6(2),
            e.Oqu(i.Name),
            e.xp6(2),
            e.Oqu(i.rate),
            e.xp6(2),
            e.Oqu(i.Discount_val),
            e.xp6(2),
            e.Oqu(i.Quantity),
            e.xp6(2),
            e.Oqu(i.amount),
            e.xp6(2),
            e.Oqu(i.Taxes_val),
            e.xp6(2),
            e.Oqu(i.TaxAmount_val);
        }
      }
      function zn(r, f) {
        if (
          (1 & r &&
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
            e.YNc(18, Ee, 15, 7, "tr", 29),
            e.qZA(),
            e.qZA()),
          2 & r)
        ) {
          const i = e.oxw(2);
          e.xp6(18), e.Q6J("ngForOf", i.ViewProductDetail);
        }
      }
      function Ut(r, f) {
        if (
          (1 & r &&
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
          2 & r)
        ) {
          const i = f.$implicit;
          e.xp6(2),
            e.Oqu(i.ScheduleActionId),
            e.xp6(2),
            e.Oqu(i.SeqId),
            e.xp6(2),
            e.Oqu(e.xi3(7, 7, i.ActionStartDate, "dd MMM y")),
            e.xp6(3),
            e.Oqu(i.ActionStartTime),
            e.xp6(2),
            e.Oqu(i.username),
            e.xp6(2),
            e.Oqu(i.Taxes_val),
            e.xp6(2),
            e.Oqu(i.TaxAmount_val);
        }
      }
      function Qn(r, f) {
        if (
          (1 & r &&
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
            e.YNc(85, zn, 19, 1, "table", 25),
            e.qZA(),
            e.TgZ(86, "mat-tab", 26),
            e.TgZ(87, "table", 27),
            e.TgZ(88, "thead"),
            e.TgZ(89, "tr", 28),
            e.TgZ(90, "th"),
            e._uU(91, "Acu Id"),
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
            e._uU(101, "Done"),
            e.qZA(),
            e.TgZ(102, "th"),
            e._uU(103, "Link"),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(104, "tbody"),
            e.YNc(105, Ut, 16, 10, "tr", 29),
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
          2 & r)
        ) {
          const i = e.oxw();
          e.xp6(6),
            e.Oqu(null == i.entityData ? null : i.entityData.CompanyName),
            e.xp6(7),
            e.Oqu(i.EntityNameTitle),
            e.xp6(3),
            e.Oqu(i.Entityid),
            e.xp6(2),
            e.hij(
              " Title : ",
              null == i.entityData ? null : i.entityData.Title,
              ""
            ),
            e.xp6(10),
            e.Oqu(null == i.entityData ? null : i.entityData.CompanyAddress),
            e.xp6(2),
            e.hij(
              " ",
              null == i.entityData ? null : i.entityData.CompanyAddress1,
              ""
            ),
            e.xp6(9),
            e.Oqu(null == i.entityData ? null : i.entityData.BillingStatus),
            e.xp6(5),
            e.Oqu(null == i.entityData ? null : i.entityData.Stage),
            e.xp6(6),
            e.hij(" ", null == i.entityData ? null : i.entityData.Priority, ""),
            e.xp6(5),
            e.Oqu(null == i.entityData ? null : i.entityData.Probability),
            e.xp6(6),
            e.Oqu(null == i.entityData ? null : i.entityData.Source),
            e.xp6(5),
            e.Oqu(null == i.entityData ? null : i.entityData.Source_Ref),
            e.xp6(9),
            e.Oqu(
              e.xi3(
                76,
                15,
                null == i.entityData ? null : i.entityData.Opendate,
                "dd MMM YYYY "
              )
            ),
            e.xp6(10),
            e.Q6J("ngIf", i.ViewProductDetail),
            e.xp6(20),
            e.Q6J("ngForOf", i.ViewActionDetail);
        }
      }
      let Pt = (() => {
          class r {
            constructor(i, m, M) {
              (this.listService = i),
                (this.data = m),
                (this.global = M),
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
                  ? ((this.EntityModule = "Repair"),
                    (this.Entityflag = "Repair"))
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
            (r.ɵfac = function (i) {
              return new (i || r)(e.Y36(re.L), e.Y36(Q.WI), e.Y36(u.x));
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
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
              template: function (i, m) {
                1 & i && e.YNc(0, Qn, 114, 18, "div", 0),
                  2 & i && e.Q6J("ngIf", m.entityData);
              },
              directives: [l.O5, Ze.SP, Ze.uX, l.sg, kt],
              pipes: [l.uU],
              styles: [
                ".modal-heading[_ngcontent-%COMP%]{height:30px;text-align:center;padding-top:28px}.id-title-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.id-entity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.table_heading[_ngcontent-%COMP%]{background-color:#bce1c6;color:#000}.card[_ngcontent-%COMP%]{height:200px}.standard-color-modal[_ngcontent-%COMP%]{background-color:#dcebdc}.company_details[_ngcontent-%COMP%]{padding:5px 0p 5px 0px;grid-row-gap:10px;row-gap:10px}.span-text[_ngcontent-%COMP%]{color:#789;font-size:15px;padding-right:10px}.resp-text[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#000}.nxt-action-details[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.i-block[_ngcontent-%COMP%]{margin-top:5px}.i-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:#789}.date-class[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:14px}",
              ],
            })),
            r
          );
        })(),
        Gn = (() => {
          class r {
            transform(i) {
              if (null == i) return i;
              {
                let T = i.split("/").reverse().join("-");
                return A(T).format("DD MMM y");
              }
            }
          }
          return (
            (r.ɵfac = function (i) {
              return new (i || r)();
            }),
            (r.ɵpipe = e.Yjl({ name: "dateformat", type: r, pure: !0 })),
            r
          );
        })();
      function Bn(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " ID. "), e.qZA());
      }
      function Vn(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "a", 46),
            e.NdJ("click", function () {
              e.CHM(i);
              const M = e.oxw().$implicit;
              return e.oxw(4).openEntity(M.InstalledNo);
            }),
            e._uU(1),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.hij(" ", i.InstalledNo, " ");
        }
      }
      function $n(r, f) {
        if ((1 & r && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & r)) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.Oqu(i.InstalledNo);
        }
      }
      function la(r, f) {
        if ((1 & r && (e.TgZ(0, "a", 48), e._UZ(1, "i", 51), e.qZA()), 2 & r)) {
          const i = e.oxw(5);
          e.xp6(1), e.MGl("matTooltip", "Edit ", i.EntityName, "");
        }
      }
      function Kn(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "a", 46),
            e.NdJ("click", function () {
              e.CHM(i);
              const M = e.oxw().$implicit;
              return e.oxw(4).EditList(M.InstalledNo, M.ENTITY, M.EntityId);
            }),
            e._UZ(1, "i", 51),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw(5);
          e.xp6(1), e.MGl("matTooltip", "Edit ", i.EntityName, "");
        }
      }
      function ua(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "td", 44),
            e.YNc(1, Vn, 2, 1, "a", 45),
            e.TgZ(2, "div"),
            e.YNc(3, $n, 2, 1, "span", 12),
            e.TgZ(4, "a", 46),
            e.NdJ("click", function () {
              const T = e.CHM(i).$implicit;
              return e.oxw(4).openEmailTrace(T.InstalledNo);
            }),
            e._UZ(5, "i", 47),
            e.qZA(),
            e.TgZ(6, "a", 48),
            e._UZ(7, "i", 49),
            e.qZA(),
            e.YNc(8, la, 2, 1, "a", 50),
            e.YNc(9, Kn, 2, 1, "a", 45),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw(4);
          e.xp6(1),
            e.Q6J("ngIf", i.installedno),
            e.xp6(2),
            e.Q6J("ngIf", i.voucher),
            e.xp6(5),
            e.Q6J("ngIf", i.installedno),
            e.xp6(1),
            e.Q6J("ngIf", i.voucher);
        }
      }
      function W(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " Company "), e.qZA());
      }
      function Xn(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "a", 46),
            e.NdJ("click", function () {
              e.CHM(i);
              const M = e.oxw().$implicit;
              return e.oxw(4).approval(M.InstalledNo, M.ENTITY, M.EntityId);
            }),
            e._uU(2),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw().$implicit;
          e.xp6(2), e.Oqu(i.Approval);
        }
      }
      function ei(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "td", 52),
            e._uU(1),
            e.TgZ(2, "div"),
            e.TgZ(3, "a", 46),
            e.NdJ("click", function () {
              const T = e.CHM(i).$implicit;
              return e.oxw(4).openEmailQuote(T.InstalledNo);
            }),
            e._UZ(4, "i", 53),
            e.qZA(),
            e.qZA(),
            e.YNc(5, Xn, 3, 1, "div", 12),
            e.qZA();
        }
        if (2 & r) {
          const i = f.$implicit,
            m = e.oxw(4);
          e.xp6(1),
            e.hij(" ", i.ClientName, " "),
            e.xp6(4),
            e.Q6J("ngIf", m.voucher);
        }
      }
      function ma(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " Contact "), e.qZA());
      }
      function ti(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "td", 44),
            e._uU(1),
            e.TgZ(2, "div"),
            e.TgZ(3, "a", 48),
            e._UZ(4, "i", 54),
            e.qZA(),
            e.TgZ(5, "a"),
            e._UZ(6, "i", 55),
            e.qZA(),
            e.qZA(),
            e.qZA()),
          2 & r)
        ) {
          const i = f.$implicit;
          e.xp6(1), e.hij(" ", i.ContactName, " ");
        }
      }
      function ai(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " Owner Name "), e.qZA());
      }
      function ni(r, f) {
        if ((1 & r && (e.TgZ(0, "td", 44), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.xp6(1), e.hij(" ", i.OwnerName, " ");
        }
      }
      function $e(r, f) {
        1 & r && (e.TgZ(0, "th", 56), e._uU(1, " Amount "), e.qZA());
      }
      function ii(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "td", 57),
            e._uU(1),
            e.ALo(2, "currency"),
            e.TgZ(3, "div"),
            e.TgZ(4, "a", 46),
            e.NdJ("click", function () {
              const T = e.CHM(i).$implicit;
              return e.oxw(4).openChat(T.InstalledNo);
            }),
            e._UZ(5, "i", 58),
            e.qZA(),
            e.TgZ(6, "a", 46),
            e.NdJ("click", function () {
              const T = e.CHM(i).$implicit;
              return e.oxw(4).openNotes(T.InstalledNo, T.ClientName);
            }),
            e._UZ(7, "i", 59),
            e.qZA(),
            e.TgZ(8, "a", 9),
            e.NdJ("click", function () {
              const T = e.CHM(i).$implicit;
              return e.oxw(4).openAction(T.InstalledNo, T.ClientID);
            }),
            e._UZ(9, "i", 60),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = f.$implicit;
          e.xp6(1), e.hij(" ", e.xi3(2, 1, i.Anualisedamount, "INR"), " ");
        }
      }
      function si(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " Status "), e.qZA());
      }
      function ri(r, f) {
        if ((1 & r && (e.TgZ(0, "td", 44), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.xp6(1), e.hij(" ", i.StatusName, " ");
        }
      }
      function pt(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " Del Status "), e.qZA());
      }
      function ht(r, f) {
        if ((1 & r && (e.TgZ(0, "td", 44), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.xp6(1), e.hij(" ", i.DeliveryStatusName, " ");
        }
      }
      function Et(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " Source "), e.qZA());
      }
      function oi(r, f) {
        if ((1 & r && (e.TgZ(0, "td", 44), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.xp6(1), e.hij(" ", i.SourceName, " ");
        }
      }
      function ca(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " Billed status "), e.qZA());
      }
      function _i(r, f) {
        if ((1 & r && (e.TgZ(0, "td", 44), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.xp6(1), e.hij(" ", i.Billedstatus, " ");
        }
      }
      function jt(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " Service "), e.qZA());
      }
      function It(r, f) {
        if ((1 & r && (e.TgZ(0, "td", 44), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.xp6(1), e.hij(" ", i.ServiceTypeName, " ");
        }
      }
      function Ft(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " Stage "), e.qZA());
      }
      function di(r, f) {
        if ((1 & r && (e.TgZ(0, "td", 44), e._uU(1), e.qZA()), 2 & r)) {
          const i = f.$implicit;
          e.xp6(1), e.hij(" ", i.Stage, " ");
        }
      }
      function li(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " EXP Date "), e.qZA());
      }
      function ui(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "td", 61), e._uU(1), e.ALo(2, "dateformat"), e.qZA()),
          2 & r)
        ) {
          const i = f.$implicit,
            m = e.oxw(4);
          e.Q6J(
            "ngClass",
            i.EXPClosuredateDashboard >= m.toDayDate ? "green" : "red"
          ),
            e.xp6(1),
            e.hij(" ", e.lcZ(2, 2, i.EXPClosuredateDashboard), " ");
        }
      }
      function mi(r, f) {
        1 & r && (e.TgZ(0, "th", 43), e._uU(1, " Del Date "), e.qZA());
      }
      function ci(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "td", 61), e._uU(1), e.ALo(2, "dateformat"), e.qZA()),
          2 & r)
        ) {
          const i = f.$implicit,
            m = e.oxw(4);
          e.Q6J("ngClass", i.DeliveryDate >= m.toDayDate ? "green" : "red"),
            e.xp6(1),
            e.hij(" ", e.lcZ(2, 2, i.DeliveryDate), " ");
        }
      }
      function pi(r, f) {
        1 & r && e._UZ(0, "tr", 62);
      }
      function hi(r, f) {
        1 & r && e._UZ(0, "tr", 63);
      }
      function fi(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "table", 21),
            e.ynx(1, 22),
            e.YNc(2, Bn, 2, 0, "th", 23),
            e.YNc(3, ua, 10, 4, "td", 24),
            e.BQk(),
            e.ynx(4, 25),
            e.YNc(5, W, 2, 0, "th", 23),
            e.YNc(6, ei, 6, 2, "td", 26),
            e.BQk(),
            e.ynx(7, 27),
            e.YNc(8, ma, 2, 0, "th", 23),
            e.YNc(9, ti, 7, 1, "td", 24),
            e.BQk(),
            e.ynx(10, 28),
            e.YNc(11, ai, 2, 0, "th", 23),
            e.YNc(12, ni, 2, 1, "td", 24),
            e.BQk(),
            e.ynx(13, 29),
            e.YNc(14, $e, 2, 0, "th", 30),
            e.YNc(15, ii, 10, 4, "td", 31),
            e.BQk(),
            e.ynx(16, 32),
            e.YNc(17, si, 2, 0, "th", 23),
            e.YNc(18, ri, 2, 1, "td", 24),
            e.BQk(),
            e.ynx(19, 33),
            e.YNc(20, pt, 2, 0, "th", 23),
            e.YNc(21, ht, 2, 1, "td", 24),
            e.BQk(),
            e.ynx(22, 34),
            e.YNc(23, Et, 2, 0, "th", 23),
            e.YNc(24, oi, 2, 1, "td", 24),
            e.BQk(),
            e.ynx(25, 35),
            e.YNc(26, ca, 2, 0, "th", 23),
            e.YNc(27, _i, 2, 1, "td", 24),
            e.BQk(),
            e.ynx(28, 36),
            e.YNc(29, jt, 2, 0, "th", 23),
            e.YNc(30, It, 2, 1, "td", 24),
            e.BQk(),
            e.ynx(31, 37),
            e.YNc(32, Ft, 2, 0, "th", 23),
            e.YNc(33, di, 2, 1, "td", 24),
            e.BQk(),
            e.ynx(34, 38),
            e.YNc(35, li, 2, 0, "th", 23),
            e.YNc(36, ui, 3, 4, "td", 39),
            e.BQk(),
            e.ynx(37, 40),
            e.YNc(38, mi, 2, 0, "th", 23),
            e.YNc(39, ci, 3, 4, "td", 39),
            e.BQk(),
            e.YNc(40, pi, 1, 0, "tr", 41),
            e.YNc(41, hi, 1, 0, "tr", 42),
            e.qZA()),
          2 & r)
        ) {
          const i = e.oxw(3);
          e.Q6J("dataSource", i.dataSource),
            e.xp6(40),
            e.Q6J("matHeaderRowDef", i.listColumns),
            e.xp6(1),
            e.Q6J("matRowDefColumns", i.listColumns);
        }
      }
      const gi = function () {
        return [5, 10, 25, 100];
      };
      function Mi(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div"),
            e.TgZ(1, "div", 14),
            e.TgZ(2, "div"),
            e.TgZ(3, "mat-form-field", 15),
            e.TgZ(4, "mat-label"),
            e._uU(5, "Search Column"),
            e.qZA(),
            e.TgZ(6, "input", 16, 17),
            e.NdJ("keyup", function (M) {
              return e.CHM(i), e.oxw(2).applyFilter(M);
            }),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.TgZ(8, "div"),
            e._UZ(9, "mat-paginator", 18),
            e.qZA(),
            e.qZA(),
            e.TgZ(10, "div", 19),
            e.YNc(11, fi, 42, 3, "table", 20),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw(2);
          e.xp6(9),
            e.Q6J("pageSize", 10)("pageSizeOptions", e.DdM(3, gi)),
            e.xp6(2),
            e.Q6J("ngIf", i.dataSource);
        }
      }
      function pa(r, f) {
        if (
          (1 & r &&
            (e.TgZ(0, "span", 78), e._uU(1), e.ALo(2, "currency"), e.qZA()),
          2 & r)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.Oqu(e.xi3(2, 1, i.Anualisedamount, "INR"));
        }
      }
      function yi(r, f) {
        if ((1 & r && (e.TgZ(0, "span", 78), e._uU(1), e.qZA()), 2 & r)) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.Oqu(i.StatusName);
        }
      }
      function Ti(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "mat-card", 67),
            e.TgZ(1, "div", 68),
            e.TgZ(2, "span"),
            e._uU(3),
            e.qZA(),
            e.qZA(),
            e.TgZ(4, "div"),
            e.TgZ(5, "div"),
            e.TgZ(6, "span"),
            e.TgZ(7, "a", 46),
            e.NdJ("click", function () {
              const T = e.CHM(i).$implicit;
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
            e.TgZ(13, "div", 69),
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
            e.TgZ(22, "div", 70),
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
            e.TgZ(37, "div", 71),
            e.TgZ(38, "div"),
            e.YNc(39, pa, 3, 4, "span", 72),
            e.YNc(40, yi, 2, 1, "span", 72),
            e.qZA(),
            e.TgZ(41, "div", 73),
            e.TgZ(42, "li"),
            e.TgZ(43, "a", 46),
            e.NdJ("click", function () {
              const T = e.CHM(i).$implicit;
              return e.oxw(3).openNotes(T.InstalledNo, T.ClientName);
            }),
            e._UZ(44, "i", 74),
            e.qZA(),
            e.qZA(),
            e.TgZ(45, "li"),
            e.TgZ(46, "a"),
            e._UZ(47, "i", 75),
            e.qZA(),
            e.qZA(),
            e.TgZ(48, "li"),
            e.TgZ(49, "a", 48),
            e._UZ(50, "i", 76),
            e.qZA(),
            e.qZA(),
            e.TgZ(51, "li"),
            e.TgZ(52, "a", 46),
            e.NdJ("click", function () {
              const T = e.CHM(i).$implicit;
              return e.oxw(3).openChat(T.InstalledNo);
            }),
            e._UZ(53, "i", 77),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = f.$implicit;
          e.xp6(3),
            e.Oqu(i.ClientName),
            e.xp6(5),
            e.hij(" ", i.InstalledNo, ""),
            e.xp6(3),
            e.Oqu(e.lcZ(12, 13, i.Opendate)),
            e.xp6(5),
            e.hij(" ", i.ContactName, ""),
            e.xp6(2),
            e.hij(" ", i.ConMobile, ""),
            e.xp6(2),
            e.Oqu(i.Contactdetail),
            e.xp6(4),
            e.hij(" ", i.nextactiontype, ""),
            e.xp6(3),
            e.hij(" ", i.OwnerName, ""),
            e.xp6(3),
            e.hij(" ", e.lcZ(31, 15, i.NextActtiondate), ""),
            e.xp6(4),
            e.hij(" ", i.Nextactiontime, ""),
            e.xp6(2),
            e.Oqu(i.REMARK),
            e.xp6(3),
            e.Q6J("ngIf", i.Anualisedamount),
            e.xp6(1),
            e.Q6J("ngIf", i.StatusName);
        }
      }
      function de(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div", 64),
            e.TgZ(1, "div", 65),
            e.NdJ("cdkDropListDropped", function (M) {
              return e.CHM(i), e.oxw(2).drop(M);
            }),
            e.YNc(2, Ti, 54, 17, "mat-card", 66),
            e.qZA(),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw(2);
          e.xp6(1),
            e.Q6J("cdkDropListData", i.dataSource.data),
            e.xp6(1),
            e.Q6J("ngForOf", i.dataSource.data);
        }
      }
      function ve(r, f) {
        if (1 & r) {
          const i = e.EpF();
          e.TgZ(0, "div", 1),
            e.TgZ(1, "nav", 2),
            e.TgZ(2, "div", 3),
            e.TgZ(3, "div", 4),
            e.TgZ(4, "div", 5),
            e.TgZ(5, "a", 6),
            e._uU(6, "Home"),
            e.qZA(),
            e.qZA(),
            e.TgZ(7, "div", 7),
            e._uU(8),
            e.qZA(),
            e.qZA(),
            e.TgZ(9, "div", 8),
            e.TgZ(10, "div", 9),
            e.NdJ("click", function () {
              return e.CHM(i), e.oxw().createForm();
            }),
            e.TgZ(11, "mat-icon"),
            e._uU(12, " local_hospital"),
            e.qZA(),
            e.qZA(),
            e.TgZ(13, "div", 9),
            e.NdJ("click", function () {
              return e.CHM(i), e.oxw().selectCard();
            }),
            e.TgZ(14, "mat-icon"),
            e._uU(15, "featured_play_list"),
            e.qZA(),
            e.qZA(),
            e.TgZ(16, "div", 9),
            e.NdJ("click", function () {
              return e.CHM(i), e.oxw().selectTable();
            }),
            e.TgZ(17, "mat-icon"),
            e._uU(18, "dns"),
            e.qZA(),
            e.qZA(),
            e.TgZ(19, "div"),
            e.TgZ(20, "span", 10),
            e.NdJ("click", function () {
              return e.CHM(i), e.oxw().openFilterSearch();
            }),
            e._UZ(21, "i", 11),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.qZA(),
            e.YNc(22, Mi, 12, 4, "div", 12),
            e.YNc(23, de, 3, 2, "div", 13),
            e._UZ(24, "div"),
            e.qZA();
        }
        if (2 & r) {
          const i = e.oxw();
          e.xp6(8),
            e.hij(" ", i.EntityNameTitle, " "),
            e.xp6(14),
            e.Q6J("ngIf", i.tableSection),
            e.xp6(1),
            e.Q6J("ngIf", i.cardSection);
        }
      }
      const Yi = [
        {
          path: "",
          component: C,
          children: [
            {
              path: "page/:EntityName",
              component: (() => {
                class r {
                  constructor(i, m, M, T, v) {
                    (this.CommanService = i),
                      (this.listService = m),
                      (this.root = M),
                      (this.dialog = T),
                      (this.global = v),
                      (this.panelOpenState = !1),
                      (this.a = A()),
                      (this.toDayDate = this.a.toISOString()),
                      (this.displayedColumns = [
                        { default: !0, columnName: "InstalledNo" },
                        { default: !0, columnName: "ClientName" },
                        { default: !0, columnName: "ContactName" },
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
                      (this.dataSource = new oe.by([])),
                      (this.EntityNameTitle = ""),
                      (this.tableSection = !0),
                      (this.cardSection = !1),
                      this.CommanService.listCommanData({
                        DbName: this.global.LOGGED_IN_USER.DbName,
                        Password: this.global.LOGGED_IN_USER.encryptPswd,
                        UserId: this.global.LOGGED_IN_USER.UserId,
                      }).subscribe((we) => {
                        this.commanData = JSON.parse(we);
                      }),
                      this.root.params.subscribe((we) => {
                        (this.EntityName = we.EntityName),
                          this.listService
                            .getLeadList({
                              Flag: this.EntityName,
                              Dbname: this.global.LOGGED_IN_USER.DbName,
                              Password: this.global.LOGGED_IN_USER.encryptPswd,
                              id: this.global.LOGGED_IN_USER.RoleId,
                              userid: this.global.LOGGED_IN_USER.UserId,
                            })
                            .subscribe((Wt) => {
                              this.dataSource.data = JSON.parse(Wt);
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
                  drop(i) {
                    (0, At.bA)(
                      this.dataSource.data,
                      i.previousIndex,
                      i.currentIndex
                    );
                  }
                  get listColumns() {
                    return Object.values(this.displayedColumns)
                      .filter(
                        (i) =>
                          !!i.default ||
                          (!!i.entityTypes &&
                            (i.entityTypes.includes(
                              this.EntityName.toLowerCase()
                            ) ||
                              i.default))
                      )
                      .map((i) => i.columnName);
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
                  applyFilter(i) {
                    this.dataSource.filter = i.target.value
                      .trim()
                      .toLowerCase();
                  }
                  openEntity(i) {
                    this.dialog
                      .open(Pt, {
                        height: "65%",
                        width: "100%",
                        data: {
                          EntityID: i,
                          EntityName: this.EntityName,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  openEmailQuote(i) {
                    this.dialog
                      .open(st, {
                        height: "900px",
                        width: "1000px",
                        data: {
                          EntityID: i,
                          EntityName: this.EntityName,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  openEmailTrace(i) {
                    this.dialog
                      .open(We, {
                        height: "40%",
                        width: "70%",
                        data: {
                          EntityID: i,
                          EntityName: this.EntityName,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  openNotes(i, m) {
                    this.dialog
                      .open(kt, {
                        height: "50%",
                        width: "60%",
                        data: {
                          EntityID: i,
                          EntityName: this.EntityName,
                          EntityNameTitle: this.EntityNameTitle,
                          companyName: m,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  openChat(i) {
                    this.dialog
                      .open(Ca, {
                        width: "35%",
                        position: { left: "65%", top: "5%" },
                        data: {
                          EntityID: i,
                          EntityName: this.EntityName,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  openFilterSearch() {
                    this.dialog
                      .open(ie, {
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
                  EditList(i, m, M) {
                    this.dialog
                      .open(Rn, {
                        height: "50%%",
                        width: "80%",
                        data: {
                          installno: i,
                          entityName: m,
                          entityid: M,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  approval(i, m, M) {
                    console.log(i, m, M),
                      this.dialog
                        .open(xa, {
                          height: "50%%",
                          width: "80%",
                          data: {
                            installno: i,
                            entityName: m,
                            entityid: M,
                            EntityNameTitle: this.EntityNameTitle,
                          },
                        })
                        .afterClosed()
                        .subscribe();
                  }
                  openAction(i, m) {
                    this.dialog
                      .open(Ba, {
                        width: "35%",
                        position: { left: "65%", top: "5%" },
                        data: {
                          EntityID: i,
                          EntityName: this.EntityName,
                          clientNo: m,
                          EntityNameTitle: this.EntityNameTitle,
                        },
                      })
                      .afterClosed()
                      .subscribe();
                  }
                  createForm() {
                    this.dialog
                      .open(Fn, {
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
                    (this.tableSection = !0), (this.cardSection = !1);
                  }
                  selectCard() {
                    (this.tableSection = !1), (this.cardSection = !0);
                  }
                  ngOnInit() {}
                }
                return (
                  (r.ɵfac = function (i) {
                    return new (i || r)(
                      e.Y36(xt),
                      e.Y36(re.L),
                      e.Y36(n.gz),
                      e.Y36(Q.uw),
                      e.Y36(u.x)
                    );
                  }),
                  (r.ɵcmp = e.Xpm({
                    type: r,
                    selectors: [["app-prospect-list"]],
                    viewQuery: function (i, m) {
                      if ((1 & i && (e.Gf(zt.NW, 5), e.Gf(Dt.YE, 5)), 2 & i)) {
                        let M;
                        e.iGM((M = e.CRH())) && (m.paginator = M.first),
                          e.iGM((M = e.CRH())) && (m.sort = M.first);
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
                      [1, "breadcrumb-home"],
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
                      ],
                      [4, "ngIf"],
                      ["class", "cardcontainer", 4, "ngIf"],
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
                    ],
                    template: function (i, m) {
                      1 & i && e.YNc(0, ve, 25, 3, "div", 0),
                        2 & i && e.Q6J("ngIf", m.dataSource);
                    },
                    directives: [
                      l.O5,
                      L.Hw,
                      j.KE,
                      j.hX,
                      me.Nt,
                      zt.NW,
                      oe.BZ,
                      Dt.YE,
                      oe.w1,
                      oe.fO,
                      oe.Dz,
                      oe.as,
                      oe.nj,
                      oe.ge,
                      Dt.nU,
                      oe.ev,
                      _a.gM,
                      l.PC,
                      l.mk,
                      oe.XQ,
                      oe.Gk,
                      At.Wj,
                      l.sg,
                      et.a8,
                      At.Zt,
                    ],
                    pipes: [l.H9, Gn],
                    styles: [
                      "table[_ngcontent-%COMP%]{width:100%;height:75%;padding-top:70px}.table-section[_ngcontent-%COMP%]{overflow-x:auto}th[_ngcontent-%COMP%]{height:30px;background-color:#dcebdc}tr[_ngcontent-%COMP%]:hover{background-color:#dbe4eb}i[_ngcontent-%COMP%]{font-size:14px;color:#9c9b9b;padding:3px}.tableOption[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.Company[_ngcontent-%COMP%]{font-size:16px;color:#000}.table-data[_ngcontent-%COMP%]{font-size:13px;padding:0 10px}.a[_ngcontent-%COMP%]{text-decoration:none}.a[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}#modal[_ngcontent-%COMP%]{background-color:#fff}.nav-item[_ngcontent-%COMP%]{justify-content:center}.nav-link[_ngcontent-%COMP%]{font-size:x-small}.search-input[_ngcontent-%COMP%]{height:38px;display:block;width:100%;height:24px;font-size:14px;font-weight:400;color:#000;background:transparent;border:none;outline:none;border-bottom:1px solid rgb(201,199,199)}.search-input[_ngcontent-%COMP%]:focus{border-bottom:2px solid blue;outline:none}.table-control[_ngcontent-%COMP%]{padding:10px 0}.filterSearch[_ngcontent-%COMP%], .filterSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}.contain[_ngcontent-%COMP%]{padding:0 17px 0 67px}nav[_ngcontent-%COMP%]{padding-top:74px}mat-icon[_ngcontent-%COMP%]{margin:0 0 0 10px}  .mat-dialog-container{margin:0!important;padding:0!important;overflow-x:hidden!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.mat-card[_ngcontent-%COMP%]{padding:10px!important;border-radius:0!important}.card-box[_ngcontent-%COMP%]{min-width:300px;margin:5px}.cardSection[_ngcontent-%COMP%]{padding:24px}li[_ngcontent-%COMP%]{text-decoration:none;display:inline}.iconfield[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 0 0}span[_ngcontent-%COMP%]{padding:0 3px}.iconfield-badge[_ngcontent-%COMP%]{background-color:#b8e0d4;color:#000;border-radius:5px;margin:5px;padding:3px}.company[_ngcontent-%COMP%]{padding:0 0 5px;font-size:large;font-weight:600}.ActionField[_ngcontent-%COMP%]{padding:3px 0;font-size:medium;font-style:italic;font-weight:400}.red[_ngcontent-%COMP%]{color:red}.green[_ngcontent-%COMP%]{color:green}.tooltip[_ngcontent-%COMP%]{background-color:#000;color:#fff}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{display:flex}.cardcontainer[_ngcontent-%COMP%]{background-color:#dcebdc}.breadcrumb-home[_ngcontent-%COMP%]{color:#000;list-style-type:none}",
                    ],
                  })),
                  r
                );
              })(),
              resolve: { login: s.H },
              canActivate: [o.a],
            },
            {
              path: "Dashboard/:id",
              component: Rt,
              resolve: { login: s.H },
              canActivate: [o.a],
            },
            {
              path: "ListDashboard/:EntityName",
              component: wa,
              resolve: { login: s.H },
              canActivate: [o.a],
            },
            { path: "", redirectTo: "/admin/page/Lead", pathMatch: "full" },
          ],
        },
      ];
      let ha = (() => {
          class r {}
          return (
            (r.ɵfac = function (i) {
              return new (i || r)();
            }),
            (r.ɵmod = e.oAB({ type: r })),
            (r.ɵinj = e.cJS({ imports: [[n.Bz.forChild(Yi)], n.Bz] })),
            r
          );
        })(),
        fa = (() => {
          class r {}
          return (
            (r.ɵfac = function (i) {
              return new (i || r)();
            }),
            (r.ɵmod = e.oAB({ type: r })),
            (r.ɵinj = e.cJS({ imports: [[l.ez, ha]] })),
            r
          );
        })();
    },
    7088: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("af", {
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
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    2502: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = function (c) {
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
          s = function (c) {
            return function (g, L, k, C) {
              var A = n(g),
                N = o[c][n(g)];
              return 2 === A && (N = N[L ? 0 : 1]), N.replace(/%d/i, g);
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
        l.defineLocale("ar-dz", {
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
          meridiem: function (c, g, L) {
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
            s: s("s"),
            ss: s("s"),
            m: s("m"),
            mm: s("m"),
            h: s("h"),
            hh: s("h"),
            d: s("d"),
            dd: s("d"),
            M: s("M"),
            MM: s("M"),
            y: s("y"),
            yy: s("y"),
          },
          postformat: function (c) {
            return c.replace(/,/g, "\u060c");
          },
          week: { dow: 0, doy: 4 },
        });
      })(h(5439));
    },
    128: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ar-kw", {
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
      })(h(5439));
    },
    4519: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
          o = function (g) {
            return 0 === g
              ? 0
              : 1 === g
              ? 1
              : 2 === g
              ? 2
              : g % 100 >= 3 && g % 100 <= 10
              ? 3
              : g % 100 >= 11
              ? 4
              : 5;
          },
          s = {
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
          e = function (g) {
            return function (L, k, C, A) {
              var N = o(L),
                ne = s[g][o(L)];
              return 2 === N && (ne = ne[k ? 0 : 1]), ne.replace(/%d/i, L);
            };
          },
          u = [
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
        l.defineLocale("ar-ly", {
          months: u,
          monthsShort: u,
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
          isPM: function (g) {
            return "\u0645" === g;
          },
          meridiem: function (g, L, k) {
            return g < 12 ? "\u0635" : "\u0645";
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
          preparse: function (g) {
            return g.replace(/\u060c/g, ",");
          },
          postformat: function (g) {
            return g
              .replace(/\d/g, function (L) {
                return n[L];
              })
              .replace(/,/g, "\u060c");
          },
          week: { dow: 6, doy: 12 },
        });
      })(h(5439));
    },
    5443: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ar-ma", {
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
      })(h(5439));
    },
    7642: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("ar-sa", {
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
          meridiem: function (e, u, c) {
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
                function (u) {
                  return o[u];
                }
              )
              .replace(/\u060c/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (u) {
                return n[u];
              })
              .replace(/,/g, "\u060c");
          },
          week: { dow: 0, doy: 6 },
        });
      })(h(5439));
    },
    8592: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ar-tn", {
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
      })(h(5439));
    },
    7038: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
          s = function (L) {
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
          u = function (L) {
            return function (k, C, A, N) {
              var ne = s(k),
                b = e[L][s(k)];
              return 2 === ne && (b = b[C ? 0 : 1]), b.replace(/%d/i, k);
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
        l.defineLocale("ar", {
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
          meridiem: function (L, k, C) {
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
            s: u("s"),
            ss: u("s"),
            m: u("m"),
            mm: u("m"),
            h: u("h"),
            hh: u("h"),
            d: u("d"),
            dd: u("d"),
            M: u("M"),
            MM: u("M"),
            y: u("y"),
            yy: u("y"),
          },
          preparse: function (L) {
            return L.replace(
              /[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,
              function (k) {
                return o[k];
              }
            ).replace(/\u060c/g, ",");
          },
          postformat: function (L) {
            return L.replace(/\d/g, function (k) {
              return n[k];
            }).replace(/,/g, "\u060c");
          },
          week: { dow: 6, doy: 12 },
        });
      })(h(5439));
    },
    1213: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("az", {
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
          isPM: function (s) {
            return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(s);
          },
          meridiem: function (s, e, u) {
            return s < 4
              ? "gec\u0259"
              : s < 12
              ? "s\u0259h\u0259r"
              : s < 17
              ? "g\xfcnd\xfcz"
              : "ax\u015fam";
          },
          dayOfMonthOrdinalParse:
            /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
          ordinal: function (s) {
            if (0 === s) return s + "-\u0131nc\u0131";
            var e = s % 10;
            return s + (n[e] || n[(s % 100) - e] || n[s >= 100 ? 100 : null]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    9191: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function o(e, u, c) {
          return "m" === c
            ? u
              ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430"
              : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443"
            : "h" === c
            ? u
              ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430"
              : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443"
            : e +
              " " +
              (function n(e, u) {
                var c = e.split("_");
                return u % 10 == 1 && u % 100 != 11
                  ? c[0]
                  : u % 10 >= 2 &&
                    u % 10 <= 4 &&
                    (u % 100 < 10 || u % 100 >= 20)
                  ? c[1]
                  : c[2];
              })(
                {
                  ss: u
                    ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434"
                    : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
                  mm: u
                    ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d"
                    : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",
                  hh: u
                    ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d"
                    : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",
                  dd: "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",
                  MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",
                  yy: "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e",
                }[c],
                +e
              );
        }
        l.defineLocale("be", {
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
          meridiem: function (e, u, c) {
            return e < 4
              ? "\u043d\u043e\u0447\u044b"
              : e < 12
              ? "\u0440\u0430\u043d\u0456\u0446\u044b"
              : e < 17
              ? "\u0434\u043d\u044f"
              : "\u0432\u0435\u0447\u0430\u0440\u0430";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
          ordinal: function (e, u) {
            switch (u) {
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
      })(h(5439));
    },
    322: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("bg", {
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
            var s = o % 10,
              e = o % 100;
            return 0 === o
              ? o + "-\u0435\u0432"
              : 0 === e
              ? o + "-\u0435\u043d"
              : e > 10 && e < 20
              ? o + "-\u0442\u0438"
              : 1 === s
              ? o + "-\u0432\u0438"
              : 2 === s
              ? o + "-\u0440\u0438"
              : 7 === s || 8 === s
              ? o + "-\u043c\u0438"
              : o + "-\u0442\u0438";
          },
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    8042: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("bm", {
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
      })(h(5439));
    },
    5903: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("bn-bd", {
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
              function (u) {
                return o[u];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (u) {
              return n[u];
            });
          },
          meridiemParse:
            /\u09b0\u09be\u09a4|\u09ad\u09cb\u09b0|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be|\u09b0\u09be\u09a4/,
          meridiemHour: function (e, u) {
            return (
              12 === e && (e = 0),
              "\u09b0\u09be\u09a4" === u
                ? e < 4
                  ? e
                  : e + 12
                : "\u09ad\u09cb\u09b0" === u || "\u09b8\u0995\u09be\u09b2" === u
                ? e
                : "\u09a6\u09c1\u09aa\u09c1\u09b0" === u
                ? e >= 3
                  ? e
                  : e + 12
                : "\u09ac\u09bf\u0995\u09be\u09b2" === u ||
                  "\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be" === u
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, u, c) {
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
      })(h(5439));
    },
    9620: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("bn", {
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
              function (u) {
                return o[u];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (u) {
              return n[u];
            });
          },
          meridiemParse:
            /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
          meridiemHour: function (e, u) {
            return (
              12 === e && (e = 0),
              ("\u09b0\u09be\u09a4" === u && e >= 4) ||
              ("\u09a6\u09c1\u09aa\u09c1\u09b0" === u && e < 5) ||
              "\u09ac\u09bf\u0995\u09be\u09b2" === u
                ? e + 12
                : e
            );
          },
          meridiem: function (e, u, c) {
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
      })(h(5439));
    },
    9645: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("bo", {
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
              function (u) {
                return o[u];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (u) {
              return n[u];
            });
          },
          meridiemParse:
            /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
          meridiemHour: function (e, u) {
            return (
              12 === e && (e = 0),
              ("\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" === u && e >= 4) ||
              ("\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" === u && e < 5) ||
              "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" === u
                ? e + 12
                : e
            );
          },
          meridiem: function (e, u, c) {
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
      })(h(5439));
    },
    5020: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(b, $, le) {
          return (
            b +
            " " +
            (function e(b, $) {
              return 2 === $
                ? (function u(b) {
                    var $ = { m: "v", b: "v", d: "z" };
                    return void 0 === $[b.charAt(0)]
                      ? b
                      : $[b.charAt(0)] + b.substring(1);
                  })(b)
                : b;
            })({ mm: "munutenn", MM: "miz", dd: "devezh" }[le], b)
          );
        }
        function s(b) {
          return b > 9 ? s(b % 10) : b;
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
          g =
            /^(genver|c[\u02bc\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[\u02bc\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
          N = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
        l.defineLocale("br", {
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
          weekdaysParse: N,
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
          minWeekdaysParse: N,
          monthsRegex: g,
          monthsShortRegex: g,
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
            mm: n,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: n,
            M: "ur miz",
            MM: n,
            y: "ur bloaz",
            yy: function o(b) {
              switch (s(b)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                  return b + " bloaz";
                default:
                  return b + " vloaz";
              }
            },
          },
          dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
          ordinal: function (b) {
            return b + (1 === b ? "a\xf1" : "vet");
          },
          week: { dow: 1, doy: 4 },
          meridiemParse: /a.m.|g.m./,
          isPM: function (b) {
            return "g.m." === b;
          },
          meridiem: function (b, $, le) {
            return b < 12 ? "a.m." : "g.m.";
          },
        });
      })(h(5439));
    },
    4792: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(s, e, u) {
          var c = s + " ";
          switch (u) {
            case "ss":
              return (
                c +
                (1 === s
                  ? "sekunda"
                  : 2 === s || 3 === s || 4 === s
                  ? "sekunde"
                  : "sekundi")
              );
            case "m":
              return e ? "jedna minuta" : "jedne minute";
            case "mm":
              return (
                c +
                (1 === s
                  ? "minuta"
                  : 2 === s || 3 === s || 4 === s
                  ? "minute"
                  : "minuta")
              );
            case "h":
              return e ? "jedan sat" : "jednog sata";
            case "hh":
              return (
                c +
                (1 === s
                  ? "sat"
                  : 2 === s || 3 === s || 4 === s
                  ? "sata"
                  : "sati")
              );
            case "dd":
              return c + (1 === s ? "dan" : "dana");
            case "MM":
              return (
                c +
                (1 === s
                  ? "mjesec"
                  : 2 === s || 3 === s || 4 === s
                  ? "mjeseca"
                  : "mjeseci")
              );
            case "yy":
              return (
                c +
                (1 === s
                  ? "godina"
                  : 2 === s || 3 === s || 4 === s
                  ? "godine"
                  : "godina")
              );
          }
        }
        l.defineLocale("bs", {
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
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: "dan",
            dd: n,
            M: "mjesec",
            MM: n,
            y: "godinu",
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    7980: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ca", {
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
          ordinal: function (o, s) {
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
            return ("w" === s || "W" === s) && (e = "a"), o + e;
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    6466: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
            "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split(
              "_"
            ),
          o =
            "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split(
              "_"
            ),
          s = [
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
        function u(L) {
          return L > 1 && L < 5 && 1 != ~~(L / 10);
        }
        function c(L, k, C, A) {
          var N = L + " ";
          switch (C) {
            case "s":
              return k || A ? "p\xe1r sekund" : "p\xe1r sekundami";
            case "ss":
              return k || A
                ? N + (u(L) ? "sekundy" : "sekund")
                : N + "sekundami";
            case "m":
              return k ? "minuta" : A ? "minutu" : "minutou";
            case "mm":
              return k || A ? N + (u(L) ? "minuty" : "minut") : N + "minutami";
            case "h":
              return k ? "hodina" : A ? "hodinu" : "hodinou";
            case "hh":
              return k || A ? N + (u(L) ? "hodiny" : "hodin") : N + "hodinami";
            case "d":
              return k || A ? "den" : "dnem";
            case "dd":
              return k || A ? N + (u(L) ? "dny" : "dn\xed") : N + "dny";
            case "M":
              return k || A ? "m\u011bs\xedc" : "m\u011bs\xedcem";
            case "MM":
              return k || A
                ? N + (u(L) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f")
                : N + "m\u011bs\xedci";
            case "y":
              return k || A ? "rok" : "rokem";
            case "yy":
              return k || A ? N + (u(L) ? "roky" : "let") : N + "lety";
          }
        }
        l.defineLocale("cs", {
          months: n,
          monthsShort: o,
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i,
          monthsShortStrictRegex:
            /^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i,
          monthsParse: s,
          longMonthsParse: s,
          shortMonthsParse: s,
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
      })(h(5439));
    },
    365: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("cv", {
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
      })(h(5439));
    },
    2092: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("cy", {
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
      })(h(5439));
    },
    7387: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("da", {
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
      })(h(5439));
    },
    9459: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(s, e, u, c) {
          var g = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [s + " Tage", s + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [s + " Monate", s + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [s + " Jahre", s + " Jahren"],
          };
          return e ? g[u][0] : g[u][1];
        }
        l.defineLocale("de-at", {
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
            m: n,
            mm: "%d Minuten",
            h: n,
            hh: "%d Stunden",
            d: n,
            dd: n,
            w: n,
            ww: "%d Wochen",
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    3694: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(s, e, u, c) {
          var g = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [s + " Tage", s + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [s + " Monate", s + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [s + " Jahre", s + " Jahren"],
          };
          return e ? g[u][0] : g[u][1];
        }
        l.defineLocale("de-ch", {
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
            m: n,
            mm: "%d Minuten",
            h: n,
            hh: "%d Stunden",
            d: n,
            dd: n,
            w: n,
            ww: "%d Wochen",
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    4307: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(s, e, u, c) {
          var g = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [s + " Tage", s + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [s + " Monate", s + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [s + " Jahre", s + " Jahren"],
          };
          return e ? g[u][0] : g[u][1];
        }
        l.defineLocale("de", {
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
            m: n,
            mm: "%d Minuten",
            h: n,
            hh: "%d Stunden",
            d: n,
            dd: n,
            w: n,
            ww: "%d Wochen",
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    9659: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = [
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
        l.defineLocale("dv", {
          months: n,
          monthsShort: n,
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
          meridiem: function (e, u, c) {
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
      })(h(5439));
    },
    3460: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("el", {
          monthsNominativeEl:
            "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split(
              "_"
            ),
          monthsGenitiveEl:
            "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split(
              "_"
            ),
          months: function (s, e) {
            return s
              ? "string" == typeof e &&
                /D/.test(e.substring(0, e.indexOf("MMMM")))
                ? this._monthsGenitiveEl[s.month()]
                : this._monthsNominativeEl[s.month()]
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
          meridiem: function (s, e, u) {
            return s > 11
              ? u
                ? "\u03bc\u03bc"
                : "\u039c\u039c"
              : u
              ? "\u03c0\u03bc"
              : "\u03a0\u039c";
          },
          isPM: function (s) {
            return "\u03bc" === (s + "").toLowerCase()[0];
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
          calendar: function (s, e) {
            var u = this._calendarEl[s],
              c = e && e.hours();
            return (
              (function n(s) {
                return (
                  ("undefined" != typeof Function && s instanceof Function) ||
                  "[object Function]" === Object.prototype.toString.call(s)
                );
              })(u) && (u = u.apply(e)),
              u.replace(
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
      })(h(5439));
    },
    4369: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("en-au", {
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
            var s = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === s
                ? "st"
                : 2 === s
                ? "nd"
                : 3 === s
                ? "rd"
                : "th")
            );
          },
          week: { dow: 0, doy: 4 },
        });
      })(h(5439));
    },
    530: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("en-ca", {
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
            var s = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === s
                ? "st"
                : 2 === s
                ? "nd"
                : 3 === s
                ? "rd"
                : "th")
            );
          },
        });
      })(h(5439));
    },
    9998: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("en-gb", {
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
            var s = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === s
                ? "st"
                : 2 === s
                ? "nd"
                : 3 === s
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    3391: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("en-ie", {
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
            var s = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === s
                ? "st"
                : 2 === s
                ? "nd"
                : 3 === s
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    5414: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("en-il", {
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
            var s = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === s
                ? "st"
                : 2 === s
                ? "nd"
                : 3 === s
                ? "rd"
                : "th")
            );
          },
        });
      })(h(5439));
    },
    9615: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("en-in", {
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
            var s = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === s
                ? "st"
                : 2 === s
                ? "nd"
                : 3 === s
                ? "rd"
                : "th")
            );
          },
          week: { dow: 0, doy: 6 },
        });
      })(h(5439));
    },
    1248: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("en-nz", {
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
            var s = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === s
                ? "st"
                : 2 === s
                ? "nd"
                : 3 === s
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    3767: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("en-sg", {
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
            var s = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === s
                ? "st"
                : 2 === s
                ? "nd"
                : 3 === s
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    4530: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("eo", {
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
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    8944: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_"
            ),
          o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          s = [
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
        l.defineLocale("es-do", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_"
            ),
          monthsShort: function (c, g) {
            return c ? (/-MMM-/.test(g) ? o[c.month()] : n[c.month()]) : n;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: s,
          longMonthsParse: s,
          shortMonthsParse: s,
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
      })(h(5439));
    },
    9116: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_"
            ),
          o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          s = [
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
        l.defineLocale("es-mx", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_"
            ),
          monthsShort: function (c, g) {
            return c ? (/-MMM-/.test(g) ? o[c.month()] : n[c.month()]) : n;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: s,
          longMonthsParse: s,
          shortMonthsParse: s,
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
      })(h(5439));
    },
    3609: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_"
            ),
          o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          s = [
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
        l.defineLocale("es-us", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_"
            ),
          monthsShort: function (c, g) {
            return c ? (/-MMM-/.test(g) ? o[c.month()] : n[c.month()]) : n;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: s,
          longMonthsParse: s,
          shortMonthsParse: s,
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
      })(h(5439));
    },
    6866: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_"
            ),
          o = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          s = [
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
        l.defineLocale("es", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_"
            ),
          monthsShort: function (c, g) {
            return c ? (/-MMM-/.test(g) ? o[c.month()] : n[c.month()]) : n;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: s,
          longMonthsParse: s,
          shortMonthsParse: s,
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
      })(h(5439));
    },
    6725: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(s, e, u, c) {
          var g = {
            s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"],
            ss: [s + "sekundi", s + "sekundit"],
            m: ["\xfche minuti", "\xfcks minut"],
            mm: [s + " minuti", s + " minutit"],
            h: ["\xfche tunni", "tund aega", "\xfcks tund"],
            hh: [s + " tunni", s + " tundi"],
            d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"],
            M: ["kuu aja", "kuu aega", "\xfcks kuu"],
            MM: [s + " kuu", s + " kuud"],
            y: ["\xfche aasta", "aasta", "\xfcks aasta"],
            yy: [s + " aasta", s + " aastat"],
          };
          return e ? (g[u][2] ? g[u][2] : g[u][1]) : c ? g[u][0] : g[u][1];
        }
        l.defineLocale("et", {
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
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: "%d p\xe4eva",
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    7931: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("eu", {
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
      })(h(5439));
    },
    6417: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("fa", {
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
          meridiem: function (e, u, c) {
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
              .replace(/[\u06f0-\u06f9]/g, function (u) {
                return o[u];
              })
              .replace(/\u060c/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (u) {
                return n[u];
              })
              .replace(/,/g, "\u060c");
          },
          dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
          ordinal: "%d\u0645",
          week: { dow: 6, doy: 12 },
        });
      })(h(5439));
    },
    944: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
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
            n[7],
            n[8],
            n[9],
          ];
        function s(c, g, L, k) {
          var C = "";
          switch (L) {
            case "s":
              return k ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
              C = k ? "sekunnin" : "sekuntia";
              break;
            case "m":
              return k ? "minuutin" : "minuutti";
            case "mm":
              C = k ? "minuutin" : "minuuttia";
              break;
            case "h":
              return k ? "tunnin" : "tunti";
            case "hh":
              C = k ? "tunnin" : "tuntia";
              break;
            case "d":
              return k ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
            case "dd":
              C = k ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";
              break;
            case "M":
              return k ? "kuukauden" : "kuukausi";
            case "MM":
              C = k ? "kuukauden" : "kuukautta";
              break;
            case "y":
              return k ? "vuoden" : "vuosi";
            case "yy":
              C = k ? "vuoden" : "vuotta";
          }
          return (
            (function e(c, g) {
              return c < 10 ? (g ? o[c] : n[c]) : c;
            })(c, k) +
            " " +
            C
          );
        }
        l.defineLocale("fi", {
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
            s,
            ss: s,
            m: s,
            mm: s,
            h: s,
            hh: s,
            d: s,
            dd: s,
            M: s,
            MM: s,
            y: s,
            yy: s,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    1766: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("fil", {
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
      })(h(5439));
    },
    5867: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("fo", {
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
      })(h(5439));
    },
    6848: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("fr-ca", {
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
          ordinal: function (o, s) {
            switch (s) {
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
      })(h(5439));
    },
    7773: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("fr-ch", {
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
          ordinal: function (o, s) {
            switch (s) {
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
      })(h(5439));
    },
    1636: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var s =
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
        l.defineLocale("fr", {
          months:
            "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split(
              "_"
            ),
          monthsShort:
            "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split(
              "_"
            ),
          monthsRegex: s,
          monthsShortRegex: s,
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
          ordinal: function (c, g) {
            switch (g) {
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
      })(h(5439));
    },
    4940: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
            "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
              "_"
            ),
          o = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        l.defineLocale("fy", {
          months:
            "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
              "_"
            ),
          monthsShort: function (e, u) {
            return e ? (/-MMM-/.test(u) ? o[e.month()] : n[e.month()]) : n;
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
      })(h(5439));
    },
    1402: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ga", {
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
          ordinal: function (g) {
            return g + (1 === g ? "d" : g % 10 == 2 ? "na" : "mh");
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    6924: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("gd", {
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
          ordinal: function (g) {
            return g + (1 === g ? "d" : g % 10 == 2 ? "na" : "mh");
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    6398: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("gl", {
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
      })(h(5439));
    },
    2457: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(s, e, u, c) {
          var g = {
            s: [
              "\u0925\u094b\u0921\u092f\u093e \u0938\u0945\u0915\u0902\u0921\u093e\u0902\u0928\u0940",
              "\u0925\u094b\u0921\u0947 \u0938\u0945\u0915\u0902\u0921",
            ],
            ss: [
              s + " \u0938\u0945\u0915\u0902\u0921\u093e\u0902\u0928\u0940",
              s + " \u0938\u0945\u0915\u0902\u0921",
            ],
            m: [
              "\u090f\u0915\u093e \u092e\u093f\u0923\u091f\u093e\u0928",
              "\u090f\u0915 \u092e\u093f\u0928\u0942\u091f",
            ],
            mm: [
              s + " \u092e\u093f\u0923\u091f\u093e\u0902\u0928\u0940",
              s + " \u092e\u093f\u0923\u091f\u093e\u0902",
            ],
            h: [
              "\u090f\u0915\u093e \u0935\u0930\u093e\u0928",
              "\u090f\u0915 \u0935\u0930",
            ],
            hh: [
              s + " \u0935\u0930\u093e\u0902\u0928\u0940",
              s + " \u0935\u0930\u093e\u0902",
            ],
            d: [
              "\u090f\u0915\u093e \u0926\u093f\u0938\u093e\u0928",
              "\u090f\u0915 \u0926\u0940\u0938",
            ],
            dd: [
              s + " \u0926\u093f\u0938\u093e\u0902\u0928\u0940",
              s + " \u0926\u0940\u0938",
            ],
            M: [
              "\u090f\u0915\u093e \u092e\u094d\u0939\u092f\u0928\u094d\u092f\u093e\u0928",
              "\u090f\u0915 \u092e\u094d\u0939\u092f\u0928\u094b",
            ],
            MM: [
              s +
                " \u092e\u094d\u0939\u092f\u0928\u094d\u092f\u093e\u0928\u0940",
              s + " \u092e\u094d\u0939\u092f\u0928\u0947",
            ],
            y: [
              "\u090f\u0915\u093e \u0935\u0930\u094d\u0938\u093e\u0928",
              "\u090f\u0915 \u0935\u0930\u094d\u0938",
            ],
            yy: [
              s + " \u0935\u0930\u094d\u0938\u093e\u0902\u0928\u0940",
              s + " \u0935\u0930\u094d\u0938\u093e\u0902",
            ],
          };
          return c ? g[u][0] : g[u][1];
        }
        l.defineLocale("gom-deva", {
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
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\u0935\u0947\u0930)/,
          ordinal: function (s, e) {
            return "D" === e ? s + "\u0935\u0947\u0930" : s;
          },
          week: { dow: 0, doy: 3 },
          meridiemParse:
            /\u0930\u093e\u0924\u0940|\u0938\u0915\u093e\u0933\u0940\u0902|\u0926\u0928\u092a\u093e\u0930\u093e\u0902|\u0938\u093e\u0902\u091c\u0947/,
          meridiemHour: function (s, e) {
            return (
              12 === s && (s = 0),
              "\u0930\u093e\u0924\u0940" === e
                ? s < 4
                  ? s
                  : s + 12
                : "\u0938\u0915\u093e\u0933\u0940\u0902" === e
                ? s
                : "\u0926\u0928\u092a\u093e\u0930\u093e\u0902" === e
                ? s > 12
                  ? s
                  : s + 12
                : "\u0938\u093e\u0902\u091c\u0947" === e
                ? s + 12
                : void 0
            );
          },
          meridiem: function (s, e, u) {
            return s < 4
              ? "\u0930\u093e\u0924\u0940"
              : s < 12
              ? "\u0938\u0915\u093e\u0933\u0940\u0902"
              : s < 16
              ? "\u0926\u0928\u092a\u093e\u0930\u093e\u0902"
              : s < 20
              ? "\u0938\u093e\u0902\u091c\u0947"
              : "\u0930\u093e\u0924\u0940";
          },
        });
      })(h(5439));
    },
    2545: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(s, e, u, c) {
          var g = {
            s: ["thoddea sekondamni", "thodde sekond"],
            ss: [s + " sekondamni", s + " sekond"],
            m: ["eka mintan", "ek minut"],
            mm: [s + " mintamni", s + " mintam"],
            h: ["eka voran", "ek vor"],
            hh: [s + " voramni", s + " voram"],
            d: ["eka disan", "ek dis"],
            dd: [s + " disamni", s + " dis"],
            M: ["eka mhoinean", "ek mhoino"],
            MM: [s + " mhoineamni", s + " mhoine"],
            y: ["eka vorsan", "ek voros"],
            yy: [s + " vorsamni", s + " vorsam"],
          };
          return c ? g[u][0] : g[u][1];
        }
        l.defineLocale("gom-latn", {
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
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er)/,
          ordinal: function (s, e) {
            return "D" === e ? s + "er" : s;
          },
          week: { dow: 0, doy: 3 },
          meridiemParse: /rati|sokallim|donparam|sanje/,
          meridiemHour: function (s, e) {
            return (
              12 === s && (s = 0),
              "rati" === e
                ? s < 4
                  ? s
                  : s + 12
                : "sokallim" === e
                ? s
                : "donparam" === e
                ? s > 12
                  ? s
                  : s + 12
                : "sanje" === e
                ? s + 12
                : void 0
            );
          },
          meridiem: function (s, e, u) {
            return s < 4
              ? "rati"
              : s < 12
              ? "sokallim"
              : s < 16
              ? "donparam"
              : s < 20
              ? "sanje"
              : "rati";
          },
        });
      })(h(5439));
    },
    2641: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("gu", {
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
              function (u) {
                return o[u];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (u) {
              return n[u];
            });
          },
          meridiemParse:
            /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
          meridiemHour: function (e, u) {
            return (
              12 === e && (e = 0),
              "\u0ab0\u0abe\u0aa4" === u
                ? e < 4
                  ? e
                  : e + 12
                : "\u0ab8\u0ab5\u0abe\u0ab0" === u
                ? e
                : "\u0aac\u0aaa\u0acb\u0ab0" === u
                ? e >= 10
                  ? e
                  : e + 12
                : "\u0ab8\u0abe\u0a82\u0a9c" === u
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, u, c) {
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
      })(h(5439));
    },
    7536: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("he", {
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
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    6335: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
          s = [
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
        l.defineLocale("hi", {
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
          monthsParse: s,
          longMonthsParse: s,
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
              function (g) {
                return o[g];
              }
            );
          },
          postformat: function (c) {
            return c.replace(/\d/g, function (g) {
              return n[g];
            });
          },
          meridiemParse:
            /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
          meridiemHour: function (c, g) {
            return (
              12 === c && (c = 0),
              "\u0930\u093e\u0924" === g
                ? c < 4
                  ? c
                  : c + 12
                : "\u0938\u0941\u092c\u0939" === g
                ? c
                : "\u0926\u094b\u092a\u0939\u0930" === g
                ? c >= 10
                  ? c
                  : c + 12
                : "\u0936\u093e\u092e" === g
                ? c + 12
                : void 0
            );
          },
          meridiem: function (c, g, L) {
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
      })(h(5439));
    },
    7458: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(s, e, u) {
          var c = s + " ";
          switch (u) {
            case "ss":
              return (
                c +
                (1 === s
                  ? "sekunda"
                  : 2 === s || 3 === s || 4 === s
                  ? "sekunde"
                  : "sekundi")
              );
            case "m":
              return e ? "jedna minuta" : "jedne minute";
            case "mm":
              return (
                c +
                (1 === s
                  ? "minuta"
                  : 2 === s || 3 === s || 4 === s
                  ? "minute"
                  : "minuta")
              );
            case "h":
              return e ? "jedan sat" : "jednog sata";
            case "hh":
              return (
                c +
                (1 === s
                  ? "sat"
                  : 2 === s || 3 === s || 4 === s
                  ? "sata"
                  : "sati")
              );
            case "dd":
              return c + (1 === s ? "dan" : "dana");
            case "MM":
              return (
                c +
                (1 === s
                  ? "mjesec"
                  : 2 === s || 3 === s || 4 === s
                  ? "mjeseca"
                  : "mjeseci")
              );
            case "yy":
              return (
                c +
                (1 === s
                  ? "godina"
                  : 2 === s || 3 === s || 4 === s
                  ? "godine"
                  : "godina")
              );
          }
        }
        l.defineLocale("hr", {
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
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: "dan",
            dd: n,
            M: "mjesec",
            MM: n,
            y: "godinu",
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    6540: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
          "vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(
            " "
          );
        function o(u, c, g, L) {
          var k = u;
          switch (g) {
            case "s":
              return L || c
                ? "n\xe9h\xe1ny m\xe1sodperc"
                : "n\xe9h\xe1ny m\xe1sodperce";
            case "ss":
              return k + (L || c) ? " m\xe1sodperc" : " m\xe1sodperce";
            case "m":
              return "egy" + (L || c ? " perc" : " perce");
            case "mm":
              return k + (L || c ? " perc" : " perce");
            case "h":
              return "egy" + (L || c ? " \xf3ra" : " \xf3r\xe1ja");
            case "hh":
              return k + (L || c ? " \xf3ra" : " \xf3r\xe1ja");
            case "d":
              return "egy" + (L || c ? " nap" : " napja");
            case "dd":
              return k + (L || c ? " nap" : " napja");
            case "M":
              return "egy" + (L || c ? " h\xf3nap" : " h\xf3napja");
            case "MM":
              return k + (L || c ? " h\xf3nap" : " h\xf3napja");
            case "y":
              return "egy" + (L || c ? " \xe9v" : " \xe9ve");
            case "yy":
              return k + (L || c ? " \xe9v" : " \xe9ve");
          }
          return "";
        }
        function s(u) {
          return (u ? "" : "[m\xfalt] ") + "[" + n[this.day()] + "] LT[-kor]";
        }
        l.defineLocale("hu", {
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
          isPM: function (u) {
            return "u" === u.charAt(1).toLowerCase();
          },
          meridiem: function (u, c, g) {
            return u < 12 ? (!0 === g ? "de" : "DE") : !0 === g ? "du" : "DU";
          },
          calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function () {
              return s.call(this, !0);
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function () {
              return s.call(this, !1);
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
      })(h(5439));
    },
    5283: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("hy-am", {
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
          ordinal: function (o, s) {
            switch (s) {
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
      })(h(5439));
    },
    8780: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("id", {
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
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              "pagi" === s
                ? o
                : "siang" === s
                ? o >= 11
                  ? o
                  : o + 12
                : "sore" === s || "malam" === s
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    4205: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(e) {
          return e % 100 == 11 || e % 10 != 1;
        }
        function o(e, u, c, g) {
          var L = e + " ";
          switch (c) {
            case "s":
              return u || g ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";
            case "ss":
              return n(e)
                ? L + (u || g ? "sek\xfandur" : "sek\xfandum")
                : L + "sek\xfanda";
            case "m":
              return u ? "m\xedn\xfata" : "m\xedn\xfatu";
            case "mm":
              return n(e)
                ? L + (u || g ? "m\xedn\xfatur" : "m\xedn\xfatum")
                : u
                ? L + "m\xedn\xfata"
                : L + "m\xedn\xfatu";
            case "hh":
              return n(e)
                ? L + (u || g ? "klukkustundir" : "klukkustundum")
                : L + "klukkustund";
            case "d":
              return u ? "dagur" : g ? "dag" : "degi";
            case "dd":
              return n(e)
                ? u
                  ? L + "dagar"
                  : L + (g ? "daga" : "d\xf6gum")
                : u
                ? L + "dagur"
                : L + (g ? "dag" : "degi");
            case "M":
              return u ? "m\xe1nu\xf0ur" : g ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";
            case "MM":
              return n(e)
                ? u
                  ? L + "m\xe1nu\xf0ir"
                  : L + (g ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um")
                : u
                ? L + "m\xe1nu\xf0ur"
                : L + (g ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");
            case "y":
              return u || g ? "\xe1r" : "\xe1ri";
            case "yy":
              return n(e)
                ? L + (u || g ? "\xe1r" : "\xe1rum")
                : L + (u || g ? "\xe1r" : "\xe1ri");
          }
        }
        l.defineLocale("is", {
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
      })(h(5439));
    },
    9985: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("it-ch", {
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
      })(h(5439));
    },
    4211: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("it", {
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
      })(h(5439));
    },
    1003: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ja", {
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
          eraYearOrdinalParse: function (o, s) {
            return "\u5143" === s[1] ? 1 : parseInt(s[1] || o, 10);
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
          meridiem: function (o, s, e) {
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
          ordinal: function (o, s) {
            switch (s) {
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
      })(h(5439));
    },
    420: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("jv", {
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
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              "enjing" === s
                ? o
                : "siyang" === s
                ? o >= 11
                  ? o
                  : o + 12
                : "sonten" === s || "ndalu" === s
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    851: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ka", {
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
                function (s, e, u) {
                  return "\u10d8" === u
                    ? e + "\u10e8\u10d8"
                    : e + u + "\u10e8\u10d8";
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
      })(h(5439));
    },
    6074: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("kk", {
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
          ordinal: function (s) {
            return s + (n[s] || n[s % 10] || n[s >= 100 ? 100 : null]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    3343: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("km", {
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
          meridiem: function (e, u, c) {
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
              function (u) {
                return o[u];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (u) {
              return n[u];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    4799: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("kn", {
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
              function (u) {
                return o[u];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (u) {
              return n[u];
            });
          },
          meridiemParse:
            /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
          meridiemHour: function (e, u) {
            return (
              12 === e && (e = 0),
              "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" === u
                ? e < 4
                  ? e
                  : e + 12
                : "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" === u
                ? e
                : "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" === u
                ? e >= 10
                  ? e
                  : e + 12
                : "\u0cb8\u0c82\u0c9c\u0cc6" === u
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, u, c) {
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
      })(h(5439));
    },
    3549: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ko", {
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
          ordinal: function (o, s) {
            switch (s) {
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
          meridiem: function (o, s, e) {
            return o < 12 ? "\uc624\uc804" : "\uc624\ud6c4";
          },
        });
      })(h(5439));
    },
    1037: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
          s = [
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
        l.defineLocale("ku", {
          months: s,
          monthsShort: s,
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
          isPM: function (u) {
            return /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(u);
          },
          meridiem: function (u, c, g) {
            return u < 12
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
          preparse: function (u) {
            return u
              .replace(
                /[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,
                function (c) {
                  return o[c];
                }
              )
              .replace(/\u060c/g, ",");
          },
          postformat: function (u) {
            return u
              .replace(/\d/g, function (c) {
                return n[c];
              })
              .replace(/,/g, "\u060c");
          },
          week: { dow: 6, doy: 12 },
        });
      })(h(5439));
    },
    3125: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("ky", {
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
          ordinal: function (s) {
            return s + (n[s] || n[s % 10] || n[s >= 100 ? 100 : null]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    9586: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(c, g, L, k) {
          var C = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"],
          };
          return g ? C[L][0] : C[L][1];
        }
        function e(c) {
          if (((c = parseInt(c, 10)), isNaN(c))) return !1;
          if (c < 0) return !0;
          if (c < 10) return 4 <= c && c <= 7;
          if (c < 100) {
            var g = c % 10;
            return e(0 === g ? c / 10 : g);
          }
          if (c < 1e4) {
            for (; c >= 10; ) c /= 10;
            return e(c);
          }
          return e((c /= 1e3));
        }
        l.defineLocale("lb", {
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
            past: function s(c) {
              return e(c.substr(0, c.indexOf(" ")))
                ? "viru " + c
                : "virun " + c;
            },
            s: "e puer Sekonnen",
            ss: "%d Sekonnen",
            m: n,
            mm: "%d Minutten",
            h: n,
            hh: "%d Stonnen",
            d: n,
            dd: "%d Deeg",
            M: n,
            MM: "%d M\xe9int",
            y: n,
            yy: "%d Joer",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    2349: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("lo", {
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
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    2400: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        function s(L, k, C, A) {
          return k ? u(C)[0] : A ? u(C)[1] : u(C)[2];
        }
        function e(L) {
          return L % 10 == 0 || (L > 10 && L < 20);
        }
        function u(L) {
          return n[L].split("_");
        }
        function c(L, k, C, A) {
          var N = L + " ";
          return 1 === L
            ? N + s(0, k, C[0], A)
            : k
            ? N + (e(L) ? u(C)[1] : u(C)[0])
            : A
            ? N + u(C)[1]
            : N + (e(L) ? u(C)[1] : u(C)[2]);
        }
        l.defineLocale("lt", {
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
            s: function o(L, k, C, A) {
              return k
                ? "kelios sekund\u0117s"
                : A
                ? "keli\u0173 sekund\u017ei\u0173"
                : "kelias sekundes";
            },
            ss: c,
            m: s,
            mm: c,
            h: s,
            hh: c,
            d: s,
            dd: c,
            M: s,
            MM: c,
            y: s,
            yy: c,
          },
          dayOfMonthOrdinalParse: /\d{1,2}-oji/,
          ordinal: function (L) {
            return L + "-oji";
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    9991: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        function o(g, L, k) {
          return k
            ? L % 10 == 1 && L % 100 != 11
              ? g[2]
              : g[3]
            : L % 10 == 1 && L % 100 != 11
            ? g[0]
            : g[1];
        }
        function s(g, L, k) {
          return g + " " + o(n[k], g, L);
        }
        function e(g, L, k) {
          return o(n[k], g, L);
        }
        l.defineLocale("lv", {
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
            s: function u(g, L) {
              return L
                ? "da\u017eas sekundes"
                : "da\u017e\u0101m sekund\u0113m";
            },
            ss: s,
            m: e,
            mm: s,
            h: e,
            hh: s,
            d: e,
            dd: s,
            M: e,
            MM: s,
            y: e,
            yy: s,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    8477: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
          correctGrammaticalCase: function (s, e) {
            return 1 === s ? e[0] : s >= 2 && s <= 4 ? e[1] : e[2];
          },
          translate: function (s, e, u) {
            var c = n.words[u];
            return 1 === u.length
              ? e
                ? c[0]
                : c[1]
              : s + " " + n.correctGrammaticalCase(s, c);
          },
        };
        l.defineLocale("me", {
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
            ss: n.translate,
            m: n.translate,
            mm: n.translate,
            h: n.translate,
            hh: n.translate,
            d: "dan",
            dd: n.translate,
            M: "mjesec",
            MM: n.translate,
            y: "godinu",
            yy: n.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    5118: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("mi", {
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
      })(h(5439));
    },
    5943: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("mk", {
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
            var s = o % 10,
              e = o % 100;
            return 0 === o
              ? o + "-\u0435\u0432"
              : 0 === e
              ? o + "-\u0435\u043d"
              : e > 10 && e < 20
              ? o + "-\u0442\u0438"
              : 1 === s
              ? o + "-\u0432\u0438"
              : 2 === s
              ? o + "-\u0440\u0438"
              : 7 === s || 8 === s
              ? o + "-\u043c\u0438"
              : o + "-\u0442\u0438";
          },
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    3849: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ml", {
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
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              ("\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" === s && o >= 4) ||
              "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" ===
                s ||
              "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" ===
                s
                ? o + 12
                : o
            );
          },
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    1977: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(s, e, u, c) {
          switch (u) {
            case "s":
              return e
                ? "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434"
                : "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d";
            case "ss":
              return (
                s +
                (e
                  ? " \u0441\u0435\u043a\u0443\u043d\u0434"
                  : " \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d")
              );
            case "m":
            case "mm":
              return (
                s +
                (e
                  ? " \u043c\u0438\u043d\u0443\u0442"
                  : " \u043c\u0438\u043d\u0443\u0442\u044b\u043d")
              );
            case "h":
            case "hh":
              return (
                s +
                (e
                  ? " \u0446\u0430\u0433"
                  : " \u0446\u0430\u0433\u0438\u0439\u043d")
              );
            case "d":
            case "dd":
              return (
                s +
                (e
                  ? " \u04e9\u0434\u04e9\u0440"
                  : " \u04e9\u0434\u0440\u0438\u0439\u043d")
              );
            case "M":
            case "MM":
              return (
                s +
                (e ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044b\u043d")
              );
            case "y":
            case "yy":
              return (
                s +
                (e
                  ? " \u0436\u0438\u043b"
                  : " \u0436\u0438\u043b\u0438\u0439\u043d")
              );
            default:
              return s;
          }
        }
        l.defineLocale("mn", {
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
          isPM: function (s) {
            return "\u04ae\u0425" === s;
          },
          meridiem: function (s, e, u) {
            return s < 12 ? "\u04ae\u04e8" : "\u04ae\u0425";
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
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/,
          ordinal: function (s, e) {
            switch (e) {
              case "d":
              case "D":
              case "DDD":
                return s + " \u04e9\u0434\u04e9\u0440";
              default:
                return s;
            }
          },
        });
      })(h(5439));
    },
    6184: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        function s(u, c, g, L) {
          var k = "";
          if (c)
            switch (g) {
              case "s":
                k = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";
                break;
              case "ss":
                k = "%d \u0938\u0947\u0915\u0902\u0926";
                break;
              case "m":
                k = "\u090f\u0915 \u092e\u093f\u0928\u093f\u091f";
                break;
              case "mm":
                k = "%d \u092e\u093f\u0928\u093f\u091f\u0947";
                break;
              case "h":
                k = "\u090f\u0915 \u0924\u093e\u0938";
                break;
              case "hh":
                k = "%d \u0924\u093e\u0938";
                break;
              case "d":
                k = "\u090f\u0915 \u0926\u093f\u0935\u0938";
                break;
              case "dd":
                k = "%d \u0926\u093f\u0935\u0938";
                break;
              case "M":
                k = "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e";
                break;
              case "MM":
                k = "%d \u092e\u0939\u093f\u0928\u0947";
                break;
              case "y":
                k = "\u090f\u0915 \u0935\u0930\u094d\u0937";
                break;
              case "yy":
                k = "%d \u0935\u0930\u094d\u0937\u0947";
            }
          else
            switch (g) {
              case "s":
                k =
                  "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                break;
              case "ss":
                k = "%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                break;
              case "m":
                k = "\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e";
                break;
              case "mm":
                k = "%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902";
                break;
              case "h":
                k = "\u090f\u0915\u093e \u0924\u093e\u0938\u093e";
                break;
              case "hh":
                k = "%d \u0924\u093e\u0938\u093e\u0902";
                break;
              case "d":
                k = "\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e";
                break;
              case "dd":
                k = "%d \u0926\u093f\u0935\u0938\u093e\u0902";
                break;
              case "M":
                k =
                  "\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e";
                break;
              case "MM":
                k = "%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902";
                break;
              case "y":
                k = "\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e";
                break;
              case "yy":
                k = "%d \u0935\u0930\u094d\u0937\u093e\u0902";
            }
          return k.replace(/%d/i, u);
        }
        l.defineLocale("mr", {
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
            s,
            ss: s,
            m: s,
            mm: s,
            h: s,
            hh: s,
            d: s,
            dd: s,
            M: s,
            MM: s,
            y: s,
            yy: s,
          },
          preparse: function (u) {
            return u.replace(
              /[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,
              function (c) {
                return o[c];
              }
            );
          },
          postformat: function (u) {
            return u.replace(/\d/g, function (c) {
              return n[c];
            });
          },
          meridiemParse:
            /\u092a\u0939\u093e\u091f\u0947|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940|\u0930\u093e\u0924\u094d\u0930\u0940/,
          meridiemHour: function (u, c) {
            return (
              12 === u && (u = 0),
              "\u092a\u0939\u093e\u091f\u0947" === c ||
              "\u0938\u0915\u093e\u0933\u0940" === c
                ? u
                : "\u0926\u0941\u092a\u093e\u0930\u0940" === c ||
                  "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" === c ||
                  "\u0930\u093e\u0924\u094d\u0930\u0940" === c
                ? u >= 12
                  ? u
                  : u + 12
                : void 0
            );
          },
          meridiem: function (u, c, g) {
            return u >= 0 && u < 6
              ? "\u092a\u0939\u093e\u091f\u0947"
              : u < 12
              ? "\u0938\u0915\u093e\u0933\u0940"
              : u < 17
              ? "\u0926\u0941\u092a\u093e\u0930\u0940"
              : u < 20
              ? "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940"
              : "\u0930\u093e\u0924\u094d\u0930\u0940";
          },
          week: { dow: 0, doy: 6 },
        });
      })(h(5439));
    },
    4524: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ms-my", {
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
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              "pagi" === s
                ? o
                : "tengahari" === s
                ? o >= 11
                  ? o
                  : o + 12
                : "petang" === s || "malam" === s
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    485: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ms", {
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
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              "pagi" === s
                ? o
                : "tengahari" === s
                ? o >= 11
                  ? o
                  : o + 12
                : "petang" === s || "malam" === s
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    6681: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("mt", {
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
      })(h(5439));
    },
    2024: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("my", {
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
              function (u) {
                return o[u];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (u) {
              return n[u];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    2688: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("nb", {
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
      })(h(5439));
    },
    8914: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("ne", {
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
              function (u) {
                return o[u];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (u) {
              return n[u];
            });
          },
          meridiemParse:
            /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
          meridiemHour: function (e, u) {
            return (
              12 === e && (e = 0),
              "\u0930\u093e\u0924\u093f" === u
                ? e < 4
                  ? e
                  : e + 12
                : "\u092c\u093f\u0939\u093e\u0928" === u
                ? e
                : "\u0926\u093f\u0909\u0901\u0938\u094b" === u
                ? e >= 10
                  ? e
                  : e + 12
                : "\u0938\u093e\u0901\u091d" === u
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, u, c) {
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
      })(h(5439));
    },
    2272: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
            "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
              "_"
            ),
          o = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          s = [
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
        l.defineLocale("nl-be", {
          months:
            "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
              "_"
            ),
          monthsShort: function (c, g) {
            return c ? (/-MMM-/.test(g) ? o[c.month()] : n[c.month()]) : n;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex:
            /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: s,
          longMonthsParse: s,
          shortMonthsParse: s,
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
      })(h(5439));
    },
    1758: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
            "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
              "_"
            ),
          o = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          s = [
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
        l.defineLocale("nl", {
          months:
            "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
              "_"
            ),
          monthsShort: function (c, g) {
            return c ? (/-MMM-/.test(g) ? o[c.month()] : n[c.month()]) : n;
          },
          monthsRegex: e,
          monthsShortRegex: e,
          monthsStrictRegex:
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex:
            /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: s,
          longMonthsParse: s,
          shortMonthsParse: s,
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
      })(h(5439));
    },
    1510: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("nn", {
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
      })(h(5439));
    },
    2797: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("oc-lnc", {
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
          ordinal: function (o, s) {
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
            return ("w" === s || "W" === s) && (e = "a"), o + e;
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    7944: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("pa-in", {
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
              function (u) {
                return o[u];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (u) {
              return n[u];
            });
          },
          meridiemParse:
            /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
          meridiemHour: function (e, u) {
            return (
              12 === e && (e = 0),
              "\u0a30\u0a3e\u0a24" === u
                ? e < 4
                  ? e
                  : e + 12
                : "\u0a38\u0a35\u0a47\u0a30" === u
                ? e
                : "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" === u
                ? e >= 10
                  ? e
                  : e + 12
                : "\u0a38\u0a3c\u0a3e\u0a2e" === u
                ? e + 12
                : void 0
            );
          },
          meridiem: function (e, u, c) {
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
      })(h(5439));
    },
    1605: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
            "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split(
              "_"
            ),
          o =
            "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split(
              "_"
            ),
          s = [
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
        function e(g) {
          return g % 10 < 5 && g % 10 > 1 && ~~(g / 10) % 10 != 1;
        }
        function u(g, L, k) {
          var C = g + " ";
          switch (k) {
            case "ss":
              return C + (e(g) ? "sekundy" : "sekund");
            case "m":
              return L ? "minuta" : "minut\u0119";
            case "mm":
              return C + (e(g) ? "minuty" : "minut");
            case "h":
              return L ? "godzina" : "godzin\u0119";
            case "hh":
              return C + (e(g) ? "godziny" : "godzin");
            case "ww":
              return C + (e(g) ? "tygodnie" : "tygodni");
            case "MM":
              return C + (e(g) ? "miesi\u0105ce" : "miesi\u0119cy");
            case "yy":
              return C + (e(g) ? "lata" : "lat");
          }
        }
        l.defineLocale("pl", {
          months: function (g, L) {
            return g ? (/D MMMM/.test(L) ? o[g.month()] : n[g.month()]) : n;
          },
          monthsShort:
            "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),
          monthsParse: s,
          longMonthsParse: s,
          shortMonthsParse: s,
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
            ss: u,
            m: u,
            mm: u,
            h: u,
            hh: u,
            d: "1 dzie\u0144",
            dd: "%d dni",
            w: "tydzie\u0144",
            ww: u,
            M: "miesi\u0105c",
            MM: u,
            y: "rok",
            yy: u,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    3840: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("pt-br", {
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
      })(h(5439));
    },
    4225: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("pt", {
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
      })(h(5439));
    },
    352: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(s, e, u) {
          var g = " ";
          return (
            (s % 100 >= 20 || (s >= 100 && s % 100 == 0)) && (g = " de "),
            s +
              g +
              {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                ww: "s\u0103pt\u0103m\xe2ni",
                MM: "luni",
                yy: "ani",
              }[u]
          );
        }
        l.defineLocale("ro", {
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
            ss: n,
            m: "un minut",
            mm: n,
            h: "o or\u0103",
            hh: n,
            d: "o zi",
            dd: n,
            w: "o s\u0103pt\u0103m\xe2n\u0103",
            ww: n,
            M: "o lun\u0103",
            MM: n,
            y: "un an",
            yy: n,
          },
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    5127: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function o(u, c, g) {
          return "m" === g
            ? c
              ? "\u043c\u0438\u043d\u0443\u0442\u0430"
              : "\u043c\u0438\u043d\u0443\u0442\u0443"
            : u +
                " " +
                (function n(u, c) {
                  var g = u.split("_");
                  return c % 10 == 1 && c % 100 != 11
                    ? g[0]
                    : c % 10 >= 2 &&
                      c % 10 <= 4 &&
                      (c % 100 < 10 || c % 100 >= 20)
                    ? g[1]
                    : g[2];
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
                  }[g],
                  +u
                );
        }
        var s = [
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
        l.defineLocale("ru", {
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
          monthsParse: s,
          longMonthsParse: s,
          shortMonthsParse: s,
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
            nextWeek: function (u) {
              if (u.week() === this.week())
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
            lastWeek: function (u) {
              if (u.week() === this.week())
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
          isPM: function (u) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(
              u
            );
          },
          meridiem: function (u, c, g) {
            return u < 4
              ? "\u043d\u043e\u0447\u0438"
              : u < 12
              ? "\u0443\u0442\u0440\u0430"
              : u < 17
              ? "\u0434\u043d\u044f"
              : "\u0432\u0435\u0447\u0435\u0440\u0430";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
          ordinal: function (u, c) {
            switch (c) {
              case "M":
              case "d":
              case "DDD":
                return u + "-\u0439";
              case "D":
                return u + "-\u0433\u043e";
              case "w":
              case "W":
                return u + "-\u044f";
              default:
                return u;
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    2525: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = [
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
        l.defineLocale("sd", {
          months: n,
          monthsShort: n,
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
          meridiem: function (e, u, c) {
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
      })(h(5439));
    },
    9893: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("se", {
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
      })(h(5439));
    },
    3123: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("si", {
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
          meridiem: function (o, s, e) {
            return o > 11
              ? e
                ? "\u0db4.\u0dc0."
                : "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4"
              : e
              ? "\u0db4\u0dd9.\u0dc0."
              : "\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4";
          },
        });
      })(h(5439));
    },
    9635: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
            "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split(
              "_"
            ),
          o = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split(
            "_"
          );
        function s(c) {
          return c > 1 && c < 5;
        }
        function e(c, g, L, k) {
          var C = c + " ";
          switch (L) {
            case "s":
              return g || k ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
            case "ss":
              return g || k
                ? C + (s(c) ? "sekundy" : "sek\xfand")
                : C + "sekundami";
            case "m":
              return g ? "min\xfata" : k ? "min\xfatu" : "min\xfatou";
            case "mm":
              return g || k
                ? C + (s(c) ? "min\xfaty" : "min\xfat")
                : C + "min\xfatami";
            case "h":
              return g ? "hodina" : k ? "hodinu" : "hodinou";
            case "hh":
              return g || k
                ? C + (s(c) ? "hodiny" : "hod\xedn")
                : C + "hodinami";
            case "d":
              return g || k ? "de\u0148" : "d\u0148om";
            case "dd":
              return g || k ? C + (s(c) ? "dni" : "dn\xed") : C + "d\u0148ami";
            case "M":
              return g || k ? "mesiac" : "mesiacom";
            case "MM":
              return g || k
                ? C + (s(c) ? "mesiace" : "mesiacov")
                : C + "mesiacmi";
            case "y":
              return g || k ? "rok" : "rokom";
            case "yy":
              return g || k ? C + (s(c) ? "roky" : "rokov") : C + "rokmi";
          }
        }
        l.defineLocale("sk", {
          months: n,
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
      })(h(5439));
    },
    8106: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function n(s, e, u, c) {
          var g = s + " ";
          switch (u) {
            case "s":
              return e || c ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
              return (
                g +
                (1 === s
                  ? e
                    ? "sekundo"
                    : "sekundi"
                  : 2 === s
                  ? e || c
                    ? "sekundi"
                    : "sekundah"
                  : s < 5
                  ? e || c
                    ? "sekunde"
                    : "sekundah"
                  : "sekund")
              );
            case "m":
              return e ? "ena minuta" : "eno minuto";
            case "mm":
              return (
                g +
                (1 === s
                  ? e
                    ? "minuta"
                    : "minuto"
                  : 2 === s
                  ? e || c
                    ? "minuti"
                    : "minutama"
                  : s < 5
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
                g +
                (1 === s
                  ? e
                    ? "ura"
                    : "uro"
                  : 2 === s
                  ? e || c
                    ? "uri"
                    : "urama"
                  : s < 5
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
                g +
                (1 === s
                  ? e || c
                    ? "dan"
                    : "dnem"
                  : 2 === s
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
                g +
                (1 === s
                  ? e || c
                    ? "mesec"
                    : "mesecem"
                  : 2 === s
                  ? e || c
                    ? "meseca"
                    : "mesecema"
                  : s < 5
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
                g +
                (1 === s
                  ? e || c
                    ? "leto"
                    : "letom"
                  : 2 === s
                  ? e || c
                    ? "leti"
                    : "letoma"
                  : s < 5
                  ? e || c
                    ? "leta"
                    : "leti"
                  : e || c
                  ? "let"
                  : "leti")
              );
          }
        }
        l.defineLocale("sl", {
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
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    8799: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("sq", {
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
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    2872: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
          correctGrammaticalCase: function (s, e) {
            return 1 === s ? e[0] : s >= 2 && s <= 4 ? e[1] : e[2];
          },
          translate: function (s, e, u) {
            var c = n.words[u];
            return 1 === u.length
              ? e
                ? c[0]
                : c[1]
              : s + " " + n.correctGrammaticalCase(s, c);
          },
        };
        l.defineLocale("sr-cyrl", {
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
            ss: n.translate,
            m: n.translate,
            mm: n.translate,
            h: n.translate,
            hh: n.translate,
            d: "\u0434\u0430\u043d",
            dd: n.translate,
            M: "\u043c\u0435\u0441\u0435\u0446",
            MM: n.translate,
            y: "\u0433\u043e\u0434\u0438\u043d\u0443",
            yy: n.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    7949: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
          correctGrammaticalCase: function (s, e) {
            return 1 === s ? e[0] : s >= 2 && s <= 4 ? e[1] : e[2];
          },
          translate: function (s, e, u) {
            var c = n.words[u];
            return 1 === u.length
              ? e
                ? c[0]
                : c[1]
              : s + " " + n.correctGrammaticalCase(s, c);
          },
        };
        l.defineLocale("sr", {
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
            ss: n.translate,
            m: n.translate,
            mm: n.translate,
            h: n.translate,
            hh: n.translate,
            d: "dan",
            dd: n.translate,
            M: "mesec",
            MM: n.translate,
            y: "godinu",
            yy: n.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    6167: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ss", {
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
          meridiem: function (o, s, e) {
            return o < 11
              ? "ekuseni"
              : o < 15
              ? "emini"
              : o < 19
              ? "entsambama"
              : "ebusuku";
          },
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              "ekuseni" === s
                ? o
                : "emini" === s
                ? o >= 11
                  ? o
                  : o + 12
                : "entsambama" === s || "ebusuku" === s
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
      })(h(5439));
    },
    9713: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("sv", {
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
            var s = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? ":e"
                : 1 === s || 2 === s
                ? ":a"
                : ":e")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    1982: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("sw", {
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
      })(h(5439));
    },
    2732: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("ta", {
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
              function (u) {
                return o[u];
              }
            );
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (u) {
              return n[u];
            });
          },
          meridiemParse:
            /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
          meridiem: function (e, u, c) {
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
          meridiemHour: function (e, u) {
            return (
              12 === e && (e = 0),
              "\u0baf\u0bbe\u0bae\u0bae\u0bcd" === u
                ? e < 2
                  ? e
                  : e + 12
                : "\u0bb5\u0bc8\u0b95\u0bb1\u0bc8" === u ||
                  "\u0b95\u0bbe\u0bb2\u0bc8" === u ||
                  ("\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" === u &&
                    e >= 10)
                ? e
                : e + 12
            );
          },
          week: { dow: 0, doy: 6 },
        });
      })(h(5439));
    },
    3636: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("te", {
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
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" === s
                ? o < 4
                  ? o
                  : o + 12
                : "\u0c09\u0c26\u0c2f\u0c02" === s
                ? o
                : "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" === s
                ? o >= 10
                  ? o
                  : o + 12
                : "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" === s
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    2115: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("tet", {
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
            var s = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === s
                ? "st"
                : 2 === s
                ? "nd"
                : 3 === s
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    9801: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("tg", {
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
          meridiemHour: function (s, e) {
            return (
              12 === s && (s = 0),
              "\u0448\u0430\u0431" === e
                ? s < 4
                  ? s
                  : s + 12
                : "\u0441\u0443\u0431\u04b3" === e
                ? s
                : "\u0440\u04ef\u0437" === e
                ? s >= 11
                  ? s
                  : s + 12
                : "\u0431\u0435\u0433\u043e\u04b3" === e
                ? s + 12
                : void 0
            );
          },
          meridiem: function (s, e, u) {
            return s < 4
              ? "\u0448\u0430\u0431"
              : s < 11
              ? "\u0441\u0443\u0431\u04b3"
              : s < 16
              ? "\u0440\u04ef\u0437"
              : s < 19
              ? "\u0431\u0435\u0433\u043e\u04b3"
              : "\u0448\u0430\u0431";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/,
          ordinal: function (s) {
            return s + (n[s] || n[s % 10] || n[s >= 100 ? 100 : null]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    2868: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("th", {
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
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    1310: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("tk", {
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
          ordinal: function (s, e) {
            switch (e) {
              case "d":
              case "D":
              case "Do":
              case "DD":
                return s;
              default:
                if (0 === s) return s + "'unjy";
                var u = s % 10;
                return (
                  s + (n[u] || n[(s % 100) - u] || n[s >= 100 ? 100 : null])
                );
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    2360: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("tl-ph", {
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
      })(h(5439));
    },
    6645: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n =
          "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        function e(g, L, k, C) {
          var A = (function u(g) {
            var L = Math.floor((g % 1e3) / 100),
              k = Math.floor((g % 100) / 10),
              C = g % 10,
              A = "";
            return (
              L > 0 && (A += n[L] + "vatlh"),
              k > 0 && (A += ("" !== A ? " " : "") + n[k] + "maH"),
              C > 0 && (A += ("" !== A ? " " : "") + n[C]),
              "" === A ? "pagh" : A
            );
          })(g);
          switch (k) {
            case "ss":
              return A + " lup";
            case "mm":
              return A + " tup";
            case "hh":
              return A + " rep";
            case "dd":
              return A + " jaj";
            case "MM":
              return A + " jar";
            case "yy":
              return A + " DIS";
          }
        }
        l.defineLocale("tlh", {
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
            future: function o(g) {
              var L = g;
              return -1 !== g.indexOf("jaj")
                ? L.slice(0, -3) + "leS"
                : -1 !== g.indexOf("jar")
                ? L.slice(0, -3) + "waQ"
                : -1 !== g.indexOf("DIS")
                ? L.slice(0, -3) + "nem"
                : L + " pIq";
            },
            past: function s(g) {
              var L = g;
              return -1 !== g.indexOf("jaj")
                ? L.slice(0, -3) + "Hu\u2019"
                : -1 !== g.indexOf("jar")
                ? L.slice(0, -3) + "wen"
                : -1 !== g.indexOf("DIS")
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
      })(h(5439));
    },
    8374: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = {
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
        l.defineLocale("tr", {
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
          meridiem: function (s, e, u) {
            return s < 12
              ? u
                ? "\xf6\xf6"
                : "\xd6\xd6"
              : u
              ? "\xf6s"
              : "\xd6S";
          },
          meridiemParse: /\xf6\xf6|\xd6\xd6|\xf6s|\xd6S/,
          isPM: function (s) {
            return "\xf6s" === s || "\xd6S" === s;
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
          ordinal: function (s, e) {
            switch (e) {
              case "d":
              case "D":
              case "Do":
              case "DD":
                return s;
              default:
                if (0 === s) return s + "'\u0131nc\u0131";
                var u = s % 10;
                return (
                  s + (n[u] || n[(s % 100) - u] || n[s >= 100 ? 100 : null])
                );
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(h(5439));
    },
    256: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function o(s, e, u, c) {
          var g = {
            s: ["viensas secunds", "'iensas secunds"],
            ss: [s + " secunds", s + " secunds"],
            m: ["'n m\xedut", "'iens m\xedut"],
            mm: [s + " m\xeduts", s + " m\xeduts"],
            h: ["'n \xfeora", "'iensa \xfeora"],
            hh: [s + " \xfeoras", s + " \xfeoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [s + " ziuas", s + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [s + " mesen", s + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [s + " ars", s + " ars"],
          };
          return c || e ? g[u][0] : g[u][1];
        }
        l.defineLocale("tzl", {
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
          isPM: function (s) {
            return "d'o" === s.toLowerCase();
          },
          meridiem: function (s, e, u) {
            return s > 11 ? (u ? "d'o" : "D'O") : u ? "d'a" : "D'A";
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
      })(h(5439));
    },
    1631: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("tzm-latn", {
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
      })(h(5439));
    },
    1595: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("tzm", {
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
      })(h(5439));
    },
    6050: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("ug-cn", {
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
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" === s ||
              "\u0633\u06d5\u06be\u06d5\u0631" === s ||
              "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" ===
                s
                ? o
                : "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" ===
                    s || "\u0643\u06d5\u0686" === s
                ? o + 12
                : o >= 11
                ? o
                : o + 12
            );
          },
          meridiem: function (o, s, e) {
            var u = 100 * o + s;
            return u < 600
              ? "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5"
              : u < 900
              ? "\u0633\u06d5\u06be\u06d5\u0631"
              : u < 1130
              ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646"
              : u < 1230
              ? "\u0686\u06c8\u0634"
              : u < 1800
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
          ordinal: function (o, s) {
            switch (s) {
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
      })(h(5439));
    },
    5610: function (Y, D, h) {
      !(function (l) {
        "use strict";
        function o(c, g, L) {
          return "m" === L
            ? g
              ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430"
              : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443"
            : "h" === L
            ? g
              ? "\u0433\u043e\u0434\u0438\u043d\u0430"
              : "\u0433\u043e\u0434\u0438\u043d\u0443"
            : c +
              " " +
              (function n(c, g) {
                var L = c.split("_");
                return g % 10 == 1 && g % 100 != 11
                  ? L[0]
                  : g % 10 >= 2 &&
                    g % 10 <= 4 &&
                    (g % 100 < 10 || g % 100 >= 20)
                  ? L[1]
                  : L[2];
              })(
                {
                  ss: g
                    ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434"
                    : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434",
                  mm: g
                    ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d"
                    : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",
                  hh: g
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
        l.defineLocale("uk", {
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
          weekdays: function s(c, g) {
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
                  /(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(g)
                    ? "accusative"
                    : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(
                        g
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
          meridiem: function (c, g, L) {
            return c < 4
              ? "\u043d\u043e\u0447\u0456"
              : c < 12
              ? "\u0440\u0430\u043d\u043a\u0443"
              : c < 17
              ? "\u0434\u043d\u044f"
              : "\u0432\u0435\u0447\u043e\u0440\u0430";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
          ordinal: function (c, g) {
            switch (g) {
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
      })(h(5439));
    },
    6077: function (Y, D, h) {
      !(function (l) {
        "use strict";
        var n = [
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
        l.defineLocale("ur", {
          months: n,
          monthsShort: n,
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
          meridiem: function (e, u, c) {
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
      })(h(5439));
    },
    2207: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("uz-latn", {
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
      })(h(5439));
    },
    2862: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("uz", {
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
      })(h(5439));
    },
    8093: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("vi", {
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
          meridiem: function (o, s, e) {
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
      })(h(5439));
    },
    5590: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("x-pseudo", {
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
            var s = o % 10;
            return (
              o +
              (1 == ~~((o % 100) / 10)
                ? "th"
                : 1 === s
                ? "st"
                : 2 === s
                ? "nd"
                : 3 === s
                ? "rd"
                : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(h(5439));
    },
    9058: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("yo", {
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
      })(h(5439));
    },
    7908: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("zh-cn", {
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
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              "\u51cc\u6668" === s ||
              "\u65e9\u4e0a" === s ||
              "\u4e0a\u5348" === s
                ? o
                : "\u4e0b\u5348" === s || "\u665a\u4e0a" === s
                ? o + 12
                : o >= 11
                ? o
                : o + 12
            );
          },
          meridiem: function (o, s, e) {
            var u = 100 * o + s;
            return u < 600
              ? "\u51cc\u6668"
              : u < 900
              ? "\u65e9\u4e0a"
              : u < 1130
              ? "\u4e0a\u5348"
              : u < 1230
              ? "\u4e2d\u5348"
              : u < 1800
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
          ordinal: function (o, s) {
            switch (s) {
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
      })(h(5439));
    },
    8867: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("zh-hk", {
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
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              "\u51cc\u6668" === s ||
              "\u65e9\u4e0a" === s ||
              "\u4e0a\u5348" === s
                ? o
                : "\u4e2d\u5348" === s
                ? o >= 11
                  ? o
                  : o + 12
                : "\u4e0b\u5348" === s || "\u665a\u4e0a" === s
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, s, e) {
            var u = 100 * o + s;
            return u < 600
              ? "\u51cc\u6668"
              : u < 900
              ? "\u65e9\u4e0a"
              : u < 1200
              ? "\u4e0a\u5348"
              : 1200 === u
              ? "\u4e2d\u5348"
              : u < 1800
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
          ordinal: function (o, s) {
            switch (s) {
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
      })(h(5439));
    },
    1133: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("zh-mo", {
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
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              "\u51cc\u6668" === s ||
              "\u65e9\u4e0a" === s ||
              "\u4e0a\u5348" === s
                ? o
                : "\u4e2d\u5348" === s
                ? o >= 11
                  ? o
                  : o + 12
                : "\u4e0b\u5348" === s || "\u665a\u4e0a" === s
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, s, e) {
            var u = 100 * o + s;
            return u < 600
              ? "\u51cc\u6668"
              : u < 900
              ? "\u65e9\u4e0a"
              : u < 1130
              ? "\u4e0a\u5348"
              : u < 1230
              ? "\u4e2d\u5348"
              : u < 1800
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
          ordinal: function (o, s) {
            switch (s) {
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
      })(h(5439));
    },
    3291: function (Y, D, h) {
      !(function (l) {
        "use strict";
        l.defineLocale("zh-tw", {
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
          meridiemHour: function (o, s) {
            return (
              12 === o && (o = 0),
              "\u51cc\u6668" === s ||
              "\u65e9\u4e0a" === s ||
              "\u4e0a\u5348" === s
                ? o
                : "\u4e2d\u5348" === s
                ? o >= 11
                  ? o
                  : o + 12
                : "\u4e0b\u5348" === s || "\u665a\u4e0a" === s
                ? o + 12
                : void 0
            );
          },
          meridiem: function (o, s, e) {
            var u = 100 * o + s;
            return u < 600
              ? "\u51cc\u6668"
              : u < 900
              ? "\u65e9\u4e0a"
              : u < 1130
              ? "\u4e0a\u5348"
              : u < 1230
              ? "\u4e2d\u5348"
              : u < 1800
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
          ordinal: function (o, s) {
            switch (s) {
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
      })(h(5439));
    },
    5439: function (Y, D, h) {
      (Y = h.nmd(Y)).exports = (function () {
        "use strict";
        var l, $;
        function n() {
          return l.apply(null, arguments);
        }
        function s(t) {
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
        function u(t, a) {
          return Object.prototype.hasOwnProperty.call(t, a);
        }
        function c(t) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(t).length;
          var a;
          for (a in t) if (u(t, a)) return !1;
          return !0;
        }
        function g(t) {
          return void 0 === t;
        }
        function L(t) {
          return (
            "number" == typeof t ||
            "[object Number]" === Object.prototype.toString.call(t)
          );
        }
        function k(t) {
          return (
            t instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(t)
          );
        }
        function C(t, a) {
          var d,
            _ = [];
          for (d = 0; d < t.length; ++d) _.push(a(t[d], d));
          return _;
        }
        function A(t, a) {
          for (var _ in a) u(a, _) && (t[_] = a[_]);
          return (
            u(a, "toString") && (t.toString = a.toString),
            u(a, "valueOf") && (t.valueOf = a.valueOf),
            t
          );
        }
        function N(t, a, _, d) {
          return ua(t, a, _, d, !0).utc();
        }
        function b(t) {
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
        function le(t) {
          if (null == t._isValid) {
            var a = b(t),
              _ = $.call(a.parsedDateParts, function (p) {
                return null != p;
              }),
              d =
                !isNaN(t._d.getTime()) &&
                a.overflow < 0 &&
                !a.empty &&
                !a.invalidEra &&
                !a.invalidMonth &&
                !a.invalidWeekday &&
                !a.weekdayMismatch &&
                !a.nullInput &&
                !a.invalidFormat &&
                !a.userInvalidated &&
                (!a.meridiem || (a.meridiem && _));
            if (
              (t._strict &&
                (d =
                  d &&
                  0 === a.charsLeftOver &&
                  0 === a.unusedTokens.length &&
                  void 0 === a.bigHour),
              null != Object.isFrozen && Object.isFrozen(t))
            )
              return d;
            t._isValid = d;
          }
          return t._isValid;
        }
        function qe(t) {
          var a = N(NaN);
          return null != t ? A(b(a), t) : (b(a).userInvalidated = !0), a;
        }
        $ = Array.prototype.some
          ? Array.prototype.some
          : function (t) {
              var d,
                a = Object(this),
                _ = a.length >>> 0;
              for (d = 0; d < _; d++)
                if (d in a && t.call(this, a[d], d, a)) return !0;
              return !1;
            };
        var Tt = (n.momentProperties = []),
          Oe = !1;
        function Jt(t, a) {
          var _, d, p;
          if (
            (g(a._isAMomentObject) || (t._isAMomentObject = a._isAMomentObject),
            g(a._i) || (t._i = a._i),
            g(a._f) || (t._f = a._f),
            g(a._l) || (t._l = a._l),
            g(a._strict) || (t._strict = a._strict),
            g(a._tzm) || (t._tzm = a._tzm),
            g(a._isUTC) || (t._isUTC = a._isUTC),
            g(a._offset) || (t._offset = a._offset),
            g(a._pf) || (t._pf = b(a)),
            g(a._locale) || (t._locale = a._locale),
            Tt.length > 0)
          )
            for (_ = 0; _ < Tt.length; _++)
              g((p = a[(d = Tt[_])])) || (t[d] = p);
          return t;
        }
        function Xe(t) {
          Jt(this, t),
            (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === Oe && ((Oe = !0), n.updateOffset(this), (Oe = !1));
        }
        function ue(t) {
          return t instanceof Xe || (null != t && null != t._isAMomentObject);
        }
        function re(t) {
          !1 === n.suppressDeprecationWarnings &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + t);
        }
        function ee(t, a) {
          var _ = !0;
          return A(function () {
            if (
              (null != n.deprecationHandler && n.deprecationHandler(null, t), _)
            ) {
              var p,
                y,
                Z,
                d = [];
              for (y = 0; y < arguments.length; y++) {
                if (((p = ""), "object" == typeof arguments[y])) {
                  for (Z in ((p += "\n[" + y + "] "), arguments[0]))
                    u(arguments[0], Z) &&
                      (p += Z + ": " + arguments[0][Z] + ", ");
                  p = p.slice(0, -2);
                } else p = arguments[y];
                d.push(p);
              }
              re(
                t +
                  "\nArguments: " +
                  Array.prototype.slice.call(d).join("") +
                  "\n" +
                  new Error().stack
              ),
                (_ = !1);
            }
            return a.apply(this, arguments);
          }, a);
        }
        var et,
          j = {};
        function he(t, a) {
          null != n.deprecationHandler && n.deprecationHandler(t, a),
            j[t] || (re(a), (j[t] = !0));
        }
        function S(t) {
          return (
            ("undefined" != typeof Function && t instanceof Function) ||
            "[object Function]" === Object.prototype.toString.call(t)
          );
        }
        function z(t, a) {
          var d,
            _ = A({}, t);
          for (d in a)
            u(a, d) &&
              (e(t[d]) && e(a[d])
                ? ((_[d] = {}), A(_[d], t[d]), A(_[d], a[d]))
                : null != a[d]
                ? (_[d] = a[d])
                : delete _[d]);
          for (d in t) u(t, d) && !u(a, d) && e(t[d]) && (_[d] = A({}, _[d]));
          return _;
        }
        function fe(t) {
          null != t && this.set(t);
        }
        (n.suppressDeprecationWarnings = !1),
          (n.deprecationHandler = null),
          (et = Object.keys
            ? Object.keys
            : function (t) {
                var a,
                  _ = [];
                for (a in t) u(t, a) && _.push(a);
                return _;
              });
        function ce(t, a, _) {
          var d = "" + Math.abs(t);
          return (
            (t >= 0 ? (_ ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, a - d.length))
              .toString()
              .substr(1) +
            d
          );
        }
        var Lt =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          tt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          Yt = {},
          Ne = {};
        function q(t, a, _, d) {
          var p = d;
          "string" == typeof d &&
            (p = function () {
              return this[d]();
            }),
            t && (Ne[t] = p),
            a &&
              (Ne[a[0]] = function () {
                return ce(p.apply(this, arguments), a[1], a[2]);
              }),
            _ &&
              (Ne[_] = function () {
                return this.localeData().ordinal(p.apply(this, arguments), t);
              });
        }
        function ka(t) {
          return t.match(/\[[\s\S]/)
            ? t.replace(/^\[|\]$/g, "")
            : t.replace(/\\/g, "");
        }
        function at(t, a) {
          return t.isValid()
            ? ((a = Rt(a, t.localeData())),
              (Yt[a] =
                Yt[a] ||
                (function va(t) {
                  var _,
                    d,
                    a = t.match(Lt);
                  for (_ = 0, d = a.length; _ < d; _++)
                    a[_] = Ne[a[_]] ? Ne[a[_]] : ka(a[_]);
                  return function (p) {
                    var Z,
                      y = "";
                    for (Z = 0; Z < d; Z++)
                      y += S(a[Z]) ? a[Z].call(p, t) : a[Z];
                    return y;
                  };
                })(a)),
              Yt[a](t))
            : t.localeData().invalidDate();
        }
        function Rt(t, a) {
          var _ = 5;
          function d(p) {
            return a.longDateFormat(p) || p;
          }
          for (tt.lastIndex = 0; _ >= 0 && tt.test(t); )
            (t = t.replace(tt, d)), (tt.lastIndex = 0), (_ -= 1);
          return t;
        }
        var We = {};
        function K(t, a) {
          var _ = t.toLowerCase();
          We[_] = We[_ + "s"] = We[a] = t;
        }
        function ie(t) {
          return "string" == typeof t ? We[t] || We[t.toLowerCase()] : void 0;
        }
        function Zt(t) {
          var _,
            d,
            a = {};
          for (d in t) u(t, d) && (_ = ie(d)) && (a[_] = t[d]);
          return a;
        }
        var kt = {};
        function B(t, a) {
          kt[t] = a;
        }
        function nt(t) {
          return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
        }
        function se(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        }
        function H(t) {
          var a = +t,
            _ = 0;
          return 0 !== a && isFinite(a) && (_ = se(a)), _;
        }
        function He(t, a) {
          return function (_) {
            return null != _
              ? (Qt(this, t, _), n.updateOffset(this, a), this)
              : it(this, t);
          };
        }
        function it(t, a) {
          return t.isValid()
            ? t._d["get" + (t._isUTC ? "UTC" : "") + a]()
            : NaN;
        }
        function Qt(t, a, _) {
          t.isValid() &&
            !isNaN(_) &&
            ("FullYear" === a &&
            nt(t.year()) &&
            1 === t.month() &&
            29 === t.date()
              ? ((_ = H(_)),
                t._d["set" + (t._isUTC ? "UTC" : "") + a](
                  _,
                  t.month(),
                  lt(_, t.month())
                ))
              : t._d["set" + (t._isUTC ? "UTC" : "") + a](_));
        }
        var dt,
          Gt = /\d/,
          te = /\d\d/,
          Bt = /\d{3}/,
          vt = /\d{4}/,
          st = /[+-]?\d{6}/,
          F = /\d\d?/,
          Le = /\d\d\d\d?/,
          Je = /\d\d\d\d\d\d?/,
          Ze = /\d{1,3}/,
          bt = /\d{1,4}/,
          rt = /[+-]?\d{1,6}/,
          Ue = /\d+/,
          ot = /[+-]?\d+/,
          Ha = /Z|[+-]\d\d:?\d\d/gi,
          _t = /Z|[+-]\d\d(?::?\d\d)?/gi,
          Re =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
        function x(t, a, _) {
          dt[t] = S(a)
            ? a
            : function (d, p) {
                return d && _ ? _ : a;
              };
        }
        function Pa(t, a) {
          return u(dt, t)
            ? dt[t](a._strict, a._locale)
            : new RegExp(
                (function Ea(t) {
                  return ae(
                    t
                      .replace("\\", "")
                      .replace(
                        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                        function (a, _, d, p, y) {
                          return _ || d || p || y;
                        }
                      )
                  );
                })(t)
              );
        }
        function ae(t) {
          return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        dt = {};
        var wt = {};
        function I(t, a) {
          var _,
            d = a;
          for (
            "string" == typeof t && (t = [t]),
              L(a) &&
                (d = function (p, y) {
                  y[a] = H(p);
                }),
              _ = 0;
            _ < t.length;
            _++
          )
            wt[t[_]] = d;
        }
        function ze(t, a) {
          I(t, function (_, d, p, y) {
            (p._w = p._w || {}), a(_, p._w, p, y);
          });
        }
        function ja(t, a, _) {
          null != a && u(wt, t) && wt[t](a, _._a, _, t);
        }
        var G;
        function lt(t, a) {
          if (isNaN(t) || isNaN(a)) return NaN;
          var _ = (function Wa(t, a) {
            return ((t % a) + a) % a;
          })(a, 12);
          return (
            (t += (a - _) / 12),
            1 === _ ? (nt(t) ? 29 : 28) : 31 - ((_ % 7) % 2)
          );
        }
        (G = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function (t) {
              var a;
              for (a = 0; a < this.length; ++a) if (this[a] === t) return a;
              return -1;
            }),
          q("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
          q("MMM", 0, 0, function (t) {
            return this.localeData().monthsShort(this, t);
          }),
          q("MMMM", 0, 0, function (t) {
            return this.localeData().months(this, t);
          }),
          K("month", "M"),
          B("month", 8),
          x("M", F),
          x("MM", F, te),
          x("MMM", function (t, a) {
            return a.monthsShortRegex(t);
          }),
          x("MMMM", function (t, a) {
            return a.monthsRegex(t);
          }),
          I(["M", "MM"], function (t, a) {
            a[1] = H(t) - 1;
          }),
          I(["MMM", "MMMM"], function (t, a, _, d) {
            var p = _._locale.monthsParse(t, d, _._strict);
            null != p ? (a[1] = p) : (b(_).invalidMonth = t);
          });
        var Ja =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          Vt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          $t = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          Ra = Re,
          za = Re;
        function Ba(t, a, _) {
          var d,
            p,
            y,
            Z = t.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                d = 0;
              d < 12;
              ++d
            )
              (y = N([2e3, d])),
                (this._shortMonthsParse[d] = this.monthsShort(
                  y,
                  ""
                ).toLocaleLowerCase()),
                (this._longMonthsParse[d] = this.months(
                  y,
                  ""
                ).toLocaleLowerCase());
          return _
            ? "MMM" === a
              ? -1 !== (p = G.call(this._shortMonthsParse, Z))
                ? p
                : null
              : -1 !== (p = G.call(this._longMonthsParse, Z))
              ? p
              : null
            : "MMM" === a
            ? -1 !== (p = G.call(this._shortMonthsParse, Z)) ||
              -1 !== (p = G.call(this._longMonthsParse, Z))
              ? p
              : null
            : -1 !== (p = G.call(this._longMonthsParse, Z)) ||
              -1 !== (p = G.call(this._shortMonthsParse, Z))
            ? p
            : null;
        }
        function Kt(t, a) {
          var _;
          if (!t.isValid()) return t;
          if ("string" == typeof a)
            if (/^\d+$/.test(a)) a = H(a);
            else if (!L((a = t.localeData().monthsParse(a)))) return t;
          return (
            (_ = Math.min(t.date(), lt(t.year(), a))),
            t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](a, _),
            t
          );
        }
        function Xt(t) {
          return null != t
            ? (Kt(this, t), n.updateOffset(this, !0), this)
            : it(this, "Month");
        }
        function xt() {
          function t(Z, O) {
            return O.length - Z.length;
          }
          var p,
            y,
            a = [],
            _ = [],
            d = [];
          for (p = 0; p < 12; p++)
            (y = N([2e3, p])),
              a.push(this.monthsShort(y, "")),
              _.push(this.months(y, "")),
              d.push(this.months(y, "")),
              d.push(this.monthsShort(y, ""));
          for (a.sort(t), _.sort(t), d.sort(t), p = 0; p < 12; p++)
            (a[p] = ae(a[p])), (_[p] = ae(_[p]));
          for (p = 0; p < 24; p++) d[p] = ae(d[p]);
          (this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              "^(" + _.join("|") + ")",
              "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
              "^(" + a.join("|") + ")",
              "i"
            ));
        }
        function Pe(t) {
          return nt(t) ? 366 : 365;
        }
        q("Y", 0, 0, function () {
          var t = this.year();
          return t <= 9999 ? ce(t, 4) : "+" + t;
        }),
          q(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          q(0, ["YYYY", 4], 0, "year"),
          q(0, ["YYYYY", 5], 0, "year"),
          q(0, ["YYYYYY", 6, !0], 0, "year"),
          K("year", "y"),
          B("year", 1),
          x("Y", ot),
          x("YY", F, te),
          x("YYYY", bt, vt),
          x("YYYYY", rt, st),
          x("YYYYYY", rt, st),
          I(["YYYYY", "YYYYYY"], 0),
          I("YYYY", function (t, a) {
            a[0] = 2 === t.length ? n.parseTwoDigitYear(t) : H(t);
          }),
          I("YY", function (t, a) {
            a[0] = n.parseTwoDigitYear(t);
          }),
          I("Y", function (t, a) {
            a[0] = parseInt(t, 10);
          }),
          (n.parseTwoDigitYear = function (t) {
            return H(t) + (H(t) > 68 ? 1900 : 2e3);
          });
        var ea = He("FullYear", !0);
        function en(t, a, _, d, p, y, Z) {
          var O;
          return (
            t < 100 && t >= 0
              ? ((O = new Date(t + 400, a, _, d, p, y, Z)),
                isFinite(O.getFullYear()) && O.setFullYear(t))
              : (O = new Date(t, a, _, d, p, y, Z)),
            O
          );
        }
        function Qe(t) {
          var a, _;
          return (
            t < 100 && t >= 0
              ? (((_ = Array.prototype.slice.call(arguments))[0] = t + 400),
                (a = new Date(Date.UTC.apply(null, _))),
                isFinite(a.getUTCFullYear()) && a.setUTCFullYear(t))
              : (a = new Date(Date.UTC.apply(null, arguments))),
            a
          );
        }
        function ut(t, a, _) {
          var d = 7 + a - _;
          return (-(7 + Qe(t, 0, d).getUTCDay() - a) % 7) + d - 1;
        }
        function ta(t, a, _, d, p) {
          var U,
            R,
            O = 1 + 7 * (a - 1) + ((7 + _ - d) % 7) + ut(t, d, p);
          return (
            O <= 0
              ? (R = Pe((U = t - 1)) + O)
              : O > Pe(t)
              ? ((U = t + 1), (R = O - Pe(t)))
              : ((U = t), (R = O)),
            { year: U, dayOfYear: R }
          );
        }
        function Ge(t, a, _) {
          var y,
            Z,
            d = ut(t.year(), a, _),
            p = Math.floor((t.dayOfYear() - d - 1) / 7) + 1;
          return (
            p < 1
              ? (y = p + ye((Z = t.year() - 1), a, _))
              : p > ye(t.year(), a, _)
              ? ((y = p - ye(t.year(), a, _)), (Z = t.year() + 1))
              : ((Z = t.year()), (y = p)),
            { week: y, year: Z }
          );
        }
        function ye(t, a, _) {
          var d = ut(t, a, _),
            p = ut(t + 1, a, _);
          return (Pe(t) - d + p) / 7;
        }
        q("w", ["ww", 2], "wo", "week"),
          q("W", ["WW", 2], "Wo", "isoWeek"),
          K("week", "w"),
          K("isoWeek", "W"),
          B("week", 5),
          B("isoWeek", 5),
          x("w", F),
          x("ww", F, te),
          x("W", F),
          x("WW", F, te),
          ze(["w", "ww", "W", "WW"], function (t, a, _, d) {
            a[d.substr(0, 1)] = H(t);
          });
        function St(t, a) {
          return t.slice(a, 7).concat(t.slice(0, a));
        }
        q("d", 0, "do", "day"),
          q("dd", 0, 0, function (t) {
            return this.localeData().weekdaysMin(this, t);
          }),
          q("ddd", 0, 0, function (t) {
            return this.localeData().weekdaysShort(this, t);
          }),
          q("dddd", 0, 0, function (t) {
            return this.localeData().weekdays(this, t);
          }),
          q("e", 0, 0, "weekday"),
          q("E", 0, 0, "isoWeekday"),
          K("day", "d"),
          K("weekday", "e"),
          K("isoWeekday", "E"),
          B("day", 11),
          B("weekday", 11),
          B("isoWeekday", 11),
          x("d", F),
          x("e", F),
          x("E", F),
          x("dd", function (t, a) {
            return a.weekdaysMinRegex(t);
          }),
          x("ddd", function (t, a) {
            return a.weekdaysShortRegex(t);
          }),
          x("dddd", function (t, a) {
            return a.weekdaysRegex(t);
          }),
          ze(["dd", "ddd", "dddd"], function (t, a, _, d) {
            var p = _._locale.weekdaysParse(t, d, _._strict);
            null != p ? (a.d = p) : (b(_).invalidWeekday = t);
          }),
          ze(["d", "e", "E"], function (t, a, _, d) {
            a[d] = H(t);
          });
        var ln =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          aa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          un = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          mn = Re,
          cn = Re,
          pn = Re;
        function Mn(t, a, _) {
          var d,
            p,
            y,
            Z = t.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                d = 0;
              d < 7;
              ++d
            )
              (y = N([2e3, 1]).day(d)),
                (this._minWeekdaysParse[d] = this.weekdaysMin(
                  y,
                  ""
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[d] = this.weekdaysShort(
                  y,
                  ""
                ).toLocaleLowerCase()),
                (this._weekdaysParse[d] = this.weekdays(
                  y,
                  ""
                ).toLocaleLowerCase());
          return _
            ? "dddd" === a
              ? -1 !== (p = G.call(this._weekdaysParse, Z))
                ? p
                : null
              : "ddd" === a
              ? -1 !== (p = G.call(this._shortWeekdaysParse, Z))
                ? p
                : null
              : -1 !== (p = G.call(this._minWeekdaysParse, Z))
              ? p
              : null
            : "dddd" === a
            ? -1 !== (p = G.call(this._weekdaysParse, Z)) ||
              -1 !== (p = G.call(this._shortWeekdaysParse, Z)) ||
              -1 !== (p = G.call(this._minWeekdaysParse, Z))
              ? p
              : null
            : "ddd" === a
            ? -1 !== (p = G.call(this._shortWeekdaysParse, Z)) ||
              -1 !== (p = G.call(this._weekdaysParse, Z)) ||
              -1 !== (p = G.call(this._minWeekdaysParse, Z))
              ? p
              : null
            : -1 !== (p = G.call(this._minWeekdaysParse, Z)) ||
              -1 !== (p = G.call(this._weekdaysParse, Z)) ||
              -1 !== (p = G.call(this._shortWeekdaysParse, Z))
            ? p
            : null;
        }
        function Ct() {
          function t(De, Ce) {
            return Ce.length - De.length;
          }
          var y,
            Z,
            O,
            U,
            R,
            a = [],
            _ = [],
            d = [],
            p = [];
          for (y = 0; y < 7; y++)
            (Z = N([2e3, 1]).day(y)),
              (O = ae(this.weekdaysMin(Z, ""))),
              (U = ae(this.weekdaysShort(Z, ""))),
              (R = ae(this.weekdays(Z, ""))),
              a.push(O),
              _.push(U),
              d.push(R),
              p.push(O),
              p.push(U),
              p.push(R);
          a.sort(t),
            _.sort(t),
            d.sort(t),
            p.sort(t),
            (this._weekdaysRegex = new RegExp("^(" + p.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
              "^(" + d.join("|") + ")",
              "i"
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
              "^(" + _.join("|") + ")",
              "i"
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
              "^(" + a.join("|") + ")",
              "i"
            ));
        }
        function qt() {
          return this.hours() % 12 || 12;
        }
        function na(t, a) {
          q(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), a);
          });
        }
        function ia(t, a) {
          return a._meridiemParse;
        }
        q("H", ["HH", 2], 0, "hour"),
          q("h", ["hh", 2], 0, qt),
          q("k", ["kk", 2], 0, function vn() {
            return this.hours() || 24;
          }),
          q("hmm", 0, 0, function () {
            return "" + qt.apply(this) + ce(this.minutes(), 2);
          }),
          q("hmmss", 0, 0, function () {
            return (
              "" +
              qt.apply(this) +
              ce(this.minutes(), 2) +
              ce(this.seconds(), 2)
            );
          }),
          q("Hmm", 0, 0, function () {
            return "" + this.hours() + ce(this.minutes(), 2);
          }),
          q("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + ce(this.minutes(), 2) + ce(this.seconds(), 2)
            );
          }),
          na("a", !0),
          na("A", !1),
          K("hour", "h"),
          B("hour", 13),
          x("a", ia),
          x("A", ia),
          x("H", F),
          x("h", F),
          x("k", F),
          x("HH", F, te),
          x("hh", F, te),
          x("kk", F, te),
          x("hmm", Le),
          x("hmmss", Je),
          x("Hmm", Le),
          x("Hmmss", Je),
          I(["H", "HH"], 3),
          I(["k", "kk"], function (t, a, _) {
            var d = H(t);
            a[3] = 24 === d ? 0 : d;
          }),
          I(["a", "A"], function (t, a, _) {
            (_._isPm = _._locale.isPM(t)), (_._meridiem = t);
          }),
          I(["h", "hh"], function (t, a, _) {
            (a[3] = H(t)), (b(_).bigHour = !0);
          }),
          I("hmm", function (t, a, _) {
            var d = t.length - 2;
            (a[3] = H(t.substr(0, d))),
              (a[4] = H(t.substr(d))),
              (b(_).bigHour = !0);
          }),
          I("hmmss", function (t, a, _) {
            var d = t.length - 4,
              p = t.length - 2;
            (a[3] = H(t.substr(0, d))),
              (a[4] = H(t.substr(d, 2))),
              (a[5] = H(t.substr(p))),
              (b(_).bigHour = !0);
          }),
          I("Hmm", function (t, a, _) {
            var d = t.length - 2;
            (a[3] = H(t.substr(0, d))), (a[4] = H(t.substr(d)));
          }),
          I("Hmmss", function (t, a, _) {
            var d = t.length - 4,
              p = t.length - 2;
            (a[3] = H(t.substr(0, d))),
              (a[4] = H(t.substr(d, 2))),
              (a[5] = H(t.substr(p)));
          });
        var An = He("Hours", !0);
        var Ve,
          sa = {
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
            months: Ja,
            monthsShort: Vt,
            week: { dow: 0, doy: 6 },
            weekdays: ln,
            weekdaysMin: un,
            weekdaysShort: aa,
            meridiemParse: /[ap]\.?m?\.?/i,
          },
          J = {},
          Be = {};
        function Sn(t, a) {
          var _,
            d = Math.min(t.length, a.length);
          for (_ = 0; _ < d; _ += 1) if (t[_] !== a[_]) return _;
          return d;
        }
        function ra(t) {
          return t && t.toLowerCase().replace("_", "-");
        }
        function mt(t) {
          var a = null;
          if (void 0 === J[t] && Y && Y.exports)
            try {
              (a = Ve._abbr), h(6700)("./" + t), Ye(a);
            } catch (d) {
              J[t] = null;
            }
          return J[t];
        }
        function Ye(t, a) {
          var _;
          return (
            t &&
              ((_ = g(a) ? Te(t) : Ot(t, a))
                ? (Ve = _)
                : "undefined" != typeof console &&
                  console.warn &&
                  console.warn(
                    "Locale " + t + " not found. Did you forget to load it?"
                  )),
            Ve._abbr
          );
        }
        function Ot(t, a) {
          if (null !== a) {
            var _,
              d = sa;
            if (((a.abbr = t), null != J[t]))
              he(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              ),
                (d = J[t]._config);
            else if (null != a.parentLocale)
              if (null != J[a.parentLocale]) d = J[a.parentLocale]._config;
              else {
                if (null == (_ = mt(a.parentLocale)))
                  return (
                    Be[a.parentLocale] || (Be[a.parentLocale] = []),
                    Be[a.parentLocale].push({ name: t, config: a }),
                    null
                  );
                d = _._config;
              }
            return (
              (J[t] = new fe(z(d, a))),
              Be[t] &&
                Be[t].forEach(function (p) {
                  Ot(p.name, p.config);
                }),
              Ye(t),
              J[t]
            );
          }
          return delete J[t], null;
        }
        function Te(t) {
          var a;
          if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
            return Ve;
          if (!s(t)) {
            if ((a = mt(t))) return a;
            t = [t];
          }
          return (function Cn(t) {
            for (var _, d, p, y, a = 0; a < t.length; ) {
              for (
                _ = (y = ra(t[a]).split("-")).length,
                  d = (d = ra(t[a + 1])) ? d.split("-") : null;
                _ > 0;

              ) {
                if ((p = mt(y.slice(0, _).join("-")))) return p;
                if (d && d.length >= _ && Sn(y, d) >= _ - 1) break;
                _--;
              }
              a++;
            }
            return Ve;
          })(t);
        }
        function Nt(t) {
          var a,
            _ = t._a;
          return (
            _ &&
              -2 === b(t).overflow &&
              ((a =
                _[1] < 0 || _[1] > 11
                  ? 1
                  : _[2] < 1 || _[2] > lt(_[0], _[1])
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
              b(t)._overflowDayOfYear && (a < 0 || a > 2) && (a = 2),
              b(t)._overflowWeeks && -1 === a && (a = 7),
              b(t)._overflowWeekday && -1 === a && (a = 8),
              (b(t).overflow = a)),
            t
          );
        }
        var Nn =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Hn =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Un = /Z|[+-]\d\d(?::?\d\d)?/,
          ct = [
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
          Ht = [
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
          Pn = /^\/?Date\((-?\d+)/i,
          En =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          jn = {
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
        function oa(t) {
          var a,
            _,
            y,
            Z,
            O,
            U,
            d = t._i,
            p = Nn.exec(d) || Hn.exec(d);
          if (p) {
            for (b(t).iso = !0, a = 0, _ = ct.length; a < _; a++)
              if (ct[a][1].exec(p[1])) {
                (Z = ct[a][0]), (y = !1 !== ct[a][2]);
                break;
              }
            if (null == Z) return void (t._isValid = !1);
            if (p[3]) {
              for (a = 0, _ = Ht.length; a < _; a++)
                if (Ht[a][1].exec(p[3])) {
                  O = (p[2] || " ") + Ht[a][0];
                  break;
                }
              if (null == O) return void (t._isValid = !1);
            }
            if (!y && null != O) return void (t._isValid = !1);
            if (p[4]) {
              if (!Un.exec(p[4])) return void (t._isValid = !1);
              U = "Z";
            }
            (t._f = Z + (O || "") + (U || "")), Pt(t);
          } else t._isValid = !1;
        }
        function Fn(t) {
          var a = parseInt(t, 10);
          return a <= 49 ? 2e3 + a : a <= 999 ? 1900 + a : a;
        }
        function da(t) {
          var _,
            a = En.exec(
              (function Wn(t) {
                return t
                  .replace(/\([^)]*\)|[\n\t]/g, " ")
                  .replace(/(\s\s+)/g, " ")
                  .replace(/^\s\s*/, "")
                  .replace(/\s\s*$/, "");
              })(t._i)
            );
          if (a) {
            if (
              ((_ = (function In(t, a, _, d, p, y) {
                var Z = [
                  Fn(t),
                  Vt.indexOf(a),
                  parseInt(_, 10),
                  parseInt(d, 10),
                  parseInt(p, 10),
                ];
                return y && Z.push(parseInt(y, 10)), Z;
              })(a[4], a[3], a[2], a[5], a[6], a[7])),
              !(function Jn(t, a, _) {
                return (
                  !t ||
                  aa.indexOf(t) === new Date(a[0], a[1], a[2]).getDay() ||
                  ((b(_).weekdayMismatch = !0), (_._isValid = !1), !1)
                );
              })(a[1], _, t))
            )
              return;
            (t._a = _),
              (t._tzm = (function _a(t, a, _) {
                if (t) return jn[t];
                if (a) return 0;
                var d = parseInt(_, 10),
                  p = d % 100;
                return ((d - p) / 100) * 60 + p;
              })(a[8], a[9], a[10])),
              (t._d = Qe.apply(null, t._a)),
              t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
              (b(t).rfc2822 = !0);
          } else t._isValid = !1;
        }
        function Ee(t, a, _) {
          return null != t ? t : null != a ? a : _;
        }
        function Ut(t) {
          var a,
            _,
            p,
            y,
            Z,
            d = [];
          if (!t._d) {
            for (
              p = (function zn(t) {
                var a = new Date(n.now());
                return t._useUTC
                  ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()]
                  : [a.getFullYear(), a.getMonth(), a.getDate()];
              })(t),
                t._w &&
                  null == t._a[2] &&
                  null == t._a[1] &&
                  (function Qn(t) {
                    var a, _, d, p, y, Z, O, U, R;
                    null != (a = t._w).GG || null != a.W || null != a.E
                      ? ((y = 1),
                        (Z = 4),
                        (_ = Ee(a.GG, t._a[0], Ge(W(), 1, 4).year)),
                        (d = Ee(a.W, 1)),
                        ((p = Ee(a.E, 1)) < 1 || p > 7) && (U = !0))
                      : ((y = t._locale._week.dow),
                        (Z = t._locale._week.doy),
                        (R = Ge(W(), y, Z)),
                        (_ = Ee(a.gg, t._a[0], R.year)),
                        (d = Ee(a.w, R.week)),
                        null != a.d
                          ? ((p = a.d) < 0 || p > 6) && (U = !0)
                          : null != a.e
                          ? ((p = a.e + y), (a.e < 0 || a.e > 6) && (U = !0))
                          : (p = y)),
                      d < 1 || d > ye(_, y, Z)
                        ? (b(t)._overflowWeeks = !0)
                        : null != U
                        ? (b(t)._overflowWeekday = !0)
                        : ((O = ta(_, d, p, y, Z)),
                          (t._a[0] = O.year),
                          (t._dayOfYear = O.dayOfYear));
                  })(t),
                null != t._dayOfYear &&
                  ((Z = Ee(t._a[0], p[0])),
                  (t._dayOfYear > Pe(Z) || 0 === t._dayOfYear) &&
                    (b(t)._overflowDayOfYear = !0),
                  (_ = Qe(Z, 0, t._dayOfYear)),
                  (t._a[1] = _.getUTCMonth()),
                  (t._a[2] = _.getUTCDate())),
                a = 0;
              a < 3 && null == t._a[a];
              ++a
            )
              t._a[a] = d[a] = p[a];
            for (; a < 7; a++)
              t._a[a] = d[a] = null == t._a[a] ? (2 === a ? 1 : 0) : t._a[a];
            24 === t._a[3] &&
              0 === t._a[4] &&
              0 === t._a[5] &&
              0 === t._a[6] &&
              ((t._nextDay = !0), (t._a[3] = 0)),
              (t._d = (t._useUTC ? Qe : en).apply(null, d)),
              (y = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
              null != t._tzm &&
                t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
              t._nextDay && (t._a[3] = 24),
              t._w &&
                void 0 !== t._w.d &&
                t._w.d !== y &&
                (b(t).weekdayMismatch = !0);
          }
        }
        function Pt(t) {
          if (t._f !== n.ISO_8601)
            if (t._f !== n.RFC_2822) {
              (t._a = []), (b(t).empty = !0);
              var _,
                d,
                p,
                y,
                Z,
                R,
                a = "" + t._i,
                O = a.length,
                U = 0;
              for (
                p = Rt(t._f, t._locale).match(Lt) || [], _ = 0;
                _ < p.length;
                _++
              )
                (d = (a.match(Pa((y = p[_]), t)) || [])[0]) &&
                  ((Z = a.substr(0, a.indexOf(d))).length > 0 &&
                    b(t).unusedInput.push(Z),
                  (a = a.slice(a.indexOf(d) + d.length)),
                  (U += d.length)),
                  Ne[y]
                    ? (d ? (b(t).empty = !1) : b(t).unusedTokens.push(y),
                      ja(y, d, t))
                    : t._strict && !d && b(t).unusedTokens.push(y);
              (b(t).charsLeftOver = O - U),
                a.length > 0 && b(t).unusedInput.push(a),
                t._a[3] <= 12 &&
                  !0 === b(t).bigHour &&
                  t._a[3] > 0 &&
                  (b(t).bigHour = void 0),
                (b(t).parsedDateParts = t._a.slice(0)),
                (b(t).meridiem = t._meridiem),
                (t._a[3] = (function Gn(t, a, _) {
                  var d;
                  return null == _
                    ? a
                    : null != t.meridiemHour
                    ? t.meridiemHour(a, _)
                    : (null != t.isPM &&
                        ((d = t.isPM(_)) && a < 12 && (a += 12),
                        !d && 12 === a && (a = 0)),
                      a);
                })(t._locale, t._a[3], t._meridiem)),
                null !== (R = b(t).era) &&
                  (t._a[0] = t._locale.erasConvertYear(R, t._a[0])),
                Ut(t),
                Nt(t);
            } else da(t);
          else oa(t);
        }
        function la(t) {
          var a = t._i,
            _ = t._f;
          return (
            (t._locale = t._locale || Te(t._l)),
            null === a || (void 0 === _ && "" === a)
              ? qe({ nullInput: !0 })
              : ("string" == typeof a && (t._i = a = t._locale.preparse(a)),
                ue(a)
                  ? new Xe(Nt(a))
                  : (k(a)
                      ? (t._d = a)
                      : s(_)
                      ? (function Bn(t) {
                          var a,
                            _,
                            d,
                            p,
                            y,
                            Z,
                            O = !1;
                          if (0 === t._f.length)
                            return (
                              (b(t).invalidFormat = !0),
                              void (t._d = new Date(NaN))
                            );
                          for (p = 0; p < t._f.length; p++)
                            (y = 0),
                              (Z = !1),
                              (a = Jt({}, t)),
                              null != t._useUTC && (a._useUTC = t._useUTC),
                              (a._f = t._f[p]),
                              Pt(a),
                              le(a) && (Z = !0),
                              (y += b(a).charsLeftOver),
                              (y += 10 * b(a).unusedTokens.length),
                              (b(a).score = y),
                              O
                                ? y < d && ((d = y), (_ = a))
                                : (null == d || y < d || Z) &&
                                  ((d = y), (_ = a), Z && (O = !0));
                          A(t, _ || a);
                        })(t)
                      : _
                      ? Pt(t)
                      : (function Kn(t) {
                          var a = t._i;
                          g(a)
                            ? (t._d = new Date(n.now()))
                            : k(a)
                            ? (t._d = new Date(a.valueOf()))
                            : "string" == typeof a
                            ? (function Rn(t) {
                                var a = Pn.exec(t._i);
                                null === a
                                  ? (oa(t),
                                    !1 === t._isValid &&
                                      (delete t._isValid,
                                      da(t),
                                      !1 === t._isValid &&
                                        (delete t._isValid,
                                        t._strict
                                          ? (t._isValid = !1)
                                          : n.createFromInputFallback(t))))
                                  : (t._d = new Date(+a[1]));
                              })(t)
                            : s(a)
                            ? ((t._a = C(a.slice(0), function (_) {
                                return parseInt(_, 10);
                              })),
                              Ut(t))
                            : e(a)
                            ? (function Vn(t) {
                                if (!t._d) {
                                  var a = Zt(t._i);
                                  (t._a = C(
                                    [
                                      a.year,
                                      a.month,
                                      void 0 === a.day ? a.date : a.day,
                                      a.hour,
                                      a.minute,
                                      a.second,
                                      a.millisecond,
                                    ],
                                    function (d) {
                                      return d && parseInt(d, 10);
                                    }
                                  )),
                                    Ut(t);
                                }
                              })(t)
                            : L(a)
                            ? (t._d = new Date(a))
                            : n.createFromInputFallback(t);
                        })(t),
                    le(t) || (t._d = null),
                    t))
          );
        }
        function ua(t, a, _, d, p) {
          var y = {};
          return (
            (!0 === a || !1 === a) && ((d = a), (a = void 0)),
            (!0 === _ || !1 === _) && ((d = _), (_ = void 0)),
            ((e(t) && c(t)) || (s(t) && 0 === t.length)) && (t = void 0),
            (y._isAMomentObject = !0),
            (y._useUTC = y._isUTC = p),
            (y._l = _),
            (y._i = t),
            (y._f = a),
            (y._strict = d),
            (function $n(t) {
              var a = new Xe(Nt(la(t)));
              return a._nextDay && (a.add(1, "d"), (a._nextDay = void 0)), a;
            })(y)
          );
        }
        function W(t, a, _, d) {
          return ua(t, a, _, d, !1);
        }
        (n.createFromInputFallback = ee(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function (t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
          }
        )),
          (n.ISO_8601 = function () {}),
          (n.RFC_2822 = function () {});
        var Xn = ee(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var t = W.apply(null, arguments);
              return this.isValid() && t.isValid()
                ? t < this
                  ? this
                  : t
                : qe();
            }
          ),
          ei = ee(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var t = W.apply(null, arguments);
              return this.isValid() && t.isValid()
                ? t > this
                  ? this
                  : t
                : qe();
            }
          );
        function ma(t, a) {
          var _, d;
          if ((1 === a.length && s(a[0]) && (a = a[0]), !a.length)) return W();
          for (_ = a[0], d = 1; d < a.length; ++d)
            (!a[d].isValid() || a[d][t](_)) && (_ = a[d]);
          return _;
        }
        var $e = [
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
        function pt(t) {
          var a = Zt(t),
            _ = a.year || 0,
            d = a.quarter || 0,
            p = a.month || 0,
            y = a.week || a.isoWeek || 0,
            Z = a.day || 0,
            O = a.hour || 0,
            U = a.minute || 0,
            R = a.second || 0,
            De = a.millisecond || 0;
          (this._isValid = (function ii(t) {
            var a,
              d,
              _ = !1;
            for (a in t)
              if (
                u(t, a) &&
                (-1 === G.call($e, a) || (null != t[a] && isNaN(t[a])))
              )
                return !1;
            for (d = 0; d < $e.length; ++d)
              if (t[$e[d]]) {
                if (_) return !1;
                parseFloat(t[$e[d]]) !== H(t[$e[d]]) && (_ = !0);
              }
            return !0;
          })(a)),
            (this._milliseconds = +De + 1e3 * R + 6e4 * U + 1e3 * O * 60 * 60),
            (this._days = +Z + 7 * y),
            (this._months = +p + 3 * d + 12 * _),
            (this._data = {}),
            (this._locale = Te()),
            this._bubble();
        }
        function ht(t) {
          return t instanceof pt;
        }
        function Et(t) {
          return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
        }
        function ca(t, a) {
          q(t, 0, 0, function () {
            var _ = this.utcOffset(),
              d = "+";
            return (
              _ < 0 && ((_ = -_), (d = "-")),
              d + ce(~~(_ / 60), 2) + a + ce(~~_ % 60, 2)
            );
          });
        }
        ca("Z", ":"),
          ca("ZZ", ""),
          x("Z", _t),
          x("ZZ", _t),
          I(["Z", "ZZ"], function (t, a, _) {
            (_._useUTC = !0), (_._tzm = jt(_t, t));
          });
        var _i = /([\+\-]|\d\d)/gi;
        function jt(t, a) {
          var p,
            y,
            _ = (a || "").match(t);
          return null === _
            ? null
            : 0 ===
              (y =
                60 *
                  (p = ((_[_.length - 1] || []) + "").match(_i) || [
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
        function It(t, a) {
          var _, d;
          return a._isUTC
            ? ((_ = a.clone()),
              (d =
                (ue(t) || k(t) ? t.valueOf() : W(t).valueOf()) - _.valueOf()),
              _._d.setTime(_._d.valueOf() + d),
              n.updateOffset(_, !1),
              _)
            : W(t).local();
        }
        function Ft(t) {
          return -Math.round(t._d.getTimezoneOffset());
        }
        function pa() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        n.updateOffset = function () {};
        var yi = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          Ti =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function de(t, a) {
          var p,
            y,
            Z,
            _ = t,
            d = null;
          return (
            ht(t)
              ? (_ = { ms: t._milliseconds, d: t._days, M: t._months })
              : L(t) || !isNaN(+t)
              ? ((_ = {}), a ? (_[a] = +t) : (_.milliseconds = +t))
              : (d = yi.exec(t))
              ? ((p = "-" === d[1] ? -1 : 1),
                (_ = {
                  y: 0,
                  d: H(d[2]) * p,
                  h: H(d[3]) * p,
                  m: H(d[4]) * p,
                  s: H(d[5]) * p,
                  ms: H(Et(1e3 * d[6])) * p,
                }))
              : (d = Ti.exec(t))
              ? (_ = {
                  y: ve(d[2], (p = "-" === d[1] ? -1 : 1)),
                  M: ve(d[3], p),
                  w: ve(d[4], p),
                  d: ve(d[5], p),
                  h: ve(d[6], p),
                  m: ve(d[7], p),
                  s: ve(d[8], p),
                })
              : null == _
              ? (_ = {})
              : "object" == typeof _ &&
                ("from" in _ || "to" in _) &&
                ((Z = (function Yi(t, a) {
                  var _;
                  return t.isValid() && a.isValid()
                    ? ((a = It(a, t)),
                      t.isBefore(a)
                        ? (_ = Li(t, a))
                        : (((_ = Li(a, t)).milliseconds = -_.milliseconds),
                          (_.months = -_.months)),
                      _)
                    : { milliseconds: 0, months: 0 };
                })(W(_.from), W(_.to))),
                ((_ = {}).ms = Z.milliseconds),
                (_.M = Z.months)),
            (y = new pt(_)),
            ht(t) && u(t, "_locale") && (y._locale = t._locale),
            ht(t) && u(t, "_isValid") && (y._isValid = t._isValid),
            y
          );
        }
        function ve(t, a) {
          var _ = t && parseFloat(t.replace(",", "."));
          return (isNaN(_) ? 0 : _) * a;
        }
        function Li(t, a) {
          var _ = {};
          return (
            (_.months = a.month() - t.month() + 12 * (a.year() - t.year())),
            t.clone().add(_.months, "M").isAfter(a) && --_.months,
            (_.milliseconds = +a - +t.clone().add(_.months, "M")),
            _
          );
        }
        function ha(t, a) {
          return function (_, d) {
            var y;
            return (
              null !== d &&
                !isNaN(+d) &&
                (he(
                  a,
                  "moment()." +
                    a +
                    "(period, number) is deprecated. Please use moment()." +
                    a +
                    "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                ),
                (y = _),
                (_ = d),
                (d = y)),
              fa(this, de(_, d), t),
              this
            );
          };
        }
        function fa(t, a, _, d) {
          var p = a._milliseconds,
            y = Et(a._days),
            Z = Et(a._months);
          !t.isValid() ||
            ((d = null == d || d),
            Z && Kt(t, it(t, "Month") + Z * _),
            y && Qt(t, "Date", it(t, "Date") + y * _),
            p && t._d.setTime(t._d.valueOf() + p * _),
            d && n.updateOffset(t, y || Z));
        }
        (de.fn = pt.prototype),
          (de.invalid = function ri() {
            return de(NaN);
          });
        var r = ha(1, "add"),
          f = ha(-1, "subtract");
        function i(t) {
          return "string" == typeof t || t instanceof String;
        }
        function m(t) {
          return (
            ue(t) ||
            k(t) ||
            i(t) ||
            L(t) ||
            (function T(t) {
              var a = s(t),
                _ = !1;
              return (
                a &&
                  (_ =
                    0 ===
                    t.filter(function (d) {
                      return !L(d) && i(t);
                    }).length),
                a && _
              );
            })(t) ||
            (function M(t) {
              var p,
                a = e(t) && !c(t),
                _ = !1,
                d = [
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
              for (p = 0; p < d.length; p += 1) _ = _ || u(t, d[p]);
              return a && _;
            })(t) ||
            null == t
          );
        }
        function v(t) {
          var p,
            a = e(t) && !c(t),
            _ = !1,
            d = [
              "sameDay",
              "nextDay",
              "lastDay",
              "nextWeek",
              "lastWeek",
              "sameElse",
            ];
          for (p = 0; p < d.length; p += 1) _ = _ || u(t, d[p]);
          return a && _;
        }
        function ga(t, a) {
          if (t.date() < a.date()) return -ga(a, t);
          var _ = 12 * (a.year() - t.year()) + (a.month() - t.month()),
            d = t.clone().add(_, "months");
          return (
            -(
              _ +
              (a - d < 0
                ? (a - d) / (d - t.clone().add(_ - 1, "months"))
                : (a - d) / (t.clone().add(_ + 1, "months") - d))
            ) || 0
          );
        }
        function wi(t) {
          var a;
          return void 0 === t
            ? this._locale._abbr
            : (null != (a = Te(t)) && (this._locale = a), this);
        }
        (n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
          (n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
        var Ai = ee(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function (t) {
            return void 0 === t ? this.localeData() : this.locale(t);
          }
        );
        function xi() {
          return this._locale;
        }
        var ft = 6e4,
          ya = 60 * ft,
          Si = 3506328 * ya;
        function gt(t, a) {
          return ((t % a) + a) % a;
        }
        function Ci(t, a, _) {
          return t < 100 && t >= 0
            ? new Date(t + 400, a, _) - Si
            : new Date(t, a, _).valueOf();
        }
        function qi(t, a, _) {
          return t < 100 && t >= 0
            ? Date.UTC(t + 400, a, _) - Si
            : Date.UTC(t, a, _);
        }
        function Di(t, a) {
          return a.erasAbbrRegex(t);
        }
        function Zi() {
          var p,
            y,
            t = [],
            a = [],
            _ = [],
            d = [],
            Z = this.eras();
          for (p = 0, y = Z.length; p < y; ++p)
            a.push(ae(Z[p].name)),
              t.push(ae(Z[p].abbr)),
              _.push(ae(Z[p].narrow)),
              d.push(ae(Z[p].name)),
              d.push(ae(Z[p].abbr)),
              d.push(ae(Z[p].narrow));
          (this._erasRegex = new RegExp("^(" + d.join("|") + ")", "i")),
            (this._erasNameRegex = new RegExp("^(" + a.join("|") + ")", "i")),
            (this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i")),
            (this._erasNarrowRegex = new RegExp("^(" + _.join("|") + ")", "i"));
        }
        function Ta(t, a) {
          q(0, [t, t.length], 0, a);
        }
        function Oi(t, a, _, d, p) {
          var y;
          return null == t
            ? Ge(this, d, p).year
            : (a > (y = ye(t, d, p)) && (a = y), qs.call(this, t, a, _, d, p));
        }
        function qs(t, a, _, d, p) {
          var y = ta(t, a, _, d, p),
            Z = Qe(y.year, 0, y.dayOfYear);
          return (
            this.year(Z.getUTCFullYear()),
            this.month(Z.getUTCMonth()),
            this.date(Z.getUTCDate()),
            this
          );
        }
        q("N", 0, 0, "eraAbbr"),
          q("NN", 0, 0, "eraAbbr"),
          q("NNN", 0, 0, "eraAbbr"),
          q("NNNN", 0, 0, "eraName"),
          q("NNNNN", 0, 0, "eraNarrow"),
          q("y", ["y", 1], "yo", "eraYear"),
          q("y", ["yy", 2], 0, "eraYear"),
          q("y", ["yyy", 3], 0, "eraYear"),
          q("y", ["yyyy", 4], 0, "eraYear"),
          x("N", Di),
          x("NN", Di),
          x("NNN", Di),
          x("NNNN", function Zs(t, a) {
            return a.erasNameRegex(t);
          }),
          x("NNNNN", function ks(t, a) {
            return a.erasNarrowRegex(t);
          }),
          I(["N", "NN", "NNN", "NNNN", "NNNNN"], function (t, a, _, d) {
            var p = _._locale.erasParse(t, d, _._strict);
            p ? (b(_).era = p) : (b(_).invalidEra = t);
          }),
          x("y", Ue),
          x("yy", Ue),
          x("yyy", Ue),
          x("yyyy", Ue),
          x("yo", function vs(t, a) {
            return a._eraYearOrdinalRegex || Ue;
          }),
          I(["y", "yy", "yyy", "yyyy"], 0),
          I(["yo"], function (t, a, _, d) {
            var p;
            _._locale._eraYearOrdinalRegex &&
              (p = t.match(_._locale._eraYearOrdinalRegex)),
              (a[0] = _._locale.eraYearOrdinalParse
                ? _._locale.eraYearOrdinalParse(t, p)
                : parseInt(t, 10));
          }),
          q(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
          q(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          Ta("gggg", "weekYear"),
          Ta("ggggg", "weekYear"),
          Ta("GGGG", "isoWeekYear"),
          Ta("GGGGG", "isoWeekYear"),
          K("weekYear", "gg"),
          K("isoWeekYear", "GG"),
          B("weekYear", 1),
          B("isoWeekYear", 1),
          x("G", ot),
          x("g", ot),
          x("GG", F, te),
          x("gg", F, te),
          x("GGGG", bt, vt),
          x("gggg", bt, vt),
          x("GGGGG", rt, st),
          x("ggggg", rt, st),
          ze(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, a, _, d) {
            a[d.substr(0, 2)] = H(t);
          }),
          ze(["gg", "GG"], function (t, a, _, d) {
            a[d] = n.parseTwoDigitYear(t);
          }),
          q("Q", 0, "Qo", "quarter"),
          K("quarter", "Q"),
          B("quarter", 7),
          x("Q", Gt),
          I("Q", function (t, a) {
            a[1] = 3 * (H(t) - 1);
          }),
          q("D", ["DD", 2], "Do", "date"),
          K("date", "D"),
          B("date", 9),
          x("D", F),
          x("DD", F, te),
          x("Do", function (t, a) {
            return t
              ? a._dayOfMonthOrdinalParse || a._ordinalParse
              : a._dayOfMonthOrdinalParseLenient;
          }),
          I(["D", "DD"], 2),
          I("Do", function (t, a) {
            a[2] = H(t.match(F)[0]);
          });
        var Ni = He("Date", !0);
        q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          K("dayOfYear", "DDD"),
          B("dayOfYear", 4),
          x("DDD", Ze),
          x("DDDD", Bt),
          I(["DDD", "DDDD"], function (t, a, _) {
            _._dayOfYear = H(t);
          }),
          q("m", ["mm", 2], 0, "minute"),
          K("minute", "m"),
          B("minute", 14),
          x("m", F),
          x("mm", F, te),
          I(["m", "mm"], 4);
        var Hs = He("Minutes", !1);
        q("s", ["ss", 2], 0, "second"),
          K("second", "s"),
          B("second", 15),
          x("s", F),
          x("ss", F, te),
          I(["s", "ss"], 5);
        var Ie,
          Hi,
          Us = He("Seconds", !1);
        for (
          q("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
          }),
            q(0, ["SS", 2], 0, function () {
              return ~~(this.millisecond() / 10);
            }),
            q(0, ["SSS", 3], 0, "millisecond"),
            q(0, ["SSSS", 4], 0, function () {
              return 10 * this.millisecond();
            }),
            q(0, ["SSSSS", 5], 0, function () {
              return 100 * this.millisecond();
            }),
            q(0, ["SSSSSS", 6], 0, function () {
              return 1e3 * this.millisecond();
            }),
            q(0, ["SSSSSSS", 7], 0, function () {
              return 1e4 * this.millisecond();
            }),
            q(0, ["SSSSSSSS", 8], 0, function () {
              return 1e5 * this.millisecond();
            }),
            q(0, ["SSSSSSSSS", 9], 0, function () {
              return 1e6 * this.millisecond();
            }),
            K("millisecond", "ms"),
            B("millisecond", 16),
            x("S", Ze, Gt),
            x("SS", Ze, te),
            x("SSS", Ze, Bt),
            Ie = "SSSS";
          Ie.length <= 9;
          Ie += "S"
        )
          x(Ie, Ue);
        function Ps(t, a) {
          a[6] = H(1e3 * ("0." + t));
        }
        for (Ie = "S"; Ie.length <= 9; Ie += "S") I(Ie, Ps);
        (Hi = He("Milliseconds", !1)),
          q("z", 0, 0, "zoneAbbr"),
          q("zz", 0, 0, "zoneName");
        var w = Xe.prototype;
        function Ui(t) {
          return t;
        }
        (w.add = r),
          (w.calendar = function we(t, a) {
            1 === arguments.length &&
              (arguments[0]
                ? m(arguments[0])
                  ? ((t = arguments[0]), (a = void 0))
                  : v(arguments[0]) && ((a = arguments[0]), (t = void 0))
                : ((t = void 0), (a = void 0)));
            var _ = t || W(),
              d = It(_, this).startOf("day"),
              p = n.calendarFormat(this, d) || "sameElse",
              y = a && (S(a[p]) ? a[p].call(this, _) : a[p]);
            return this.format(y || this.localeData().calendar(p, this, W(_)));
          }),
          (w.clone = function je() {
            return new Xe(this);
          }),
          (w.diff = function Qi(t, a, _) {
            var d, p, y;
            if (!this.isValid()) return NaN;
            if (!(d = It(t, this)).isValid()) return NaN;
            switch (
              ((p = 6e4 * (d.utcOffset() - this.utcOffset())), (a = ie(a)))
            ) {
              case "year":
                y = ga(this, d) / 12;
                break;
              case "month":
                y = ga(this, d);
                break;
              case "quarter":
                y = ga(this, d) / 3;
                break;
              case "second":
                y = (this - d) / 1e3;
                break;
              case "minute":
                y = (this - d) / 6e4;
                break;
              case "hour":
                y = (this - d) / 36e5;
                break;
              case "day":
                y = (this - d - p) / 864e5;
                break;
              case "week":
                y = (this - d - p) / 6048e5;
                break;
              default:
                y = this - d;
            }
            return _ ? y : se(y);
          }),
          (w.endOf = function ns(t) {
            var a, _;
            if (
              void 0 === (t = ie(t)) ||
              "millisecond" === t ||
              !this.isValid()
            )
              return this;
            switch (((_ = this._isUTC ? qi : Ci), t)) {
              case "year":
                a = _(this.year() + 1, 0, 1) - 1;
                break;
              case "quarter":
                a =
                  _(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                break;
              case "month":
                a = _(this.year(), this.month() + 1, 1) - 1;
                break;
              case "week":
                a =
                  _(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                  ) - 1;
                break;
              case "isoWeek":
                a =
                  _(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                  ) - 1;
                break;
              case "day":
              case "date":
                a = _(this.year(), this.month(), this.date() + 1) - 1;
                break;
              case "hour":
                (a = this._d.valueOf()),
                  (a +=
                    ya -
                    gt(a + (this._isUTC ? 0 : this.utcOffset() * ft), ya) -
                    1);
                break;
              case "minute":
                (a = this._d.valueOf()), (a += ft - gt(a, ft) - 1);
                break;
              case "second":
                (a = this._d.valueOf()), (a += 1e3 - gt(a, 1e3) - 1);
            }
            return this._d.setTime(a), n.updateOffset(this, !0), this;
          }),
          (w.format = function $i(t) {
            t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
            var a = at(this, t);
            return this.localeData().postformat(a);
          }),
          (w.from = function Ki(t, a) {
            return this.isValid() && ((ue(t) && t.isValid()) || W(t).isValid())
              ? de({ to: this, from: t }).locale(this.locale()).humanize(!a)
              : this.localeData().invalidDate();
          }),
          (w.fromNow = function Xi(t) {
            return this.from(W(), t);
          }),
          (w.to = function es(t, a) {
            return this.isValid() && ((ue(t) && t.isValid()) || W(t).isValid())
              ? de({ from: this, to: t }).locale(this.locale()).humanize(!a)
              : this.localeData().invalidDate();
          }),
          (w.toNow = function ts(t) {
            return this.to(W(), t);
          }),
          (w.get = function Oa(t) {
            return S(this[(t = ie(t))]) ? this[t]() : this;
          }),
          (w.invalidAt = function ms() {
            return b(this).overflow;
          }),
          (w.isAfter = function Wt(t, a) {
            var _ = ue(t) ? t : W(t);
            return (
              !(!this.isValid() || !_.isValid()) &&
              ("millisecond" === (a = ie(a) || "millisecond")
                ? this.valueOf() > _.valueOf()
                : _.valueOf() < this.clone().startOf(a).valueOf())
            );
          }),
          (w.isBefore = function Fi(t, a) {
            var _ = ue(t) ? t : W(t);
            return (
              !(!this.isValid() || !_.isValid()) &&
              ("millisecond" === (a = ie(a) || "millisecond")
                ? this.valueOf() < _.valueOf()
                : this.clone().endOf(a).valueOf() < _.valueOf())
            );
          }),
          (w.isBetween = function Wi(t, a, _, d) {
            var p = ue(t) ? t : W(t),
              y = ue(a) ? a : W(a);
            return (
              !!(this.isValid() && p.isValid() && y.isValid()) &&
              ("(" === (d = d || "()")[0]
                ? this.isAfter(p, _)
                : !this.isBefore(p, _)) &&
              (")" === d[1] ? this.isBefore(y, _) : !this.isAfter(y, _))
            );
          }),
          (w.isSame = function Ji(t, a) {
            var d,
              _ = ue(t) ? t : W(t);
            return (
              !(!this.isValid() || !_.isValid()) &&
              ("millisecond" === (a = ie(a) || "millisecond")
                ? this.valueOf() === _.valueOf()
                : ((d = _.valueOf()),
                  this.clone().startOf(a).valueOf() <= d &&
                    d <= this.clone().endOf(a).valueOf()))
            );
          }),
          (w.isSameOrAfter = function Ri(t, a) {
            return this.isSame(t, a) || this.isAfter(t, a);
          }),
          (w.isSameOrBefore = function zi(t, a) {
            return this.isSame(t, a) || this.isBefore(t, a);
          }),
          (w.isValid = function ls() {
            return le(this);
          }),
          (w.lang = Ai),
          (w.locale = wi),
          (w.localeData = xi),
          (w.max = ei),
          (w.min = Xn),
          (w.parsingFlags = function us() {
            return A({}, b(this));
          }),
          (w.set = function Na(t, a) {
            if ("object" == typeof t) {
              var d,
                _ = (function qa(t) {
                  var _,
                    a = [];
                  for (_ in t) u(t, _) && a.push({ unit: _, priority: kt[_] });
                  return (
                    a.sort(function (d, p) {
                      return d.priority - p.priority;
                    }),
                    a
                  );
                })((t = Zt(t)));
              for (d = 0; d < _.length; d++) this[_[d].unit](t[_[d].unit]);
            } else if (S(this[(t = ie(t))])) return this[t](a);
            return this;
          }),
          (w.startOf = function as(t) {
            var a, _;
            if (
              void 0 === (t = ie(t)) ||
              "millisecond" === t ||
              !this.isValid()
            )
              return this;
            switch (((_ = this._isUTC ? qi : Ci), t)) {
              case "year":
                a = _(this.year(), 0, 1);
                break;
              case "quarter":
                a = _(this.year(), this.month() - (this.month() % 3), 1);
                break;
              case "month":
                a = _(this.year(), this.month(), 1);
                break;
              case "week":
                a = _(this.year(), this.month(), this.date() - this.weekday());
                break;
              case "isoWeek":
                a = _(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1)
                );
                break;
              case "day":
              case "date":
                a = _(this.year(), this.month(), this.date());
                break;
              case "hour":
                (a = this._d.valueOf()),
                  (a -= gt(a + (this._isUTC ? 0 : this.utcOffset() * ft), ya));
                break;
              case "minute":
                (a = this._d.valueOf()), (a -= gt(a, ft));
                break;
              case "second":
                (a = this._d.valueOf()), (a -= gt(a, 1e3));
            }
            return this._d.setTime(a), n.updateOffset(this, !0), this;
          }),
          (w.subtract = f),
          (w.toArray = function os() {
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
          (w.toObject = function _s() {
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
          (w.toDate = function rs() {
            return new Date(this.valueOf());
          }),
          (w.toISOString = function Bi(t) {
            if (!this.isValid()) return null;
            var a = !0 !== t,
              _ = a ? this.clone().utc() : this;
            return _.year() < 0 || _.year() > 9999
              ? at(
                  _,
                  a
                    ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                )
              : S(Date.prototype.toISOString)
              ? a
                ? this.toDate().toISOString()
                : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                    .toISOString()
                    .replace("Z", at(_, "Z"))
              : at(
                  _,
                  a
                    ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                );
          }),
          (w.inspect = function Vi() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var _,
              d,
              t = "moment",
              a = "";
            return (
              this.isLocal() ||
                ((t =
                  0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (a = "Z")),
              (_ = "[" + t + '("]'),
              (d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
              this.format(_ + d + "-MM-DD[T]HH:mm:ss.SSS" + a + '[")]')
            );
          }),
          "undefined" != typeof Symbol &&
            null != Symbol.for &&
            (w[Symbol.for("nodejs.util.inspect.custom")] = function () {
              return "Moment<" + this.format() + ">";
            }),
          (w.toJSON = function ds() {
            return this.isValid() ? this.toISOString() : null;
          }),
          (w.toString = function Gi() {
            return this.clone()
              .locale("en")
              .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }),
          (w.unix = function ss() {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (w.valueOf = function is() {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
          }),
          (w.creationData = function cs() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            };
          }),
          (w.eraName = function gs() {
            var t,
              a,
              _,
              d = this.localeData().eras();
            for (t = 0, a = d.length; t < a; ++t)
              if (
                ((_ = this.clone().startOf("day").valueOf()),
                (d[t].since <= _ && _ <= d[t].until) ||
                  (d[t].until <= _ && _ <= d[t].since))
              )
                return d[t].name;
            return "";
          }),
          (w.eraNarrow = function Ms() {
            var t,
              a,
              _,
              d = this.localeData().eras();
            for (t = 0, a = d.length; t < a; ++t)
              if (
                ((_ = this.clone().startOf("day").valueOf()),
                (d[t].since <= _ && _ <= d[t].until) ||
                  (d[t].until <= _ && _ <= d[t].since))
              )
                return d[t].narrow;
            return "";
          }),
          (w.eraAbbr = function ys() {
            var t,
              a,
              _,
              d = this.localeData().eras();
            for (t = 0, a = d.length; t < a; ++t)
              if (
                ((_ = this.clone().startOf("day").valueOf()),
                (d[t].since <= _ && _ <= d[t].until) ||
                  (d[t].until <= _ && _ <= d[t].since))
              )
                return d[t].abbr;
            return "";
          }),
          (w.eraYear = function Ts() {
            var t,
              a,
              _,
              d,
              p = this.localeData().eras();
            for (t = 0, a = p.length; t < a; ++t)
              if (
                ((_ = p[t].since <= p[t].until ? 1 : -1),
                (d = this.clone().startOf("day").valueOf()),
                (p[t].since <= d && d <= p[t].until) ||
                  (p[t].until <= d && d <= p[t].since))
              )
                return (this.year() - n(p[t].since).year()) * _ + p[t].offset;
            return this.year();
          }),
          (w.year = ea),
          (w.isLeapYear = function Xa() {
            return nt(this.year());
          }),
          (w.weekYear = function bs(t) {
            return Oi.call(
              this,
              t,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }),
          (w.isoWeekYear = function ws(t) {
            return Oi.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
          }),
          (w.quarter = w.quarters =
            function Os(t) {
              return null == t
                ? Math.ceil((this.month() + 1) / 3)
                : this.month(3 * (t - 1) + (this.month() % 3));
            }),
          (w.month = Xt),
          (w.daysInMonth = function Va() {
            return lt(this.year(), this.month());
          }),
          (w.week = w.weeks =
            function rn(t) {
              var a = this.localeData().week(this);
              return null == t ? a : this.add(7 * (t - a), "d");
            }),
          (w.isoWeek = w.isoWeeks =
            function on(t) {
              var a = Ge(this, 1, 4).week;
              return null == t ? a : this.add(7 * (t - a), "d");
            }),
          (w.weeksInYear = function Ss() {
            var t = this.localeData()._week;
            return ye(this.year(), t.dow, t.doy);
          }),
          (w.weeksInWeekYear = function Cs() {
            var t = this.localeData()._week;
            return ye(this.weekYear(), t.dow, t.doy);
          }),
          (w.isoWeeksInYear = function As() {
            return ye(this.year(), 1, 4);
          }),
          (w.isoWeeksInISOWeekYear = function xs() {
            return ye(this.isoWeekYear(), 1, 4);
          }),
          (w.date = Ni),
          (w.day = w.days =
            function Tn(t) {
              if (!this.isValid()) return null != t ? this : NaN;
              var a = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
              return null != t
                ? ((t = (function _n(t, a) {
                    return "string" != typeof t
                      ? t
                      : isNaN(t)
                      ? "number" == typeof (t = a.weekdaysParse(t))
                        ? t
                        : null
                      : parseInt(t, 10);
                  })(t, this.localeData())),
                  this.add(t - a, "d"))
                : a;
            }),
          (w.weekday = function Ln(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var a = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? a : this.add(t - a, "d");
          }),
          (w.isoWeekday = function Yn(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
              var a = (function dn(t, a) {
                return "string" == typeof t
                  ? a.weekdaysParse(t) % 7 || 7
                  : isNaN(t)
                  ? null
                  : t;
              })(t, this.localeData());
              return this.day(this.day() % 7 ? a : a - 7);
            }
            return this.day() || 7;
          }),
          (w.dayOfYear = function Ns(t) {
            var a =
              Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                  864e5
              ) + 1;
            return null == t ? a : this.add(t - a, "d");
          }),
          (w.hour = w.hours = An),
          (w.minute = w.minutes = Hs),
          (w.second = w.seconds = Us),
          (w.millisecond = w.milliseconds = Hi),
          (w.utcOffset = function di(t, a, _) {
            var p,
              d = this._offset || 0;
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
              if ("string" == typeof t) {
                if (null === (t = jt(_t, t))) return this;
              } else Math.abs(t) < 16 && !_ && (t *= 60);
              return (
                !this._isUTC && a && (p = Ft(this)),
                (this._offset = t),
                (this._isUTC = !0),
                null != p && this.add(p, "m"),
                d !== t &&
                  (!a || this._changeInProgress
                    ? fa(this, de(t - d, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      n.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              );
            }
            return this._isUTC ? d : Ft(this);
          }),
          (w.utc = function ui(t) {
            return this.utcOffset(0, t);
          }),
          (w.local = function mi(t) {
            return (
              this._isUTC &&
                (this.utcOffset(0, t),
                (this._isUTC = !1),
                t && this.subtract(Ft(this), "m")),
              this
            );
          }),
          (w.parseZone = function ci() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
              var t = jt(Ha, this._i);
              null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
            }
            return this;
          }),
          (w.hasAlignedHourOffset = function pi(t) {
            return (
              !!this.isValid() &&
              ((t = t ? W(t).utcOffset() : 0), (this.utcOffset() - t) % 60 == 0)
            );
          }),
          (w.isDST = function hi() {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            );
          }),
          (w.isLocal = function gi() {
            return !!this.isValid() && !this._isUTC;
          }),
          (w.isUtcOffset = function Mi() {
            return !!this.isValid() && this._isUTC;
          }),
          (w.isUtc = pa),
          (w.isUTC = pa),
          (w.zoneAbbr = function Es() {
            return this._isUTC ? "UTC" : "";
          }),
          (w.zoneName = function js() {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }),
          (w.dates = ee("dates accessor is deprecated. Use date instead.", Ni)),
          (w.months = ee(
            "months accessor is deprecated. Use month instead",
            Xt
          )),
          (w.years = ee("years accessor is deprecated. Use year instead", ea)),
          (w.zone = ee(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            function li(t, a) {
              return null != t
                ? ("string" != typeof t && (t = -t), this.utcOffset(t, a), this)
                : -this.utcOffset();
            }
          )),
          (w.isDSTShifted = ee(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            function fi() {
              if (!g(this._isDSTShifted)) return this._isDSTShifted;
              var a,
                t = {};
              return (
                Jt(t, this),
                (t = la(t))._a
                  ? ((a = t._isUTC ? N(t._a) : W(t._a)),
                    (this._isDSTShifted =
                      this.isValid() &&
                      (function oi(t, a, _) {
                        var Z,
                          d = Math.min(t.length, a.length),
                          p = Math.abs(t.length - a.length),
                          y = 0;
                        for (Z = 0; Z < d; Z++)
                          ((_ && t[Z] !== a[Z]) ||
                            (!_ && H(t[Z]) !== H(a[Z]))) &&
                            y++;
                        return y + p;
                      })(t._a, a.toArray()) > 0))
                  : (this._isDSTShifted = !1),
                this._isDSTShifted
              );
            }
          ));
        var E = fe.prototype;
        function La(t, a, _, d) {
          var p = Te(),
            y = N().set(d, a);
          return p[_](y, t);
        }
        function Pi(t, a, _) {
          if ((L(t) && ((a = t), (t = void 0)), (t = t || ""), null != a))
            return La(t, a, _, "month");
          var d,
            p = [];
          for (d = 0; d < 12; d++) p[d] = La(t, d, _, "month");
          return p;
        }
        function ki(t, a, _, d) {
          "boolean" == typeof t
            ? (L(a) && ((_ = a), (a = void 0)), (a = a || ""))
            : ((_ = a = t),
              (t = !1),
              L(a) && ((_ = a), (a = void 0)),
              (a = a || ""));
          var Z,
            p = Te(),
            y = t ? p._week.dow : 0,
            O = [];
          if (null != _) return La(a, (_ + y) % 7, d, "day");
          for (Z = 0; Z < 7; Z++) O[Z] = La(a, (Z + y) % 7, d, "day");
          return O;
        }
        (E.calendar = function Za(t, a, _) {
          var d = this._calendar[t] || this._calendar.sameElse;
          return S(d) ? d.call(a, _) : d;
        }),
          (E.longDateFormat = function wa(t) {
            var a = this._longDateFormat[t],
              _ = this._longDateFormat[t.toUpperCase()];
            return a || !_
              ? a
              : ((this._longDateFormat[t] = _.match(Lt)
                  .map(function (d) {
                    return "MMMM" === d ||
                      "MM" === d ||
                      "DD" === d ||
                      "dddd" === d
                      ? d.slice(1)
                      : d;
                  })
                  .join("")),
                this._longDateFormat[t]);
          }),
          (E.invalidDate = function oe() {
            return this._invalidDate;
          }),
          (E.ordinal = function Aa(t) {
            return this._ordinal.replace("%d", t);
          }),
          (E.preparse = Ui),
          (E.postformat = Ui),
          (E.relativeTime = function Sa(t, a, _, d) {
            var p = this._relativeTime[_];
            return S(p) ? p(t, a, _, d) : p.replace(/%d/i, t);
          }),
          (E.pastFuture = function Ca(t, a) {
            var _ = this._relativeTime[t > 0 ? "future" : "past"];
            return S(_) ? _(a) : _.replace(/%s/i, a);
          }),
          (E.set = function me(t) {
            var a, _;
            for (_ in t)
              u(t, _) && (S((a = t[_])) ? (this[_] = a) : (this["_" + _] = a));
            (this._config = t),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  "|" +
                  /\d{1,2}/.source
              ));
          }),
          (E.eras = function ps(t, a) {
            var _,
              d,
              p,
              y = this._eras || Te("en")._eras;
            for (_ = 0, d = y.length; _ < d; ++_)
              switch (
                ("string" == typeof y[_].since &&
                  ((p = n(y[_].since).startOf("day")),
                  (y[_].since = p.valueOf())),
                typeof y[_].until)
              ) {
                case "undefined":
                  y[_].until = 1 / 0;
                  break;
                case "string":
                  (p = n(y[_].until).startOf("day").valueOf()),
                    (y[_].until = p.valueOf());
              }
            return y;
          }),
          (E.erasParse = function hs(t, a, _) {
            var d,
              p,
              Z,
              O,
              U,
              y = this.eras();
            for (t = t.toUpperCase(), d = 0, p = y.length; d < p; ++d)
              if (
                ((Z = y[d].name.toUpperCase()),
                (O = y[d].abbr.toUpperCase()),
                (U = y[d].narrow.toUpperCase()),
                _)
              )
                switch (a) {
                  case "N":
                  case "NN":
                  case "NNN":
                    if (O === t) return y[d];
                    break;
                  case "NNNN":
                    if (Z === t) return y[d];
                    break;
                  case "NNNNN":
                    if (U === t) return y[d];
                }
              else if ([Z, O, U].indexOf(t) >= 0) return y[d];
          }),
          (E.erasConvertYear = function fs(t, a) {
            var _ = t.since <= t.until ? 1 : -1;
            return void 0 === a
              ? n(t.since).year()
              : n(t.since).year() + (a - t.offset) * _;
          }),
          (E.erasAbbrRegex = function Ys(t) {
            return (
              u(this, "_erasAbbrRegex") || Zi.call(this),
              t ? this._erasAbbrRegex : this._erasRegex
            );
          }),
          (E.erasNameRegex = function Ls(t) {
            return (
              u(this, "_erasNameRegex") || Zi.call(this),
              t ? this._erasNameRegex : this._erasRegex
            );
          }),
          (E.erasNarrowRegex = function Ds(t) {
            return (
              u(this, "_erasNarrowRegex") || Zi.call(this),
              t ? this._erasNarrowRegex : this._erasRegex
            );
          }),
          (E.months = function Qa(t, a) {
            return t
              ? s(this._months)
                ? this._months[t.month()]
                : this._months[
                    (this._months.isFormat || $t).test(a)
                      ? "format"
                      : "standalone"
                  ][t.month()]
              : s(this._months)
              ? this._months
              : this._months.standalone;
          }),
          (E.monthsShort = function Ga(t, a) {
            return t
              ? s(this._monthsShort)
                ? this._monthsShort[t.month()]
                : this._monthsShort[$t.test(a) ? "format" : "standalone"][
                    t.month()
                  ]
              : s(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
          }),
          (E.monthsParse = function At(t, a, _) {
            var d, p, y;
            if (this._monthsParseExact) return Ba.call(this, t, a, _);
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                d = 0;
              d < 12;
              d++
            ) {
              if (
                ((p = N([2e3, d])),
                _ &&
                  !this._longMonthsParse[d] &&
                  ((this._longMonthsParse[d] = new RegExp(
                    "^" + this.months(p, "").replace(".", "") + "$",
                    "i"
                  )),
                  (this._shortMonthsParse[d] = new RegExp(
                    "^" + this.monthsShort(p, "").replace(".", "") + "$",
                    "i"
                  ))),
                !_ &&
                  !this._monthsParse[d] &&
                  ((y =
                    "^" + this.months(p, "") + "|^" + this.monthsShort(p, "")),
                  (this._monthsParse[d] = new RegExp(y.replace(".", ""), "i"))),
                _ && "MMMM" === a && this._longMonthsParse[d].test(t))
              )
                return d;
              if (_ && "MMM" === a && this._shortMonthsParse[d].test(t))
                return d;
              if (!_ && this._monthsParse[d].test(t)) return d;
            }
          }),
          (E.monthsRegex = function Ka(t) {
            return this._monthsParseExact
              ? (u(this, "_monthsRegex") || xt.call(this),
                t ? this._monthsStrictRegex : this._monthsRegex)
              : (u(this, "_monthsRegex") || (this._monthsRegex = za),
                this._monthsStrictRegex && t
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
          }),
          (E.monthsShortRegex = function $a(t) {
            return this._monthsParseExact
              ? (u(this, "_monthsRegex") || xt.call(this),
                t ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = Ra),
                this._monthsShortStrictRegex && t
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
          }),
          (E.week = function tn(t) {
            return Ge(t, this._week.dow, this._week.doy).week;
          }),
          (E.firstDayOfYear = function sn() {
            return this._week.doy;
          }),
          (E.firstDayOfWeek = function nn() {
            return this._week.dow;
          }),
          (E.weekdays = function hn(t, a) {
            var _ = s(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                  t && !0 !== t && this._weekdays.isFormat.test(a)
                    ? "format"
                    : "standalone"
                ];
            return !0 === t ? St(_, this._week.dow) : t ? _[t.day()] : _;
          }),
          (E.weekdaysMin = function gn(t) {
            return !0 === t
              ? St(this._weekdaysMin, this._week.dow)
              : t
              ? this._weekdaysMin[t.day()]
              : this._weekdaysMin;
          }),
          (E.weekdaysShort = function fn(t) {
            return !0 === t
              ? St(this._weekdaysShort, this._week.dow)
              : t
              ? this._weekdaysShort[t.day()]
              : this._weekdaysShort;
          }),
          (E.weekdaysParse = function yn(t, a, _) {
            var d, p, y;
            if (this._weekdaysParseExact) return Mn.call(this, t, a, _);
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                d = 0;
              d < 7;
              d++
            ) {
              if (
                ((p = N([2e3, 1]).day(d)),
                _ &&
                  !this._fullWeekdaysParse[d] &&
                  ((this._fullWeekdaysParse[d] = new RegExp(
                    "^" + this.weekdays(p, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._shortWeekdaysParse[d] = new RegExp(
                    "^" + this.weekdaysShort(p, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._minWeekdaysParse[d] = new RegExp(
                    "^" + this.weekdaysMin(p, "").replace(".", "\\.?") + "$",
                    "i"
                  ))),
                this._weekdaysParse[d] ||
                  ((y =
                    "^" +
                    this.weekdays(p, "") +
                    "|^" +
                    this.weekdaysShort(p, "") +
                    "|^" +
                    this.weekdaysMin(p, "")),
                  (this._weekdaysParse[d] = new RegExp(
                    y.replace(".", ""),
                    "i"
                  ))),
                _ && "dddd" === a && this._fullWeekdaysParse[d].test(t))
              )
                return d;
              if (_ && "ddd" === a && this._shortWeekdaysParse[d].test(t))
                return d;
              if (_ && "dd" === a && this._minWeekdaysParse[d].test(t))
                return d;
              if (!_ && this._weekdaysParse[d].test(t)) return d;
            }
          }),
          (E.weekdaysRegex = function Dn(t) {
            return this._weekdaysParseExact
              ? (u(this, "_weekdaysRegex") || Ct.call(this),
                t ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = mn),
                this._weekdaysStrictRegex && t
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
          }),
          (E.weekdaysShortRegex = function Zn(t) {
            return this._weekdaysParseExact
              ? (u(this, "_weekdaysRegex") || Ct.call(this),
                t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (u(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = cn),
                this._weekdaysShortStrictRegex && t
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
          }),
          (E.weekdaysMinRegex = function kn(t) {
            return this._weekdaysParseExact
              ? (u(this, "_weekdaysRegex") || Ct.call(this),
                t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = pn),
                this._weekdaysMinStrictRegex && t
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
          }),
          (E.isPM = function bn(t) {
            return "p" === (t + "").toLowerCase().charAt(0);
          }),
          (E.meridiem = function xn(t, a, _) {
            return t > 11 ? (_ ? "pm" : "PM") : _ ? "am" : "AM";
          }),
          Ye("en", {
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
              var a = t % 10;
              return (
                t +
                (1 === H((t % 100) / 10)
                  ? "th"
                  : 1 === a
                  ? "st"
                  : 2 === a
                  ? "nd"
                  : 3 === a
                  ? "rd"
                  : "th")
              );
            },
          }),
          (n.lang = ee(
            "moment.lang is deprecated. Use moment.locale instead.",
            Ye
          )),
          (n.langData = ee(
            "moment.langData is deprecated. Use moment.localeData instead.",
            Te
          ));
        var Ae = Math.abs;
        function Ei(t, a, _, d) {
          var p = de(a, _);
          return (
            (t._milliseconds += d * p._milliseconds),
            (t._days += d * p._days),
            (t._months += d * p._months),
            t._bubble()
          );
        }
        function ji(t) {
          return t < 0 ? Math.floor(t) : Math.ceil(t);
        }
        function Ii(t) {
          return (4800 * t) / 146097;
        }
        function vi(t) {
          return (146097 * t) / 4800;
        }
        function xe(t) {
          return function () {
            return this.as(t);
          };
        }
        var er = xe("ms"),
          tr = xe("s"),
          ar = xe("m"),
          nr = xe("h"),
          ir = xe("d"),
          sr = xe("w"),
          rr = xe("M"),
          or = xe("Q"),
          _r = xe("y");
        function Ke(t) {
          return function () {
            return this.isValid() ? this._data[t] : NaN;
          };
        }
        var ur = Ke("milliseconds"),
          mr = Ke("seconds"),
          cr = Ke("minutes"),
          pr = Ke("hours"),
          hr = Ke("days"),
          fr = Ke("months"),
          gr = Ke("years");
        var Se = Math.round,
          Mt = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
        function yr(t, a, _, d, p) {
          return p.relativeTime(a || 1, !!_, t, d);
        }
        var bi = Math.abs;
        function yt(t) {
          return (t > 0) - (t < 0) || +t;
        }
        function Ya() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var d,
            p,
            y,
            Z,
            U,
            R,
            De,
            Ce,
            t = bi(this._milliseconds) / 1e3,
            a = bi(this._days),
            _ = bi(this._months),
            O = this.asSeconds();
          return O
            ? ((d = se(t / 60)),
              (p = se(d / 60)),
              (t %= 60),
              (d %= 60),
              (y = se(_ / 12)),
              (_ %= 12),
              (Z = t ? t.toFixed(3).replace(/\.?0+$/, "") : ""),
              (U = O < 0 ? "-" : ""),
              (R = yt(this._months) !== yt(O) ? "-" : ""),
              (De = yt(this._days) !== yt(O) ? "-" : ""),
              (Ce = yt(this._milliseconds) !== yt(O) ? "-" : ""),
              U +
                "P" +
                (y ? R + y + "Y" : "") +
                (_ ? R + _ + "M" : "") +
                (a ? De + a + "D" : "") +
                (p || d || t ? "T" : "") +
                (p ? Ce + p + "H" : "") +
                (d ? Ce + d + "M" : "") +
                (t ? Ce + Z + "S" : ""))
            : "P0D";
        }
        var P = pt.prototype;
        return (
          (P.isValid = function si() {
            return this._isValid;
          }),
          (P.abs = function Gs() {
            var t = this._data;
            return (
              (this._milliseconds = Ae(this._milliseconds)),
              (this._days = Ae(this._days)),
              (this._months = Ae(this._months)),
              (t.milliseconds = Ae(t.milliseconds)),
              (t.seconds = Ae(t.seconds)),
              (t.minutes = Ae(t.minutes)),
              (t.hours = Ae(t.hours)),
              (t.months = Ae(t.months)),
              (t.years = Ae(t.years)),
              this
            );
          }),
          (P.add = function Bs(t, a) {
            return Ei(this, t, a, 1);
          }),
          (P.subtract = function Vs(t, a) {
            return Ei(this, t, a, -1);
          }),
          (P.as = function Ks(t) {
            if (!this.isValid()) return NaN;
            var a,
              _,
              d = this._milliseconds;
            if ("month" === (t = ie(t)) || "quarter" === t || "year" === t)
              switch (
                ((a = this._days + d / 864e5), (_ = this._months + Ii(a)), t)
              ) {
                case "month":
                  return _;
                case "quarter":
                  return _ / 3;
                case "year":
                  return _ / 12;
              }
            else
              switch (((a = this._days + Math.round(vi(this._months))), t)) {
                case "week":
                  return a / 7 + d / 6048e5;
                case "day":
                  return a + d / 864e5;
                case "hour":
                  return 24 * a + d / 36e5;
                case "minute":
                  return 1440 * a + d / 6e4;
                case "second":
                  return 86400 * a + d / 1e3;
                case "millisecond":
                  return Math.floor(864e5 * a) + d;
                default:
                  throw new Error("Unknown unit " + t);
              }
          }),
          (P.asMilliseconds = er),
          (P.asSeconds = tr),
          (P.asMinutes = ar),
          (P.asHours = nr),
          (P.asDays = ir),
          (P.asWeeks = sr),
          (P.asMonths = rr),
          (P.asQuarters = or),
          (P.asYears = _r),
          (P.valueOf = function Xs() {
            return this.isValid()
              ? this._milliseconds +
                  864e5 * this._days +
                  (this._months % 12) * 2592e6 +
                  31536e6 * H(this._months / 12)
              : NaN;
          }),
          (P._bubble = function $s() {
            var p,
              y,
              Z,
              O,
              U,
              t = this._milliseconds,
              a = this._days,
              _ = this._months,
              d = this._data;
            return (
              (t >= 0 && a >= 0 && _ >= 0) ||
                (t <= 0 && a <= 0 && _ <= 0) ||
                ((t += 864e5 * ji(vi(_) + a)), (a = 0), (_ = 0)),
              (d.milliseconds = t % 1e3),
              (p = se(t / 1e3)),
              (d.seconds = p % 60),
              (y = se(p / 60)),
              (d.minutes = y % 60),
              (Z = se(y / 60)),
              (d.hours = Z % 24),
              (a += se(Z / 24)),
              (_ += U = se(Ii(a))),
              (a -= ji(vi(U))),
              (O = se(_ / 12)),
              (_ %= 12),
              (d.days = a),
              (d.months = _),
              (d.years = O),
              this
            );
          }),
          (P.clone = function dr() {
            return de(this);
          }),
          (P.get = function lr(t) {
            return (t = ie(t)), this.isValid() ? this[t + "s"]() : NaN;
          }),
          (P.milliseconds = ur),
          (P.seconds = mr),
          (P.minutes = cr),
          (P.hours = pr),
          (P.days = hr),
          (P.weeks = function Mr() {
            return se(this.days() / 7);
          }),
          (P.months = fr),
          (P.years = gr),
          (P.humanize = function Dr(t, a) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var p,
              y,
              _ = !1,
              d = Mt;
            return (
              "object" == typeof t && ((a = t), (t = !1)),
              "boolean" == typeof t && (_ = t),
              "object" == typeof a &&
                ((d = Object.assign({}, Mt, a)),
                null != a.s && null == a.ss && (d.ss = a.s - 1)),
              (y = (function Tr(t, a, _, d) {
                var p = de(t).abs(),
                  y = Se(p.as("s")),
                  Z = Se(p.as("m")),
                  O = Se(p.as("h")),
                  U = Se(p.as("d")),
                  R = Se(p.as("M")),
                  De = Se(p.as("w")),
                  Ce = Se(p.as("y")),
                  Fe =
                    (y <= _.ss && ["s", y]) ||
                    (y < _.s && ["ss", y]) ||
                    (Z <= 1 && ["m"]) ||
                    (Z < _.m && ["mm", Z]) ||
                    (O <= 1 && ["h"]) ||
                    (O < _.h && ["hh", O]) ||
                    (U <= 1 && ["d"]) ||
                    (U < _.d && ["dd", U]);
                return (
                  null != _.w &&
                    (Fe = Fe || (De <= 1 && ["w"]) || (De < _.w && ["ww", De])),
                  ((Fe = Fe ||
                    (R <= 1 && ["M"]) ||
                    (R < _.M && ["MM", R]) ||
                    (Ce <= 1 && ["y"]) || ["yy", Ce])[2] = a),
                  (Fe[3] = +t > 0),
                  (Fe[4] = d),
                  yr.apply(null, Fe)
                );
              })(this, !_, d, (p = this.localeData()))),
              _ && (y = p.pastFuture(+this, y)),
              p.postformat(y)
            );
          }),
          (P.toISOString = Ya),
          (P.toString = Ya),
          (P.toJSON = Ya),
          (P.locale = wi),
          (P.localeData = xi),
          (P.toIsoString = ee(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            Ya
          )),
          (P.lang = Ai),
          q("X", 0, 0, "unix"),
          q("x", 0, 0, "valueOf"),
          x("x", ot),
          x("X", /[+-]?\d+(\.\d{1,3})?/),
          I("X", function (t, a, _) {
            _._d = new Date(1e3 * parseFloat(t));
          }),
          I("x", function (t, a, _) {
            _._d = new Date(H(t));
          }),
          (n.version = "2.29.1"),
          (function o(t) {
            l = t;
          })(W),
          (n.fn = w),
          (n.min = function ti() {
            return ma("isBefore", [].slice.call(arguments, 0));
          }),
          (n.max = function ai() {
            return ma("isAfter", [].slice.call(arguments, 0));
          }),
          (n.now = function () {
            return Date.now ? Date.now() : +new Date();
          }),
          (n.utc = N),
          (n.unix = function Is(t) {
            return W(1e3 * t);
          }),
          (n.months = function Ws(t, a) {
            return Pi(t, a, "months");
          }),
          (n.isDate = k),
          (n.locale = Ye),
          (n.invalid = qe),
          (n.duration = de),
          (n.isMoment = ue),
          (n.weekdays = function Rs(t, a, _) {
            return ki(t, a, _, "weekdays");
          }),
          (n.parseZone = function Fs() {
            return W.apply(null, arguments).parseZone();
          }),
          (n.localeData = Te),
          (n.isDuration = ht),
          (n.monthsShort = function Js(t, a) {
            return Pi(t, a, "monthsShort");
          }),
          (n.weekdaysMin = function Qs(t, a, _) {
            return ki(t, a, _, "weekdaysMin");
          }),
          (n.defineLocale = Ot),
          (n.updateLocale = function qn(t, a) {
            if (null != a) {
              var _,
                d,
                p = sa;
              null != J[t] && null != J[t].parentLocale
                ? J[t].set(z(J[t]._config, a))
                : (null != (d = mt(t)) && (p = d._config),
                  (a = z(p, a)),
                  null == d && (a.abbr = t),
                  ((_ = new fe(a)).parentLocale = J[t]),
                  (J[t] = _)),
                Ye(t);
            } else
              null != J[t] &&
                (null != J[t].parentLocale
                  ? ((J[t] = J[t].parentLocale), t === Ye() && Ye(t))
                  : null != J[t] && delete J[t]);
            return J[t];
          }),
          (n.locales = function On() {
            return et(J);
          }),
          (n.weekdaysShort = function zs(t, a, _) {
            return ki(t, a, _, "weekdaysShort");
          }),
          (n.normalizeUnits = ie),
          (n.relativeTimeRounding = function Lr(t) {
            return void 0 === t ? Se : "function" == typeof t && ((Se = t), !0);
          }),
          (n.relativeTimeThreshold = function Yr(t, a) {
            return (
              void 0 !== Mt[t] &&
              (void 0 === a
                ? Mt[t]
                : ((Mt[t] = a), "s" === t && (Mt.ss = a - 1), !0))
            );
          }),
          (n.calendarFormat = function be(t, a) {
            var _ = t.diff(a, "days", !0);
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
          (n.prototype = w),
          (n.HTML5_FMT = {
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
          n
        );
      })();
    },
    6700: (Y, D, h) => {
      var l = {
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
      function n(s) {
        var e = o(s);
        return h(e);
      }
      function o(s) {
        if (!h.o(l, s)) {
          var e = new Error("Cannot find module '" + s + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return l[s];
      }
      (n.keys = function () {
        return Object.keys(l);
      }),
        (n.resolve = o),
        (Y.exports = n),
        (n.id = 6700);
    },
  },
]);
