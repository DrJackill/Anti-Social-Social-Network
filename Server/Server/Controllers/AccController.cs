using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.AContext;
using Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccController : ControllerBase
    {
        readonly AccContext AccDetails;
        public AccController(AccContext employeeContext)
        {
            AccDetails = employeeContext;
        }

        [HttpGet]
        public IEnumerable<Account> Get()
        {
            var data = AccDetails.Account.ToList();
            return data;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Account obj)
        {
            var data = AccDetails.Account.Add(obj);
            AccDetails.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Account obj)
        {
            var data = AccDetails.Account.Update(obj);
            AccDetails.SaveChanges();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var data = AccDetails.Account.Where(a => a.Id == id).FirstOrDefault();
            AccDetails.Account.Remove(data);
            AccDetails.SaveChanges();
            return Ok();

        }

        [HttpGet("{search}")]
        public IActionResult Check(string email,string password = null)
        {
            var data = AccDetails.Account.Where(a => a.Email == email).FirstOrDefault();
            if (password == null)
            {
                if (data is null)
                {
                    return NotFound();
                }
                return Ok();
            }
            else
            {
                if (!(data is null) && data.PhoneNumber == password)
                {
                    return Ok();
                }
                return NotFound();
            }
            
            
        }
    }
}
