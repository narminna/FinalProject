using Microsoft.AspNetCore.Mvc;

namespace ExploreBakubk.Controllers.Admin
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
