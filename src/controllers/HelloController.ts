import { ApiController, HttpGet, HttpResponse, RouteParam } from "nubie";

@ApiController()
class HelloController {
  @HttpGet("/:name")
  public async sayHiAsync(@RouteParam("name") name: string) {
    return HttpResponse.Ok({
      message: `Hello ${name}, Thanks For Using Nubie :)`,
    });
  }
}
