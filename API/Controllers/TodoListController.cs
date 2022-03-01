using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoListController : ControllerBase
    {
        private readonly TodoListDBContext _context;

        public TodoListController(TodoListDBContext context)
        {
            _context = context;
        }

        // GET: api/TodoList
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DTodoList>>> GetDTodoLists()
        {
            return await _context.DTodoLists.ToListAsync();
        }

        // GET: api/TodoList/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DTodoList>> GetDTodoList(int id)
        {
            var dTodoList = await _context.DTodoLists.FindAsync(id);

            if (dTodoList == null)
            {
                return NotFound();
            }

            return dTodoList;
        }

        // PUT: api/TodoList/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDTodoList(int id, DTodoList dTodoList)
        {
            if (id != dTodoList.Id)
            {
                return BadRequest();
            }

            _context.Entry(dTodoList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DTodoListExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TodoList
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DTodoList>> PostDTodoList(DTodoList dTodoList)
        {
            _context.DTodoLists.Add(dTodoList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDTodoList", new { id = dTodoList.Id }, dTodoList);
        }

        // DELETE: api/TodoList/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDTodoList(int id)
        {
            var dTodoList = await _context.DTodoLists.FindAsync(id);
            if (dTodoList == null)
            {
                return NotFound();
            }

            _context.DTodoLists.Remove(dTodoList);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DTodoListExists(int id)
        {
            return _context.DTodoLists.Any(e => e.Id == id);
        }
    }
}
