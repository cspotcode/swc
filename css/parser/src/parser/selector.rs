use crate::{PResult, Parser};
use swc_css_ast::*;

impl Parser<'_> {
    pub(super) fn parse_selectors(&mut self) -> PResult<Vec<Box<Selector>>> {
        let mut selectors = vec![];

        loop {
            let selector = self.parse_selector()?;
            selectors.push(selector);

            if is!(self, "{") {
                break;
            }

            expect!(self, ",");
        }

        Ok(selectors)
    }

    pub(super) fn parse_selector(&mut self) -> PResult<Box<Selector>> {
        let start = self.i.cur_pos();
        let simple = self.parse_simple_selector()?;
        let components = vec![SelectorComponent::Simple(simple)];

        if is!(self, ">") {
            unimplemented!("Parsing of '>' in selector")
        }

        Ok(Box::new(Selector {
            span: self.i.make_span(start),
            components,
        }))
    }

    fn parse_simple_selector(&mut self) -> PResult<SimpleSelector> {
        match cur!(self) {
            tok!("*") => self
                .parse_universal_selector()
                .map(SimpleSelector::Universal),
            tok!("#") => self.parse_id_selector().map(SimpleSelector::Id),
            tok!(".") => self.parse_class_selector().map(SimpleSelector::Class),
            tok!("[") => self
                .parse_attribute_selector()
                .map(SimpleSelector::Attribute),
            _ => self.parse_tag_selector().map(SimpleSelector::Tag),
        }
    }

    fn parse_universal_selector(&mut self) -> PResult<UniversalSelector> {
        unimplemented!("parse_universal_selector")
    }

    fn parse_id_selector(&mut self) -> PResult<IdSelector> {
        unimplemented!("parse_id_selector")
    }

    fn parse_class_selector(&mut self) -> PResult<ClassSelector> {
        unimplemented!("parse_class_selector")
    }

    fn parse_tag_selector(&mut self) -> PResult<TagSelector> {
        unimplemented!("parse_tag_selector")
    }

    fn parse_attribute_selector(&mut self) -> PResult<AttributeSelector> {
        unimplemented!("parse_attribute_selector")
    }
}
