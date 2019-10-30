using Litium.Owin.Lifecycle;
using Litium.Studio.Packages;
using System.Collections.Generic;
using System.Reflection;

namespace Litium.Accelerator.FieldTypes
{
    public class ExtensionsModuleRouterInitTask : IInitTask
    {
        public void Init(IEnumerable<Assembly> assemblies)
        {
            PackageManager.Register("~/Litium/Client/Scripts", GetType().Assembly);
        }
    }
}
