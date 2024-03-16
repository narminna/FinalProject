using Microsoft.AspNetCore.Mvc;

namespace ExploreBakubk.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult About()
        {
            return View("~/Views/html/About.cshtml");
        }

        public ViewResult Login()
        {
            return View("~/Views/html/Login.cshtml");
        }

        public ViewResult Main()
        {
            return View("~/Views/html/Main.cshtml");
        }

        public ViewResult Fun()
        {
            return View("~/Views/html/Fun.cshtml");
        }
    }
}
