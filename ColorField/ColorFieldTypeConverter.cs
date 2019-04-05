using Litium.FieldFramework;
using Litium.Runtime.DependencyInjection;

namespace Litium.Accelerator.FieldTypes.ColorField
{
    [Service(Name = "ColorField")]
    internal class ColorFieldTypeConverter : FieldTypeConverterBase
    {
        public ColorFieldTypeConverter(FieldTypeMetadataService fieldTypeMetadataService) : base(fieldTypeMetadataService, "ColorField")
        { }

        public override string EditComponentName => "FieldTypeBag#FieldEditorColor";

        public override string SettingsComponentName => string.Empty;
    }
}
