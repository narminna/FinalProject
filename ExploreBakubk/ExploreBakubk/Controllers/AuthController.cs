using Microsoft.AspNetCore.Mvc;
using ExplrDbContext;
using System.Linq;

namespace ExploreBakubk.Controllers.User
{
    public class AuthController : Controller
    {
        private readonly ExplrDbContext.ExplrDbContext _context;

        public AuthController(ExplrDbContext.ExplrDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View("~/Views/html/Login.cshtml");
        }

        [HttpPost]
        public IActionResult Login(string email, string password)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == email);

            if (user == null || user.Password != password)
            {
                ModelState.AddModelError(string.Empty, "Invalid email or password.");
                return View("~/Views/html/Login.cshtml");
            }

            return RedirectToAction("Dashboard", "User");
        }
    }
}
