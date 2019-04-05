using Litium.FieldFramework;
using Litium.Runtime.DependencyInjection;

namespace Litium.Accelerator.FieldTypes.ColorField
{
    [Service(Name = "TriStateBoolean")]
    internal class TriStateBooleanFieldTypeConverter : FieldTypeConverterBase
    {
        public TriStateBooleanFieldTypeConverter(FieldTypeMetadataService fieldTypeMetadataService) : base(fieldTypeMetadataService, "TriStateBoolean")
        { }

        public override string EditComponentName => "FieldTypeBag#FieldEditorTriStateCheckbox";

        public override string SettingsComponentName => string.Empty;
    }
}
