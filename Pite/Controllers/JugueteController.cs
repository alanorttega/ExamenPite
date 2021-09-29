using Pite.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Pite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JugueteController : ControllerBase
    {
        private readonly DBContext _context;

        public JugueteController(DBContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> GetListaJuguetes()
        {
            try
            {
                var listaJuguetes = await _context.Juguete.ToListAsync();

                return Ok(listaJuguetes);

            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetJuguete(int id)
        {
            try
            {

                var Juguete = await _context.Juguete.FindAsync(id);

                if(Juguete == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(Juguete);
                }
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AgregarJuguete([FromBody] Juguete Juguete)
        {
            try
            {

                _context.Add(Juguete);
                await _context.SaveChangesAsync();

                return Ok(Juguete);

            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditarJuguete(int id, [FromBody] Juguete Juguete)
        {
            try
            {

                if(id != Juguete.id)
                {
                    return BadRequest();
                }

                _context.Update(Juguete);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Comentario Actualizado Exitosamente" });

            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarJuguete(int id)
        {
            try
            {

                var Juguete = await _context.Juguete.FindAsync(id);

                if(Juguete == null)
                {
                    return NotFound();
                }

                _context.Juguete.Remove(Juguete);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Comentario Eliminado Exitosamente" });

            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
